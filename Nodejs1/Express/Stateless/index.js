import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';


import userRoute from './routes/user.route.js';
import privateRoute from './routes/private.route.js';




const app  = express();
dotenv.config();

app.use(cors());
app.use(express.json());


const PORT = process.env.PORT || 5000;

app.get('/', (req,res)=>{
    res.send('Welcome to the API');
})

app.use('/' , userRoute);
app.use('/', privateRoute);


mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('Connected to MongoDB')})
.catch((err) => {
    console.error('Error connecting to MongoDB:', err);
}   );

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on port ${process.env.PORT || 5000}`);
});

