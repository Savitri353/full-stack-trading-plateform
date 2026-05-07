const mongoose = require("mongoose");

const OrdersSchema = mongoose.Schema({
  name: String,
  qty: Number,
  price: Number,
  mode: String,

  status: {
    type: String,
    enum: ["PENDING", "COMPLETED", "REJECTED"],
    default: "PENDING",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});
const OrdersModel = mongoose.model("order", OrdersSchema);

module.exports = { OrdersModel };
