import connection from "../db.js";
import dayjs from "dayjs"
export async function getRents(req, res) {
  try {
  } catch (err) {}
}

export async function postRent(req, res) {
  const { customerId, gameId, daysRented } = req.body;
  const rentDate = dayjs().format('YYYY-MM-DD')
  const {game} = res.locals
  console.log(game)
  const originalPrice = (game.pricePerDay * daysRented)

  try{
          const postResult = await connection.query(
                  `INSERT INTO rentals ("customerId","gameId","daysRented","rentDate","originalPrice","delayFee","returnDate")
                  values($1,$2,$3,$4,$5,null,null)`,[customerId,gameId,daysRented,rentDate,originalPrice]
          )
          res.sendStatus(201)
  }catch(err){
          res.send(err)
  }
}
