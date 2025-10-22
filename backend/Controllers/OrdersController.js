const {OrdersModel} = require("../model/OrdersModel");
const {HoldingsModel} = require("../model/HoldingsModel");

module.exports.newOrder = async (req, res) => {
  const { name, qty, price, mode } = req.body;

  try {
    // Save the order first
    let newOrder = new OrdersModel({ name, qty, price, mode });
    await newOrder.save();

    if (mode === "BUY") {

          // Check if the stock exists in holdings
    const existing = await HoldingsModel.findOne({ name });
      if (existing) {
        // Calculate new average and quantity
        const totalQty = existing.qty + qty;
        const totalCost=existing.avg * existing.qty + price * qty;
        const newAvg = (totalCost) / totalQty;
         

        existing.qty = totalQty;
        existing.avg = newAvg;
        existing.price = price; // update LTP
        await existing.save();
      } else {
        // Add new stock to holdings
        const newHolding = new HoldingsModel({
          name,
          qty,
          avg: price,
          price,
          net: "+0%",   // can be updated later
          day: "+0%",   // can be updated later
        });
        await newHolding.save();
      }
    } else if (mode === "SELL") {
      if (existing) {
        if (existing.qty > qty) {
          // Reduce quantity
          existing.qty -= qty;
          existing.price = price;
          await existing.save();
        } else {
          // Sold all → remove from holdings
          await HoldingsModel.deleteOne({ name });
        }
      }
    }

    res.status(200).json({ success: true, message: "Order placed & holdings updated" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
}

module.exports.allOrders = async (req, res)=> {
  let allOrders = await OrdersModel.find({});
  res.json(allOrders);
}