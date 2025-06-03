import Task from '../models/task.model.js';


export const createTask = async (userId , title , description) => {

    const newTask = new Task({
        userId,
        title,
        description
    })

    return await newTask.save()









}

export const fetchTask = async (userId) =>{
      const tasks = await Task.find({userId}).sort({createdAt : -1})
        return tasks;
}