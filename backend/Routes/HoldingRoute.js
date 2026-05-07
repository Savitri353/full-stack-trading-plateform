const router = require("express").Router();
const {allHoldings} = require("../Controllers/HoldingsController");
const { isAuthenticated } = require("../middlewares/isAuthenticated");


router.get("/allHoldings",isAuthenticated, allHoldings);

module.exports = router;