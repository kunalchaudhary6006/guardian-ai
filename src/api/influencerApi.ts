import axios from 'axios';

/**
 * Mock API to fetch influencer data by ID.
 * In a real app this would call an external service.
 */
export async function fetchInfluencer(id: string) {
  // Simulate network request
  const response = await axios.get(`https://api.guardian-ai.com/influencers/${id}`);
  return response.data;
}

/* Example response shape:
{
  id: string,
  name: string,
  handle: string,
  followers: number,
  engagement: number,
  authenticity: number,
  breakdown: {
    content: number,
    audience: number,
    alignment: number,
    violations: number,
    network: number
  },
  insights: string[],
}
*/