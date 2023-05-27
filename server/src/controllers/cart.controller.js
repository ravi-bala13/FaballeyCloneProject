const express = require("express");

const Cart = require("../models/cart.model");

const router = express.Router();

// // Create a new cart
// router.post("/", async (req, res) => {
//   try {
//     const cart = new Cart({
//       userId: req.body.userId,
//       products: req.body.products,
//     });
//     const result = await cart.save();
//     res.status(201).json(result);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: err });
//   }
// });

// Get a cart by ID
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const cart = await Cart.find({ userId: id }).populate("products");
    if (!cart) {
      res.status(404).json({ message: "Cart not found" });
    } else {
      res.status(200).json(cart);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
});

// // Update a cart by ID
// router.put("/", async (req, res) => {
//   try {
//     const id = req.params.id;
//     const updateOps = {};
//     for (const ops of req.body) {
//       updateOps[ops.propName] = ops.value;
//     }
//     const result = await Cart.findByIdAndUpdate(
//       id,
//       { $set: updateOps },
//       { new: true }
//     );
//     res.status(200).json(result);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: err });
//   }
// });

// Delete a cart by ID
// router.delete("/", async (req, res) => {
//   try {
//     const id = req.params.id;
//     const result = await Cart.findByIdAndDelete(id);
//     res.status(200).json(result);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: err });
//   }
// });

// Add a product to a cart
router.post("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const productId = req.body.productId;
    console.log(id, productId, "sdf");
    const result = await Cart.findOneAndUpdate(
      { userId: id },
      { $push: { products: productId } },
      { new: true }
    );
    console.log("result", result);
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
});

// Remove a product from a cart
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log("id:", id);
    const productId = req.body.productId;
    console.log("productId:", productId);
    const result = await Cart.findOneAndUpdate(
      { userId: id },
      { $pull: { products: productId } },
      { new: true }
    );
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
});

module.exports = router;
