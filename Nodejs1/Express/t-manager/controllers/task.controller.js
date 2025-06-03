import Task from "../models/task.model.js"
import { createTask , fetchTask} from "../services/task.services.js";

export const getTask = async (req,res)=>{
    try {
        const Tasks = await fetchTask (req.session.userId);
        res.status(200).json({
            success: true,
            message: "Tasks fetched successfully",
            data: Tasks
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        });
    }
}

export const updateTask = async ()=>{
}

export const addTask = async (req,res)=>{
    const {title , description } = req.body;
    try {
        const newTask = await createTask( req.session.userId ,  title , description)
        res.status(201).json({
            success: true,
            message: "Task Added Successfully",
            data: newTask
        });
    } catch (error) {
        console.error("Error adding task:", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        });
        
    }


}

export const deleteTask = async ()=>{
}