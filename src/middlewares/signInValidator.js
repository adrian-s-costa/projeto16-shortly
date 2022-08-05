import signInSchema from "../schemas/signInSchema.js";
import connection from '../dbStrategy/postgres.js';
import bcrypt from 'bcrypt';

export async function signInValidate (req, res, next){
    const user = req.body;
    const validation = signInSchema.validate(user);
    const userExists = await connection.query('SELECT * FROM users WHERE email = $1', [req.body.email]);
    if (validation.error){
        return res.sendStatus(422);
    }else if(!userExists.rowCount || !bcrypt.compareSync(req.body.password, userExists.rows[0].password)){
        return res.sendStatus(401);
    }
    return next();
}