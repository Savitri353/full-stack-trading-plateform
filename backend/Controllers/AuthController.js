const User = require("../model/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");
const { PositionsModel } = require("../model/PositionsModel");

module.exports.Signup = async (req, res) => {
  try {
    const { email, password, username } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create user
    const user = await User.create({ email, password, username });
    try {
      await PositionsModel.create([
        {
          product: "CNC",
          name: "TCS",
          qty: 5,
          avg: 3200,
          price: 3250,
          net: 250,
          day: 50,
          isLoss: false,
          user: user._id,
        },
        {
          product: "CNC",
          name: "INFY",
          qty: 3,
          avg: 1500,
          price: 1480,
          net: -60,
          day: -20,
          isLoss: true,
          user: user._id,
        },
      ]);
    } catch (err) {
      console.log("Positions creation failed");
    }
    // Generate token
    const token = createSecretToken(user._id);

    // Set cookie
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "Lax",
      secure: false, // true in production (HTTPS)
    });

    // Send response
    res.status(201).json({
      message: `${username} signed up successfully`,
      success: true,
      user: {
        id: user._id,
        email: user.email,
        username: user.username,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Error during signup" });
  }
};

module.exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Generate token
    const token = createSecretToken(user._id);

    // Set cookie
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "Lax",
      secure: false, // true in production
    });

    // Send response
    res.status(200).json({
      message: "Logged in successfully",
      success: true,
    });
  } catch (error) {
    res.status(500).json({ message: "Error during login" });
  }
};

module.exports.Logout = async (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "Lax",
    secure: false, // true only for https
  });
  res.status(200).json({ message: "Logged out successfully" });
};

module.exports.verifyUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    res.status(200).json({
      success: true,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (err) {
    res.status(401).json({
      success: false,
      message: "Unauthorized",
    });
  }
};