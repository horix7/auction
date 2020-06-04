
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
             (name,price,date,picture,hour,winners,target,status,type,tickets,current) VALUES
             ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10, $11) RETURNING * 
            `
            
            let generateNums = (n) => {
                let numbers = []
                if(n >= 1) {

                while(numbers.length < n) {
                    let Num = Math.floor(Math.random() * Date.now() ) + 100000
                    numbers.push(Num)
                }
            }else {
                numbers = null
            }
                return JSON.stringify(numbers)
            }

             let inserts = [product.name ,product.price,product.date,product.picture,product.hour,product.winners,product.target,product.status,product.type,product.tickets, generateNums(product.tickets)]
             
             await client.query(results, inserts)
             
             let rezult = await client.query('select * from products where name=$1', [product.name])
            
             return rezult.rows
     }

    async bid(createdBy,bid, user) {

        let results = 
        `INSERT INTO bids
         (product,bids,madeby, revenue) VALUES
         ($1,$2,$3, $4) RETURNING * 
        `
         let revenue = await client.query('select price from products where id=$1', [bid.productid])

         let inserts = [ bid.productid, JSON.parse(bid.bids) , createdBy, revenue.rows[0].price]

         await client.query(results, inserts)
         
         let rezult = await client.query('select * from bids')


         let productBids = await client.query('select current from products where id=$1', [bid.productid])
         
        


         let productsInfo = await client.query('select * from products where id=$1', [bid.productid])
         let productName = await client.query('select name from products where id=$1', [bid.productid])
 
 
         let tickets =JSON.parse(productsInfo.rows[0].current)
         let sold = JSON.parse(productsInfo.rows[0].sold)
         let current = []

          tickets.forEach(n => {
           if( JSON.parse(bid.bids).some(x => n == x)) {
               sold.push(n)
           }else {
             current.push(n)
           }    
          })

         let results2 = 
         `INSERT INTO bidata
          (name ,username , phone ,email ,product ,time ,revenue, fortunes, payment) VALUES
          ($1,$2,$3,$4,$5,$6,$7, $8, $9) RETURNING * 
         `
 
         let timee =  new Date()
         console.log(new Date(timee.getTime()), user)
         let inputs3 = [user.firstname, user.secondname, user.phone, user.email, productName.rows[0].name,new Date(timee.getTime()), revenue.rows[0].price, bid.fortunes, bid.momopay]
 
         await client.query(results2, inputs3)

          console.log(tickets)
         await client.query('update products set current=$2, sold=$3 where id=$1', [bid.productid, JSON.stringify(current), JSON.stringify(sold)])


        
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


        async onePro(id) {
        
        let resul = await client.query('select * from products where id=$1', [id])

        return resul.rows

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

        let winnerInfo = await client.query('select * from wins')

        return winnerInfo.rows
    }

    async createWinner(ins) {
        let inserts = `
        INSERT INTO wins
        (name,product,picture,video,audion,price,location,quote) VALUES
        ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING * 
        `

        let nect = [ins.name, ins.product, ins.picture, ins.video, ins.audio, ins.price, ins.location, ins.quote]

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

    async oneBidd (id) {
        let data = await  client.query('select * from bidata where proid=$1', [id])
        console.log(data.rows)

        return data.rows
    }

    async allBiidds () {
        let data = await  client.query('select * from bidata')

        return data.rows
    }

    async bidsRelates (userId) {
        let data = await  client.query('select productid from bids where createdby=$1',[userId])
        return data.rows
    }
}


export default new User();

