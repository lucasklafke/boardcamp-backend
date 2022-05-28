import express, {json} from "express"
import cors from "cors"
import dotenv from "dotenv"

import {getGames} from "./controllers/games.js"
import customerRoutes from "./routes/customers.js"
import { getCategories, postCategory } from "./controllers/categories.js"
dotenv.config()

const app = express()

app.use(json())
app.use(cors())


app.use(customerRoutes)

app.get("/games", getGames)

app.get("/categories", getCategories)
app.post("/categories", postCategory)



app.listen(process.env.PORT)