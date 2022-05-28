import connection from "../db.js";
import clientSchema from "../schemas/clientSchema.js"
export default async function validatePostCustomer(req,res,next){
        const validation = clientSchema.validate(req.body)

        if(validation.error){
                return res.send(validation.error.message)
        }
        const {id} = req.params
        const {cpf} = req.body
        try{
                const user = await connection.query('select * from customers where cpf = $1',[cpf])

                if(!id){
                        if((user.rows).length > 0){
                                return res.status(409).send("cpf already registered")
                        }
                }
        }catch(err){
                res.send(err)
        }

        next()
}