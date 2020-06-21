
import { Client } from 'pg';
import dotenv from 'dotenv'
import  sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY);



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
             (name,price,date,picture,hour,winners,target,status,type,tickets,current, vendor, selling) VALUES
             ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10, $11, $12 ,$13) RETURNING * 
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

             let inserts = [product.name ,product.price,product.date,product.picture,product.hour,product.winners,product.target,product.status,product.type,product.tickets, generateNums(product.tickets), product.vendor || "admin", product.selling]
             
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

         await client.query('update products set current=$2, sold=$3 where id=$1', [bid.productid, JSON.stringify(current), JSON.stringify(sold)])


        if(bidz2.length < 1) {
            return "done"
        } else {
            let infoTickets =  await client.query('select current from products where id=$1', [bid.productid])
            return infoTickets.rows.map(n => {
                return {
                    tickets: JSON.parse(n.current),
                    size: bidz2.length
                }
            })[0]
        }

    }

   async getAllbid() {
        const allBids = await client.query('select * from bids');
        return allBids.rows
    }

     async YourBids(id) {
        const allBids = await client.query('select product from bids where madeby=$1', [id]);
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
        let soldFortunes = await client.query('select * from products where id=$1', [id])
        let soldTickets = JSON.parse(soldFortunes.rows[0].sold)
        let luckies = parseInt(soldFortunes.rows[0].winners)

        if(soldTickets !== null && soldTickets.length >= luckies){ 
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
        let winnerInfo = []
        let loserInfo = []

        allBids.rows.forEach(n => {
            JSON.parse(n.bids).forEach(x => {
                if(winTickets.some(k => k == x)) {
                    winnerInfo.push({
                        user : n.madeby,  
                        bids : x,
                        time: n.time
                        
                    })
                }else {
                    loserInfo.push({
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

            
            const msgWin = {
            to: email,
            from: 'fortuneaction360@gmail.com',
            subject: 'CONGRATULATION! YOU’RE A FORTUNE AUCTION LUCKY WINNER',
            text: 'You have Won A Product From Fortune Auction',
            html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">
            <h4>Dear ${firstname} </h4>
            <br>
            <br>  

            <p>Congratulations ${secondname}! You’re the winner of ${soldFortunes.rows[0].name}. Your ticket number
                ${n.bids} <strong>emerged as lucky winning ticket</strong> after going through our unbias
                    shuffling and spinning technology in search of a lucky person to claim the item. We at Fortune
                    Auction couldn’t be happier for you, or more proud. When everyone else said it couldn’t be
                    done, you showed the opposite to be true. So proud of you! Enjoy the success you have worked
                    so hard to achieve. Great job!
                    </p>
                    <br>
                    <p>
                        As our winner, we have to make sure you receive your won item. Please, email
                        shipping@fortuneauction360.com the following information:
                        <br>
                        
                        <ul>
                            <li>Shipping Address,</li>
                            <li>Shipping Postal Cod</li>
                            <li>Shipping Phone Number</li>
                            <li>A 60sec video, expressing how you feel about being the winner at fortune auction and
                                feedback for us improve our services. (We will publish the video for other people to
                                share in your joy & happiness)
                                </li>
                        </ul>

                        <br>

                        <p>
                            <strong>Note:</strong> you’re responsible for the shipping cost. The shipping price will be sent to you when we
                            receive the information above. For any inquiries email contact@fortuneauction360.com

                        </p>
                    </p>

                    <p>
                        Thank you
                        <br>
                        Benedict Okolie
                        <br>
                        CEO
                        <br>
                    Fortune Auction LTD
                    </p>

                    <img src="" alt="Image Loading">

            </div>`,
            };

            
            sgMail
            .send(msgWin)
            .then( res => {
                console.log(res)
            }).catch( error => {
                console.error(error);
    
                if (error.response) {
                    console.error(error.response.body)
                }
                })

                await client.query(InsertWinner, details)

            })

            
            loserInfo.forEach(async n => {
                let userData =  await client.query('select * from users where id=$1', [n.user])
                const {firstname,email} = userData.rows[0]
                const msgLoose = {
                    to: email,
                    from: 'fortuneaction360@gmail.com',
                    subject: ': YOU DEFEATED ALL ODDS! ONE-DAY YOU’LL SMILE',
                    text: 'unseccessfully Bid',
                    html: `
                    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">
                <h4>Dear ${firstname} </h4>
                    <p>
                        You impress us on how uniquely you choose things by spotting opportunities and items that can
                help you achieve your dreams faster such as bidding on our platform. We appreciate you!
                Sadly, Your ticket number <loser-ticket-number> did not emerge as a lucky winning ticket
                after going through our unbias shuffling and spinning technology in search of a lucky person to
                claim the item. We at Fortune Auction share in your sadness at this moment. When everyone
                else said you can’t get your dream, you can show the opposite by being persistent!
                
                        </p>
                        <br>
                         <p>
                            <strong>TIP:</strong> Have you tried purchasing more randomly selected tickets on an item? If not give it a shot!
                            This strategy could increase your chance of being lucky in your bids. For any inquiries email
                            contact@fortuneauction360.com
                            
                            <br>
                         
                
                            <br>
                           
                         </p>
                
                         <p>
                            Best of Luck
                            <br>
                            <br>
                
                            Benedict Okolie
                            <br>
                            CEO
                            <br>
                           Fortune Auction LTD
                         </p>
                
                         <img src="" alt="Image Loading">
                
                </div>
                    `
                    };
                    sgMail
                    .send(msgLoose)
                    .then( res => {
                        console.log(res)
                    }).catch( error => {
                        console.error(error);
            
                        if (error.response) {
                            console.error(error.response.body)
                        }
                    })

        })

        setTimeout(async () => {
            await client.query("delete from products where id=$1",[id])
        }, 500);
        return winnerInfo

} else {
    let infoLost = await client.query('select * from bids where product=$1', [id])

     infoLost.rows.forEach(async n => {
        let userData =  await client.query('select * from users where id=$1', [n.madeby])
        const {firstname,phone,countrycode,secondname,email} = userData.rows[0]
        let userData2 =  await client.query('select * from productS where id=$1', [n.product])
        const {name,price} = userData2.rows[0]

        let inserts = `
        INSERT INTO bidata2
        (name,username,email,product,time,revenue,fortunes,phone) VALUES
        ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING * 
        `
        let vals = [firstname, secondname, email,name,n.time,n.revenue,n.bids, countrycode+ phone]

        await client.query(inserts,vals)

    })
    return "no"
}
    }


async getRefundOnes() {
    let bidata2 = await client.query("select * from bidata2")

    return bidata2.rows
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


        let results = 
        `INSERT INTO expired
         (name,price,starts,ends,picture,winner,current) VALUES
         ($1,$2,$3,$4,$5,$6,$7) RETURNING * 
        `
         let inserts = [expireData.rows[0].name,expireData.rows[0].price,expireData.rows[0].starts,expireData.rows[0].ends,expireData.rows[0].picture,expireData.rows[0].winners,expireData.rows[0].current]
         
         await client.query(results, inserts)
         
         await client.query('delete from products where id=$1', [id])
        

       } catch(err) {
       }
         return 'done'
    }

    async oneBidd (id) {
        let data = await  client.query('select * from bidata where username=$1', [id])

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
        await client.query('update vendreq set verified=$2 where account=$1', [userId, "true"])
        let info = await client.query('select * from vendreq where account=$1',[userId])
        let userInfoSend = await client.query('select * from users where secondname=$1',[userId])

        let {firstname, email} = userInfoSend.rows[0]
        let {store, address} = info.rows[0]

        const msgVend = {
            to: email,
            from: 'fortuneaction360@gmail.com',
            subject: 'TERMS & CONDITION OF A FORTUNE AUCTION VENDOR',
            text: 'You have Been Approved As A vendor',
            html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">
    <h4>Dear ${firstname} </h4>
        <p>
            We are happy that you chose to serve other people by auctioning your item or services to our
            esteem users to bid. Thank You!
    
            </p>
            <br>
            <p>
                However, it is important to know that you can not bid on your product. It is unethical to
                auction an item and also bid on that item. You can bid on other vendors products & services to
                support one another.
    
            </p>
    
            <br>
    
            <br>
             <p>
                <strong>note:</strong>when auctioning <strong>Brand new</strong> or <strong>used item(s)</strong>, you have to provide legal proof of
                ownership of that item(s). Failure to do so your product or services will be sanctioned as illegal
                and all money gotten from the bid will be refunded to the bidders or we find another legit vendor
                who will deliver the legal item. Also, you will be removed as a vendor
                <br>
             
    
               
             </p>
    
             <p>
                Commission Charge: As a fee for using our platform to sell your products or services we
                charge the following commission fee:
               <br>
               <ol>
                   <li>  9% on the sell of brand new item(s) </li>
                   <li>  10% on the sell of Used item(s)</li>
               </ol>
                
             </p>
             <br>
    
             <p>
                You are responsible for ensuring that your product or service is safely packaged and delivered
                to the winner in time by following up on with us. Because it is our policy that you will only receive
                your money once your product or services is delivered to the winner in good condition.
                
             </p>
             <br>
             <p>
                If any complaints about your product or services is forwarded to us. We will try to investigate the
                issue and you will have a share in the remedy cost. For more information about vendor policy
                visit: www.fortuneauction360.com/vendorpolicy For any inquiries email
                contact@fortuneauction360.com
                
             </p>
    
             <br>
    
             <p>
                Best regards
                <br>
                <br>
    
                Benedict Okolie
                <br>
                CEO
                <br>
               Fortune Auction LTD
             </p>
    
             <img src="" alt="Image Loading">
    
    </div>
            `
            };
                

            sgMail
            .send(msgVend)
            .then(async res => {
                return "done"
                console.log(res)
            }).catch( error => {
                console.error(error);
    
                if (error.response) {
                    console.error(error.response.body)
                }
                })

                await client.query('update users set vendor=$2, store=$3, address=$4 where secondname=$1', [userId, "true", store, address])

                return "done"


        
    }

    async rejectVend (userId, usName) {
        await client.query('delete from vendreq where id=$1', [userId])
        await client.query('update users set vendor=$2 where secondname=$1', [usName, null])

        return "done"
    }

    async deleteReqPro (userId) {
        await client.query('delete from vendpro where id=$1', [userId])
        return "done"
    }
}


export default new User();

