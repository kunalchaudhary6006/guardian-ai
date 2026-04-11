import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGO_URL);
export async function connectMongo() {
  await client.connect();
  return client.db('guardian');
}

export const mongoClient = client;