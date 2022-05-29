import connection from "../db.js";
import validateRentSchema from "../schemas/validateRentSchema.js";
export default async function validateRent(req, res, next) {


        const validation = validateRentSchema.validate(req.body);

        if(validation.error){
            return res.status(400).send(validation.error.message)
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
                if((gameResult.rows).length <= 0 ){
                        return res.status(400).send("game not found!")
                }

        
                const rentResult = await connection.query(
                  `SELECT rentals."returnDate", games."stockTotal", games."pricePerDay" from rentals
                        join games
                                on rentals."gameId"= games.id
                        where rentals."returnDate" is null and games.id = $1`,
                  [gameId]
                );

                const rowsLength = (rentResult.rows).length
                const stockTotal = rentResult.rows[0].stockTotal
                
                if(rowsLength > stockTotal){
                        return res.sendStatus(400)
                }
                console.log(rentResult.rows)
                const pricePerDay = rentResult.rows[0].pricePerDay;
                res.locals.pricePerDay = pricePerDay
                next()

        }catch(err){
                return res.send(err)
        }
}
