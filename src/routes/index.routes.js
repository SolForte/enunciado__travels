import { Router } from "express";
import passagersControllers from "../controllers/passagers.controllers.js";
import { validatePage } from "../middlewares/validate.middlewares.js";

const indexRouter = Router();

indexRouter.get('/passengers/travels', 
validatePage,
passagersControllers.getPassagers);

export default indexRouter;
