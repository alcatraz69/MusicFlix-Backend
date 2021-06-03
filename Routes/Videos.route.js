const express = require("express");
const router = express.Router();

const Video = require("../Models/Video");

router.get("/videos", async (req, res) => {
  try {
    const videos = await Video.find({});
    if (videos) {
      res.status(200).json({ videos });
      console.log("fetched videos!");
    } else {
      res.status(500).json({ err: "unable to fetch videos" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
