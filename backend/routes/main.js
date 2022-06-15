import express from "express";
import { authorizeToken } from "../middleware/authorizeToken.js";
import { getMain } from "../controllers/mainController.js";
import { postLogin } from "../controllers/loginController.js";
import { postNewFlavour } from "../controllers/postNewFlavour.js";

const routerMain = express.Router();

routerMain.get("/main", authorizeToken, getMain);

routerMain.post("/login", postLogin);

routerMain.post("/newFlavour", authorizeToken, postNewFlavour);



export { routerMain };