
const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors");
const routes = require('./routes/api.routes')
const google = require('./routes/google.routes')
require('dotenv').config();



const app = express()
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/auth',routes)
app.use('/auth',google)


const PORT = 5001
mongoose.connect('mongodb://localhost:27017/')
.then(()=>{
    console.log('MongoDB Connected Successfully')
}).then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is Running at ${PORT}`)
    })    
})
.catch((err)=> console.log(err))

