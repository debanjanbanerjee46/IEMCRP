//require("dotenv").config();
const mongoose = require("mongoose");

const mongoURI = "mongodb://127.0.0.1:27017/students";

const connectToMongo = () => {
  mongoose.connect(mongoURI);
  console.log("connected to mongo");
};

module.exports = connectToMongo;
