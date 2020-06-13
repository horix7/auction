
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

                while([...new Set(numbers)].length < n) {
                    let Num = Math.floor(Math.random() * 1000) + 1000
                    numbers.push(parseInt(Num))  
                }
            }else {
                numbers = null
            }
                return JSON.stringify([...new Set(numbers)])
            }

             let inserts = [product.name ,product.price,product.date,product.picture,product.hour,product.winners,product.target,product.status,product.type,product.tickets, generateNums(product.tickets)]
             
             await client.query(results, inserts)
             
             let rezult = await client.query('select * from products where name=$1', [product.name])
            
             return rezult.rows
     }

    async bid(createdBy,bid, user) {
        let productsInfo = await client.query('select * from products where id=$1', [bid.productid])
 
 
         let tickets =JSON.parse(productsInfo.rows[0].current)
         let sold = JSON.parse(productsInfo.rows[0].sold) || []
         let prodName =productsInfo.rows[0].name

         let current = []

        let results = 
        `INSERT INTO bids
         (product,bids,madeby, revenue, time) VALUES
         ($1,$2,$3, $4,$5) RETURNING * 
        `
         let revenue = productsInfo.rows[0].price

         let bidFortunes = JSON.parse(bid.bids)

         let bidz = []
         let bidz2 = []


         bidFortunes.forEach(n => {
            if(sold.some(x => x == n)) {
                bidz2.push(n)

            }else {
                bidz.push(n)
            }
         })

         let inserts = [ bid.productid, JSON.stringify(bidz) , createdBy, revenue, new Date]

         await client.query(results, inserts)
         
         let rezult = await client.query('select * from bids')


        //  let productBids = await client.query('select current from products where id=$1', [bid.productid])


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
         let inputs3 = [user.firstname, user.secondname, user.phone, user.email, prodName,new Date(timee.getTime()), revenue , bid.fortunes, bid.momopay]
 
         await client.query(results2, inputs3)

          console.log(tickets)
         await client.query('update products set current=$2, sold=$3 where id=$1', [bid.productid, JSON.stringify(current), JSON.stringify(sold)])


        
         return bidz2

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

   
    async chooseLuckyFortunes(id) {
        let soldFortunes = await client.query('select sold ,winners, name from products where id=$1', [id])
        console.log(soldFortunes.rows)
        let soldTickets = JSON.parse(soldFortunes.rows[0].sold)
        let luckies = parseInt(soldFortunes.rows[0].winners)

        if(soldTickets.length >= luckies){ 
            let checkWinner = (array, wins) => {
            const element = []

            while(element.length < wins) {
            let th = Math.floor(Math.random() * array.length)
            if(element.some(n => n === th)) {
            
            }else {
                element.push(th)
            }
        }

        return element
        }

        let winTickets = checkWinner(soldTickets,luckies).map(n => soldTickets[n])

        let allBids = await client.query('select * from bids where product=$1', [id])

        // let winnerData  = allBids.rows.map(n => )
        console.log("[worked Aup here]")
        let winnerInfo = []
        allBids.rows.forEach(n => {
            JSON.parse(n.bids).forEach(x => {
                if(winTickets.some(k => k == x)) {
                    winnerInfo.push({
                        user : n.madeby,  
                        bids : x,
                        time: n.time
                        
                    })
                }
            })
        })



        winnerInfo.forEach(async n => {
            let InsertWinner = 
            `INSERT INTO winners
            (name,username,age,email,product,fortune,date) VALUES
            ($1,$2,$3,$4,$5,$6,$7) RETURNING * 
           `
            let userData =  await client.query('select * from users where id=$1', [n.user])
            const {firstname, secondname,age,email} = userData.rows[0]
            let details = [firstname, secondname, age,email,soldFortunes.rows[0].name, n.bids , n.time]
            
            await client.query(InsertWinner, details)

        })
        return winnerInfo

} else {
    return "no"
}
    }


    async winners() {

        let winnerInfo = await client.query('select * from wins')

        return winnerInfo.rows
    }

    async ChosenOne() {

        let winnerInfo = await client.query('select * from winners')

        return winnerInfo.rows
    }

    async createProVend(ins) {
        let inserts = `
        INSERT INTO vendPro
        (name,store,picture,winners,hour,date,price) VALUES
        ($1,$2,$3,$4,$5,$6,$7) RETURNING * 
        `
        let nect = [ins.name, ins.store, ins.picture, ins.winners, ins.hour, ins.date, ins.price]

        await client.query(inserts, nect)

        return "done"
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
        let ids = await client.query('select * from vendreq')

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
        let data = await  client.query('select * from bidata where username=$1', [id])
        console.log(data.rows)

        return data.rows
    }

    async allBiidds () {
        let data = await  client.query('select * from bidata')

        return data.rows
    }

    async allRePro () {
        let data = await  client.query('select * from vendPro')
        return data.rows
    }

    async bidsRelates (userId) {
        let data = await  client.query('select productid from bids where createdby=$1',[userId])
        return data.rows
    }

    async approveVendor (userId) {
        await client.query('update users set vendor=$2 where secondname=$1', [userId, "true"])
        return "done"
    }

    async rejectVend (userId) {
        await client.query('delete from vendPro where id=$1', [userId])
        return "done"
    }
}


export default new User();

