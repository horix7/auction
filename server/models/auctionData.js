
import { Client } from 'pg';
import dotenv from 'dotenv'

import 'dotenv/config'

let client = new Client({
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    port: 5432,
    database: process.env.DATABASE_NAME
})

client.connect()
// 
class User {
    async createAproduct(product){

            let results = 
            `INSERT INTO products
             (name,description,price,starts,ends,picture) VALUES
             ($1,$2,$3,$4,$5,$6) RETURNING * 
            `
             let inserts = [product.name,product.description ,product.price,product.starts,product.ends,product.picture]
             
             await client.query(results, inserts)
             
             let rezult = await client.query('select * from products where name=$1', [product.name])
            
             return rezult.rows
     }

    async bid(createdBy,bid) {

        let results = 
        `INSERT INTO bids
         (createdby,productid,time) VALUES
         ($1,$2,$3) RETURNING * 
        `
         let inserts = [createdBy, bid.productid, bid.time]
         
         await client.query(results, inserts)
         
         let rezult = await client.query('select * from bids')
        
         return rezult.rows
    }

   async getAllbid() {
        const allUsers = await client.query('select * from bids');
        return allUsers.rows
    }
}


export default new User();

