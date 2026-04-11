import express from 'express';
import { classifyImage } from './classifier';
import { env } from '../../config';

const app = express();
app.use(express.json());

app.post('/predict', async (req, res) => {
  const { imageBase64 } = req.body;
  const result = await classifyImage(imageBase64);
  res.json(result);
});

app.listen(3005, () => console.log('Image Classifier running on port 3005'));