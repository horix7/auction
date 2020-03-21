
import product from '../models/auctionData';
import tokens from '../helpers/userTokens'

/*

*/
class userController {
    
    createProduct(req, res) {
        product.createAproduct(req.body)
        .then(results => {
            let newUSerInfo = results   

            const {id,name , description, starts, ends} =  newUSerInfo[newUSerInfo.length - 1]
            return res.status(201).json({
                "status": 201,
                "data": [
                    
                   {
                        "porduct": {
                            name: name,
                            description: description,
                            starts: starts,
                            ends: ends,
                        }
                    }
                ]
               });
    })
    }

    bidProduct(req, res) {
        let tokenId = tokens.decode(req.token).id
        product.bid(parseInt(tokenId), req.body)
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

    
}

export default new userController()
