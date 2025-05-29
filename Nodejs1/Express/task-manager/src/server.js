import express from "express"

import session from 'express-session';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';



// Local imports
import authRoutes from './router/auth.routes.js';
import taskRoutes from './router/task.routes.js';


const server = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies

server.use(bodyParser.json());
server.use(session({
    secret : "mysecretkey",
    resave : false,
    saveUninitialized : false,
    cookie:{
        maxAge: 1000 * 60 * 60 * 24, // 1 day
        secure: false, // Set to true if using HTTPS
        httpOnly: true // Prevents client-side JavaScript from accessing the cookie
    }
}))


// Router
server.get('/', (req, res) => {
    res.send('Welcome to the Task manager! ');
});

server.use('/auth' , authRoutes);
server.use('/task' , taskRoutes);






server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

