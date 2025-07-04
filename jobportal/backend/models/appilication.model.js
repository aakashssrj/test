import mongoose from 'mongoose'

const appilicationSchema = new mongoose.Schema({
    job:{
        type : mongoose.Schema.Types.ObjectId,
        ref:'Job',
        required:true
    },
    appilicant:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    status:{
        type: String,
        enum : ['pending', 'accepted','rejected'],
        default:'pending'
    }
},{imestamps : true}
    
    
)

const Appilication = mongoose.model('Appilication',appilicationSchema);
export default  Appilication