const { HoldingsModel } = require("../model/HoldingsModel");

module.exports.allHoldings = async (req, res) => {
  try {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching Holdings", error: error.message });
  }
};
