import { MongoClient, type Db } from "mongodb";
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
