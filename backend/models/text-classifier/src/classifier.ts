import { Client } from 'pg';
import { config } from '../../config';

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

export async function classifyText(text: string) {
  const result = await client.query(
    'SELECT risk_score, category FROM predictions WHERE query = $1',
    [text]
  );
  return {
    category: result.rows[0]?.category || 'Unknown',
    risk_score: result.rows[0]?.risk_score || 0,
    confidence: result.rows[0]?.confidence || 0,
  };
}