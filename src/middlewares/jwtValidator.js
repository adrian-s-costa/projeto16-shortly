import jwt from "jsonwebtoken";

export default function jwtValidation (req, res, next){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(" ")[1];
    
    jwt.verify(token, `${process.env.JWT_ACCESS_SECRET}`, (err, decoded)=>{
        if(err || token === null) return res.sendStatus(401);
        req.id = decoded.id;
        next();
    });
}