import jwt from jsonwebtoken;
const verifyJWT = async(req, res, next) => {
    try{
        const token = req.cookies?.token;
        if(!token) return res.status(401).json({message: 'No token provided'});

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;

        next();
    }
    catch(error){
        res.status(401).json({message: 'Invalid or expired token'});
    }
}

export default verifyJWT;