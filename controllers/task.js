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

const updateTask = async (req, res) => {
  

  const task = await Task.findById(req.params.id);
  task.Iscompleted = !task.Iscompleted;
  if(!user){
    return res.status(404).json({
        status:false,
        message:"Invalid Id"
    })
}
  await task.save();

  res.status(200).json({
    success: true,
    message:"Task updated!"
  });
};

const deleteTask = async (req, res) => {

    const task = await Task.findById(req.params.id);
    
    if(!user){
        return res.status(404).json({
            status:false,
            message:"Invalid Id"
        })
    }
    await task.deleteOne();
  
  res.status(200).json({
    success: true,
    message:"Task deleted!"
  });
};

module.exports = { newTask, GetmyTask, deleteTask, updateTask };
