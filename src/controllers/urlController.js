import { nanoid, customAlphabet } from "nanoid";
import connection from "../dbStrategy/postgres.js";

export default async function postUrl (req, res){
    const url = req.body.url;
    const shortUrl = url && nanoid(10);
    await connection.query('INSERT INTO urls ("shortUrl", url, "visitCount", "userId") VALUES ($1, $2, $3, $4)', [shortUrl, url, 0, req.id]);
    res.send({shortUrl: shortUrl});
}

export async function getUrl (req, res){
    const id = req.params.id;
    const idExistent = await connection.query('SELECT * FROM urls WHERE id = $1', [id]);

    if(!idExistent.rowCount){
      return res.sendStatus(404);
    }

    res.send(
        {
            id: idExistent.rows[0].id,
            url: idExistent.rows[0].url,
            shortUrl: idExistent.rows[0].shortUrl
        }
    );
}