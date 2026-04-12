"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RefreshCw } from "lucide-react";

export default function AIExplanationPanel({ data }: { data: any }) {
  const [explanation, setExplanation] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    const fetchExplanation = async () => {
      const result = await fetch("/api/explanation");
      if (!cancelled) {
        setExplanation(result);
        setLoading(false);
      }
    };
    fetchData?.();
    const interval = setInterval(fetchData, 5000);
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, []);

  if (loading) return <div className="p-4 text-slate-500">Loading…</div>;

  return (
    <Card className="border-[#1E293B] bg-[#0F172A] rounded-3xl shadow-xl">
      <CardHeader className="p-8 border-b border-[#1E293B] bg-[#020617]/50">
        <CardTitle className="text-white text-lg flex items-center gap-2">
          <Zap className="text-indigo-400" size={20} /> AI Explanation
        </CardTitle>
        <Badge className="bg-indigo-600/10 text-indigo-400 border-indigo-500/20">Live</Badge>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        <div className="text-sm text-slate-400 leading-relaxed">
          {explanation}
        </div>
        <div className="flex items-center gap-2">
          <Badge className="bg-emerald-500/10 text-emerald-400">Confidence: {Math.round((data?.confidence ?? 0) * 100)}%</Badge>
        </div>
      </CardContent>
    </Card>
  );
}