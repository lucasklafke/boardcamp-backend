import connection from "../db.js";
import validateRentSchema from "../schemas/validateRentSchema.js";
export default async function validateRent(req, res, next) {
        const validation = validateRentSchema.validate(req.body);
        if(validation.error){
                return res.sendStatus(validation.error.message)
        }
        const {customerId,gameId} = req.body
        try{
                const customerResult = await connection.query(
                        `SELECT * from customers where id = $1`,[customerId]
                )
                if((customerResult.rows).length <= 0){
                        return res.status(400).send("customer not found!")
                }
                const gameResult = await connection.query(
                        `SELECT * from games where id = $1`,[gameId]
                )
                if((gameResult).length <= 0 ){
                        return res.status(400).send("game not found!")
                }
                const rentResult = await connection.query(
                        `SELECT * from rentals where "gameId" = $1`,[gameId]
                )
                let rentAvaible = true
                const rentList = rentResult.rows

                rentList.forEach((rent) => {
                  if (rent.returnDate === null) {
                          rentAvaible = false
                  }
                });
                if(rentAvaible){
                        const game = (gameResult.rows[0])
                        res.locals.game = game
                        next()
                } else{
                    return res.status(400).send("rent not avaible!");                
                }
                

        }catch(err){
                return res.send(err)
        }
}
