import { Router } from "express";
const router= Router();

router.post("/data",(req,res)=>{
    try {
        res.status(200).send([global.data,global.cat]);
    
    } catch (error) {
        console.error(error.message);
        }
})
export default router;