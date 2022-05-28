import express, {json} from "express"
import cors from "cors"
import dotenv from "dotenv"

import {getGames} from "./controllers/games.js"
import customerRoutes from "./routes/customers.js"
dotenv.config()

const app = express()

app.use(json())
app.use(cors())



app.get("/games",  getGames)
app.use(customerRoutes)




app.listen(process.env.PORT)