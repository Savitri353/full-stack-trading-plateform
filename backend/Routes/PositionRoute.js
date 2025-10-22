const router = require("express").Router();
const {allPositions} = require("../Controllers/PositionsController");

router.get('/allPositions', allPositions);

module.exports = router;