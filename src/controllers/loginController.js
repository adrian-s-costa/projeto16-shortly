import connection from "../dbStrategy/postgres.js";

export async function postSignIn(req, res){
    try{
        res.send(req.body);
    }
    catch{
        console.log("aaaaauuuuu")
    }
}

export async function postSignUp (req, res) {
    try{
        res.send(req.body);
    }
    catch{
        console.log("regular Show")
    }
}