import mongoose from "mongoose";

const LikedvideoSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  videos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Video",
    },
  ],
});

export const Likedvideo = mongoose.model("Likedvideo", LikedvideoSchema);
