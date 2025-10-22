require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRoute = require("./Routes/AuthRoute");
const holdingRoute = require("./Routes/HoldingRoute");
const orderRoute = require("./Routes/OrderRoute");
const positionsRoute = require("./Routes/PositionRoute");

const PORT = process.env.PORT || 3000;
const url = process.env.MONGO_URL;

const app = express();

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB is  connected successfully"))
  .catch((err) => console.error(err));

app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"], // ❗ NOT wildcard (*)
    credentials: true, // ✅ Allow cookies
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(bodyParser.json());
app.use("/", authRoute);
app.use("/", holdingRoute);
app.use("/", orderRoute);
app.use("/", positionsRoute);

// app.get("/addHoldings", async (req, res) => {
//   let tempHoldings = [
//   {
//     name: "BHARTIARTL",
//     qty: 2,
//     avg: 538.05,
//     price: 541.15,
//     net: "+0.58%",
//     day: "+2.99%",
//   },
//   {
//     name: "HDFCBANK",
//     qty: 5,
//     avg: 1482.50,
//     price: 1521.80,
//     net: "+2.65%",
//     day: "+0.35%",
//   },
//   {
//     name: "RELIANCE",
//     qty: 3,
//     avg: 2450.10,
//     price: 2505.25,
//     net: "+2.25%",
//     day: "+0.58%",
//   },
//   {
//     name: "INFY",
//     qty: 4,
//     avg: 1401.30,
//     price: 1355.60,
//     net: "-3.26%",
//     day: "-0.45%",
//   },
//   {
//     name: "TCS",
//     qty: 2,
//     avg: 3450.00,
//     price: 3515.75,
//     net: "+1.90%",
//     day: "+0.22%",
//   },
//   {
//     name: "ITC",
//     qty: 10,
//     avg: 445.20,
//     price: 438.75,
//     net: "-1.45%",
//     day: "-0.67%",
//   },
//   {
//     name: "ADANIPORTS",
//     qty: 6,
//     avg: 750.00,
//     price: 765.80,
//     net: "+2.11%",
//     day: "+0.76%",
//   },
//   {
//     name: "COALINDIA",
//     qty: 15,
//     avg: 240.00,
//     price: 250.90,
//     net: "+4.54%",
//     day: "+1.01%",
//   },
//   {
//     name: "AXISBANK",
//     qty: 4,
//     avg: 910.50,
//     price: 899.00,
//     net: "-1.27%",
//     day: "-0.88%",
//   },
//   {
//     name: "KOTAKBANK",
//     qty: 3,
//     avg: 1740.25,
//     price: 1766.00,
//     net: "+1.48%",
//     day: "+0.12%",
//   }
// ];

//   tempHoldings.forEach((item) => {
//     let newHolding = new HoldingsModel({
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//     });

//     newHolding.save();
//   });

//   res.send("done");
// });

// app.get("/addPosition", async (req, res) => {
//   let tempPos = [
//     {
//       product: "CNC",
//       name: "EVEREADY",
//       qty: 2,
//       avg: 316.27,
//       price: 312.35,
//       net: "+0.58%",
//       day: "-1.24%",
//       isLoss: true,
//     },
//     {
//       product: "CNC",
//       name: "ITC",
//       qty: 5,
//       avg: 448.75,
//       price: 439.2,
//       net: "-2.13%",
//       day: "-0.67%",
//       isLoss: true,
//     },
//   ];
//   tempPos.forEach((item) => {
//     let newPos = new PositionsModel({
//       product: item.product,
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//       isLoss: item.isLoss,
//     });
//     newPos.save();
//   });

//   res.send("done");
// });

app.listen(PORT, () => {
  console.log("app is running on port:", PORT);
});
