const express = require("express");

const User = require("../models/user.model");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const user = await User.find().lean().exec();
    console.log("user:", user);
    return res.status(201).send(user);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

// router.delete("/updateCart/:userId", async (req, res) => {
//   try {
//     let product = req.body.productId;
//     // console.log(product);

//     let result = await login
//       .findByIdAndUpdate(req.params.userId, {
//         $pull: { cartItems: { _id: product } },
//       })
//       .lean()
//       .exec();

//     res.status(200).send(result);
//   } catch (e) {
//     return res.status(500).json({ message: e.message, status: "Failed" });
//   }
// });

module.exports = router;
