
import product from '../models/auctionData';
import tokens from '../helpers/userTokens'

/*

*/
class userController {
    
    createProduct(req, res) {
        product.createAproduct(req.body)
        .then(results => {
            let newUSerInfo = results   

            return res.status(201).json({
                "status": 201,
                "data": [
                    
                   {
                        "porduct": newUSerInfo[newUSerInfo.length - 1]
                    }
                ]
               });
    })
    }

    bidProduct(req, res) {
        let tokenId = tokens.decode(req.token).id
        let userData = tokens.decode(req.token)

        product.bid(parseInt(tokenId), req.body, userData)
       .then(resi => {
            const {id,createdby , time, productid} =  resi[resi.length - 1]
            return res.status(200).json({
                "status": 200,
                "data": [
                   {
                        "bid": {
                            id: id,
                            createdBy: createdby,
                            createdTime: time,
                            product: productid
                        }
                    }
                ]
               });
       })
    }
    allBids(req, res) {
        product.getAllbid()
        .then(results => {
            return res.status(200).json({
                "status": 200,
                "data": results
               });
        })
    
    }

      allBallAuctionsids(req, res) {
        product.allProduct()
        .then(results => {
            return res.status(200).json({
                "status": 200,
                "data": results
               });
        })
    
    }

    activeProdui(req, res) {
        product.activeAcution()
        .then(results => {
            return res.status(200).json({
                "status": 200,
                "data": results
               });
        })
    }

    inactiveProdui(req, res) {
        product.inactiveAuctions()
        .then(results => {
            return res.status(200).json({
                "status": 200,
                "data": results
               });
        })
    }
    
    interested(req, res) {
        let tokenId = tokens.decode(req.token).id
        let userData = tokens.decode(req.token)
        product.interest(tokenId, req.body, userData)
        .then(results => {
            return res.status(200).json({
                "status": 200,
                "data": results
               });
        })
    }

    interestedProducts(req, res) {
        let tokenId = tokens.decode(req.token).id
        product.interestProd(tokenId)
        .then(results => {
           
            return res.status(200).json({
                "status": 200,
                "data": results
               });
        })
    }

    uninterested(req, res) {
        let tokenId = tokens.decode(req.token).id
        product.unintrestePro(tokenId)
        .then(results => {
           
            return res.status(200).json({
                "status": 200,
                "data": results
               });
        })
    }

    oneProd(req, res) {
        let tokenId = tokens.decode(req.token).id
        product.onePro(req.params.id)
        .then(results => {
            return res.status(200).json({
                "status": 200,
                "data": results
               });
        })
    }

    allWinners(req,res) {
        product.winners()
        .then(results => {
            return res.status(200).json({
                status: 200,
                "data": results
            })
        })
    }
    

    publishWin(req,res) {
        product.createWinner(req.body)
        .then(results => {
            return res.status(200).json({
                status: 200,
                "data": results
            })
        })
    }

    deleteProd(req,res) {
        product.deleteAuction(req.params.id)
        .then(results => {
            return res.status(200).json({
                status: 200,
                "data": results
            })
        })
    }

    updateUpcomes(req,res) {
        product.updatePord(req.params.id)
        .then(results => {
            return res.status(200).json({
                status: 200,
                "data": results
            })
        })
    }

    
    chooseWinn(req,res) {
        product.chooseWinner(req.params.id)
        .then(results => {
            return res.status(200).json({
                status: 200,
                "data": 'results'
            })
        })
    }
    
    
    idzz(req,res) {
        product.returnIdz()
        .then(results => {
            return res.status(200).json({
                status: 200,
                "data": results
            })
        })
    }

    forntUsers(req, res) {
        product.frontPro()
        .then(results => {
            return res.status(200).json({
                status: 200,
                "data": results
            })
        })
    }

    changeNull(req, res) {
        product.changeToNull(req.params.id)
        .then(results => {
            return res.status(200).json({
                status: 200,
                "data": results
            })
        })
    }
    

    oneBid(req, res) {
        product.oneBidd(req.params.id)
        .then(results => {
            return res.status(200).json({
                status: 200,
                "data": results
            })
        })
    }

    
    oneIntrest(req, res) {
        product.oneInterest(req.params.id)
        .then(results => {
            return res.status(200).json({
                status: 200,
                "data": results
            })
        })
    }

    allBiidds(req, res) {
        product.allBiidds()
        .then(results => {
            return res.status(200).json({
                status: 200,
                "data": results
            })
        })
    }

    relatesBids(req, res) {
        let tokenId = tokens.decode(req.token).id
        product.bidsRelates(tokenId)

        .then(results => {
            let sendData = []
            results.forEach(n => {
                sendData.push(n.productid)
            })
            return res.status(200).json({
                "status": 200,
                "data": sendData
            })
        })
    }

    makeVendor(req, res) {

        product.approveVendor(req.params.id)
        .then(results => {
            
            return res.status(200).json({
                "status": 200,
                "data": results
            })
        })
    }
    

    chooseTicket(req, res) {

        product.chooseLuckyFortunes(req.params.id)
        .then(results => {
          if(results !== "no") {
                
            return res.status(200).json({
                "status": 200,
                "data": results
            })
          } else {
                
            return res.status(403).json({
                "status": 403,
                "error": "You Cant Choose Winner On this Pro"
            })
          }
        })
    }
}

export default new userController()
