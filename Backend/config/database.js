const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE);
    console.log("Connected to database");
  } catch (error) {
    console.log(error + "Error while connecting the database");
  }
};

module.exports = connectDB;