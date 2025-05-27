import express from 'express';
import cookieParser from 'cookie-parser';

import session from 'express-session';

const server = express();

server.use(cookieParser('codesnippet'));
// Middleware to parse JSON bodies
server.use(express.json());

// Session middleware configuration
server.use(session({
    secret : "mysecret",
    resave: false,
    saveUninitialized: false,
    cookie : {
        maxAge : 1000 * 60 * 60 * 24 // 1 day
    }
}))

server.get('/' , (req, res) => {
    res.send('Hello from Server');
    console.log(req.session);
    console.log(req.session.id)
});

server.get('/login' , (req, res) => {
    req.session.user = {name : 'Aakash Sah' , role : 'admin'};
    res.send(`User logged in: ${req.session.user.name}, Role: ${req.session.user.role}`);
}
);


server.get('/logout' , (req, res) => {
    req.session.destroy()
    res.send('User logged out successfully');
}
);


server.listen(3000, () => {
    console.log('Session server is running on port 3000');
});

