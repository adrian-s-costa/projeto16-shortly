import connection from "../dbStrategy/postgres.js";
import bcrypt from 'bcrypt';
import  jwt  from "jsonwebtoken";


export async function postSignUp (req, res) {
    try{
        const passwordCripted = bcrypt.hashSync(req.body.password, 10);
        await connection.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3)', [req.body.name, req.body.email, passwordCripted]);
        return res.sendStatus(201);
    }catch{
        return res.sendStatus(500);
    }
}

export async function postSignIn(req, res){

        const user = await connection.query('SELECT * FROM users WHERE email = $1', [req.body.email]);
        const token = jwt.sign({id: user.rows[0].id}, process.env.JWT_ACCESS_SECRET, { expiresIn: 600});
        await connection.query('UPDATE users SET token=$1 WHERE id = $2;', [token, user.rows[0].id]);
        return res.send(token).status(200);

}

