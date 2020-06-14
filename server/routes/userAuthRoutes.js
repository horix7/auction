import user from '../controllers/userCotrnolers'
import express from 'express';
import validation from '../middleware/validation'
import isAdmin from '../middleware/isAdmin'
import checkToken from '../middleware/authentication'

const router = express.Router()

router.post("/auth/signup",validation.inputsValids(validation.schemas.UserSchema), user.userSignUp)
router.post("/auth/signin", user.userSignIn)
router.get("/allusers", checkToken, isAdmin, user.getAllUsers)
router.post("/checkuse", user.userCheck)
router.post("/reqvend", user.vendorReq)
router.put("/updatepass", user.updatePass)
router.get("/useraccount/:id",checkToken, user.getOneUser)
router.get("/frontwin", user.allWinners)
router.get("/dataday/", checkToken, isAdmin, user.userNums)
router.put("/propic/", checkToken, user.updateProfile)
router.get("/payment/", checkToken,isAdmin, user.generateToken)
router.get("/paytoken/", checkToken, user.getToken)





export  default router 

