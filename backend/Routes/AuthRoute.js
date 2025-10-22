const { Signup, Login, Logout } = require('../Controllers/AuthController')
const router = require('express').Router();
const { userVerification } = require("../Middlewares/AuthMiddleware");

router.post('/signup', Signup);
router.post('/login', Login);
router.get('/logout', Logout);
router.get("/user", userVerification);

module.exports = router;