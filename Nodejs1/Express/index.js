import express from "express"
import userData  from "./data/data.js";

const app = express();

const PORT = 8080;
app.listen(PORT , (req,res)=>{
    console.log(` Server is Connected at ${PORT}`)
})
//1.GET Request is to get data from server.... BYdefault website browser request to "get" request.
app.get('/', (req,res)=>{
    res.status(200).send("Hello from server")
})

// 2. req.query
app.get('/api/v1/user' , (req,res)=>{
    console.log(userData)
    res.status(200).send(userData)

})



