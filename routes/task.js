const express = require("express");
const { newTask, GetmyTask } = require("../controllers/task");
const IsAuthenticate = require("../middlewares/auth");
const { updateTask, deleteTask } = require("../controllers/task");

const router = express.Router();

router.post("/new", IsAuthenticate, newTask);
router.get("/mytask", IsAuthenticate, GetmyTask);
router
  .route("/:id")
  .put(IsAuthenticate, updateTask)
  .delete(IsAuthenticate, deleteTask);

module.exports = router;
