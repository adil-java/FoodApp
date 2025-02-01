import dotenv from "dotenv"
dotenv.config({path:"./.env"})
import { app } from "./app.js";
import { connection } from "./db/index.js";
connection()
.then(()=>
{

    const port = process.env.PORT;
    app.get("/",(req,res)=>{
        res.send("HELLO WORLD")
    })
    
    app.listen(port ,()=>{
        console.log(`Server Listing at : ${port}`)
    })
})
.catch((e)=>{
    console.log("Error in DB:",e)
})