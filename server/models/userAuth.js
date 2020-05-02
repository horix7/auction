
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
             (firstname,secondname,email,phone,password,address,userId,isadmin, age, gender) VALUES
             ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING * 
            `

            let dateForNow = new Date(new Date().getTime()).toString().split(' ').slice(1,4).join(' ')

             let inserts = [newUser.firstname,newUser.secondname ,newUser.email,newUser.phone,newUser.password,newUser.address,dateForNow, newUser.isadmin, newUser.age, newUser.gender]
             
             await client.query(results, inserts)

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

    async todayUsers() {
        let dateForNow = new Date(new Date().getTime()).toString().split(' ').slice(1,4).join(' ')

        const allUsers = await client.query('select * from users where userid=$1', [dateForNow]);
        const allUsers2 = await client.query('select * from users');

        return {
            todaty: allUsers.rowCount,
            allTime: allUsers2.rowCount
        }

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

    async checkUserEmail(userInfo) {
        const Alluser = await client.query('select * from users');
        const users = Alluser.rows
        let userExist = users.some(n => n.email == userInfo.email)
        if (userExist) {
            let fullInfo = await client.query('select * from users where email=$1', [userInfo.email]);
           if(fullInfo.rows[0].age == userInfo.age) {
                return fullInfo.rows
           } else {
            
               return "dont match"
           }           
            
        } else {
            return "no"
        }
    }

    async updatePassW(info) {
        await client.query('update users set password=$2 where email=$1', [info.email, info.pass])
        return "worked"
    }

}


export default new User();

