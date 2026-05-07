const mongoose = require("mongoose");


const fundsSchema = new mongoose.Schema({
  balance: {
    type: Number,
    default: 0,
  },
  usedMargin: {
    type: Number,
    default: 0,
  },
  user: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "User",
  required: true,
  unique: true
}
});

module.exports = mongoose.model("Fund", fundsSchema);