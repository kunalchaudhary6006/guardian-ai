"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useInView } from "react-intersection-observer";
import { Zap } from "lucide-react";

export default function CoordinationNetworkGraph() {
  const [nodes, setNodes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    const fetchGraph = async () => {
      const result = await fetch("/api/graph-network");
      if (!cancelled) {
        setNodes(result);
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
    <Card className="border-[#1E293B] bg-[#0F172A] rounded-[2.5rem] overflow-hidden shadow-xl">
      <CardContent className="p-8">
        <div className="flex items-center justify-between">
          <div className="text-white text-sm uppercase tracking-widest">Coordination Network</div>
          <Badge className="bg-blue-600/10 text-blue-400 border-blue-500/20">Live</Badge>
        </div>
        <div className="space-y-4">
          {nodes.length === 0 ? (
            <div className="text-center py-8 text-slate-400">No network data yet.</div>
          ) : (
            <div className="flex flex-wrap gap-2">
              {nodes.map(node => (
                <div key={node.id} className="flex flex-col items-center justify-center bg-[#020617] border-[#1E293B] rounded-2xl p-3 group hover:border-[#1E293B]/30 transition-all">
                  <div className="w-8 h-8 bg-[#020617] rounded-lg flex items-center justify-center text-[#00BFA5]">
                    <span className="text-[12px] font-bold">{node.id.slice(1)}</span>
                  </div>
                  <span className="text-sm text-slate-400">{node.risk_score.toFixed(0)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}