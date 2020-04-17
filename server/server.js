import express from "express"
import userRouter from './routes/userAuthRoutes'
import productRouter from './routes/productRoutes'
import parser  from 'body-parser';


const app = express()

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());


app.use('/api/v1', userRouter)
app.use('/api/v1', productRouter)

app.get('/', (erq,res) => {
    res.json({
        "message": "welcome to the Auction"
    })
})

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`workining on port ${port} ......`)
})

