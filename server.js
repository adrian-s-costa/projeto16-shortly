import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import loginRouter from './src/routes/loginRouter.js'

dotenv.config();

const server = express();

server.use(cors());
server.use(express.json());

server.use(loginRouter);

server.listen(process.env.PORT, ()=>{
    console.log("Server running on port " + process.env.PORT)
});