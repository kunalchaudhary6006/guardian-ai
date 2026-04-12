"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label as LabelComponent } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useInfluencer } from "@/hooks/useInfluencer";
import TopicIntelligenceChart from "@/components/Research/TopicIntelligenceChart";
import AnomalyDetectionChart from "@/components/Research/AnomalyDetectionChart";
import CoordinationNetworkChart from "@/components/Research/CoordinationNetworkChart";
import ForecastChart from "@/components/Research/ForecastChart";
import RiskDistributionChart from "@/components/Research/RiskDistributionChart";
import ExplanationPanel from "@/components/Research/ExplanationPanel";

export default function ResearchConsole() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [selectedMode, setSelectedMode] = useState("quick");
  const [externalData, setExternalData] = useState<any[]>([]);
  const [urlInput, setUrlInput] = useState("");
  const [isUrlInputOpen, setIsUrlInputOpen] = useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const fetchAllData = async () => {
    setIsAnalyzing(true);
    try {
      // Simulate fetching all data sources
      const [topicData, anomalyData, graphData, forecastData, riskData] = await Promise.all([
        fetchTopicIntelligence(),
        fetchAnomalyDetection(),
        fetchGraphNetwork(),
        fetchForecast(),
        fetchRiskDistribution()
      ]);

      // Update global state or trigger updates in child components
      // In a real app, this would update context or state management
      console.log("Fetched all research data:", { topicData, anomalyData, graphData, forecastData, riskData });

      // Trigger UI updates in child components (they should listen to state changes)
      // For this mock implementation, we'll just log and let components handle their own updates
    } catch (err) {
      console.error("Error fetching research data:", err);
      toast.error("Failed to fetch research data");
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleAddUrl = () => {
    if (!urlInput.trim()) return;
    try {
      new URL(urlInput);
      setExternalData(prev => [...prev, { name: urlInput, type: 'url' }]);
      setUrlInput("");
      setIsUrlInputOpen(false);
      toast.success(`URL "${urlInput}" added to research context`);
    } catch (e) {
      toast.error("Please enter a valid URL");
    }
  };

  const removeData = (index: number) => {
    setExternalData(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <Card className="border-[#1E293B] bg-[#0F172A] rounded-[2.5rem] overflow-hidden shadow-2xl">
      <CardContent className="p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-black text-white uppercase tracking-widest">Research & Analytics Console</h2>
          <Badge className="bg-blue-600/10 text-blue-400 border-[#1E293B]/20">Live System</Badge>
        </div>

        {/* Research Input Section */}
        <div className="space-y-4">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Research Input</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="research-input" className="text-white">Research Query</Label>
              <Input
                id="research-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a research question..."
                className="bg-[#020617] border-[#1E293B] text-white rounded-xl h-12"
                placeholder="e.g., Why did hate speech spike last weekend?"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="external-input" className="text-white">External Data</Label>
              <div className="flex flex-col">
                <Input
                  type="text"
                  placeholder="Enter URL or file name"
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  className="bg-[#020617] border-[#1E293B] text-white rounded-xl h-10"
                />
                <Button 
                  onClick={() => handleAddUrl()} 
                  className="mt-1 bg-[#00BFA5] hover:bg-[#00BFA5]/90 text-white rounded-xl h-10"
                >
                  Add
                </Button>
              </div>
            </div>
          </grid>

          <div className="space-y-4">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Research Mode</p>
            <div className="flex gap-2">
              {[['quick', 'deep', 'predictive'] as const].map(mode => (
                <button
                  key={mode}
                  onClick={() => setSelectedMode(mode)}
                  className={cn(
                    "flex-1 py-1.5 rounded-lg transition-all text-[10px] font-black uppercase tracking-widest",
                    selectedMode === mode ? "bg-blue-600 text-white" : "text-slate-500 hover:text-slate-300"
                  )}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>
        </div>

        <Button 
          onClick={() => setIsAnalyzing(true)} 
          disabled={isAnalyzing || !input} 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl h-12 font-bold gap-2 shadow-lg shadow-blue-900/20"
        >
          {isAnalyzing ? "Analyzing..." : "Run Research"}
        </Button>
      </CardContent>
    </Card>
  );
}