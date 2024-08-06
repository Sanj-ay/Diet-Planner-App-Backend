import {MongoClient} from "mongodb";
import mongoose from "mongoose";
const url = "mongodb://localhost:27017/Keon"
const connectDB = async() => {
    try{
    const mongodb = await mongoose.connect(url)
    console.log("Database created!");
    }catch(err){
        console.error("not created")
    }
}

export default connectDB