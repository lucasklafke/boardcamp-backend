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
        const { name, image, stockTotal,categoryId, pricePerDay} = req.body

        try {
                const result = await connection.query(`INSERT INTO games (name, image,"stockTotal","categoryId","pricePerDay") values($1,$2,$3,$4,$5)`,[name,image,stockTotal,categoryId,pricePerDay])
                res.sendStatus(200)
                console.log(result)
        } catch (err) {
                res.send(err)
        }
}