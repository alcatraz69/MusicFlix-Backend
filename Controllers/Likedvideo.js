import { Likedvideo } from "../Models/Likedvideos.js";

export const addToLikedVideos = async (req, res) => {
  const user = req.user;
  const video = req.body.video;

  try {
    const likedVideosExist = await Likedvideo.findOne({ user: user.id });
    if (likedVideosExist) {
      likedVideosExist.videos.push(video.id);
      const updatedVideoArray = await likedVideosExist.save();
      return res.json({ updatedVideoArray });
    } else {
      const liked = await new Likedvideo({
        user: user.id,
        videos: video.id,
      });
      const newLikedVideo = await liked.save();
      return res.json({ newLikedVideo });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getLikedVideos = async (req, res) => {
  const user = req.user;

  try {
    const likedVideosExist = await Likedvideo.findOne({ user: user.id })
      .populate("videos")
      .exec();
    if (likedVideosExist) {
      res.status(200).json(likedVideosExist.videos);
      console.log("liked videos!");
    } else {
      res.status(200).json({ msg: "liked videos empty" });
    }
  } catch (error) {
    console.log(error);
  }
};

export const removeLikedVideo = async (req, res) => {
  const user = req.user;
  const video = req.body.video;

  try {
    const likedVideosExist = await Likedvideo.findOne({ user: user.id });
    if (likedVideosExist.videos.some((item) => item == video.id)) {
      await likedVideosExist.updateOne({
        $pull: { videos: video.id },
      });
    } else {
      return res.status(400).json({
        ok: false,
        message: "Invalid request",
      });
    }
    const updatedlikedVideos = await Likedvideo.findOne({ user: user.id })
      .populate("videos")
      .exec();
    return res.status(201).json(updatedlikedVideos.videos);
  } catch (error) {
    console.log(error);
  }
};
