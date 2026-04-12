import { fetch } from "node-fetch";

/** Simulate backend API endpoints for research and analytics */
export const runResearch = async () => {
  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
  const rand = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
    // Simulate multi‑step processing
  await delay(800);
  const now = new Date().toISOString();
  const timestamps = Array.from({length: 12}, (_, i) => {
    const t = new Date(Date.now() - (11 - i) * 5 * 60 * 1000);
    return t.toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"});
  });

  const normalize = (v: number) => {
    const min = 0, max = 100;
    return Math.max(min, Math.min(max, ((v - min) / (max - min)) * 100));
  };

  // 1️⃣ Topic Intelligence (Model 2)
  const topicData = {
    time: timestamps,
    hate_speech: normalize(rand(20, 80)),
    misinformation: normalize(rand(15, 70)),
    scams: normalize(rand(10, 60)),
    normal: normalize(100 - (rand(20, 80) + rand(15, 70) + rand(10, 60))),
  };

  // 2️⃣ Anomaly Detection (Model 3)
  const anomalyData = {
    activity: timestamps.map(() => rand(0, 100)),
    anomaly_points: Array.from({length: 3}, () => ({
      time: timestamps[Math.floor(Math.random() * timestamps.length)],
      severity: normalize(rand(70, 100)),
    })),
    severity: normalize(rand(30, 100)),
  };

  // 3️⃣ Coordination Network (Model 5)
  const graphData = {
    nodes: Array.from({length: 8}, (_, i) => ({
      id: `n${i}`,
      risk_score: normalize(rand(20, 90)),
    })),
    edges: [
      {source: "n0", target: "n1"},
      {source: "n1", target: "n2"},
      {source: "n2", target: "n3"},
      {source: "n3", target: "n4"},
      {source: "n4", target: "n5"},
      {source: "n5", target: "n6"},
      {source: "n6", target: "n7"},
      {source: "n7", target: "n0"},
    ],
    clusters: [0, 0, 1, 1, 2, 2, 2, 2],
  };

  // 4️⃣ Forecast Engine (Model 4)
  const forecastData = {
    actual: Array.from({length: 7}, (_, i) => rand(300, 900)),
    predicted: Array.from({length: 7}, (_, i) => Math.min(1000, rand(300, 900) * 1.1)),
    confidence_band: [
      ...Array.from({length: 7}, () => rand(0, 50)),
    ],
  };

  // 5️⃣ Risk Distribution (Multi‑model output)
  const riskDistribution = {
    toxicity: normalize(rand(40, 90)),
    harassment: normalize(rand(30, 80)),
    misinformation: normalize(rand(20, 70)),
    trust: normalize(100 - rand(20, 80)),
  };

  // 6️⃣ Explanation (Model 6 – RAG)
  const explanation = `Based on the latest data, there has been a ${rand(5, 30)}% increase in ${[
    "hate‑speech",
    "misinformation",
    "scam activity"
  ][Math.floor(Math.random() * 3)] + " detected. The system flagged ${rand(1, 3)} clusters as high‑risk and recommends tightening moderation thresholds. Confidence in this assessment is ${normalize(rand(70, 95))}%.`;

  // Return all payloads as a single object
  return {
    topic_intelligence: topicData,
    anomaly_detection: anomalyData,
    coordination_network: graphData,
    forecast: forecastData,
    risk_distribution: riskDistribution,
    explanation: explanation,
  };
};

export const getTopicIntelligence = async () => fetch("/api/topic-intelligence").then(r => r.json());
export const getAnomalyDetection = async () => fetch("/api/anomaly-detection").then(r => r.json());
export const getCoordinationNetwork = async () => fetch("/api/graph-network").then(r => r.json());
export const getForecast = async () => fetch("/api/forecast").then(r => r.json());
export const getRiskDistribution = async () => fetch("/api/risk-distribution").then(r => r.json());
export const getExplanation = async () => fetch("/api/explanation").then(r => r.json());