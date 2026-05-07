const mongoose = require("mongoose");

const WatchlistSchema = mongoose.Schema({
  name: String,
  price: Number,
  percent: String,
  isDown: Boolean,

});
const WatchlistModel = mongoose.model("watchlist", WatchlistSchema);

module.exports = { WatchlistModel };
