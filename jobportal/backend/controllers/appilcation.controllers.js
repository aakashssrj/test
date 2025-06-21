import Appilication from "../models/appilication.model.js";
import Job from "../models/job.model.js";

export const applyJob = async (req, res) => {
  const userId = req.id;
  const jobId = req.params.id;
  if (!jobId) {
    return res.status(400).json({
      message: "NO JOBS FOUND",
      success: false,
    });
  }

  const existingAppilication = await Appilication.findOne({
    job: jobId,
    appilicant: userId,
  });
  if (existingAppilication) {
    return res.status(400).json({
      message: "You have already appilied this Job",
      success: false,
    });
  }
    
  // Check if the Job exists
  
  const job = await Job.findById(jobId)
  if(!job){
     return res.status(404).json({
        message:"No job Found",
        success : false
    })
  }


  // Create a New Appilication
  const newAppilication = await Appilication.create({
    job: jobId,
    appilicant: userId,
  });

  job.appilications.push(newAppilication._id);

  await job.save();
  return res.status(201).json({
    message: "Job Appilied Successfully",
    success: true,
  });
};

export const getAppiliedJobs = async (req, res) => {
  try {
    const userId = req.id;

    const appilications = await Appilication.find({ appilicant: userId })
      .sort({ createdAt: -1 })
      .populate({
        path: "job",
        options: { sort: { createdAt: -1 } },
        populate: {
          path: "company",
          options: { sort: { createdAt: -1 } },
        },
      });
    if (!appilications) {
      return res.status(404).json({
        message: "No Appilcation",
        success: true,
      });
    }
    return res.status(201).json({
      appilications,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

//Admin Dekhega Kitne Users ne Apply kiya h
export const getApplicants = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findById(jobId).populate({
      path: "appilications",
      options: { sort: { createdAt: -1 } },
      populate: {
        path: "appilicant",
      },
    });

    if (!job) {
      return res.status(404).json({
        message: "No Appilicants Appilied {It's Empty}",
        success: false,
      });
    }

    return res.status(201).json({
      job,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};


export const updateStatus = async(req,res) =>{
    try {
        const {status} = req.body
    const applicationId = req.params.id

    if(!status){
        return res.status(404).json({
            message:"status is required",
            success : false
        })
    }

    const appilication = await Appilication.findOne({_id :applicationId})
    if(!appilication){
        return res.status(404).json({
            message:"No appilication found",
            success : false
        })
    }

    //update the Status
    appilication.status = status.toLowerCase()
    await appilication.save()

    return res.status(200).json({
        message:"status Updated",
        success:true    
    })
    } catch (error) {
        console.log(error)
    }
}