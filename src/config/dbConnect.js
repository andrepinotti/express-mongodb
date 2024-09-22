import mongoose, { mongo } from "mongoose";

async function conectDataBase(){
    mongoose.connect("mongodb+srv://admin:admdba@cluster0.dv9d4.mongodb.net/library?retryWrites=true&w=majority&appName=Cluster0");

    return mongoose.connection;
}

export default conectDataBase