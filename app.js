const express = require("express");
const app = express();
const { initialData } = require("./Database/Data");
const Video = require("./Models/Video");

const { initializeDatabaseConnection } = require("./Database/DBconnection");

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

app.use(require("./Routes/Videos.route"));

app.use("/", (req, res) => {
  res.json("hello");
});

app.listen(5000, () => {
  console.log("server Started");
});
