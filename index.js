import express, {json} from "express"
import cors from "cors"
import dotenv from "dotenv"

import connection from "./db.js"
import {getGames} from "./controllers/games.js"
import {getCustomers} from "./controllers/customers.js"

dotenv.config()

const app = express()

app.use(json())
app.use(cors())



app.get("/games",  getGames)
app.get("/customers", getCustomers)






app.listen(4000)