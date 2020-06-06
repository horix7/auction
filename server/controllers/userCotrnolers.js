
import account from '../models/userAuth';
import tokens from '../helpers/userTokens'

/*

*/
class userController {
    
    userSignUp(req, res) {
        account.createUser(req.body)
        .then(results => {
         if (results == "email") {
            return res.status(409).json({
                "status": 409,
                "error":"email you provide is already registered "
            });
        }  else if (results == "email2") {
            return res.status(409).json({
                "status": 409,
                "error":"username is already registered  "
            });
        }
        else { 
            let newUSerInfo = results   

            const {id,firstname , secondname, email, phone,isadmin, age} =  newUSerInfo[0]
            return res.status(201).json({
                "status": 201,
                "data": [
                    
                   {
                        "token": tokens.encode({isadmin, firstname,secondname,id,email,phone, age}),
                        "details": {
                            username: secondname,
                            id: id,
                            isAdmin: isadmin,
                            email: email
                        }
                       
                    }
                ]
               });
        }
    
    }
        )
        
        
    
    }

    userSignIn(req, res) {
       account.logiUser(req.body)
       .then(resi => {
        if(resi == "no") {
            return res.status(403).json({
                "status": 403,
                "error":"you are not registered in the system "
            });
        } else if (resi == "dont match") {
            return res.status(403).json({
                "status": 403,
                "error":"your password does not match your UserName"
            }); 
        }
        else {
            const {id,firstname , secondname, email, phone,userprofile,isadmin,age,vendor, password} =  resi[0]
            return res.status(200).json({
                "status": 200,
                "data": [
                    
                   {
                        "token": tokens.encode({isadmin, firstname,secondname,id,email,phone,vendor, age}),
                        "details": {
                            username: secondname,
                            id: id,
                            isAdmin: isadmin,
                            email: email,
                            vendor: vendor
                        }
                    }
                ]
               });
        }
       })
    }
    getAllUsers(req, res) {
        account.allUsers(req.body)
        .then(results => {
            let displayResults = []
            results.forEach(n => {
                let {id,firstname,email,phone,userprofile,isAdmin, age , gender, userid} = n
                let registeredDate = userid
                displayResults.push({id,firstname,email,phone,userprofile,isAdmin,age,gender,registeredDate} )
            })
            return res.status(200).json({
                "status": 200,
                "data": displayResults
               });
        })
    
    }
    getOneUser(req, res) {
        if(parseInt(req.params.id).toString() == "NaN") {
            return res.status(400).json({
                "status": 400,
                "message": "the id you specified is not valid "
            }); 
        }
       account.oneUser(parseInt(req.params.id).toString())
       .then(results => {
           if(results == 'no') {
            return res.status(403).json({
                "status": 403,
                "error":"the user you are reffering does not exist"
            }); 
           } else {
            const {id,firstname , secondname, email, phone,userprofile,isadmin, gender,age } =  results[0]
            return res.status(200).json({
                "status": 200,
                "data": {
                    id: id,
                    firstname: firstname,
                    secondname: secondname,
                    email: email,
                    phone: phone,
                    passportUrl: userprofile || "",
                    isAdmin: isadmin || false,
                    age: age,
                    gender: gender
                }
            }); 
           }
       })
    }


    allWinners(req,res) {
        account.frontUsers()
        .then(results => {
            return res.status(200).json({
                status: 200,
                data: results
            })
        })
    }

    
    userNums(req,res) {
        account.todayUsers()
        .then(results => {
            return res.status(200).json({
                status: 200,
                data: results
            })
        })
    }

    
    userCheck(req, res) {
        account.checkUserEmail(req.body)
        .then(resi => {
         if(resi == "no" || resi == "dont match") {
             return res.status(403).json({
                 "status": 403,
                 "error":"you Provided Invalid Information"
             }); 
         }
         else {
            return res.status(200).json({
                "status": 200,
                "data": resi
            }); 
         }
        })
     }


     updatePass(req,res) {
         account.updatePassW(req.body)
         .then(resi => {
            return res.status(200).json({
                "status": 200,
                "data": resi
            });
         })
     }

     vendorReq(req,res) {
        account.reqVend(req.body)
        .then(resi => {
           return res.status(200).json({
               "status": 200,
               "data": resi
           });
        })
    }
}

export default new userController()
