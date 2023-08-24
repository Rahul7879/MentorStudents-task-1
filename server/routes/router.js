const express = require("express");
const router = new express.Router();
const User = require("../models/User.js")


router.get("/get" , async (req, res) => {
    try {
        console.log("okay");
        res.send("Working fine By Rahul"); 
    } catch (e) {
        res.status(500).send(e.message); 
    }
});

router.post('/register', async (req,res)=>{
    try{
        console.log("okay", req.body.name);
        const user = {name : req.body.name , email: req.body.email};
        const newUser = new User(user);
        await newUser.save();
        return res.status(200).json({msg:'SignUp succesfull'})
      
    }catch(e){
        console.log(" not okay");
      return res.status(500).json({e: e.message});
    }
})

module.exports = router;


