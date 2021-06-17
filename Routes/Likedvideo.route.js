import express from "express";
const router = express.Router();
import {
  addToLikedVideos,
  getLikedVideos,
  removeLikedVideo,
} from "../Controllers/Likedvideo.js";
import authenticate from "../Middleware/authenticate.js";

router.post("/video/addlike", authenticate, addToLikedVideos);
router.get("/video/getlikedvideos", authenticate, getLikedVideos);
router.post("/video/removelikedvideos", authenticate, removeLikedVideo);

export default router;
