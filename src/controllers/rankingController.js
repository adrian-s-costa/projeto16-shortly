import connection from "../dbStrategy/postgres.js";

export default async function getRanking(req, res){
    try{
        const ranking =  await connection.query('SELECT users.id AS id, name, COUNT("userId") AS "linkCount", COALESCE(SUM("visitCount"), 0) AS "visitCount" FROM urls RIGHT JOIN users ON "userId" = users.id GROUP BY users.id, "visitCount" ORDER BY "visitCount" DESC LIMIT 10');
        res.send(ranking.rows).status(200);
    }catch{
        res.sendStatus(500);
    }
}