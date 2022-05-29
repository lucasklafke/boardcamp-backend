import { Router } from "express";
import {getRents, postRent} from "../controllers/rentals.js"
import validateRent from "../middlewares/validateRent.js"
const rentalsRoutes = Router();

rentalsRoutes.post("/rentals", validateRent, postRent);
rentalsRoutes.get("/rentals", getRents)
export default rentalsRoutes;