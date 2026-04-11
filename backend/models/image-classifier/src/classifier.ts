import { createClient } from 'pexels';
import { config } from '../../config';

const client = createClient(process.env.PEXELS_API_KEY!);

export async function classifyImage(base64Image: string) {
  // In real implementation, send to model endpoint
  // Here mock response
  return {
    category: 'Safe',
    confidence: 95,
    description: 'No explicit content detected',
  };
}