import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import bodyParser from "body-parser"



import connectDB from "./src/libs/db.js"
import authRouter from "./src/routes/auth.routes.js";
import messageRouter from "./src/routes/message.route.js";


const app = express();

app.use(cors({
    origin : "http://localhost:5173",
    credentials: true
}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/auth" , authRouter)
app.use("/api/message", messageRouter)


dotenv.config();
const PORT = process.env.PORT || 3000;













app.get('/' , (req,res)=>{
    res.send("Heelo from Server")
})
 
app.listen(PORT, ()=>{
    console.log(`Server is Connected at PORT ${PORT}`)
    connectDB();
})