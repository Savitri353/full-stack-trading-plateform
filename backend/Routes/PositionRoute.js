const router = require("express").Router();
const {allPositions} = require("../Controllers/PositionsController");
 const { isAuthenticated } = require("../middlewares/isAuthenticated");

router.get('/allPositions', isAuthenticated, allPositions);

module.exports = router;