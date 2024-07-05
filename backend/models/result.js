const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  sem: {
    type: String,
    required: true,
  },
  sub: {
    type: String,
    required: true,
  },
  marks: {
    type: Number,
    required: true,
    default: 0,
  },
  Grade: {
    type: String,
    required: true,
  },
});

const Sub = mongoose.model("sub", subSchema);
module.exports = Sub;
