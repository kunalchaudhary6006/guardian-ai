import express from 'express';
import { rateLimit } from 'express-rate-limit';
import helmet from 'helmet';
import cors from 'cors';
import { json } from 'body-parser';
import { createProxy } from 'http-proxy-middleware';
import { env } from '../../config';

const app = express();

app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
});

const apiLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 100,
  message: 'Too many requests from this IP, please try again later.',
});

app.use('/api/', apiLimiter);
app.use(json());

// Proxy to microservices
const apiProxy = createProxy({
  target: 'http://guardian-ai-service:80',
  changeOrigin: true,
});

app.use('/api', apiProxy);

app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`API Gateway running on port ${PORT}`));