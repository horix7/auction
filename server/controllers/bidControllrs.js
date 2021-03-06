
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

    YourBids(req, res) {
        let tokenId = tokens.decode(req.token).id

        product.YourBids(parseInt(tokenId))
            .then(resi => {
                if (resi.length >= 1) {
                    return res.status(200).json({
                        "status": 200,
                        "data": [...new Set(resi.map(n => n.product))]
                    });
                } else {
                    return res.status(300).json({
                        "status": 300,
                        "data": []
                    });
                }
            })
    }

    bidProduct(req, res) {
        let tokenId = tokens.decode(req.token).id
        let country = tokens.decode(req.token).country

        let userData = tokens.decode(req.token)

        product.bid(parseInt(tokenId), req.body, userData, country)
            .then(resi => {
                return res.status(200).json({
                    "status": 200,
                    "data": resi
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

    allWinners(req, res) {
        product.winners()
            .then(results => {
                return res.status(200).json({
                    status: 200,
                    "data": results
                })
            })
    }


    publishWin(req, res) {
        product.createWinner(req.body)
            .then(results => {
                return res.status(200).json({
                    status: 200,
                    "data": results
                })
            })
    }

    deleteProd(req, res) {
        product.deleteAuction(req.params.id, req.params.status)
            .then(results => {
                return res.status(200).json({
                    status: 200,
                    "data": results
                })
            })
    }

    prozz(req, res) {
        product.prozz()
            .then(results => {
                return res.status(200).json({
                    status: 200,
                    "data": results
                })
            })
    }

    updateUpcomes(req, res) {
        product.updatePord(req.params.id)
            .then(results => {
                return res.status(200).json({
                    status: 200,
                    "data": results
                })
            })
    }


    chooseWinn(req, res) {
        product.chooseWinner(req.params.id)
            .then(results => {
                return res.status(200).json({
                    status: 200,
                    "data": 'results'
                })
            })
    }


    idzz(req, res) {
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


    rejectVend(req, res) {

        product.rejectVend(req.params.id, req.body.user)
            .then(results => {

                return res.status(200).json({
                    "status": 200,
                    "data": results
                })
            })
    }
    deleteReqPro(req, res) {

        product.deleteReqPro(req.params.id)
            .then(results => {

                return res.status(200).json({
                    "status": 200,
                    "data": results
                })
            })
    }

    ChosenOne(req, res) {

        product.ChosenOne()
            .then(results => {

                return res.status(200).json({
                    "status": 200,
                    "data": results
                })
            })
    }



    allRePro(req, res) {

        product.allRePro()
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
                if (results !== "no") {

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

    getRefundOnes(req, res) {

        product.getRefundOnes()
            .then(results => {
                return res.status(200).json({
                    "status": 200,
                    "error": results
                })
            })
    }

    proForVend(req, res) {

        product.createProVend(req.body)
            .then(results => {


                return res.status(200).json({
                    "status": 200,
                    "error": results
                })
            })
    }


}

export default new userController()
