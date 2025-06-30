import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();
const client = new MongoClient(process.env.MONGODB_URI);
export async function connect() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoBD", error);
    process.exit(1);
  }
}

export function getCollection(name) {
  return client.db(process.env.MONGODB_DB).collection(name);
}
