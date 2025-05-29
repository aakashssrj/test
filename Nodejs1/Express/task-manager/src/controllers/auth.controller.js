export const login =  (req,res)=>{
   const {username} = req.body;
   if(!username){
         return res.status(400).json({message: 'Username is required'});
   }

// req.session.user = req.session.user || {}; // Initialize session user if it doesn't exist
   req.session.user = {username};
   console.log("Session ID :: ",req.sessionID); // Log the session ID for debugging
// // Set a cookie with the username

   res.cookie('username', username , {
    maxAge: 1000 * 60 * 60 * 24, // 1 day
    secure: false, // Set to true if using HTTPS
    httpOnly: true // Prevents client-side JavaScript from accessing the cookie
   })
   
    res.status(200).json({message: 'Login successful', user: req.session.user});

}





export const logout = (req, res) => {
    res.clearCookie('username'); // Clear the cookie
    
    req.session.destroy(err => {
        if (err) {
            return res.status(500).json({ message: 'Logout failed', error: err });
        }
        res.status(200).json({ message: `Logout successful ${username}` });
    });
}
