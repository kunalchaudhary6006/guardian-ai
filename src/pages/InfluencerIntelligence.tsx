"use client";

import React, { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, ShieldCheck, Search, FileText, TrendingUp, AlertTriangle } from 'lucide-react';
import InfluencerInput from '@/components/Influencer/InfluencerInput';
import InfluencerProfile from '@/components/Influencer/InfluencerProfile';
import SafetyIndex from '@/components/Influencer/SafetyIndex';
import RiskBreakdown from '@/components/Influencer/RiskBreakdown';
import TrendMonitoring from '@/components/Influencer/TrendMonitoring';
import AIInsights from '@/components/Influencer/AIInsights';
import { toast } from 'sonner';

export default function InfluencerIntelligence() {
  const [influencer, setInfluencer] = useState<any>(null);
  const [isVerifying, setIsVerifying] = useState(false);

  const handleVerify = (input: string) => {
    setIsVerifying(true);
    toast.loading("AI is analyzing influencer authenticity and safety...");
    
    // Simulate AI Verification Process
    setTimeout(() => {
      toast.dismiss();
      const mockData = {
        name: input.startsWith('@') ? input.substring(1) : input,
        handle: input.startsWith('@') ? input : `@${input}`,
        followers: "1.2M",
        engagement: "4.8%",
        authenticity: 92,
        safetyScore: 87,
        riskLevel: 'Low',
        breakdown: {
          content: 94,
          audience: 88,
          alignment: 91,
          violations: 0,
          network: 12
        },
        insights: [
          "High engagement indicates strong audience trust",
          "No recent controversial content detected",
          "Strong brand alignment with tech/lifestyle",
          "Stable growth pattern over 6 months"
        ]
      };
      setInfluencer(mockData);
      setIsVerifying(false);
      toast.success("Influencer verified successfully!");
    }, 2000);
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-black text-white uppercase tracking-tighter flex items-center gap-3">
            <Users className="text-blue-500" size={32} /> Influencer Intelligence
          </h1>
          <p className="text-slate-400 text-sm mt-1">Verify, analyze, and monitor creators for safe brand collaborations.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="rounded-2xl border-[#1E293B] bg-[#0F172A] text-white hover:bg-[#1E293B] gap-2">
            <TrendingUp size={18} /> Compare
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 rounded-2xl gap-2 font-bold">
            <FileText size={18} /> Export Report
          </Button>
        </div>
      </div>

      <div className="space-y-8">
        <InfluencerInput onVerify={handleVerify} isVerifying={isVerifying} />

        {influencer && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="lg:col-span-2 space-y-8">
              <InfluencerProfile data={influencer} />
              <TrendMonitoring data={influencer} />
              <RiskBreakdown data={influencer} />
            </div>
            <div className="space-y-8">
              <SafetyIndex score={influencer.safetyScore} risk={influencer.riskLevel} />
              <AIInsights insights={influencer.insights} />
              
              <Card className="border-[#1E293B] bg-[#0F172A] rounded-3xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-white font-bold flex items-center gap-2">
                    <ShieldCheck className="text-emerald-500" size={18} /> Monitoring
                  </h4>
                  <Badge className="bg-emerald-500/10 text-emerald-400">Active</Badge>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Real-time alerts enabled for new violations, suspicious activity, and risk score fluctuations.
                </p>
                <Button variant="outline" className="w-full mt-4 border-[#1E293B] text-white rounded-xl">
                  Disable Monitoring
                </Button>
              </Card>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}

import { Card } from '@/components/ui/card';