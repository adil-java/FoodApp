import mongoose from "mongoose";
// import { DB_name } from "../constant.js";

export const connection = async () => {
  try {
    const str = process.env.MONGODB_STR;
    const DB_name = process.env.DB_name;

    // Connect to MongoDB
    await mongoose.connect(`${str}/${DB_name}`
     
    );
    console.log("DB is connected!");

    const fetchData = mongoose.connection.db.collection("foodDatas");

    const data = await fetchData.find({}).toArray();
    const catData = mongoose.connection.db.collection("catagories");
    const cat = await catData.find({}).toArray();
    global.data= data;
    global.cat= cat;


  } catch (error) {

  }
};
