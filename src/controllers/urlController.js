import { nanoid } from "nanoid";
import connection from "../dbStrategy/postgres.js";

export async function postUrl (req, res){
    try{
        const url = req.body.url;
        const shortUrl = url && nanoid(10);
        await connection.query('INSERT INTO urls ("shortUrl", url, "visitCount", "userId") VALUES ($1, $2, $3, $4)', [shortUrl, url, 0, req.id]);
        res.send({shortUrl: shortUrl});
    }catch{
        res.sendStatus(500);
    }
}

export async function getUrl (req, res){
    try{
        const id = req.params.id;
        const idExistent = await connection.query('SELECT * FROM urls WHERE id = $1', [id]);

        if(!idExistent.rowCount){
        return res.sendStatus(404);
        }

        return res.send(
            {
                id: idExistent.rows[0].id,
                url: idExistent.rows[0].url,
                shortUrl: idExistent.rows[0].shortUrl
            }
        );
    }catch{
        res.sendStatus(500)
    }
}

export async function openShortUrl (req, res){
    
    try{
        const shortUrl = req.params.shortUrl;
        const shortUrlQuery = await connection.query('SELECT url FROM urls WHERE "shortUrl" = $1', [shortUrl]);

        if(!shortUrlQuery.rowCount){
            return res.sendStatus(404);
        }

        await connection.query('UPDATE urls SET "visitCount" = "visitCount" + 1 WHERE "shortUrl" = $1', [shortUrl]);

        return res.redirect(shortUrlQuery.rows[0].url);
    }catch{
        res.sendStatus(500);
    }
}

export async function deleteUrl (req, res){
    try{
        const id = req.params.id;
        await connection.query('DELETE FROM urls WHERE id = $1', [id]);
        return res.sendStatus(204);
    }catch{
        res.sendStatus(500);
    }
}