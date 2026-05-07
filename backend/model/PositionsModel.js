const mongoose = require("mongoose");

const PositionsSchema = mongoose.Schema({
  product: String,
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
  isLoss: Boolean,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const PositionsModel = mongoose.model("position", PositionsSchema);

module.exports = { PositionsModel };
