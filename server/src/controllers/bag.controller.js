const express = require("express");

const Bag = require("../models/bag.model");

const Product = require("../models/product.model");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const bag = await Bag.find().populate("product").lean().exec();
    return res.status(201).send(cart);
  } catch (e) {
    return res.status(500).send({ message: e.message, status: "failed" });
  }
});

router.post("", async (req, res) => {
  try {
    console.log(req.body);
    const bag = await Bag.create(req.body);
    console.log("bag:", bag);
    return res.status(201).send(bag);
  } catch (e) {
    // console.log(e);
    return res.status(500).send({ message: e.message, status: "failed" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const bag = await Bag.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(201).send(bag);
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
});

module.exports = router;