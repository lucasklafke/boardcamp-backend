import dotenv from "dotenv"
import pg from "pg"
dotenv.config()


const { Pool } = pg;
const connection = new Pool({
  connectionString: process.env.HEROKU_POSTGRESQL_PINK_URL
});
if(process.env.MODE === 'PROD'){
        connection.ssl = {
                rejectUnauthorized:false
        }
}

console.log("connected")
export default connection