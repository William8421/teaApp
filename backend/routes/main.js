import express from "express";
import { autorizeToken } from "../middleware/autorizeToken.js";
import { getMain } from "../controllers/getMain.js";
import { postLogin } from "../controllers/getLogin.js";
import { postNewFlavour } from "../controllers/postNewFlavour.js";

const routerMain = express.Router();

routerMain.get("/main", autorizeToken, getMain);

routerMain.post("/login", postLogin);

routerMain.post("/newFlavour", autorizeToken, postNewFlavour);



export { routerMain };