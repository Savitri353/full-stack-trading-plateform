const router = require("express").Router();
const {allHoldings} = require("../Controllers/HoldingsController");

router.get("/allHoldings", allHoldings);

module.exports = router;