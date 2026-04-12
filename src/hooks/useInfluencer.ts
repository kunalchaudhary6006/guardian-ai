import { useState, useEffect } from 'react';
import { fetchInfluencer, Influencer } from '@/api/influencerApi';

export function useInfluencer(id: string) {
  const [influencer, setInfluencer] = useState<Influencer | null>(null);
  const [loading, setLoading] = useState(false);
  const [riskUpdating, setRiskUpdating] = useState(false);
  const [riskScore, setRiskScore] = useState<number | null>(null);
  const [riskLevel, setRiskLevel] = useState<'Low' | 'Medium' | 'High'>('Low');
  const [monitoringActive, setMonitoringActive] = useState(false);

  // Load the initial profile
  const loadInfluencer = async () => {
    setLoading(true);
    try {
      const data = await fetchInfluencer(id);
      setInfluencer(data);
      setRiskScore(data.riskScore);
      setRiskLevel(data.riskLevel);
    } catch (err) {
      console.error('Failed to load influencer', err);
    } finally {
      setLoading(false);
    }
  };

  // Simulate continuous risk monitoring (e.g., every 5 seconds)
  useEffect(() => {
    if (!influencer) return;
    const interval = setInterval(() => {
      // In a real system this would query the backend for updated risk
      // Here we just simulate a slight random walk for demo purposes
      const delta = (Math.random() - 0.5) * 5;
      const newScore = Math.max(0, Math.min(100, riskScore! + delta));
      setRiskScore(newScore);
      // Simple heuristic to change risk level
      if (newScore >= 90) setRiskLevel('Low');
      else if (newScore >= 70) setRiskLevel('Medium');
      else setRiskLevel('High');
    }, 5000);
    return () => clearInterval(interval);
  }, [influencer, riskScore]);

  // Function to start/stop monitoring
  const toggleMonitoring = () => {
    setMonitoringActive(!monitoringActive);
    if (monitoringActive) {
      clearInterval(intervalId.current);
    } else {
      const intervalId = setInterval(() => {
        // Same logic as above for demo purposes
        const delta = (Math.random() - 0.5) * 5;
        setRiskScore(prev => Math.max(0, Math.min(100, prev + delta)));
      }, 5000);
      intervalId.current = intervalId;
    }
  };

  // Cleanup on unmount  useEffect(() => {
    return () => clearInterval(intervalId.current);
  }, []);

  // Return everything the UI needs
  return {
    influencer,
    loading,
    riskScore,
    riskLevel,
    monitorActive: monitoringActive,
    fetchInfluencer: loadInfluencer,
    toggleMonitoring,
  };