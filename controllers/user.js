const User = require("../models/user.js");
const bcrypt = require("bcrypt");
const sendCookie = require("../utils/feature.js");

const GetAllusers = async (req, res) => {};

const GetMyProfile = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Id found", 
    user: req.user,
  });
};

const logout = async (req, res) => {
  res
    .status(200)
    .cookie("token", "", { expires: new Date(Date.now()) })
    .json({
      success: true,
      message:"Logout successfully",
      user: req.user,
    });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  let user = await User.findOne({ email }).select("+password");
  if (!user) {
    return res.status(404).json({
      success: false,
      message: "Invalid Email or password",
    });
  }
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(404).json({
      success: false,
      message: "Invalid Email or password",
    });
  }

  sendCookie(user, res, 200, `Welcome back, ${user.name}`);
};

const register = async (req, res) => {
  const { name, email, password } = req.body;

  let user = await User.findOne({ email });
  if (user) {
    return res.status(404).json({
      success: false,
      message: "User Already exist",
    });
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  user = await User.create({ name, email, password: hashedPassword });

  sendCookie(user, res, 201, "Registered Successfully");
};

module.exports = { GetAllusers, GetMyProfile, login, logout, register };
