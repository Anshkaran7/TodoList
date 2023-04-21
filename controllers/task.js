const Task = require("../models/task");

const newTask = async (req, res, next) => {
  const { title, description } = req.body;

  await Task.create({
    title,
    description,
    user: req.user,
  });
  res.status(201).json({
    success: true,
    message: "Task added successfully",
  });
};

const GetmyTask = async (req, res) => {
  const userID = req.user._id;

  const tasks = await Task.find({ user: userID });

  res.status(200).json({
    success: true,
    message: "Task found",
    tasks,
  });
};

module.exports = { newTask, GetmyTask };
