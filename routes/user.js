const {
  register,
  GetAllusers,
  GetMyProfile,
  login,
} = require("../controllers/user.js");
const express = require("express");
const router = express.Router();

router.get("/all", GetAllusers);
router.post("/new", register);
router.post("/login", login);
router.get("/me", GetMyProfile);

module.exports = router;
