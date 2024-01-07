import User from "../model/userMode.js"
import express from "express"
import data from "../data.js"
import expressAsyncHandler from "express-async-handler"
import bcrypt from "bcryptjs"

import generateToken from "../util.js"

var router = express.Router()

router.get("/seed" , expressAsyncHandler(async(req ,res) => {
    var product = await User.insertMany(data.users)

    res.send(product)
}))

router.post("/signin" , async(req ,res) => {

    var userData = await User.findOne({email : req.body.email})

    console.log("userData ====>" , userData)
    console.log("userData ====>" , userData)

    if(userData){
        if(bcrypt.compareSync(req.body.password , userData.password)){
           res.send({
            name : userData.name,
            email : userData.email,
            password : userData.password,
            isAdmin : userData.isAdmin,
            token : generateToken(userData)
           })
        }
        return ;
    }else{
        res.status(404).send({massage : "invalid Email and Password"})
    }

    
})



router.post("/register" , async(req , res) => {
    var userDate = new User({
        name : req.body.name ,
        email : req.body.email,
        password : bcrypt.hashSync(req.body.password , 8)
    })

    var saveUserDate = await userDate.save()

    if(saveUserDate){
    res.send({
        name : saveUserDate.name,
        email : saveUserDate.email,
        password : saveUserDate.password,
        isAdmin : saveUserDate.isAdmin,
        token : generateToken(saveUserDate)
       })
    }else{
        res.status(404).send({message : "user did not create , please try again"})
    }


})


export default router