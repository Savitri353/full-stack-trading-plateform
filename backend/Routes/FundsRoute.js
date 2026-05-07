const router = require("express").Router();

const {addFunds, getFunds, withdrawFunds} = require("../controllers/FundsController");
const { isAuthenticated } = require("../middlewares/isAuthenticated");

router.post("/addfunds", isAuthenticated,  addFunds);
router.get("/", isAuthenticated, getFunds);
router.post("/withdraw", isAuthenticated, withdrawFunds);
module.exports = router;
