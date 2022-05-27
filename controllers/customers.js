import connection from "../db.js";

export async function getCustomers(req,res){


        try{
                const clients = await connection.query('select * from customers;')
                console.log(clients.rows)
                res.send(clients.rows)
        }catch(err){
                res.send(err)
        }
}

export async function postCustomer(req,res){



        try{

        }catch(err){

        }
}