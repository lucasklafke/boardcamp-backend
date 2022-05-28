import connection from "../db.js"


export async function getGames(req,res){
        const {name} = req.query
        try{
                if(name){
                        const result = await connection.query( `SELECT games.*,categories.name as caregoryName from games join categories on games."categoryId" = categories.id WHERE games.name LIKE $1 `,[name+'%']) 
                        return res.send(result.rows)
                } 
                const query = await connection.query(`SELECT games.*,categories.name as categoryName from games join categories on games."categoryId" = categories.id`)
                
                res.send(query.rows)

        }catch(err){
                res.send(err)
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