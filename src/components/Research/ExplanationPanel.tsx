"use client";

import React, { useState, useEffect } from "react";
import { fetchExplanation } from "@/api";
import { Badge } from "@/components/ui/badge";

const ExplanationPanel = () => {
  const [explanation, setExplanation] = useState("");
  const [confidence, setConfidence] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState(false);

  const fetchExplanationHandler = async () => {
    try {
      const response = await fetchExplanation("Why is risk increasing?");
      setExplanation(response.explanation);
      setConfidence(response.confidence);
    } catch (err) {
      setError(true);
      console.error("Error fetching explanation:", err);
    } finally {
      setIsGenerating(false);
    }
  };

  useEffect(() => {
    fetchExplanationHandler();
  }, []);

  return (
    <div className="p-6 bg-[#020617] border border-[#1E293B] rounded-2xl">
      <div className="flex items-center gap-3 mb-4">
        <Badge className="bg-[#00BFA5]/10 text-[#00BFA5] border-[#00BFA5]/20 text-[8px] font-black uppercase tracking-widest">
          {confidence}%
        </Badge>
      </div>
      <h4 className="text-sm font-bold text-white mb-2 uppercase tracking-widest">AI Explanation</h4>
      <p className="text-slate-300 leading-relaxed">{explanation}</p>
      {error && <p className="text-rose-400">Failed to load explanation</p>}
      {isGenerating && <p className="text-slate-500">Generating insights...</p>}
      <div className="mt-4">
        <Button 
          onClick={() => fetchExplanationHandler()} 
          className="w-full bg-[#00BFA5] hover:bg-[#00BFA5]/90 text-white rounded-2xl h-10 font-bold uppercase tracking-widest gap-2"
        >
          {isGenerating ? "Generating..." : "Regenerate Insight"}
        </Button>
      </div>
    </div>
  );
};

export default ExplanationPanel;