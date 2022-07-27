import { Router } from "express";
import { getCategories, postCategories } from "../controllers/categoriesControllers.js";
import { validateSchema } from "../middlewares/schemaValidator.js";
import categorySchema from "../schemas/categoriesSchemas.js";


const categoriesRouter = Router();

categoriesRouter.get("/categories", getCategories);
categoriesRouter.post("/categories",validateSchema(categorySchema), postCategories);

export default categoriesRouter