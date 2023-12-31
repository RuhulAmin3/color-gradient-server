const mongoose = require("mongoose");
require('dotenv').config()
const db = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ef7flmj.mongodb.net/color_gradient?retryWrites=true&w=majority`;
const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("connect successful");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
