import mongoose from 'mongoose'

const jobSchema = new mongoose.Schema({
    title:{
        type:String,
        required : true
    },
    description:{
        type:String,
        required:true
    },
    requirements:[{
        type:String,
    }],
    salary:{
        type:Number,
        required:true
    },
    location:{
        type:String,
        required:true
    },jobType:{
        type:Number,
        required:true
    },position:{
        type:Number,
        required:true
    },
    experienceLevel:{
        type:Number,
        required :true
    },
    company:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Company',
            required:true
        },
    created_by:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    appilications:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref :'Appilication',
            required : true
        }
    ]
},{timestamps:true});

const Job = mongoose.model("Job",jobSchema);
export default  Job