import express from "express";
const router = express.Router();
import authenticate from "../Middleware/authenticate.js";
import {
  addVideoToPlaylist,
  createPlaylist,
  deletePlaylist,
  getAllPlaylist,
  removeVideoFromPlaylist,
} from "../Controllers/Playlist.js";

router.post("/video/playlist", authenticate, createPlaylist);
router.post("/video/playlist/delete", authenticate, deletePlaylist);
router.get("/video/playlist", authenticate, getAllPlaylist);
router.post("/video/playlist/:playlistid", authenticate, addVideoToPlaylist);
router.post(
  "/video/playlist/delete/:playlistid",
  authenticate,
  removeVideoFromPlaylist
);
export default router;
