const {newOrder, allOrders} = require("../Controllers/OrdersController");
const router = require('express').Router();

router.post('/neworder',newOrder);
router.get('/allOrders', allOrders);

module.exports = router;