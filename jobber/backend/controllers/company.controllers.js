import Company from "../models/company.model.js";

export const registerCompany = async (req, res) => {
  try {
    const {companyName } = req.body;
    if (!companyName) {
      res.status(404).json({
        message: "Company Name is Required",
        success: false,
      });
    }

    let company = await Company.findOne({ name: companyName });
    if (company) {
      return res.status(400).json({
        message: "You cann't register the same Company",
        success: false,
      });
    }

    company = await Company.create({
      name: companyName,
      userId: req.id,
    });

    res.status(201).json({
      message: "Company Registered Successfully",
      company,
      success: true,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const getCompany = async (req, res) => {
  try {
    const userId = req.id; //Loged in user id [jisne login kra h uske hi compnay listed rahengi ]
    const companies = await Company.find({ userId });

    if (!companies) {
      return res.status(404).json({
        message: "Not a Single Compnay listed by this userID",
        success: false,
      });
    }
     
    return res.status(201).json({
      companies
    })
  } catch (error) {
    console.log(error);
  }
};

// Get Company by "id"
export const getCompanyById = async (req, res) => {
  try {
    const companyId  = req.params.id; //isse url se milta h
    const company = await Company.findById(companyId);

    if (!company) {
      return res.status(404).json({
        message: "Not a Single Compnay listed by this companyId",
        success: false,
      });
    }

    return res.status(200).json({

      company,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateCompany = async (req, res) => {
  try {
    const { name, description, website, location } = req.body;
    const file = req.file;
    //Idhar Cloudinary Lagyenge

    const updateData = { name, description, website, location };

    const company = await Company.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });

    if (!company) {
      return res.status(400).json({
        message: "Company Not Found",
        success: false,
      });
    }

    return res.status(200).json({
      message : "Companu Information is been Updated",
      success:true
    })
  } catch (error) {
    console.log(error);
  }
};
