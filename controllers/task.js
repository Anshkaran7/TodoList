const Task = require("../models/task");
const { ErrorHandler } = require("../middlewares/error");

const newTask = async (req, res, next) => {
  try {
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
  } catch (error) {
    next(error);
  }
};

const GetmyTask = async (req, res) => {
  try {
    const userID = req.user._id;

    const tasks = await Task.find({ user: userID });

    res.status(200).json({
      success: true,
      message: "Task found",
      tasks,
    });
  } catch (error) {
    next(error);
  }
};

const updateTask = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);
   
    if (!task) return next(new ErrorHandler("Task not found", 404));

    task.isCompleted = !task.isCompleted;
    await task.save();

    res.status(200).json({
      success: true,
      message: "Task updated!",
    });
  } catch (error) {
    next(error);
  }
};

const deleteTask = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) return next(new ErrorHandler("Task not found", 404));
    await task.deleteOne();

    res.status(200).json({
      success: true,
      message: "Task deleted!",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { newTask, GetmyTask, deleteTask, updateTask };
