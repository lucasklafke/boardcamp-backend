import { Router } from "express";
import {deleteRent, finishRent, getRents, postRent} from "../controllers/rentals.js"
import validateRent from "../middlewares/validateRent.js"
const rentalsRoutes = Router();

rentalsRoutes.post("/rentals", validateRent, postRent);
rentalsRoutes.get("/rentals", getRents)
rentalsRoutes.post("/rentals/:id/return",finishRent)
rentalsRoutes.delete("/rentals/:id", deleteRent)
export default rentalsRoutes;