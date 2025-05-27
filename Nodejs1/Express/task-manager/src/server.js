import express from "express"

import session from 'express-session';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';


const server = express();
const PORT = process.env.PORT || 3000;
// Middleware to parse JSON bodies
server.use(bodyParser.json());


// Router
server.get('/', (req, res) => {
    res.send('Welcome to the Task manager! ');
});







server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

