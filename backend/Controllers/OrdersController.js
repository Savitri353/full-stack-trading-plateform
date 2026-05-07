const { OrdersModel } = require("../model/OrdersModel");
const { HoldingsModel } = require("../model/HoldingsModel");
const Funds = require("../model/FundingsModel");

module.exports.newOrder = async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;
    const userId = req.user.id;

    let newOrder = new OrdersModel({
      name,
      qty,
      price,
      mode,
      status: "PENDING",
      user: userId,
    });

    await newOrder.save();

    const existing = await HoldingsModel.findOne({ name, user: userId });
    const fund = await Funds.findOne({ user: userId });

    if (mode === "BUY") {
      const orderCost = price * qty;

      //  Check funds
      if (!fund || fund.balance < orderCost) {
        newOrder.status = "REJECTED";
        await newOrder.save();
        return res.json({ message: "Insufficient funds" });
      }

      // Deduct funds
      fund.balance -= orderCost;
      fund.usedMargin += orderCost;
      await fund.save();

      //update holdings
      if (existing) {
        const totalQty = existing.qty + qty;
        const totalCost = existing.avg * existing.qty + price * qty;

        existing.qty = totalQty;
        existing.avg = totalCost / totalQty;
        existing.price = price;

        await existing.save();
      } else {
        await HoldingsModel.create({
          name,
          qty,
          avg: price,
          price,
          net: 0,
          day: 0,
          user: userId,
        });
      }

      newOrder.status = "COMPLETED";
    }

    //sell
    else if (mode === "SELL") {
      if (!existing || existing.qty < qty) {
        newOrder.status = "REJECTED";
        await newOrder.save();
        return res.status(400).json({
          success: false,
          message: "You do not own this stock",
        });
      }

      //Add funds after selling
      const sellValue = price * qty;
      if (fund) {
        fund.balance += sellValue;
        fund.usedMargin = Math.max(0, fund.usedMargin - existing.avg * qty);
        await fund.save();
      }

      if (existing.qty === qty) {
        await HoldingsModel.deleteOne({ name, user: userId });
      } else {
        existing.qty -= qty;
        existing.price = price;
        await existing.save();
      }

      newOrder.status = "COMPLETED";
    }

    await newOrder.save();

    res.status(200).json({ success: true, message: "Order processed" });
  } catch (err) {
    res.status(500).json({ success: false });
  }
};

module.exports.allOrders = async (req, res) => {
  try {
    const userId = req.user.id;
    let allOrders = await OrdersModel.find({ user: userId });
    res.json(allOrders);
  } catch (err) {
    res.status(500).json({ success: false });
  }
};
