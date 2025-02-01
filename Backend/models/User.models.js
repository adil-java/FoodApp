import mongoose from "mongoose";
const {Schema} = mongoose;
const userSchema = new Schema({
    username:{
        type:String,
        unique: true,
        required:true,
        lowercase:true
    },
   
    email:{
        type:String,
        unique: true,
        required:true
    },
    password:{
        type:String,
        required:[true,"Password is required"]
    },  
     role:{
        type:String,
        required:true,
        lowercase:true
    }
    
},{
    timestamps:true
}
)
export const User = mongoose.model("User", userSchema)