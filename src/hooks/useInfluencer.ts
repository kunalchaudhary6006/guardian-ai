import { useState, useEffect, useRef } from 'react';
import { fetchInfluencer, Influencer } from '@/api/influencerApi';

export function useInfluencer(id: string) {
  const [influencer, setInfluencer] = useState<Influencer | null>(null);
  const [loading, setLoading] = useState(false);
  const [riskScore, setRiskScore] = useState<number | null>(null);
  const [riskLevel, setRiskLevel] = useState<'Low' | 'Medium' | 'High'>('Low');
  const [monitoringActive, setMonitoringActive] = useState(false);
  const intervalRef = useRef<any>(null);

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

  useEffect(() => {
    if (!influencer || !monitoringActive) return;
    
    intervalRef.current = setInterval(() => {
      const delta = (Math.random() - 0.5) * 5;
      setRiskScore(prev => {
        const newScore = Math.max(0, Math.min(100, (prev || 85) + delta));
        if (newScore >= 90) setRiskLevel('Low');
        else if (newScore >= 70) setRiskLevel('Medium');
        else setRiskLevel('High');
        return newScore;
      });
    }, 5000);

    return () => clearInterval(intervalRef.current);
  }, [influencer, monitoringActive]);

  const toggleMonitoring = () => {
    setMonitoringActive(!monitoringActive);
  };

  return {
    influencer,
    loading,
    riskScore,
    riskLevel,
    monitorActive: monitoringActive,
    fetchInfluencer: loadInfluencer,
    toggleMonitoring,
  };
}