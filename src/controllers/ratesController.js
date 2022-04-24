const express = require("express");

const router = express.Router();

const Rates = require("../models/rates.model");

router.get("", async (req, res) => {
  try {
    const rates = await Rates.find().lean().exec();
    console.log(rates);
    return res.send(rates);
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.post("", async (req, res) => {
  const rate = await Rates.create(req.body);
  return res.send({ rate });
});

router.delete("/:id", async (req, res) => {
  try {
    const rates = await Rates.findByIdAndDelete(req.params.id)
      .lean()
      .exec();
    return res.status(200).send(rates);
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const rates = await Rates.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    return res.status(200).send(rates);
  } catch (err) {
    return res.status(500).send(err);
  }
});

module.exports = router;
