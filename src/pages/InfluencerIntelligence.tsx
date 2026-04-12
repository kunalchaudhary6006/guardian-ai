import React, { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import InfluencerInput from "@/components/Influencer/InfluencerInput";
import InfluencerProfile from "@/components/Influencer/InfluencerProfile";
import SafetyIndex from "@/components/Influencer/SafetyIndex";
import RiskBreakdown from "@/components/Influencer/RiskBreakdown";
import TrendMonitoring from "@/components/Influencer/TrendMonitoring";
import AIInsights from "@/components/Influencer/AIInsights";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useInfluencer } from "@/hooks/useInfluencer";
import { ShieldCheck, TrendingUp, FileText } from "lucide-react";

export default function InfluencerIntelligence() {
  const [influencer, setInfluencer] = useState<any>(null);
  const [isVerifying, setIsVerifying] = useState(false);
  const [monitoringActive, setMonitoringActive] = useState(false);

  const { influencer: fetchedInfluencer, loading, riskScore, riskLevel, monitorActive, toggleMonitoring } =
    useInfluencer("1"); // replace with dynamic ID if needed

  const handleVerify = () => {
    if (!fetchedInfluencer) return;
    setIsVerifying(true);
    toast.loading("AI is analyzing the profile...");
    setTimeout(() => {
      setIsVerifying(false);
      toast.success("Influencer verification complete!");
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
            onClick={() => toast.info("Exporting report...")}
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
          monitorActive={monitorActive}
          toggleMonitoring={toggleMonitoring}
        />

        {/* When we have data, show the profile & insights */}
        {fetchedInfluencer && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile & Basic Stats */}
            <div className="lg:col-span-2 space-y-8">
              <InfluencerProfile data={fetchedInfluencer} />
              <SafetyIndex score={riskScore} risk={riskLevel} />
              <RiskBreakdown data={fetchedInfluencer?.breakdown} />
            </div>

            {/* Trend & Monitoring */}
            <TrendMonitoring data={fetchedInfluencer} />
            <AIInsights insights={fetchedInfluencer?.insights} />
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}