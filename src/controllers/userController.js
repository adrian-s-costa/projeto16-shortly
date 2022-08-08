import connection from "../dbStrategy/postgres.js";

export default async function getMyUser(req, res){
    try{
        const userId = req.id;
        
        const userQuery = await connection.query('SELECT users.id, users.name, SUM("visitCount") as "visitCount" FROM urls JOIN users ON "userId" = users.id WHERE users.id = $1 GROUP BY users.id', [userId]);
        const urlsQuery = await connection.query('SELECT id, "shortUrl", url, "visitCount" FROM urls WHERE "userId" = $1', [userId]);
        
        if(!userQuery.rowCount){
            return res.sendStatus(404);
        }

        return res.send(
            {
                id: userQuery.rows[0].id,
                name: userQuery.rows[0].name,
                visitCount: Number(userQuery.rows[0].visitCount),
                shortenedUrls: urlsQuery.rows
            }
        ).status(200);
    }catch{
        res.sendStatus(500);
    }
}