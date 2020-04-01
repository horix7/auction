import bids from '../controllers/bidControllrs'
import express from 'express';
import validation from '../middleware/validation'
import isAdmin from '../middleware/isAdmin'
import checkToken from '../middleware/authentication'

const router = express.Router()

router.post("/product", checkToken, isAdmin, bids.createProduct)
router.get("/product", checkToken, bids.allBallAuctionsids)
router.get("/product/:id", checkToken, bids.oneProd)
router.get("/active", checkToken, bids.activeProdui)
router.get("/inactive", checkToken, bids.inactiveProdui)
router.post("/interest", checkToken, bids.interested)
router.get("/userpro", checkToken, bids.interestedProducts)
router.post("/bid",  checkToken, bids.bidProduct)
router.get("/allbids", checkToken, isAdmin, bids.allBids)
router.get("/winners", checkToken, isAdmin, bids.allWinners)
router.post("/publish", checkToken, isAdmin, bids.publishWin)

router.get("/uninterested", checkToken, bids.uninterested)




export  default router 