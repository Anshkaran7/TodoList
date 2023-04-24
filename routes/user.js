const {
  register,
  GetMyProfile,
  login,
  logout,
} = require("../controllers/user.js");
const express = require("express");
const IsAuthenticate = require("../middlewares/auth.js");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/me", IsAuthenticate, GetMyProfile);

module.exports = router;
