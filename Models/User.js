import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: "title is required",
    },
    email: {
      type: String,
      required: "category is required",
    },
    password: {
      type: String,
      required: "url is required",
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
