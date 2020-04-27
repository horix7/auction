import express from "express"
import userRouter from './routes/userAuthRoutes'
import productRouter from './routes/productRoutes'
import parser  from 'body-parser';
import  sha256 from 'js-sha256';


const app = express()
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

app.use(express.static('public'))


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });

app.use('/api/v1', userRouter)
app.use('/api/v1', productRouter)


app.post("/hash",  (req,res) => {

let string = [req.body.timestamp, req.body.txref, req.body.amount, req.body.currency,  req.body.payment_account].join("")
  console.log(string)

let createHash = (num) => {

    let hash2 = sha256.hmac.create('tSPZT7R189wYRqX9Qp8DFuTNOUq3a9IbkKNr2RjwFwGnPudHbLfA4zugj6TVcoBtlWpJl0mEtcixEA4gIyTyng12');
    hash2.update(num)
    return hash2.hex()
    
    }

  res.status(200).json({
    data: createHash(string)
})

})


app.post("/hash1",  (req,res) => {

let string = [ req.body.timestamp, req.body.txref].join("")


let createHash = (num12) => {

    let hash2 = sha256.hmac.create("tSPZT7R189wYRqX9Qp8DFuTNOUq3a9IbkKNr2RjwFwGnPudHbLfA4zugj6TVcoBtlWpJl0mEtcixEA4gIyTyng12");
    hash2.update(num12)
    return hash2.hex()
    
    }

  res.status(200).json({
    data: createHash(string)
})

})


app.post("/hash2",  (req,res) => {

  
let string = [req.body.timestamp, req.body.txref, req.body.amount, req.body.currency,  req.body.creditaccount].join("")
  
  let createHash = (num12) => {
  
      let hash2 = sha256.hmac.create("tSPZT7R189wYRqX9Qp8DFuTNOUq3a9IbkKNr2RjwFwGnPudHbLfA4zugj6TVcoBtlWpJl0mEtcixEA4gIyTyng12");
      hash2.update(num12)
      return hash2.hex()
      
      }
  
    res.status(200).json({
      data: createHash(string)
  })
  
  })

app.get('/', (req,res) => {
    res.status(200).json({
        data: "welcome on the home page now"
    })
})

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`workining on port ${port} ......`)
})

