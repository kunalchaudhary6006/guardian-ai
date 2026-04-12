"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function RiskDistributionGraph() {
  const data = [
    { label: "Toxicity", value: 72, color: "bg-rose-500" },
    { label: "Harassment", value: 65, color: "bg-amber-500" },
    { label: "Misinformation", value: 58, color: "bg-amber-500" },
    { label: "Trust", value: 81, color: "bg-emerald-500" },
  ];

  return (
    <Card className="border-[#1E293B] bg-[#0F172A] rounded-2xl shadow-sm">
      <CardContent className="p-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {data.map(item => (
            <div key={item.label} className="flex items-center justify-between bg-[#020617] border-[#1E293B] rounded-2xl p-4">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold text-slate-300">{item.label}</span>
                <span className="text-xs text-slate-400 uppercase tracking-widest">{item.value}</span>
              </div>
              <div className="w-full bg-[#020617] h-1 rounded-full overflow-hidden">
                <div className={`h-full ${item.color.replace("bg-", "bg-")}`} style={{ width: `${item.value}%` }} />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}