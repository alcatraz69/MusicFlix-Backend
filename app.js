import express from "express";
const app = express();
// const { initialData } = require("./Database/Data");
// const Video = require("./Models/Video");

import cors from "cors";
import userRoutes from "./Routes/Auth.route.js";
import videoRoute from "./Routes/Videos.route.js";
app.use(express.json());

import initializeDatabaseConnection from "./Database/DBconnection.js";

initializeDatabaseConnection();

// const populateData = async (videos) => {
//   try {
//     await Video.insertMany(videos);
//     console.log("data insertion done");
//   } catch (error) {
//     console.log(error);
//   }
// };

// populateData(initialData);
app.use(cors());

app.use(videoRoute);
app.use("/user", userRoutes);

app.use("/", (req, res) => {
  res.json("hello");
});

app.listen(5000, () => {
  console.log("server Started");
});
