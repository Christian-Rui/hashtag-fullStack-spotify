import { MongoClient } from "mongodb";
import "dotenv/config";

const { URL_ENV } = process.env;

const client = new MongoClient(URL_ENV );
console.log(URL_ENV);

export const db = client.db("spotifyAula");