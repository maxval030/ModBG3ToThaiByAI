import { MongoClient, type Db } from "mongodb";
import mongoose from "mongoose";
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env"
  );
}

export const DOS2TranslateClient = async(): Promise<Db> => {
    const client = await MongoClient.connect(MONGODB_URI);
   
    return  client.db("DOS2Transalte")
}

export const mongooseConnect = async () => {
  await mongoose.connect(MONGODB_URI, {
    dbName: "DOS2Transalte",
  });
  
}

export const mongooseDisconnect = async () => {
  await mongoose.disconnect();
}
