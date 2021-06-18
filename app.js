import express from "express";
const app = express();
import cors from "cors";
import authRoutes from "./Routes/Auth.route.js";
import videoRoute from "./Routes/Videos.route.js";
import likedVideoRoute from "./Routes/Likedvideo.route.js";
import playlistRoute from "./Routes/Playlist.route.js";
app.use(express.json());

import initializeDatabaseConnection from "./Database/DBconnection.js";

initializeDatabaseConnection();

// populateData(initialData);

app.use(cors());
app.use(playlistRoute);
app.use(likedVideoRoute);
app.use(videoRoute);
app.use("/auth", authRoutes);

app.use("/", (req, res) => {
  res.json("hello");
});

app.listen(5000, () => {
  console.log("server Started");
});
