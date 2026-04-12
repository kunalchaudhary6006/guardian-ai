"use client";

import React, { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, ShieldCheck, Zap, TrendingUp, AlertTriangle, FileText, X, Activity } from "lucide-react";
import TopicIntelligenceGraph from "@/components/Research/TopicIntelligenceGraph";
import AnomalyDetectionGraph from "@/components/Research/AnomalyDetectionGraph";
import CoordinationNetworkGraph from "@/components/Research/CoordinationNetworkGraph";
import ForecastGraph from "@/components/Research/ForecastGraph";
import RiskDistributionGraph from "@/components/Research/RiskDistributionGraph";
import AIExplanationPanel from "@/components/Research/AIExplanationPanel";
import { cn } from "@/lib/utils";

export default function ResearchAnalytics() {
  const [isRunning, setIsRunning] = useState(false);
  const [data, setData] = useState<any>(null);

  const startResearch = async () => {
    setIsRunning(true);
    const result = await fetch("/api/run-research"); // mock endpoint could be added later
    setData(result);
    toast.success("Research pipeline executed.");
    setIsRunning(false);
  };

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 bg-[#0F172A] p-6 rounded-[2.5rem] border border-[#1E293B] shadow-xl">
        <div>
          <h1 className="text-3xl font-black text-white uppercase tracking-tighter flex items-center gap-3">
            <Zap className="text-indigo-400" size={32} /> Research & Analytics Hub
          </h1>
          <p className="text-slate-400 text-sm mt-1">Live AI‑driven intelligence dashboard</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" onClick={() => setIsRunning(false)} className="rounded-xl border-[#1E293B] text-white hover:bg-[#1E293B] gap-2 h-11 px-6">
            Stop
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-8">
        {/* Live Status Banner */}
        <div className="mb-8 p-4 bg-[#0F172A] border border-[#1E293B] rounded-[2.5rem] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-2 bg-[#020617] rounded-full overflow-hidden">
              <div className="h-2 bg-[#00BFA5]" style={{ width: "60%" }} />
            </div>
            <span className="text-[10px] text-slate-500 uppercase tracking-widest">Live Monitoring</span>
          </div>
          <Badge className="bg-blue-600/10 text-blue-400 border-blue-500/20">Live</Badge>
        </div>

        {/* Run Research Button */}
        <Button           onClick={handleRunResearch}           disabled={isRunning}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl gap-2 h-12 font-bold shadow-lg shadow-blue-900/20"
        >
          {isRunning ? "Running…" : "Run Research"}
        </Button>
      </div>

      {/* Graph Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Topic Intelligence */}
        <TopicIntelligenceGraph />

        {/* Anomaly Detection */}
        <AnomalyDetectionGraph />

        {/* Coordination Network */}
        <CoordinationNetworkGraph />

        {/* Forecast Graph */}
        <ForecastGraph />

        {/* Risk Distribution */}
        <RiskDistributionGraph />

        {/* AI Explanation Panel */}
        <AIExplanationPanel data={data} />
      </div>

      {/* Filters & Data Sources */}
      <div className="space-y-8">
        <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-2">Filter Data</p>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <Label className="text-white">Date Range</Label>
            <Input placeholder="Last 24h" className="bg-[#020617] border-[#1E293B] text-white rounded-xl" />
          </div>
          <div className="flex items-center gap-2">
            <Label className="text-white">Region</Label>
            <Select defaultValue="global">
              <SelectTrigger className="bg-[#020617] border-[#1E293B] text-white rounded-xl">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-[#0F172A] border-[#1E293B] text-white">
                <SelectItem>Global</SelectItem>
                <SelectItem>North America</SelectItem>
                <SelectItem>Europe</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* System Health */}
        <Card className="border-[#1E293B] bg-[#0F172A] rounded-[2.5rem] shadow-xl">
          <CardHeader className="p-8 border-b border-[#1E293B]">
            <CardTitle className="text-white text-sm uppercase tracking-widest">System Health</CardTitle>
          </CardHeader>
          <CardContent className="p-4 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-slate-500 font-bold uppercase">Model Accuracy</span>
              <span className="text-[10px] text-slate-400">94%</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-slate-500 font-bold uppercase">Latency</span>
              <span className="text-[10px] text-slate-400">120 ms</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}