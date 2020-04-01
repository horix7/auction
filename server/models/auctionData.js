
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
             (name,description,price,starts,ends,picture,hour,winner,target,status) VALUES
             ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING * 
            `
             let inserts = [product.name,product.description ,product.price,product.starts,product.ends,product.picture,product.hour,product.winners,product.target,product.status]
             
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
        const allBids = await client.query('select * from bids');
        return allBids.rows
    }

    async allProduct() {
        const allProdui = await client.query('select * from products');
        return allProdui.rows
    }

    async activeAcution() {
        const actives = await client.query('select * from products where status=$1', ["true"]);
        return actives.rows
    }

    
    async inactiveAuctions() {
        const notActive = await client.query('select * from products where status=$1', ["false"]);
        return notActive.rows
    }

    async interest(createdBy, info) {
        let results = 
        `INSERT INTO interests
         (createdby,productid) VALUES
         ($1,$2) RETURNING * 
        `

        let inputs = [createdBy, info.productid]

        await client.query(results, inputs)

        return "done"

    } 

        async onePro(id) {
        
        let resul = await client.query('select * from products where id=$1', [id])

        return resul.rows

    }   

    async interestProd(userID) {
       
       try {
        let results = await client.query('select productid from interests where createdby=$1', [userID])
        let newResults = []
        results.rows.forEach(n => {
            if(n.productid !== null) {
                newResults.push(n.productid)
            }
        })

        let displayPro = await client.query(`select * from products where id in (${newResults})`)
        
        return displayPro.rows
       } catch(err) {
           console.log(err)
          
       }

    }   

    async unintrestePro(userID) {
       
      try {
        let results = await client.query('select productid from interests where createdby=$1', [userID])
        let newResults = []
        results.rows.forEach(n => {
            if(n.productid !== null) {
                newResults.push(n.productid)
            }
        })
        let ids = await client.query(`select id from products`)
        let fetchIds = []

        ids.rows.forEach(n => {
            if(!newResults.some(x => n.id == x)) {
                fetchIds.push(n.id)
            }
        })

        console.log(fetchIds)
        let displayPro = await client.query(`select * from products where id in (${fetchIds})`)
        console.log(ids)
        return displayPro.rows
      }
      catch (err){
          console.log(err)
         
      }

    }   

    async winners() {
        let winnerInfo = await client.query('select * from winners')
        let ids  = []
        let prodIds = []
        winnerInfo.rows.forEach(n => {
            ids.push(n.userid)
            prodIds.push(n.productid)
        })

        let insert = await client.query(`select * from users where id in (${ids})`)
        let prod = await client.query(`select * from products where id in (${prodIds})`)

        let winnersAll = insert.rows
        let productAll = prod.rows

       winnersAll.forEach(n => {
           winnersAll[winnersAll.indexOf(n)].time = winnerInfo.rows[winnersAll.indexOf(n)].time
           winnersAll[winnersAll.indexOf(n)].prodcut = productAll[winnersAll.indexOf(n)].name

       })

        return winnersAll
    }

    async createWinner(ins) {
        let inserts = `
        INSERT INTO publish
        (name,product,bidtime,picture) VALUES
        ($1,$2,$3,$4) RETURNING * 
        `

        let nect = [ins.name, ins.product, ins.bidtime, ins.picture]

    await client.query(inserts, nect)

    return 'done'
    }
}


export default new User();

