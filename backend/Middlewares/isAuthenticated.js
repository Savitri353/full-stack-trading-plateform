  const jwt = require("jsonwebtoken");

  module.exports.isAuthenticated  = (req, res, next) => {
    const token = req.cookies.token;
   

    if (!token) {
      return res.status(401).json({ message: "Please login first" });
    }

    try {
      const data = jwt.verify(token, process.env.TOKEN_KEY);

    req.user = { id: data.id };   //  THIS IS THE KEY LINE

      next();  // VERY IMPORTANT
    } catch (err) {
      return res.status(401).json({ message: "Invalid token" });
    }
  };  