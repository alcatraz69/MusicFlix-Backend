import mongoose from "mongoose";

const videoSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: "id is required",
    },
    title: {
      type: String,
      required: "title is required",
    },
    category: {
      type: String,
      required: "category is required",
    },
    url: {
      type: String,
      required: "url is required",
    },
    thumbnail: {
      type: String,
      required: "thumbnail is required",
    },
    channelName: {
      type: String,
      required: "channel name is required",
    },
    channelImage: {
      type: String,
      required: "channel img is required",
    },
    description: {
      type: String,
      required: "description is required",
    },
  },
  { timestamps: true }
);

export const Video = mongoose.model("Video", videoSchema);
