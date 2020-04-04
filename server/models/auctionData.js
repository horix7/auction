
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
         let inserts = [createdBy, bid.productid, new Date().getTime()]
         
         await client.query(results, inserts)
         
         let rezult = await client.query('select * from bids')



         let productBids = await client.query('select bids from products where id=$1', [bid.productid])
         let bids = productBids.rows[0].bids
         
 
         let createAdd = (num) => {
             if(parseInt(num).toString() == 'NaN') {
                 return 0
             } else {
                 return 1
             }
         }
         await client.query('update products set bids=$2 where id=$1', [bid.productid, createAdd(bids) + 1 ])


        
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
        let productsInfo = await client.query('select current from products where id=$1', [info.productid])
        let current = productsInfo.rows[0].current
        

        let createAdd = (num) => {
            if(parseInt(num).toString() == 'NaN') {
                return 0
            } else {
                return 1
            }
        }
        await client.query('update products set current=$2 where id=$1', [info.productid, createAdd(current) + 1 ])

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


    async chooseWinner(id) {
        let prodData = await client.query('select winner from products where id=$1', [id])
       
        let bidsData = await client.query('select * from bids where productid=$1', [id])

        bidsData.rows.splice(prodData.rows[0].winner)
        let inserts = `
        INSERT INTO winners
        (userid,productid,bidtime) VALUES
        ($1,$2,$3) RETURNING * 
        `

        let inserts2 = `
        INSERT INTO viewin
        (firstname,secondname,age,phone,email,time,product) VALUES
        ($1,$2,$3,$4,$5,$6,$7) RETURNING * 
        `

        bidsData.rows.forEach(async n => {
            let inputs = [n.createdby, n.productid, n.time]
            await client.query(inserts, inputs)
            let userInfo = await client.query('select firstname,secondname,age,phone,email from users where id=$1', [n.createdby])
            let prodName = await client.query('select name from products where id=$1', [n.productid])
            console.log(userInfo.rows, prodName.rows)
            let inputs2 = [userInfo.rows[0].firstname, userInfo.rows[0].secondname, userInfo.rows[0].age, userInfo.rows[0].phone, userInfo.rows[0].email, n.time, prodName.rows[0].name]

            await client.query(inserts2, inputs2)
            

        })

        console.log(prodData.rows, bidsData.rows)

    }

    async winners() {
        let winnerInfo = await client.query('select * from viewin')

        await client.query('delete from viewin')

        console.log(winnerInfo.rows)
        return winnerInfo.rows
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


    async deleteAuction(id) {
       
    await client.query('delete from products where id=$1', [id])

    return 'done'
    }

    
    async updatePord(id) {
        await client.query(`update products set status='true' where id=$1`, [id]);
       return 'done'
    }

    async returnIdz() {
        let ids = await client.query('select id from products')

        return ids.rows
    }

    async frontPro() {
        const allProdui = await client.query('select * from products');
        return allProdui.rows.splice(0,4)
    }

    async changeToNull(id) {
       try {
        let expireData = await client.query(`select * from products where id=$1`, [id]);

        console.log(expireData)

        let results = 
        `INSERT INTO expired
         (name,price,starts,ends,picture,winner,current) VALUES
         ($1,$2,$3,$4,$5,$6,$7) RETURNING * 
        `
         let inserts = [expireData.rows[0].name,expireData.rows[0].price,expireData.rows[0].starts,expireData.rows[0].ends,expireData.rows[0].picture,expireData.rows[0].winners,expireData.rows[0].current]
         
         await client.query(results, inserts)
         
         await client.query('delete from products where id=$1', [id])
        

       } catch(err) {
           console.log(err)
       }
         return 'done'
    }
}


export default new User();

