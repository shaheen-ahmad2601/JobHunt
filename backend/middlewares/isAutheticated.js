import jwt from "jsonwebtoken";
const isAuthenticated = async (req, res, next) => {
    try {
       const token = req.cookies.token;
       if(!token){
        return res.status(401).json({
            message: "user not authenticated",
            success: false,
        })
       } 
    //    if yes
       const decode = await jwt.verify(token, process.env.SECRET_KEY);
        if(!decode){
            return res.status(401).json({
                message: "Invalid token",
                success: false,
            })
        }
        req.id = decode.userId;
        // if everything is fine
        next(); // sent to next route
    } catch (error) {
        console.log(error);
        
    }
}

export default isAuthenticated;