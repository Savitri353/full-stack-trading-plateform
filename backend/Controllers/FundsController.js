const Funds = require("../model/FundingsModel");

module.exports.addFunds = async (req, res) => {
  try {
    const userId = req.user.id;
    const { amount } = req.body;

    let fund = await Funds.findOne({ user: userId });

    if (!fund) {
      fund = await Funds.create({
        user: userId,
        balance: amount,
        usedMargin: 0
      });
    } else {
      fund.balance += amount;
      await fund.save();
    }

    res.json({ success: true, fund });

  } catch (err) {
    res.status(500).json({ success: false });
  }
};

module.exports.getFunds = async (req, res) => {
  try {
    const userId = req.user.id;

    const fund = await Funds.findOne({ user: userId });

    res.json({ success: true, fund });

  } catch (err) {
    res.status(500).json({ success: false });
  }
};

module.exports.withdrawFunds = async (req, res) => {
  try {
    const userId = req.user.id;
    const { amount } = req.body;

    let fund = await Funds.findOne({ user: userId });

    if (!fund) {
      return res.status(400).json({ message: "No funds available" });
    }

    if (fund.balance < amount) {
      return res.status(400).json({ message: "Insufficient balance" });
    }

    fund.balance -= amount;
    await fund.save();

    res.json({ success: true, fund });

  } catch (err) {
    res.status(500).json({ success: false });
  }
};