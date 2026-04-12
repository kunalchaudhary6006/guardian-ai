"use client";

import React, { useState } from "react";
import TopicIntelligenceChart from "@/components/Research/TopicIntelligenceChart";
import AnomalyDetectionChart from "@/components/Research/AnomalyDetectionChart";
import CoordinationNetworkChart from "@/components/Research/CoordinationNetworkChart";
import ForecastChart from "@/components/Research/ForecastChart";
import RiskDistributionChart from "@/components/Research/RiskDistributionChart";
import ExplanationPanel from "@/components/Research/ExplanationPanel";
import ResearchConsole from "@/components/Research/ResearchConsole";

export default function ResearchAnalytics() {
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleRunResearch = () => {
    if (!input) return;
    setIsAnalyzing(true);
    toast.loading("Initializing AI research pipeline...");
    
    // Simulate research process    setTimeout(() => {
      toast.dismiss();
      toast.success("Research completed! Data updated across all charts.");
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-black text-white uppercase tracking-tighter flex items-center gap-3">
            <ShieldCheck className="text-blue-500" size={32} /> Research & Analytics Hub
          </h1>
          <p className="text-slate-400 text-sm mt-1">AI-Powered Real-Time Intelligence</h1>
        </div>
        <div className="flex gap-3">
          <Button 
            variant="outline" 
            onClick={() => setReportModalOpen(true)} 
            className="rounded-2xl border-[#1E293B] bg-[#0F172A] text-white hover:bg-[#1E293B] gap-2 h-11 px-6"
          >
            <FileText size={18} /> Generate Report
          </Button>
          <Button 
            onClick={() => handleRunResearch()}
            disabled={isAnalyzing}
            className="bg-blue-600 hover:bg-blue-700 rounded-2xl gap-2 h-11 shadow-lg shadow-blue-900/20"
          >
            {isAnalyzing ? <RefreshCw className="animate-spin" size={18} /> : <Play size={18} fill="currentColor" />}
            Run Research          </Button>
        </div>
      </div>

      <div className="space-y-8">
        {/* Research Console */}
        <ResearchConsole 
          onRun={handleRunResearch} 
          isAnalyzing={isAnalyzing} 
        />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - 2/3 width */}
          <div className="lg:col-span-2 space-y-8">
            <TopicIntelligenceChart />
            <AnomalyDetectionChart />
            <CoordinationNetworkChart />
            <ForecastChart />
            <RiskDistributionChart />
          </div>

          {/* Right Column - 1/3 width */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">System Intelligence</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-[#020617] border border-[#1E293B] rounded-2xl text-center">
                  <p className="text-[10px] text-slate-500 font-bold uppercase mb-1">Active Models</p>
                  <p className="text-xl font-black text-white">6 / 6 Online</p>
                </div>
                <div className="p-4 bg-[#020617] border border-[#1E293B] rounded-2xl text-center">
                  <p className="text-[10px] text-slate-500 font-bold uppercase mb-1">Last Sync</p>
                  <p className="text-xs font-bold text-white">Just now</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <ExplanationPanel />
            <ResearchConsole />
          </div>
        </div>
      </div>

      {/* Modals */}
      <div className="mt-8">
        <div className="space-y-8">
          <div className="lg:col-span-2">
            <Card className="border-[#1E293B] bg-[#0F172A] rounded-3xl overflow-hidden">
              <CardHeader className="p-8 border-b border-[#1E293B]">
                <CardTitle className="text-white text-lg flex items-center gap-2">
                  <ShieldCheck className="text-blue-400" size={20} /> Research Findings                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="space-y-4">
                  <p className="text-[10px] text-slate-500 leading-relaxed">
                    {input ? "Research completed. Review findings in the panels above." : "Run research to generate insights."}
                  </p>
                </div>
                <Button 
                  onClick={() => setIsAnalyzing(false)} 
                  variant="outline" 
                  className="w-full border-[#1E293B] text-white rounded-xl text-[10px] font-black uppercase tracking-widest gap-2"
                >
                  Close
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}