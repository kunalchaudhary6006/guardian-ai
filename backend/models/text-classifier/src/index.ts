import express from 'express';
import { classifyText } from './classifier';
import { env } from '../../config';

const app = express();
app.use(express.json());

app.post('/predict', async (req, res) => {
  const { text } = req.body;
  const result = await classifyText(text);
  res.json(result);
});

app.listen(3004, () => console.log('Text Classifier running on port 3004'));