
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
    async createUser(newUser){
        const allUsers = await client.query('select * from users');
        let users = allUsers.rows
        const userExist = users.some(n => n.email == newUser.email)
        const username = users.some(n => n.secondname == newUser.secondname)

        if( Object.keys(newUser).length <= 1) {
            return "true"
        } else if (userExist) {
            return "email"
        }
        else if (username) {
            return "email2"
        }
        else {
            let values = Object.values(newUser)     
            
            let results = 
            `INSERT INTO users
             (firstname,secondname,email,phone,password,userprofile,address,userId,usertype,isadmin, age) VALUES
             ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) RETURNING * 
            `

             let inserts = [newUser.firstname,newUser.secondname ,newUser.email,newUser.phone,newUser.password,newUser.userprofile,newUser.address,newUser.userId,newUser.usertype, newUser.isadmin, newUser.age]
             
             await client.query(results, inserts, (err) => {
                 if(err) {
                     console.log(err)
                 }
             })

             let rezult = await client.query('select * from users where email=$1', [newUser.email])
            
             return rezult.rows
        }
     }

    async logiUser(userInfo) {
        const Alluser = await client.query('select * from users');
        const users = Alluser.rows
        let userExist = users.some(n => n.secondname == userInfo.email)
        if (userExist) {
            let fullInfo = await client.query('select * from users where secondname=$1', [userInfo.email]);
           if(fullInfo.rows[0].password == userInfo.password) {
                return fullInfo.rows
           } else {
            
               return "dont match"
           }           
            
        } else {
            return "no"
        }
    }

   async allUsers() {
        const allUsers = await client.query('select * from users');
        return allUsers.rows
    }

    async frontUsers() {
        const allwinners = await client.query('select * from publish');
        return allwinners.rows
    }

    async oneUser(userId) {
        const allUsers = await client.query('select * from users');
        let idExist = allUsers.rows.some(n => n.id == userId)
        if(idExist) {
            const userDetails = await client.query('select * from users where id=$1', [userId])
            return userDetails.rows
        } else {
            return 'no'
        }
    }
}


export default new User();

