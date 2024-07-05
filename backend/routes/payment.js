const express = require("express");
const router = express.Router();
const Payment = require("../models/payment");
var fetchuser = require("../middleware/fetchuser");
//Route-1:seeing payment details//
router.get("/getpayment", fetchuser, async (req, res) => {
  try {
    userId = req.user.id;
    const payment = await Payment.findOne({ user: userId });
    res.send(payment);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});
module.exports = router;
//Route-2:making payment//
router.post("/payment", fetchuser, async (req, res) => {
  try {
    userId = req.user.id;
    q = req.body;

    const payment = await Payment.findOneAndUpdate(
      { user: userId },
      { $set: q },
      { new: true }
    );
    res.send(payment);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});
module.exports = router;
