import signUpSchema from "../schemas/signUpSchema.js";

export function signUpValidate (req, res, next){
    const user = req.body
    const validation = signUpSchema.validate(user);
    if (validation.error || (req.body.password !== req.body.confirmPassword)){
        return res.sendStatus(422);
    }
    return next();
}