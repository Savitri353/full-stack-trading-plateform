const {newOrder, allOrders} = require("../Controllers/OrdersController");
const router = require('express').Router();
const {isAuthenticated} = require("../middlewares/isAuthenticated");

router.post('/neworder',isAuthenticated, newOrder);
router.get('/allOrders',isAuthenticated,  allOrders);

module.exports = router;