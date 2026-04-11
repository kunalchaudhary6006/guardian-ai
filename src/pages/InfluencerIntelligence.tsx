"use client";

import React, { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import InfluencerInput from '@/components/Influencer/InfluencerInput';
import InfluencerProfile from '@/components/Influencer/InfluencerProfile';
import SafetyIndex from '@/components/Influencer/SafetyIndex';
import RiskBreakdown from '@/components/Influencer/RiskBreakdown';
import TrendMonitoring from '@/components/Influencer/TrendMonitoring';
import AIInsights from '@/components/Influencer/AIInsights';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { ShieldCheck, TrendingUp, FileText } from 'lucide-react';
import { toast } from 'sonner';

export default function InfluencerIntelligence() {
  const [influencer, setInfluencer] = useState<any>(null);
  const [isVerifying, setIsVerifying] = useState(false);
  const [monitoringActive, setMonitoringActive] = useState(false);
  const [riskScore, setRiskScore] = useState<number>(85);
  const [riskLevel, setRiskLevel] = useState<'Low' | 'Medium' | 'High'>('Low');

  const handleVerify = async () => {
    setIsVerifying(true);
    toast.loading('AI is analyzing the profile...');
    
    setTimeout(() => {
      toast.dismiss();
      toast.success('Influencer verification complete!');
      setIsVerifying(false);
      
      setInfluencer({
        name: 'David Kim',
        handle: '@davidkim',
        followers: '2.5M',
        engagement: '4.8%',
        authenticity: 92,
        breakdown: {
          content: 88,
          audience: 85,
          alignment: 90,
          violations: 2,
          network: 78
        },
        insights: [
          'Content quality is high with consistent brand alignment over the past 6 months.',
          'Audience demographics match target market profile (18-34 tech-savvy users).',
          'Past brand collaborations show 4.2x average ROI.'
        ]
      });
      setRiskScore(88);
      setRiskLevel('Low');
    }, 2000);
  };

  const toggleMonitoring = () => {
    setMonitoringActive(!monitoringActive);
    toast.info(monitoringActive ? 'Monitoring paused' : 'Continuous monitoring enabled');
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-black text-white uppercase tracking-tighter flex items-center gap-3">
            <ShieldCheck className="text-blue-500" size={32} /> Influencer Intelligence
          </h1>
          <p className="text-slate-400 text-sm mt-1">Verify, analyze, and monitor creators for safe brand collaborations.</p>
        </div>
        <div className="flex gap-3">
          <Button 
            variant="outline" 
            className="rounded-2xl border-[#1E293B] bg-[#0F172A] text-white hover:bg-[#1E293B] gap-2 h-11 px-6"
          >
            <TrendingUp size={18} /> Compare
          </Button>
          <Button 
            variant="outline" 
            className="rounded-2xl border-[#1E293B] bg-[#0F172A] text-white hover:bg-[#1E293B] gap-2 h-11"
          >
            <FileText size={18} /> Export Report
          </Button>
        </div>
      </div>

      <div className="space-y-8">
        <InfluencerInput 
          onVerify={handleVerify} 
          isVerifying={isVerifying} 
        />

        {influencer && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <InfluencerProfile data={influencer} />
              <SafetyIndex score={riskScore} risk={riskLevel} />
              <RiskBreakdown data={influencer} />
            </div>

            <div className="space-y-8">
              <TrendMonitoring data={influencer} />
              <AIInsights insights={influencer.insights} />
            </div>
          </div>
        )}

        <Card className="border-[#1E293B] bg-[#0F172A] rounded-3xl shadow-xl">
          <CardHeader className="p-8 border-b border-[#1E293B]">
            <CardTitle className="text-white text-sm uppercase tracking-widest">Monitoring Controls</CardTitle>
          </CardHeader>
          <CardContent className="p-8 space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="monitor-toggle" className="text-xs text-slate-400">
                Monitor Continuously
              </Label>
              <Switch 
                id="monitor-toggle" 
                checked={monitoringActive} 
                onCheckedChange={toggleMonitoring} 
              />
            </div>
            <p className="text-[10px] text-slate-500">
              When active, the system will re-evaluate risk every few seconds and push real-time alerts.
            </p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}