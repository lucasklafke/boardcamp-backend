import connection from "../db.js";
import dayjs from "dayjs";
export async function getRents(req, res) {
  const customerId = req.query;

  try {
    const result = await connection.query(
      `SELECT rentals.*,
                games.name as "gameName", games."categoryId",
                customers.name,
                categories.name as category
                from
                        games
                        join rentals 
                                on games.id = rentals."gameId"
                        join customers
                                on customers.id = rentals."customerId"
                        join categories
                                on games."categoryId" = categories.id
        `
    );
    const rentList = []
    const rows = result.rows
    rows.forEach(row => {
        const rent = {
                id: row.id,
                customerId: row.customerId,
                gameId: row.gameId,
                rentDate: row.rentDate,
                daysRented: row.daysRented,
                returnDate: row.returnDate,
                originalPrice: row.originalPrice,
                delayFee: row.delayFee,
                customer:{
                        id: row.customerId,
                        name: row.name
                },
                game:{
                        id: row.gameId,
                        name:row.gameName,
                        categoryId: row.categoryId,
                        categoryName: row.category
                } 
        }
        rentList.push(rent)
    })
    res.send(rentList)
  } catch (err) {
        res.send(err)
  }
}

export async function postRent(req, res) {
  const { customerId, gameId, daysRented } = req.body;
  const rentDate = dayjs().format("YYYY-MM-DD");
  const { pricePerDay } = res.locals;
  console.log(pricePerDay)
  const originalPrice = pricePerDay * daysRented;

  try {
    const postResult = await connection.query(
      `INSERT INTO rentals ("customerId","gameId","daysRented","rentDate","originalPrice","delayFee","returnDate")
        VALUES($1,$2,$3,$4,$5,null,null)`,
      [customerId, gameId, daysRented, rentDate, originalPrice]
    );

    res.sendStatus(201);
  } catch (err) {
    res.send(err);
  }
}
