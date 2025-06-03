import mongoose from 'mongoose';

const taskSchmea = new mongoose.Schema({
    userId :{
        type : mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true, 
    },
    title : {
        type: String,
        required: true,
    },
    description :{
        type : String,
        required: true,
    }
},   {timestamps: true})

const Task  = mongoose.model('Task', taskSchmea);

export default Task;

