import express from 'express';
import { Pool } from 'pg';
import { client as redisClient } from '../../database/redis';
import { getModelEndpoint } from './modelRegistry';
import { validateRequest } from './validation';
import { env } from '../../config';

const app = express();
app.use(json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.get('/models', async (req, res) => {
  const result = await pool.query('SELECT * FROM models');
  res.json(result.rows);
});

app.post('/predict', async (req, res) => {
  const { modelName, data } = req.body;
  const model = await getModelEndpoint(modelName);
  if (!model) return res.status(404).json({ error: 'Model not found' });

  const validation = await validateRequest(data, model.schema);
  if (validation.error) return res.status(400).json(validation.error);

  const response = await fetch(`${model.endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  const result = await response.json();
  res.json(result);
});

app.listen(3003, () => console.log('AI Orchestrator running on port 3003'));