import express, {json} from "express"
import cors from "cors"
import dotenv from "dotenv"

import connection from "./db.js"
import {getGames} from "./controllers/games.js"
import {getCustomer, getCustomers, postCustomer, updateCustomer} from "./controllers/customers.js"
import validatePostCustomer from "./middlewares/validatePostCustomer.js"
dotenv.config()

const app = express()

app.use(json())
app.use(cors())



app.get("/games",  getGames)
app.get("/customers", getCustomers)
app.get("/customers/:id", getCustomer)
app.post("/customers", validatePostCustomer,postCustomer)
app.put("/customers/:id", updateCustomer)




app.listen(process.env.PORT)