import { Router } from "express";
import {postRent} from "../controllers/rentals.js"
import validateRent from "../middlewares/validateRent.js"
const rentalsRoutes = Router();

rentalsRoutes.post("/rentals", validateRent, postRent);

export default rentalsRoutes;