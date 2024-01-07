
import express from "express"
import Product from "../model/ProductModel.js"
import data from "../data.js"
import expressAsyncHandler from "express-async-handler"


var productRouter = express.Router()

productRouter.get('/seed' , expressAsyncHandler(async(req , res) => {
    var products = await Product.insertMany(data.products)
    res.send(products)
}))

productRouter.get('/' , expressAsyncHandler(async(req , res) => {
    var product = await Product.find({})
    res.send(product)
}))

productRouter.get('/:id', expressAsyncHandler(async (req, res) => {
    // Use findById to find a single product by ID
    const product = await Product.findById(req.params.id);

    console.log("product ====>" , product)
  
    if (product) {
      res.send(product);
      
    } else {
      res.status(404).send({ message: 'Product not found' });
    }
  }));

export default productRouter