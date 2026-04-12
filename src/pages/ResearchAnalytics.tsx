"use client";

import React, { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Calendar, Database, ShieldCheck, Clock } from "lucide-react";
import { toast } from "sonner";
import TopicIntelligenceChart from "@/components/Research/TopicIntelligenceChart";
import InsightSummary from "@/components/Research/InsightSummary";
import PlatformHealth from "@/components/Research/PlatformHealth";
import TrendsAnomalies from "@/components/Research/TrendsAnomalies";
import TopicClusters from "@/components/Research/TopicClusters";
import HealthBreakdown from "@/components/Research/HealthBreakdown";
import PredictiveInsights from "@/components/Research/PredictiveInsights";
import AIRecommendations from "@/components/Research/AIRecommendations";
import ReportModal from "@/components/Research/ReportModal";

export default function ResearchAnalytics() {
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleRunResearch = () => {
    if (!input) return;
    setIsAnalyzing(true);
    toast.loading("Initializing AI research pipeline...");
    
    // Simulate research process
    setTimeout(() => {
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
          <p className="text-slate-400 text-sm mt-1">AI-Powered Research & Analytics</p>
        </div>
        <div className="flex gap-3">
          <Button             variant="outline" 
            onClick={() => setReportModalOpen(true)}             className="rounded-2xl border-[#1E293B] bg-[#0F172A] text-white hover:bg-[#1E293B] gap-2 h-11 px-6"
          >
            <FileText size={18} /> Generate AI Report
          </Button>
          <Button 
            onClick={handleRunResearch}
            disabled={isAnalyzing}
            className="bg-blue-600 hover:bg-blue-700 rounded-2xl gap-2 h-11 shadow-lg shadow-blue-900/20"
          >
            {isAnalyzing ? <RefreshCw className="animate-spin" size={18} /> : <Play size={18} fill="currentColor" />}
            Run Research
          </Button>
        </div>
      </div>

      <div className="space-y-8">
        {/* Segment 1: AI Research Console */}
        <ResearchConsole />

        {/* Segment 2: AI Insight Summary */}
        <InsightSummary />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - 2/3 width */}
          <div className="lg:col-span-2 space-y-8">
            <TrendsAnomalies />
            <TopicClusters />
            <HealthBreakdown />
          </div>

          {/* Right Column - 1/3 width */}
          <div className="space-y-8">
            <PlatformHealth />
            <PredictiveInsights />
            <AIRecommendations />
            <ReportModal open={reportModalOpen} onOpenChange={setReportModalOpen} />
          </div>
        </div>
      </div>

      {/* Modals */}
      <ReportModal open={reportModalOpen} onOpenChange={setReportModalOpen} />
    </DashboardLayout>
  );
}