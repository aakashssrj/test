import Job from "../models/job.model.js";

//Admin Post krega jobs ko
export const postJobs = async (req, res) => {
  try {
    const {
      title,
      description,
      requirements,
      salary,
      location,
      experience,
      jobType,
      position,
      companyId,
    } = req.body;
    const userId = req.id;

    if (
      !title ||
      !description ||
      !requirements ||
      !salary ||
      !location ||
      !experience ||
      !jobType ||
      !position ||
      !companyId
    ) {
      return res.status(400).json({
        messagee: "Something is Missing",
        success: false,
      });
    }

    const job = await Job.create({
      title,
      description,
      requirements: requirements.split(","),
      salary: Number(salary),
      location,
      experienceLevel: experience,
      jobType,
      position,
      company: companyId,
      created_by: userId,
    });
    return res.status(200).json({
      message: "Successfully Created Job",
      job,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

// Students ko Pura Register Jobs Dikhega
export const getAllJobs = async (req, res) => {
  try {
    const  keyword  = typeof  req.query.keyword=== "string" ? req.query.keyword :  "";
    const query = {
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
      ],
    };
    const job = await Job.find(query).populate({
      path : "company"
    }).sort({createdAt : -1});
    if (!job) {
      return res.status(400).json({
        message: "No Jobs Found",
        job,
        success: false,
      });
    }
    return res.status(200).json({
      job,
      success: true,
    });
  } catch (error) {
    console.error(error);
  }
};

// Students K liye 
export const getJobById = async(req,res) =>{
    try {
            const jobId = req.params.id;
    const job = await Job.findById(jobId)
    if(!job)
        return res.status(400).json({
            message : "No Jobs Found by such ID getJobById",
            success : false
    })

    return res.status(200).json({job , succes:true})
    } catch (error) {
        console.log(error)
    }

}

// Admin Ne Kitne Job POst Kra import kra h
export const getAdminJob = async(req,res) =>{
    try {
        const adminId = req.id

    const job = await Job.find({created_by : adminId})
    if(!job){
        return res.status(400).json({
            message: "No Job Listed By Respective Admin getAdminJob",
            succes : false,
        })
    }

    return res.status(200).json({
        job,
        success : true
    })
    } catch (error) {
        console.log(error)
    }
}

