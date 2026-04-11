import React, { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
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
  const [monitoringActive, setMonitoringActive] = useState(false);

  // Hook that handles fetching & monitoring
  const {
    influencer: fetchedInfluencer,
    loading,
    riskScore,
    riskLevel,
    monitorActive,
    toggleMonitoring,
  } = useInfluencer('1'); // Replace with dynamic ID if you have a selector

  // When the user clicks “Verify Influencer”
  const handleVerify = () => {
    if (!influencer) return;
    setIsVerifying(true);
    toast.loading('AI is analyzing the profile...');
    // The hook already populates `influencer` and risk data;
    // we just wait for the async fetch to finish.
    setTimeout(() => {
      setIsVerifying(false);
      toast.success('Influencer verification complete!');
    }, 2000);
  };

  return (
    <DashboardLayout>
      {/* Header – same as before */}
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
            onClick={() => setIsVerifying(false)} 
            className="rounded-2xl border-[#1E293B] bg-[#0F172A] text-white hover:bg-[#1E293B] gap-2 h-11 px-6"
          >
            <TrendingUp size={18} /> Compare
          </Button>
          <Button 
            variant="outline" 
            onClick={() => toast.info('Exporting report...')}
            className="rounded-2xl border-[#1E293B] bg-[#0F172A] text-white hover:bg-[#1E293B] gap-2 h-11"
          >
            <FileText size={18} /> Export Report
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-8">
        {/* Input Section */}
        <InfluencerInput 
          onVerify={handleVerify} 
          isVerifying={isVerifying} 
          monitorActive={monitoringActive} 
          toggleMonitoring={toggleMonitoring} 
        />

        {/* When we have data, show the profile & insights */}
        {influencer && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile & Basic Stats */}
            <div className="lg:col-span-2 space-y-8">
              <InfluencerProfile data={influencer} />
              <SafetyIndex score={riskScore} risk={riskLevel} />
              <RiskBreakdown data={influencer?.breakdown} />
            </div>

            {/* Trend & Monitoring */}
            <TrendMonitoring data={influencer} />
            <AIInsights insights={influencer?.insights} />
          </div>

          {/* Monitoring Controls */}
          <div className="space-y-8">
            <Card className="border-[#1E293B] bg-[#0F172A] rounded-3xl shadow-xl">
              <CardHeader className="p-8 border-b border-[#1E293B]">
                <CardTitle className="text-white text-sm uppercase tracking-widest">Monitoring Controls</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <Label htmlFor="monitor-toggle" className="text-xs text-slate-400">Enable Continuous Monitoring</Label>
                  <Switch 
                    id="monitor-toggle" 
                    checked={monitorActive} 
                    onCheckedChange={toggleMonitoring} 
                  />
                </div>
                <p className="text-[10px] text-slate-500">
                  When active, the system will re‑evaluate risk every few seconds and push real‑time alerts.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}