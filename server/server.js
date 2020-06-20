import express from "express"
import userRouter from './routes/userAuthRoutes'
import productRouter from './routes/productRoutes'
import parser  from 'body-parser';
import multer from 'multer';


const app = express()
app.use("/uploads",express.static('uploads'))


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, './uploads');
    },
    filename: function (req, file, cb) {
    cb(null, new Date().getTime() + '-' + file.originalname);
    }
})

const upload = multer({storage: storage})

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(express.static('public'))


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,PATCH");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });

app.use('/api/v1', userRouter)
app.use('/api/v1', productRouter)



app.get('/', (req,res) => {
    res.status(200).json({
        data: "welcome on the home page now"
    })
})


app.post('/image', upload.single("pro"), (req,res) => {
    
    res.status(200).json({
        imageUrl: "uploads/"+req.file.filename
    })
})


const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`workining on port ${port} ......`)
})


