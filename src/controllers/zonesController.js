const express = require("express");

const router = express.Router();

const Zones = require("../models/zones.model");

router.get("", async (req, res) => {
  try {
    const zones = await Zones.find().lean().exec();
    console.log(zones);
    return res.send(zones);
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.post("", async (req, res) => {
  const zone = await Zones.create(req.body);
  return res.send({ zone });
});

router.delete("/:id", async (req, res) => {
  try {
    const zones = await Zones.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(200).send(zones);
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const zones = await Zones.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    return res.status(200).send(zones);
  } catch (err) {
    return res.status(500).send(err);
  }
});

module.exports = router;
