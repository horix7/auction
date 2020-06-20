import bids from '../controllers/bidControllrs'
import express from 'express';
import validation from '../middleware/validation'
import isAdmin from '../middleware/isAdmin'
import checkToken from '../middleware/authentication'


const router = express.Router()


router.post("/product", checkToken, bids.createProduct)
router.get("/product", checkToken, bids.allBallAuctionsids)
router.get("/product/:id", checkToken, bids.oneProd)
router.get("/active", checkToken, bids.activeProdui)
router.get("/inactive", checkToken, bids.inactiveProdui)
router.post("/interest", checkToken, bids.interested)
router.get("/userpro", checkToken, bids.interestedProducts)
router.post("/status/:id", bids.updateUpcomes)
router.post("/bid",  checkToken, bids.bidProduct)
router.get("/allbids", checkToken, isAdmin, bids.allBids)
router.get("/winners", checkToken, bids.allWinners)
router.post("/publish", checkToken, isAdmin, bids.publishWin)
router.get("/onebid/:id", checkToken, bids.oneBid)
router.get("/oneint/:id", checkToken, isAdmin, bids.oneIntrest)
router.post("/cancel/:id", checkToken, bids.deleteProd)
router.get("/bidss/", checkToken, isAdmin, bids.allBiidds)
router.get("/idz", checkToken, isAdmin, bids.idzz)
router.post("/choose/:id", checkToken, isAdmin, bids.chooseWinn)
router.get("/uninterested", checkToken, bids.uninterested)
router.get("/frontpro",bids.forntUsers)
router.get("/vrpro",checkToken, isAdmin,bids.allRePro)
router.post("/offside/:id",checkToken, bids.changeNull)
router.get("/relates", checkToken, bids.relatesBids)
router.put("/makevend/:id", checkToken, isAdmin, bids.makeVendor)
router.put("/rejectVend/:id", checkToken, isAdmin, bids.rejectVend)

router.patch("/choosetik/:id", checkToken, isAdmin, bids.chooseTicket)
router.post("/vendorPro/", checkToken, bids.proForVend)
router.get("/Chosenone/", checkToken,bids.ChosenOne)
router.get("/deletereq/:id", checkToken, isAdmin,bids.deleteReqPro)
router.get("/bidzid/", checkToken,bids.YourBids)
router.get("/refunem/", checkToken, isAdmin ,bids.getRefundOnes)






export  default router 






