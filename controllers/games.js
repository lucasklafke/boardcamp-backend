import connection from "../db.js"


export async function getGames(req,res){
        const {name} = req.query

        try{
                const query = connection.query('select * from games where name = $1 ', [name])

        }catch(err){

        }
}
export async function postGame(req,res){
        const { name } = req.query

        try {
                const categoryId = await connection.query('select * from categories')
                const insertGame = await connection.query('insert into games ()')

        } catch (err) {

        }
}