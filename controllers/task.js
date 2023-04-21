const Task = require("../models/task");
const {ErrorHandler} = require("../middlewares/error");

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

const updateTask = async (req, res,next) => {
  const task = await Task.findById(req.params.id);
  task.Iscompleted = !task.Iscompleted;
  if (!task) return next(new ErrorHandler("Task not found", 404));

  await task.save();

  res.status(200).json({
    success: true,
    message: "Task updated!",
  });
};

const deleteTask = async (req, res, next) => {
  const task = await Task.findById(req.params.id);

  if (!task)
    if (!task) return next(new ErrorHandler("Task not found", 404));
  await task.deleteOne();

  res.status(200).json({
    success: true,
    message: "Task deleted!",
  });
};

module.exports = { newTask, GetmyTask, deleteTask, updateTask };
