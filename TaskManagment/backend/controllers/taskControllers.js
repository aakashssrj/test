const { set } = require("mongoose");
const TaskModel = require("../models/TaskModel");

// To GET all tasks from the database
const getTasks = async (req, res) => {
  try { 
    const tasks = await TaskModel.find({});
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// To CREATE a new task in the database
const createTask = async (req, res) => {
    const data = req.body;
    const task = new TaskModel(data);
    await task.save()
    .then(()=>{
        res.status(201).json({
            message: "Task created successfully",
            task: task
        })
    })
    .catch((err) => {
        res.status(500).json({
            message: "Error creating task",
        })
    })
}

// To UPDATE a task in the database
const updateTask = async (req,res)=>{
    const id = req.params.id
    const data = req.body;
    const obj = {
        taskName: data.taskName,
        isDone: data.isDone
    }
    await TaskModel.findByIdAndUpdate(id,obj)
    .then(()=>{
        res.status(200).json({
            message: "Task updated successfully",
        })
    })
    .catch((err) => {
        res.status(500).json({
            message: "Error updating task",
        })
    })  
}

// To DELETE a task from the database
const deleteTask = async (req,res)=>{
    const id = req.params.id
    await TaskModel.findByIdAndDelete(id)
    .then(()=>{
        res.status(200).json({
            message: "Task deleted successfully",
        })
    })
    .catch((err) => {
        res.status(500).json({
            message: "Error deleting task",
        })
    })
}

module.exports = {
    getTasks,
    createTask,
    updateTask,
    deleteTask
   
}




