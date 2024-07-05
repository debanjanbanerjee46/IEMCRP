const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const UserSchema = new Schema({
  name: {
    type: String,
  },
  password: {
    type: String,
  },
  email: {
    type: String,

    unique: true,
  },
  curentsem: {
    type: Number,
  },
  mobileno: {
    type: Number,

    unique: true,
  },

  enrollmentNo: {
    type: Number,
    unique: true,
  },
  stream: {
    type: String,
  },

  parentsname: {
    type: String,
  },
  parentsemail: {
    type: String,
    unique: true,
  },
  parentsmobileno: {
    type: Number,
    unique: true,
  },
  parentsadress: {
    type: String,
  },
});
const User = mongoose.model("user", UserSchema);
module.exports = User;
