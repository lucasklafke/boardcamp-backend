import { Router } from "express"
import { getCustomer, getCustomers, postCustomer, updateCustomer } from "../controllers/customers.js"
import validatePostCustomer from "../middlewares/validatePostCustomer.js"

const customerRoutes = Router()

customerRoutes.get("/customers", getCustomers)
customerRoutes.get("/customers/:id", getCustomer)
customerRoutes.post("/customers", validatePostCustomer, postCustomer)
customerRoutes.put("/customers/:id", validatePostCustomer, updateCustomer)

export default customerRoutes