import mongoose from 'mongoose'

 

const ConnectDB = async()=>{
    try {
      await mongoose.connect(process.env.MONGO_URL)
      console.log("--MongoDB is Been Connected")
    } catch (error) {
        console.log("Mongodb Not Connected")
    }   
}

export default ConnectDB;