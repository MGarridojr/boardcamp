import { Router } from "express";
import { getGames, postGames } from "../controllers/gamesControllers.js";
import { validateSchema } from "../middlewares/schemaValidator.js";
import gamesShema from "../schemas/gamesShemas.js";


const gamesRouter = Router();

gamesRouter.get("/games", getGames)
gamesRouter.post("/games", validateSchema(gamesShema) ,postGames)

export default gamesRouter;