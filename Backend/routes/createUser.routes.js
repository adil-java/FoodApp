import { Router } from "express";
import { body, validationResult } from 'express-validator'
import { User } from "../models/User.models.js";
import { Secure } from "../secure/index.js";
import jwt from "jsonwebtoken"
const router =  Router();
let secret;
router.post("/createUser",[body('email',"Error in email").isEmail(),
// password must be at least 5 chars long
body('username',"Error in username").isLength({ min: 5 }),

body('password',"erroer in password").isLength({ min: 5 })],
async(req,res)=>{
    secret = req.body.role
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const securePassword = await Secure(req.body.password);
    try {
       const userInfo =  await User.create({
            username:req.body.username,
            password:securePassword,
            email:req.body.email,
            role:req.body.role
        })
        const data ={
            data:userInfo.id
        }
        const authToken = jwt.sign(data,secret)
        res.json({success:true,authToken:authToken,role:req.body.role})
    } catch (error) {
        console.log(error)
        res.json({success:false})
       
      
    }

})
export default router