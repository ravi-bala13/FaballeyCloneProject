const express = require("express");

const Product = require("../models/product.model.js");

const router = express.Router();

router.post("/", async (req, res) => {
  const product = await Product.create(req.body);
  res.send(product);
});

router.get("/", async (req, res) => {
  const products = await Product.find().lean().exec();
  return res.status(201).send(products);
});

router.get("details/:id", async (req, res) => {
  try {
    const el = await Product.findById(req.params.id).lean().exec();
    console.log(el);
    return res.send(el);
  } catch (error) {
    res.send(error.message);
  }
});

router.get("/type/:id", async (req, res) => {
  const products = await Product.find({ category: { $eq: `${req.params.id}` } })
    .lean()
    .exec();

  res.send(products);
});

router.get("/brand/:id", async (req, res) => {
  console.log("req:", req.params.id);
  const product = await Product.findById(req.params.id).lean().exec();
  console.log("product:", product);
  res.send(product);
});

// router.get("/type/:id", async (req, res) => {
//   const products = await Product.find({ category: { $eq: `${req.params.id}` } })
//     .lean()
//     .exec();

//   res.send(products);
// });

// router.get("/brand/:id", async (req, res) => {
//   console.log("req:", req.params.id);
//   const products = await Product.find({
//     brandName: { $eq: `${req.params.id}` },
//   })
//     .lean()
//     .exec();
//   res.send(products);
// });

// router.get("/sort/:category/", async (req, res) => {
//   const products = await Product.find().lean().exec();

//   products.sort(function (a, b) {
//     return (b.price * (100 - b.discount) / 100) - (a.price * (100 - a.discount) / 100)
//   })
//   res.send(products);
// });

// router.get("/sort/:category/", async (req, res) => {
//   const products = await Product.find().lean().exec();

//   products.sort(function (a, b) {
//     return (
//       (a.price * (100 - a.discount)) / 100 -
//       (b.price * (100 - b.discount)) / 100
//     );
//   });
//   res.send(products);
// });

// router.get("/sort/:discount/", async (req, res) => {
//   const Products = await Product.find().lean().exec();

//   products.sort(function (a, b) {
//     return a.discount - b.discount;
//   });
//   res.send(products);
// });
// router.get("/type/all/", async (req, res) => {
//   const products = await Product.find().lean().exec();
//   res.send(products);
// });

// router.get("/price/:x/:y/:category/", async (req, res) => {
//   const products = await Product.find({
//     category: req.params.category,
//     gender: "men",
//   }).lean();
//   let newproducts = products.filter(function (el) {
//     return (
//       el.price * ((100 - el.discount) / 100) < req.params.x &&
//       (el.price * (100 - el.discount)) / 100 > req.params.y
//     );
//   });
//   return res.send({
//     products: newproducts,
//   });
// });

module.exports = router;
