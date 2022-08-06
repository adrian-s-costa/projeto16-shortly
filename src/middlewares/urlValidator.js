import urlSchema from "../schemas/urlSchema.js";


export async function urlValidate (req, res, next){
    const url = req.body;
    const header = req.headers;
    const validation = urlSchema.validate(url);

    if (validation.error){
        return res.sendStatus(422);
    }
    
    return next();
}