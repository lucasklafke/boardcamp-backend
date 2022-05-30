import { Router } from "express";
import {finishRent, getRents, postRent} from "../controllers/rentals.js"
import validateRent from "../middlewares/validateRent.js"
const rentalsRoutes = Router();

rentalsRoutes.post("/rentals", validateRent, postRent);
rentalsRoutes.get("/rentals", getRents)
rentalsRoutes.post("/rentals/:id/return",finishRent)
export default rentalsRoutes;