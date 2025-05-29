import { readTask , writeTask } from "../utils/file.utils.js";

export const getAllTasks = async(req, res) => {
    
    // Placeholder for fetching all tasks
    
    res.status(200).json({ message: 'Fetched all tasks successfully' , tasks: await readTask() });
}


export const createTask = async(req, res) => {

    const {title, description } = req.body;
    if( !title || !description){
        return res.status(400).json({ message: 'All fields are required' });
    }
    // Placeholder for creating a task
    const tasks = await readTask();
    const newTask = {
        id : Date.now(),
        username : req.session.user.username,
        title,
        description,
        completed : false
    }

    tasks.push(newTask);
    res.status(201).json({
        message : "Task created successfully",
        data : newTask
    })
    await writeTask(tasks);
   
    res.status(201).json({ message: 'Task created successfully', task: newTask });

}


export const updateTask = (req, res) => {

    const {id , title , description }  = req.body
    if(!id || !title || !description){
        return res.status(400).json({ message: 'All fields are required' });
    }
    // Placeholder for updating a task

    const tasks = readTask();
    const taskIndex = tasks.findIndex((tasks)=> taskIndex.id === id);

    if(taskIndex === -1 ){
        return res.send(400).json({ message: 'Task not found' });   
    }

    const updateTask ={
        ...tasks[taskIndex],
        title,
        description
    }
    writeTask(updateTask);
    res.status(200).json({
        message: 'Task updated successfully',
        data: updateTask
    });
    readTask(); // Read the updated tasks from the file
    
}



export const deleteTask = (req, res) => {
    const {
        params : {id}
    } = req;
    if(!id){
        return res.status(400).json({ message: 'Task ID is required' });
    }
    
    // Placeholder for deleting a task
    const tasks = readTask();
    const taskIndex = tasks.findIndex((task) => task.id === parseInt(id));
    if (taskIndex === -1) {
        return res.status(404).json({ message: 'Task not found' });
    }

    tasks.splice(taskIndex , 1) 
    res.status(200).json({ message: 'Task deleted successfully' });
    readTask(); // Read the updated tasks from the file
}

