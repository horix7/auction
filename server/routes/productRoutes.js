import bids from '../controllers/bidControllrs'
import express from 'express';
import validation from '../middleware/validation'
import isAdmin from '../middleware/isAdmin'
import checkToken from '../middleware/authentication'

const router = express.Router()

router.post("/product", checkToken, isAdmin, bids.createProduct)
router.get("/product", checkToken, isAdmin, bids.allBallAuctionsids)
router.get("/active", checkToken, isAdmin, bids.activeProdui)
router.get("/inactive", checkToken, isAdmin, bids.inactiveProdui)

router.post("/bid",  checkToken, bids.bidProduct)
router.get("/allbids", checkToken, isAdmin, bids.allBids)



export  default router 