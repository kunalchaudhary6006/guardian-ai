export const api = {
  // Mock endpoints that will be used by frontend components
  // These simulate calls to actual AI model services
  topicIntelligence: async () => {
    // Simulate fetching topic clustering data
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          time: Array.from({length: 12}, (_, i) => new Date(Date.now() - (12 - i) * 60 * 60 * 1000).toISOString()),
          hate_speech: [45, 48, 52, 48, 55, 60, 65, 68, 70, 67, 69, 72],
          misinformation: [30, 32, 35, 38, 34, 36, 40, 42, 41, 39, 40, 42],
          scams: [10, 12, 15, 18, 20, 22, 22, 25, 23, 21, 24, 23],
          normal: [100 - i for i in [45,48,52,48,55,60,65,68,67,69,70,72]] // placeholder
        });
      }, 500);
    });
  },

  anomalyDetection: async () => {
    // Simulate anomaly detection results
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          activity: Array.from({length: 12}, (_, i) => 40 + Math.sin(i) * 20),
          anomaly_points: [false, false, true, false, false, false, false, false, false, false, false, false],
          severity: [10, 15, 85, 12, 18, 20, 15, 10, 15, 12, 18, 14]
        });
      }, 500);
    });
  },

  graphNetwork: async () => {
    // Simulate graph network data
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          nodes: [
            {id: 'user_1', risk_score: 78},
            {id: 'user_2', risk_score: 92},
            {id: 'user_3', risk_score: 65},
            {id: 'user_4', risk_score: 88},
            {id: 'user_5', risk_score: 45}
          ],
          edges: [
            {source: 'user_1', target: 'user_2'},
            {source: 'user_2', target: 'user_3'},
            {source: 'user_3', target: 'user_4'},
            {source: 'user_4', target: 'user_5'},
            {source: 'user_5', target: 'user_1'}
          ],
          clusters: [1, 1, 2, 2, 1]
        });
      }, 500);
    });
  },

  forecast: async () => {
    // Simulate forecast data
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          actual: [450, 480, 420, 500, 580, 650, 720],
          forecast: [460, 490, 430, 510, 610, 700, 750],
          confidence_band: [440, 480, 410, 500, 590, 640, 730]
        });
      }, 500);
    });
  },

  riskDistribution: async () => {
    // Simulate risk distribution data
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          toxicity: 72,
          harassment: 65,
          misinformation: 58,
          trust: 81
        });
      }, 500);
    });
  },

  explanation: async (query: string) => {
    // Simulate RAG explanation generation
    return new Promise(resolve => {
      setTimeout(() => {
        const responses = [
          "Risk increase detected due to spike in hate speech clusters. Recommendation: Increase monitoring thresholds.",
          "No significant anomalies detected. System operating normally.",
          "Bot network activity identified across multiple platforms. Recommendation: Block associated IPs.",
          "Unusual traffic patterns suggest potential coordinated attack. Suggested action: Activate DDoS mitigation."
        ];
        const response = responses[Math.floor(Math.random() * responses.length)];
        resolve({
          explanation: response,
          confidence: Math.floor(Math.random() * 30) + 70,
          trend: "Increasing" // Simulate trend direction
        });
      }, 800);
    });
  }
};