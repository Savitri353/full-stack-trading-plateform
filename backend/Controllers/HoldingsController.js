const { HoldingsModel } = require("../model/HoldingsModel");

module.exports.allHoldings = async (req, res) => {
  try {
    const userId = req.user.id;
    let allHoldings = await HoldingsModel.find({user: userId});
    res.status(200).json(allHoldings);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching Holdings", error: error.message });
  }
};
