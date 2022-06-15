import express from "express";
import dotenv from 'dotenv';
import {routerMain} from './routes/main.js'
dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.SERVER_PORT || 5000;
const home = '/';
app.use(home, routerMain)



app.listen(PORT, () => {
    console.log(`My application is
    running and listening to the port: ${PORT}`)
});