import express from "express"
import productRouter from "./router/RouterModel.js"
import user from "./router/userRouter.js"
import mongoose from "mongoose";
import bodyParser from 'body-parser'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : true}))

mongoose.connect('mongodb://127.0.0.1:27017/Websides' , {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected!'));


app.use("/api/products" , productRouter)
app.use("/api" , user)

app.use((err , req , res ,next ) => {
    res.status(5000).send({messsage : err.mess})
  })  

app.listen((5000) , () => console.log("localhost:5000"))