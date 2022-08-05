import signUpSchema from "../schemas/signUpSchema.js";
import connection from '../dbStrategy/postgres.js';

export async function signUpValidate (req, res, next){
    const user = req.body;
    const validation = signUpSchema.validate(user);
    const email = await connection.query('SELECT email FROM users WHERE email = $1', [req.body.email]);

    if (validation.error || (req.body.password !== req.body.confirmPassword)){
        return res.sendStatus(422);
    }else if(email.rowCount){
        return res.sendStatus(409);
    }
    return next();
}