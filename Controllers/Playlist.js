import { Playlist } from "../Models/Playlist.js";

export const createPlaylist = async (req, res) => {
  const user = req.user;
  const { name } = req.body;
  console.log(name);

  try {
    const newPlaylist = await Playlist.create({
      user: user.id,
      playlistName: name,
      videos: [],
    });
    res.status(201).json({ msg: "created playlist", newPlaylist });
  } catch (error) {
    console.log(error);
  }
};

export const deletePlaylist = async (req, res) => {
  const { id } = req.body;
  console.log(req.body);

  try {
    const userPlaylist = await Playlist.findByIdAndDelete({
      _id: id,
    });
    res.json({ msg: "deleted playlist", userPlaylist });
  } catch (error) {
    console.log(error);
  }
};

export const getAllPlaylist = async (req, res) => {
  const user = req.user;

  try {
    const userPlaylist = await Playlist.find({ user: user.id })
      .populate("videos")
      .exec();

    if (userPlaylist) {
      res.status(200).json(userPlaylist);
    } else {
      res.status(200).json({ msg: "playlst empty" });
    }
  } catch (error) {
    console.log(error);
  }
};

export const addVideoToPlaylist = async (req, res) => {
  const { id } = req.body;
  console.log(id);
  const { playlistid } = req.params;
  console.log(playlistid);

  try {
    const playlistExist = await Playlist.findById(playlistid);
    playlistExist.videos.push(id);
    const updatedPlaylist = await playlistExist.save();
    res.status(201).json({ msg: "video added to playlist", updatedPlaylist });
  } catch (error) {
    console.log(error);
  }
};

export const removeVideoFromPlaylist = async (req, res) => {
  const { id } = req.body;
  console.log(id);
  const { playlistid } = req.params;
  console.log(playlistid);

  try {
    const playlistExist = await Playlist.findById(playlistid);
    playlistExist.videos.pull(id);
    const updatedPlaylist = await playlistExist.save();
    res
      .status(201)
      .json({ msg: "video removed from playlist", updatedPlaylist });
  } catch (error) {
    console.log(error);
  }
};
