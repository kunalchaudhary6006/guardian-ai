import { useState, useEffect, useRef } from 'react';

export interface Influencer {
  id: string;
  name: string;
  handle: string;
  followers: string;
  engagement: string;
  authenticity: number;
  riskScore: number;
  riskLevel: 'Low' | 'Medium' | 'High';
  breakdown: {
    content: number;
    audience: number;
    alignment: number;
    violations: number;
    network: number;
  };
  insights: string[];
}

export function useInfluencer(id: string) {
  const [influencer, setInfluencer] = useState<Influencer | null>(null);
  const [loading, setLoading] = useState(false);
  const [riskScore, setRiskScore] = useState<number>(85);
  const [riskLevel, setRiskLevel] = useState<'Low' | 'Medium' | 'High'>('Low');
  const [monitoringActive, setMonitoringActive] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Load the initial profile (Mock Data)
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const mockData: Influencer = {
        id: "1",
        name: "David Kim",
        handle: "@davidkim_tech",
        followers: "1.2M",
        engagement: "4.8%",
        authenticity: 94,
        riskScore: 85,
        riskLevel: 'Low',
        breakdown: {
          content: 92,
          audience: 88,
          alignment: 95,
          violations: 0,
          network: 12
        },
        insights: [
          "High audience quality detected with minimal bot activity.",
          "Content alignment matches brand safety guidelines for tech sector.",
          "No historical policy violations found in the last 24 months."
        ]
      };
      setInfluencer(mockData);
      setRiskScore(mockData.riskScore);
      setRiskLevel(mockData.riskLevel);
      setLoading(false);
    }, 1000);
  }, [id]);

  // Function to start/stop monitoring
  const toggleMonitoring = () => {
    if (monitoringActive) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setMonitoringActive(false);
    } else {
      setMonitoringActive(true);
      intervalRef.current = setInterval(() => {
        setRiskScore(prev => {
          const delta = (Math.random() - 0.5) * 2;
          const newScore = Math.max(0, Math.min(100, prev + delta));
          
          if (newScore >= 90) setRiskLevel('Low');
          else if (newScore >= 70) setRiskLevel('Medium');
          else setRiskLevel('High');
          
          return newScore;
        });
      }, 3000);
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return {
    influencer,
    loading,
    riskScore,
    riskLevel,
    monitorActive: monitoringActive,
    toggleMonitoring,
  };
}