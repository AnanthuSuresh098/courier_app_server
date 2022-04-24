const mongoose = require("mongoose");

const rateSchema = new mongoose.Schema(
  {
    zone: { type: String, required: true },
    pincode: { type: Number, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
const Rates = mongoose.model("Rate", rateSchema);

module.exports = Rates;
