import mongoose from "mongoose";

const conectarDB = async()=>{
    try {
        const db = await mongoose.connect(process.env.MONGO_URI);

        const url = `${db.connection.host}:${db.connection.port}`;
        console.log(`MongoDb conectado a : ${url}`);
    } catch (error) {
        console.log(`error: ${error}`);
        process.exit(1);
    } 
}

export default conectarDB;