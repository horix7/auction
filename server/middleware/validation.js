import Joi from 'joi';
    

export default {
    
    schemas:{   UserSchema:Joi.object().keys({
                            email: Joi.string().email().required(),
                            firstname: Joi.string().trim().required(), 
                            secondname: Joi.string().trim().required(),
                            address: Joi.string().trim().required(),
                            phone: Joi.number(),
                            nationalid: Joi.number(),
                            othername: Joi.string().trim(),
                            passporturl: Joi.string().trim(),
                            password: Joi.string().min(5).required(),
                            usertype: Joi.string().valid(['user','candidate']),
                            isAdmin: Joi.boolean()
                            }).options({abortEarly : false}),

                            UpdateUser:Joi.object().keys({
                                email: Joi.string().email().trim(),
                                firstName: Joi.string().trim(), 
                                lastName: Joi.string().trim(),
                                address: Joi.string().trim(),
                                phoneNumber: Joi.number(),
                                otherName: Joi.string().trim(),
                                passporturl: Joi.string().trim(),
                                userName: Joi.string().trim(),
                                password: Joi.string().trim().min(5),
                                userType: Joi.string().trim().valid(['user','candidate']),
                                isAdmin: Joi.boolean()
                                }).options({abortEarly : false})
             
                                   },

             inputsValids:(schema)=>{
                return (req,res,next)=>{
                Joi.validate(req.body,schema, (err, results) => {
                    if(err){
                        res.status(400).json({
                            "status": 400,
                            "message": `solve this  ${err}`
                        })
                    }
                    else{
                          next();
                    }
                });
            }
         }
}

