const mongoose = require("mongoose");

const HoldingsSchema = new mongoose.Schema({
    name: String,
    qty: Number,
    avg: Number,
    price:Number,
    net: Number, 
    day: Number,
    user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
    }
})

const HoldingsModel =  mongoose.model("holding", HoldingsSchema);

module.exports = { HoldingsModel }