const express = require("express");
const {newTask, GetmyTask} = require("../controllers/task");
const IsAuthenticate = require("../middlewares/auth");


const router = express.Router();

router.post ("/new",IsAuthenticate, newTask)
router.get ("/mytask",IsAuthenticate, GetmyTask)


module.exports = router;
