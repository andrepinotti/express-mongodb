import mongoose, { mongo } from "mongoose";
import dotenv from 'dotenv' 
dotenv.config()

async function conectDataBase(){
    mongoose.connect(process.env.DB_CONNECTION_STRING);
    return mongoose.connection;
}

export default conectDataBase