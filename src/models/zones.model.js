const mongoose = require("mongoose");

const zoneSchema = new mongoose.Schema(
  {
    zone: { type: String, required: true },
    rateType: { type: String, required: true },
    weight: { type: Number, required: true },
    additionalWeight: { type: Number, required: false },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
const Zones = mongoose.model("Zone", zoneSchema);

module.exports = Zones;
