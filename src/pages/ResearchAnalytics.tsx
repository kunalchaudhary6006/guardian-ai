"use client";

import React, { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Button } from '@/components/ui/button';
import { FileText, Download, Calendar, Database, ShieldCheck, Clock } from 'lucide-react';
import { toast } from 'sonner';

// New Research Components
import ResearchConsole from '@/components/Research/ResearchConsole';
import InsightSummary from '@/components/Research/InsightSummary';
import PlatformHealth from '@/components/Research/PlatformHealth';
import TrendsAnomalies from '@/components/Research/TrendsAnomalies';
import TopicClusters from '@/components/Research/TopicClusters';
import HealthBreakdown from '@/components/Research/HealthBreakdown';
import PredictiveInsights from '@/components/Research/PredictiveInsights';
import AIRecommendations from '@/components/Research/AIRecommendations';
import ReportModal from '@/components/Research/ReportModal';

export default function ResearchAnalytics() {
  const [reportModalOpen, setReportModalOpen] = useState(false);

  const handleExport = () => {
    toast.promise(
      new Promise(resolve => setTimeout(resolve, 1500)),
      {
        loading: 'Preparing analytics export...',
        success: 'Analytics report exported successfully',
        error: 'Export failed'
      }
    );
  };

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-black text-white uppercase tracking-tighter flex items-center gap-3">
            <ShieldCheck className="text-blue-500" size={32} /> Research & Analytics Hub
          </h1>
          <p className="text-slate-400 text-sm mt-1">AI-powered investigation console and multi-layered platform intelligence</p>
        </div>
        <div className="flex gap-3">
          <Button 
            variant="outline" 
            onClick={() => setReportModalOpen(true)}
            className="rounded-2xl border-[#1E293B] bg-[#0F172A] text-white hover:bg-[#1E293B] gap-2 h-11 px-6"
          >
            <FileText size={18} /> Generate AI Report
          </Button>
          <Button 
            onClick={handleExport}
            className="bg-blue-600 hover:bg-blue-700 rounded-2xl gap-2 h-11 px-6 shadow-lg shadow-blue-900/20"
          >
            <Download size={18} /> Export Data
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
            {/* Segment 3: Trends & Anomalies */}
            <TrendsAnomalies />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Segment 4: Topic & Risk Clusters */}
              <TopicClusters />
              {/* Segment 5: Community Health Breakdown */}
              <HealthBreakdown />
            </div>
          </div>

          {/* Right Column - 1/3 width */}
          <div className="space-y-8">
            {/* Segment 6: Platform Health & Model Status */}
            <PlatformHealth />
            
            {/* Segment 7: Predictive Insights */}
            <PredictiveInsights />

            {/* Segment 8: AI Recommendations */}
            <AIRecommendations />

            {/* Segment 9: Data Transparency Footer Card */}
            <div className="p-6 bg-[#0F172A] border border-[#1E293B] rounded-3xl">
              <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                <Database size={16} className="text-blue-400" /> Data Transparency
              </h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-500">Active Sources</span>
                  <div className="flex gap-1">
                    {['Text', 'Img', 'Vid', 'Aud'].map(s => (
                      <span key={s} className="text-[8px] font-black bg-blue-600/10 text-blue-400 px-1.5 py-0.5 rounded border border-blue-500/20 uppercase">{s}</span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-500">Coverage</span>
                  <span className="text-xs font-bold text-white">99.9% Real-time</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-500">Last Sync</span>
                  <span className="text-xs font-bold text-emerald-500 flex items-center gap-1">
                    <Clock size={10} /> 2m ago
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <ReportModal open={reportModalOpen} onOpenChange={setReportModalOpen} />
    </DashboardLayout>
  );
}