const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const paySchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  sem1: {
    type: Boolean,
    require:true,
    default: false,
  },
  sem2: {
    type: Boolean,
    require:true,
    default: false,
  },
  sem3: {
    type: Boolean,
    
    default: false,
  },
  sem4: {
    type: Boolean,
    
    default: false,
  },
  sem5: {
    type: Boolean,

    default: false,
  },
  sem6: {
    type: Boolean,

    default: false,
  },
  sem7: {
    type: Boolean,

    default: false,
  },
  sem8: {
    type: Boolean,

    default: false,
  },
});
const Payment = mongoose.model("payment", paySchema);
module.exports = Payment;
