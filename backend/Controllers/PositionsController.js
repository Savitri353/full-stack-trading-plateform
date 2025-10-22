const { PositionsModel } = require("../model/PositionsModel");

module.exports.allPositions = async (req, res) => {
  try {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (err) {
    res
      .status(500)
      .jason({ message: "Error fetching positions", error: error.message });
  }
};
