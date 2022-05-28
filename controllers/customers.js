import connection from "../db.js";

export async function getCustomers(req,res){


        try{
                const clients = await connection.query('select * from customers;')
                res.send(clients.rows)
        }catch(err){
                res.send(err)
        }
}
export async function getCustomer(req,res){
        const customerId = req.params.id
        console.log("custId",customerId)
        console.log("params",req.params)
        try {
                const client = await connection.query('select * from customers where id=$1;', [customerId])

                client?res.send(client.rows[0]) : res.sendStatus(404);

                console.log(client.rows[0])

        } catch (err) {
                res.send(err)
        }
}
export async function postCustomer(req,res){

        const {name,phone,birthday,cpf} = req.body
        try{
                const query = await connection.query("--sql insert into customers  (name,phone,cpf,birthday) values($1,$2,$3,$4)", [name, phone, cpf, birthday])
                res.sendStatus(200)
        }catch(err){
                res.send(err)
        }
}