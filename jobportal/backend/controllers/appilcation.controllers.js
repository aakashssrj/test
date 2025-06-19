import Appilication from "../models/appilication.model";
import Job from "../models/job.model";

export const applyJob = async(req,res) => {
    const userId = req.id;
    const jobId = req.params.id
    if(!jobId){
        return res.status(400).json({
            message: "NO JOBS FOUND",
            success : false
        })
    }

    const existingAppilication = await Appilication.findOne({job : jobId , appilicant : userId});
    if(existingAppilication){
        return res.status(400).json({
            message : "You have already appilied this Job",
            success : false
        })
    }
    // Create a New Appilication 
    const newAppilication = await Appilication.create({
        job : jobId,
        appilicant : userId
    })

    job.appilications.push(newAppilication._id)

    await job.save()
    return res.status(201).json({
        message:"Job Appilied Successfully",
        success : true
    })
}

export const getAppiliedJobs = async(req,res) =>{
    try {
            const userId = req.id;

    const appilications = await Appilication.findById({appilicant:userId}).sort({createdAt : -1}).populate({
        path : "job",
        options : {sort : {createdAt : -1}},
        populate:{
            path : 'company',
            options : {sort : {createdAt : -1}},
        }
    })
    if(!appilications){
        return res.status(404).json({
        message:"No Appilcation",
        success:true
    })
    }
    return res.status(201).json({
        appilications,
        success:true
    })
    } catch (error) {
        console.log(error)
    }
}


//Admin Dekhega Kitne Users ne Apply kiya h
export const getApplicants = async (req,res) =>{
    try {
            const jobId = req.params
    const job = await Job.findById(jobId).populate({
        path : "appilications",
        options : {sort:{createdAt : -1}},
        populate:{
            path : "appilicant",
        }
    })

    if(!job){
        return res.status(404).json({
            message:"No Appilicants Appilied {It's Empty}",
            success:false
        })
    }

    return res.status(201).json({
        job,
        success : true
    })


    } catch (error) {
        console.log(error)
    }
}

