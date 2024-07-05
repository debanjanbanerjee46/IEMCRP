const express = require("express");
const Sub = require("../models/result");
const router = express.Router();

var fetchuser = require("../middleware/fetchuser");
//Route-1:Geting result

router.post("/getresult", fetchuser, async (req, res) => {
  try {
    userId = req.user.id;
    const s1 = req.body.sem;
    const result = await Sub.find({ user: userId, sem:s1 });
    res.send(result);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});
router.post("/addresult", fetchuser, async (req, res) => {
  try {
    userId = req.user.id;
    sub = await Sub.create({
      user:userId,
      sem:req.body.sem,
      sub:req.body.sub,
      marks:req.body.marks,
      Grade:req.body.grade
    });
    res.send("Success");

    
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});
module.exports = router;
