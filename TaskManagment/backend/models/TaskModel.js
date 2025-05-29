const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    taskName :{
        type: String,
        required: true, 
    },
    isDone :{
        type: Boolean,
        default: false, 
    }
})

const TaskModel = mongoose.model("Task", TaskSchema)

module.exports = TaskModel
