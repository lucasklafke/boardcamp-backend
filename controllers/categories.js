import connection from "../db.js"
export async function getCategories(req,res){

        try{
                const result = await connection.query("SELECT * FROM categories")
                res.send(result.rows)
        }catch(err){
                res.send(err)
        }
}

export async function postCategory(req,res){
        const {name} = req.body
        if(!name){
                return res.sendStatus(400)
        }
        try{
                const nameExist = await connection.query("SELECT * FROM categories WHERE name = $1",[name])
                if((nameExist.rows).length > 0){
                        return res.sendStatus(409)
                }
                
                const result = await connection.query("INSERT INTO categories(name) VALUES($1)",[name])
                res.send(result.rows)
        }catch(err){
                res.send(err)
        }
}