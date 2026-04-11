import express from 'express';
import jwt from 'jsonwebtoken';
import { Pool } from 'pg';
import { MongoClient } from 'mongodb';
import { Redis } from 'redis';
import { verifyToken, authorize } from './authz';
import { env } from '../../config';

const app = express();
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const mongoClient = new MongoClient(process.env.MONGO_URL!);
await mongoClient.connect();
const db = client.db('guardian');

const redis = new Redis(process.env.REDIS_URL!);

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
  const user = result.rows[0];
  if (!user || !(await verifyPassword(user.password, password))) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  const token = jwt.sign({ sub: user.id, role: user.role }, process.env.JWT_SECRET!, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  res.json({ token, role: user.role });
});

app.post('/register', async (req, res) => {
  const { name, email, password, role } = req.body;
  const hashedPassword = await hashPassword(password);
  try {
    await pool.query(
      'INSERT INTO users (name, email, password, role) VALUES ($1, $2, $3, $4)',
      [name, email, hashedPassword, role]
    );
    res.status(201).json({ message: 'User created' });
  } catch (err) {
    res.status(400).json({ error: 'Email already exists' });
  }
});

app.get('/profile/:id', authorize, async (req, res) => {
  const { id } = req.params;
  const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
  res.json(result.rows[0]);
});

app.listen(3001, () => console.log('Auth Service running on port 3001'));