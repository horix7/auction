
import { Client } from 'pg';
import dotenv from 'dotenv'
import sendpulse from 'sendpulse-api'


import 'dotenv/config'



let client = new Client({
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    port: 5432,
    database: process.env.DB_NAME
})

client.connect()

class User {
    async createAproduct(product) {

        let results =
            `INSERT INTO products
             (name,price,date,picture,hour,winners,target,status,type,tickets,current, vendor, selling,published) VALUES
             ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10, $11, $12 ,$13,$14) RETURNING * 
            `

        let generateNums = (n) => {
            let numbers = []
            if (n >= 1) {

                while ([...new Set(numbers)].length < n) {
                    let Num = Math.floor(Math.random() * 1000) + 1000
                    numbers.push(parseInt(Num))
                }
            } else {
                numbers = null
            }
            return JSON.stringify([...new Set(numbers)])
        }

        let inserts = [product.name, product.price, product.date, product.picture, product.hour, product.winners, product.target, "current", product.type, product.tickets, generateNums(product.tickets), product.vendor || "admin", product.selling, new Date]

        await client.query(results, inserts)

        let rezult = await client.query('select * from products where name=$1', [product.name])

        return rezult.rows
    }

    async bid(createdBy, bid, user, country1) {
        let productsInfo = await client.query('select * from products where id=$1', [bid.productid])


        let tickets = JSON.parse(productsInfo.rows[0].current)
        let sold = JSON.parse(productsInfo.rows[0].sold) || []
        let prodName = productsInfo.rows[0].name

        let current = []

        let results =
            `INSERT INTO bids
         (product,bids,madeby, revenue, time,payment) VALUES
         ($1,$2,$3,$4,$5,$6) RETURNING * 
        `
        let revenue = productsInfo.rows[0].price

        let bidFortunes = JSON.parse(bid.bids)

        let bidz = []
        let bidz2 = []


        bidFortunes.forEach(n => {
            if (sold.some(x => x == n)) {
                bidz2.push(n)

            } else {
                bidz.push(n)
            }
        })

        let inserts = [bid.productid, JSON.stringify(bidz), createdBy, revenue, new Date, bid.momopay]

        await client.query(results, inserts)

        let rezult = await client.query('select * from bids')


        //  let productBids = await client.query('select current from products where id=$1', [bid.productid])


        tickets.forEach(n => {
            if (JSON.parse(bid.bids).some(x => n == x)) {
                sold.push(n)
            } else {
                current.push(n)
            }
        })

        let results2 =
            `INSERT INTO bidata
          (name ,username , phone ,email ,product ,time ,revenue, fortunes, payment,country) VALUES
          ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING * 
         `

        let timee = new Date()
        let inputs3 = [user.firstname, user.secondname, user.phone, user.email, prodName, new Date(timee.getTime()), revenue, bid.bids, bid.momopay, country1]

        await client.query(results2, inputs3)

        await client.query('update products set current=$2, sold=$3 where id=$1', [bid.productid, JSON.stringify(current), JSON.stringify(sold)])


        if (bidz2.length < 1) {
            return "done"
        } else {
            let infoTickets = await client.query('select current from products where id=$1', [bid.productid])
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
        return allBids.rows.reverse()
    }

    async YourBids(id) {
        const allBids = await client.query('select product from bids where madeby=$1', [id]);
        return allBids.rows.reverse()
    }

    async allProduct() {
        const allProdui = await client.query('select * from products where status=$1', ["current"])
        return allProdui.rows.reverse()
    }


    async onePro(id) {

        let resul = await client.query('select * from products where id=$1', [id])

        return resul.rows.reverse()

    }


    async chooseLuckyFortunes(id) {
        let soldFortunes = await client.query('select * from products where id=$1', [id])
        let soldTickets = JSON.parse(soldFortunes.rows[0].sold)
        let luckies = parseInt(soldFortunes.rows[0].winners)

        if (soldTickets !== null && soldTickets.length >= luckies) {
            let checkWinner = (array, wins) => {
                const element = []

                while (element.length < wins) {
                    let th = Math.floor(Math.random() * array.length)
                    if (element.some(n => n === th)) {

                    } else {
                        element.push(th)
                    }
                }

                return element
            }

            let winTickets = checkWinner(soldTickets, luckies).map(n => soldTickets[n])

            let allBids = await client.query('select * from bids where product=$1', [id])

            // let winnerData  = allBids.rows.map(n => )
            let winnerInfo = []
            let loserInfo = []

            allBids.rows.forEach(n => {
                JSON.parse(n.bids).forEach(x => {
                    if (winTickets.some(k => k == x)) {
                        winnerInfo.push({
                            user: n.madeby,
                            bids: x,
                            time: n.time

                        })
                    } else {
                        loserInfo.push({
                            user: n.madeby,
                            bids: x,
                            time: n.time
                        })
                    }
                })
            })


            console.log(winnerInfo)



            winnerInfo.forEach(async n => {
                let InsertWinner =
                    `INSERT INTO winners
            (name,username,age,email,product,fortune,date,country) VALUES
            ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING * 
           `
                let userData = await client.query('select * from users where id=$1', [n.user])
                const { firstname, secondname, age, email, country } = userData.rows[0]
                let details = [firstname, secondname, age, email, soldFortunes.rows[0].name, n.bids, n.time, country]

                sendpulse.init(process.env.SEND_PULSE_ID, process.env.SEND_PULSE_KEY, "/tmp/", (token) => {
                    if (token && token.is_error) {
                        console.log('your :token: ' + token);
                    }


                    let answerGetter = function (data) {
                        console.log(data);
                    }


                    let email2 = {
                        html: `
                <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">
                <h4>Dear ${firstname}, </h4>
                <p>Congratulations ${secondname}! You’re the winner of ${soldFortunes.rows[0].name}. Your ticket number
                    ${n.bids} <strong>emerged as lucky winning ticket</strong> after going through our unbias
                        shuffling and spinning technology in search of a lucky person to claim the item. We at Fortune
                        Auction couldn’t be happier for you, or more proud. When everyone else said it couldn’t be
                        done, you showed the opposite to be true. So proud of you! Enjoy the success you have worked
                        so hard to achieve. Great job!
                        </p>
                        <p>
                            As our winner, we have to make sure you receive your won item. Please, email
                            shipping@fortuneauction360.com the following information:
                            <br>
                            
                            <ul>
                                <li>Shipping Address,</li>
                                <li>Shipping Postal Code,</li>
                                <li>Shipping Phone Number,</li>
                                <li>Send One Of Your Photo for us to know you,</li>
                                <li>A 60sec video or Voice Record, expressing how you feel about being the winner at fortune auction and
                                    feedback for us improve our services. (We will publish the video or Voice Record for other people to
                                    share in your joy & happiness)
                                    </li>
                            </ul>
    
    
                            <p>
                                <strong>Note:</strong> you’re responsible for the shipping cost. The shipping price will be sent to you when we
                                receive the information above. For any inquiries email contact@fortuneauction360.com
    
                            </p>
                        </p>
    
                        <p>
                            Thank you
                            <br>
                            <br>
                            Benedict Okolie
                            <br>
                            CEO
                            <br>
                        Fortune Auction LTD
                        </p>
    
                        <img src="https://i.imgur.com/JAXTYOG.png" alt="Image Loading">
    
                </div>`,

                        subject: 'CONGRATULATION! YOU’RE A FORTUNE AUCTION LUCKY WINNER',
                        text: 'You have Won A Product From Fortune Auction',
                        "from": {
                            "name": "Benedict Okolie",
                            "email": "bokolie@fortuneauction360.com"
                        },
                        "to": [
                            {
                                "name": firstname,
                                "email": email
                            },
                        ],
                        "bcc": [
                            {
                                "name": "Benedict",
                                "email": "bokolie@fortuneauction360.com"
                            },
                        ]
                    };

                    sendpulse.smtpSendMail(answerGetter, email2);
                })


                await client.query(InsertWinner, details)

            })


            loserInfo.forEach(async n => {
                let InsertWinner =
                    `INSERT INTO runnerup
                (name,username,age,email,product,fortune,date,country) VALUES
                ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING * 
               `
                let userData = await client.query('select * from users where id=$1', [n.user])
                const { firstname, secondname, email, age, country } = userData.rows[0]
                let details = [firstname, secondname, age, email, soldFortunes.rows[0].name, n.bids, n.time, country]

                sendpulse.init(process.env.SEND_PULSE_ID, process.env.SEND_PULSE_KEY, "/tmp/", (token) => {
                    if (token && token.is_error) {
                        console.log('your :token: ' + token);
                    }


                    let answerGetter = function (data) {
                        console.log(data);
                    }


                    let email2 = {
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
                
                         <img src="https://i.imgur.com/JAXTYOG.png" alt="Image Loading">
                
                </div>
                    `
                        ,
                        subject: 'YOU DEFEATED ALL ODDS! ONE-DAY YOU’LL SMILE',
                        text: 'unseccessfully Bid',
                        "from": {
                            "name": "Benedict Okolie",
                            "email": "bokolie@fortuneauction360.com"
                        },
                        "to": [
                            {
                                "name": firstname,
                                "email": email
                            },
                        ],
                        "bcc": [
                            {
                                "name": "Benedict",
                                "email": "bokolie@fortuneauction360.com"
                            },
                        ]
                    };

                    sendpulse.smtpSendMail(answerGetter, email2);
                })


                await client.query(InsertWinner, details)


            })

            setTimeout(async () => {
                try {
                    await client.query("update products set status=$2 where id=$1", [id, "completed"])
                } catch (err) {
                    console.log(err)
                }
            }, 500);
            return winnerInfo

        } else {
            let infoLost = await client.query('select * from bids where product=$1', [id])
            console.log(infoLost.rows)
            await infoLost.rows.forEach(async n => {
                let userData = await client.query('select * from users where id=$1', [n.madeby])
                const { firstname, phone, countrycode, country, secondname, email } = userData.rows[0]
                let userData2 = await client.query('select * from productS where id=$1', [n.product])
                const { name, price, status } = userData2.rows[0]

                let inserts = `
        INSERT INTO bidata2
        (name,username,email,product,time,revenue,fortunes,phone,country,status,payment) VALUES
        ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) RETURNING * 
        `
                let vals = [firstname, secondname, email, name, n.time, n.revenue, n.bids, countrycode + phone, country, status, n.payment]

                await client.query(inserts, vals)

            })
            console.log("kk")
            return "no"
        }
    }


    async getRefundOnes() {
        let bidata2 = await client.query("select * from bidata2")

        return bidata2.rows.reverse()
    }
    async winners() {

        let winnerInfo = await client.query('select * from wins')

        return winnerInfo.rows.reverse()
    }

    async ChosenOne() {

        let winnerInfo = await client.query('select * from winners')

        return winnerInfo.rows.reverse()
    }

    async createProVend(ins) {
        let inserts = `
        INSERT INTO vendPro
        (name,store,picture,winners,hour,date,price,type) VALUES
        ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING * 
        `
        let nect = [ins.name, ins.store, ins.picture, ins.winners, ins.hour, ins.date, ins.price, ins.type]

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


    async deleteAuction(id, status) {

        await client.query('update products set status=$2 where id=$1', [id, status])

        return 'done'
    }


    async updatePord(id) {
        await client.query(`update products set status=$2 where id=$1`, [id, "true"]);
        return 'done'
    }

    async returnIdz() {
        let ids = await client.query('select * from vendreq')

        return ids.rows.reverse()
    }

    async frontPro() {
        const allProdui = await client.query('select * from products where status=$1', ["current"]);
        return allProdui.rows.reverse().splice(0, 4)
    }
    async prozz() {
        const allProdui = await client.query('select * from products');
        return allProdui.rows.map(n => {
            return {
                productName: n.name,
                ticketPrice: n.price,
                tickets: n.tickets,
                winners: n.winners,
                productsImage: n.picture,
                endingDate: n.date,
                endingHour: n.hour,
                publishedDate: n.published,
                currentTicket: n.current == null ? 0 : JSON.parse(n.current).length,
                soldTickets: n.sold == null ? 0 : JSON.parse(n.sold).length,
                status: n.status,
                vendorInfo: n.vendor,
                sellingPrice: n.selling,
                productType: n.type


            }
        }).reverse()
    }

    async changeToNull(id) {
        try {
            let expireData = await client.query(`select * from products where id=$1`, [id]);



            await client.query('update products set status=$2 where id=$1', [id, "expired"])


        } catch (err) {
        }
        return 'done'
    }

    async oneBidd(id) {
        let data = await client.query('select * from bidata where username=$1', [id])

        return data.rows.reverse()
    }

    async allBiidds() {
        let data = await client.query('select * from bidata')

        return data.rows.reverse()
    }

    async allRePro() {
        let data = await client.query('select * from vendPro')
        return data.rows.reverse()
    }

    async bidsRelates(userId) {
        let data = await client.query('select productid from bids where createdby=$1', [userId])
        return data.rows.reverse()
    }

    async approveVendor(userId) {
        await client.query('update vendreq set verified=$2 where account=$1', [userId, "true"])
        let info = await client.query('select * from vendreq where account=$1', [userId])
        let userInfoSend = await client.query('select * from users where secondname=$1', [userId])

        let { firstname, email } = userInfoSend.rows[0]
        let { store, address } = info.rows[0]
        sendpulse.init(process.env.SEND_PULSE_ID, process.env.SEND_PULSE_KEY, "/tmp/", (token) => {
            if (token && token.is_error) {
                console.log('your :token: ' + token);
            }


            let answerGetter = function (data) {
                console.log(data);
            }


            let email2 = {
                html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">
    <h4>Dear ${firstname} </h4>
        <p>
            We are happy that you chose to serve other people by auctioning your item or services to our
            esteem users to bid. Thank You!
    
            </p>
            <p>
                However, it is important to know that you can not bid on your product. It is unethical to
                auction an item and also bid on that item. You can bid on other vendors products & services to
                support one another.
    
            </p>
    
    
             <p>
                <strong>Note:</strong>when auctioning <strong>Brand new</strong> or <strong>used item(s)</strong>, you have to provide legal proof of
                ownership of that item(s). Failure to do so your product or services will be sanctioned as illegal
                and all money gotten from the bid will be refunded to the bidders or we find another legit vendor
                who will deliver the legal item. Also, you will be removed as a vendor
                <br>
             
    
               
             </p>
    
             <p>
                <strong>Commission Charge: </strong> As a fee for using our platform to sell your products or services we
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
             <p>
                If any complaints about your product or services is forwarded to us. We will try to investigate the
                issue and you will have a share in the remedy cost. For more information about vendor policy visit our website 
                For any inquiries email  contact@fortuneauction360.com 
               
                
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
    
             <img src="https://i.imgur.com/JAXTYOG.png" alt="Image Loading">
    
    </div>
            `
                ,
                subject: '[VENDOR ACCPETED] TERMS & CONDITION OF A FORTUNE AUCTION VENDOR',
                text: 'You have Been Approved As A vendor',
                "from": {
                    "name": "Benedict Okolie",
                    "email": "bokolie@fortuneauction360.com"
                },
                "to": [
                    {
                        "name": firstname,
                        "email": email
                    },
                ],
                "bcc": [
                    {
                        "name": "Benedict",
                        "email": "bokolie@fortuneauction360.com"
                    },
                ]
            };

            sendpulse.smtpSendMail(answerGetter, email2);
        })

        await client.query('update users set vendor=$2, store=$3, address=$4 where secondname=$1', [userId, "true", store, address])

        return "done"



    }

    async rejectVend(userId, usName) {
        await client.query('delete from vendreq where id=$1', [userId])
        await client.query('update users set vendor=$2 where secondname=$1', [usName, null])

        return "done"
    }

    async deleteReqPro(userId) {
        await client.query('delete from vendpro where id=$1', [userId])
        return "done"
    }
}


export default new User();

