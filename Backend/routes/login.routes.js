import { Router } from "express";
import { User } from "../models/User.models.js";
// import { Secure } from "../secure/index.js";
import bcrypt from "bcryptjs"
const router = Router();
router.post("/login", async (req, res) => {
  const { username, password} = req.body;
  
  try {
  
    const userInfo = await User.findOne({ username });
    const isMatch = await bcrypt.compare(password, userInfo.password);

    if (!userInfo) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    // Check if the provided password matches the stored password
    if (!isMatch) {
      return res.status(401).json({ success: false, message: "Invalid password" });
    }
    
   if(userInfo.role){
    res.json({ success: true, message: "Login successful",role:userInfo.role}) }
    else {
      res.json({ success: false, message: "Login not successful"}) }
      
    } 
  catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

export default router;
