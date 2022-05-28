import validateGameSchema from "../schemas/gameSchema.js";
import connection from "../db.js"

export default async function validateGame(req,res,next){
        const validation = validateGameSchema.validate(req.body)
        if(validation.error){
                return res.send(validation.error.message)
        }
        const {categoryId,name} = req.body
        try{

                const categoryExist = await connection.query(`SELECT * FROM categories where id = $1`,[categoryId])

                if ((categoryExist.rows).length > 0){
                        const result = await connection.query(`SELECT * from games where name = $1`,[name])
                        if((result.rows).length > 0){
                                return res.sendStatus(409)
                        }else{
                                next()               
                        }
                } else{
                        return res.sendStatus(400)
                }
        }catch(err){
                return res.send(err)
        }
}