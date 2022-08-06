import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import loginRouter from './src/routes/loginRouter.js'
import urlsRouter from './src/routes/urlsRouter.js'
import userRouter from './src/routes/userRouter.js'

dotenv.config();

const server = express();

server.use(cors());
server.use(express.json());

server.use(loginRouter);
server.use(urlsRouter);
server.use(userRouter);

server.listen(process.env.PORT, ()=>{
    console.log("Server running on port " + process.env.PORT)
});