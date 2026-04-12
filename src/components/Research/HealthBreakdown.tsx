"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, AlertTriangle, MessageSquare, UserCheck } from 'lucide-react';

export default function HealthBreakdown() {
  // Simulate fetching dynamic data
  const [metrics, setMetrics] = useState<any[]>([
    { label: 'Toxicity', value: 72, color: 'bg-rose-500' },
    { label: 'Harassment', value: 65, color: 'bg-amber-500' },
    { label: 'Misinformation', value: 58, color: 'bg-amber-500' },
    { label: 'Trust Signals', value: 81, color: 'bg-emerald-500' },
  ];

  // Update data every 10 seconds to simulate live data
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => [
        { label: 'Toxicity', value: Math.floor(Math.random() * 30) + 50, color: 'bg-rose-500' },
        { label: 'Harassment', value: Math.floor(Math.random() * 20) + 50, color: 'bg-amber-500' },
        { label: 'Misinformation', value: Math.floor(Math.random() * 20) + 40, color: 'bg-amber-500' },
        { label: 'Trust Signals', value: Math.floor(Math.random() * 20) + 70, color: 'bg-emerald-500' },
      ]);
    }, 10000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="border-[#1E293B] bg-[#0F172A] rounded-3xl shadow-xl">
      <CardHeader>
        <CardTitle className="text-white text-lg flex items-center gap-2">
          <ShieldCheck className="text-emerald-400" size={20} /> Community Health Breakdown
        </CardHeader>
      </CardHeader>
      <CardContent className="space-y-6">
        {metrics.map((m, i) => (
          <div key={i} className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-[#020617] rounded-xl flex items-center justify-center text-[#00BFA5]">
                <p.icon size={16} />
              </div>
              <div>
                <p className="text-sm font-bold text-white">{m.label}</p>
                <p className="text-[10px] text-slate-300">{m.label}</p>
              </div>
            </div>
            <div className="w-full bg-[#020617] h-2 rounded-full overflow-hidden">
              <div 
                className={`${m.color} h-full transition-all duration-1000`} 
                style={{ width: `${m.value}%` }}               />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}