import mongoose from "mongoose";

const PlaylistSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  playlistName: {
    type: String,
    required: "Playlist Name is Required",
  },
  videos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Video",
    },
  ],
});

export const Playlist = mongoose.model("Playlist", PlaylistSchema);
