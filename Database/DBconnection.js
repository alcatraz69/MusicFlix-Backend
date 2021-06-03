const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
db = process.env.DATABASE;

const initializeDatabaseConnection = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("DB Connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { initializeDatabaseConnection };
