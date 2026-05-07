const { Signup, Login, Logout, verifyUser} = require('../Controllers/AuthController')
const router = require('express').Router();
const {  isAuthenticated } = require("../Middlewares/isAuthenticated");


router.post('/signup', Signup);
router.post('/login', Login);
router.get('/logout', Logout);
router.get("/verify", isAuthenticated, verifyUser);

module.exports = router;