import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";

import { getGames, postGame } from "./controllers/games.js";
import customerRoutes from "./routes/customers.js";
import rentalsRoutes from "./routes/rentals.js"
import { getCategories, postCategory } from "./controllers/categories.js";
import validateGame from "./middlewares/validateGame.js";


dotenv.config();

const app = express();

app.use(json());
app.use(cors());

app.use(customerRoutes);
app.use(rentalsRoutes)

app.get("/games", getGames);
app.post("/games", validateGame, postGame);
app.get("/categories", getCategories);
app.post("/categories", postCategory);

app.listen(process.env.PORT);
