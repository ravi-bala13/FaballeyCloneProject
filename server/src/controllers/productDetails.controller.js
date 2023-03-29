const express = require("express");

const Product = require("../models/product.model.js");

const router = express.Router();

router.get("/:id", async (req, res) => {
  console.log("req:", req.params.id);
  try {
    const el = await Product.findById(req.params.id).lean().exec();
    console.log(el);
    return res.send(el);
    // const product = await Product.findOne({ _id: req.params.id }).lean().exec();
    // console.log("e1", product);
    // return res.status(201).send(product);
  } catch (error) {
    res.send(error.message);
  }
});

module.exports = router;
