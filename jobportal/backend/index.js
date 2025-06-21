import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from 'dotenv'


import ConnectDB from './utils/db.js'
import userRoute from './routes/user.routes.js'
import companyRoute from './routes/company.routes.js'
import jobRoute from './routes/job.routes.js'
import applicationRoute from './routes/application.routes.js'
dotenv.config()


const app = express()
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use(cookieParser());



const PORT = process.env.PORT || 5001


app.get('/' , (req,res)=>{
    res.send("this message is from /")
})

//api's.......
app.use('/api/v1/user',userRoute)
app.use('/api/v1/company', companyRoute)
app.use('/api/v1/job',jobRoute)
app.use('/api/v1/appilication',applicationRoute)












const startServer = async()=>{
    try {
        await ConnectDB();
        app.listen(PORT , ()=>{
            console.log(`Server running at Port :: ${PORT}`)
        })
    }catch (error) {
    console.log(error)
  }
    
}

startServer();



