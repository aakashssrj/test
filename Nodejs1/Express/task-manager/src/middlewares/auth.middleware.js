export const authMiddleware = (req, res, next) => {
    console.log('Auth middleware triggered',req.session.user);
    if( req.session && req.session.user){
        return next();
    }
    else{
        res.status(401).json({message: 'Unauthorized access. Please log in.'});
    }
}