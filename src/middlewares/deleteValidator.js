import connection from '../dbStrategy/postgres.js';

export default async function deleteValidate(req, res, next){
    const id = req.params.id;
    const urlExistence = await connection.query('SELECT * FROM urls WHERE id = $1', [id])
    const urlOwnerValidation = await connection.query('SELECT * FROM urls WHERE id = $1 AND "userId" = $2', [id, req.id]);

    if (!urlExistence.rowCount){
        return res.sendStatus(404);
    }else if (!urlOwnerValidation.rowCount){
        return res.sendStatus(401);
    }

    return next();
}