"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Globe, MapPin, Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const regions = [
  { name: 'Asia', threats: 3, severity: 'High', color: 'text-rose-500', bg: 'bg-rose-500/10' },
  { name: 'Europe', threats: 1, severity: 'Medium', color: 'text-amber-500', bg: 'bg-amber-500/10' },
  { name: 'South America', threats: 1, severity: 'Medium', color: 'text-amber-500', bg: 'bg-amber-500/10' },
];

export default function ThreatMonitor() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
      <Card className="lg:col-span-2 border-[#1E293B] bg-[#0F172A] rounded-[2.5rem] overflow-hidden shadow-xl">
        <CardContent className="p-0 relative aspect-[16/9] bg-[#020617] flex items-center justify-center">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <Globe className="w-full h-full text-blue-500" strokeWidth={0.5} />
          </div>
          
          {/* Mock Heat Dots */}
          <TooltipProvider>
            <div className="absolute top-1/3 left-1/4">
              <Tooltip>
                <TooltipTrigger>
                  <div className="w-4 h-4 bg-rose-500 rounded-full animate-ping absolute" />
                  <div className="w-4 h-4 bg-rose-500 rounded-full relative" />
                </TooltipTrigger>
                <TooltipContent className="bg-[#0F172A] border-[#1E293B] text-white p-3 rounded-xl">
                  <p className="font-bold text-sm">DDoS Attack</p>
                  <p className="text-xs text-rose-400 font-bold">Severity: High</p>
                  <p className="text-[10px] text-slate-400 mt-1">AI: Coordinated botnet activity detected.</p>
                </TooltipContent>
              </Tooltip>
            </div>
            
            <div className="absolute top-1/2 left-1/2">
              <Tooltip>
                <TooltipTrigger>
                  <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse" />
                </TooltipTrigger>
                <TooltipContent className="bg-[#0F172A] border-[#1E293B] text-white p-3 rounded-xl">
                  <p className="font-bold text-sm">SQL Injection</p>
                  <p className="text-xs text-amber-400 font-bold">Severity: Medium</p>
                  <p className="text-[10px] text-slate-400 mt-1">AI: Pattern matches known exploit vectors.</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
          
          <div className="absolute bottom-6 left-6 flex items-center gap-2 text-slate-500 text-[10px] font-bold uppercase tracking-widest">
            <MapPin size={14} /> Interactive Threat Map
          </div>
        </CardContent>
      </Card>
      
      <div className="space-y-4">
        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-2">Region Summary</p>
        {regions.map((r, i) => (
          <Card key={i} className="border-[#1E293B] bg-[#0F172A] rounded-2xl hover:border-blue-500/30 transition-all group cursor-pointer">
            <CardContent className="p-5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${r.bg} ${r.color}`}>
                  <Globe size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold">{r.name}</h4>
                  <p className="text-xs text-slate-500">{r.threats} active threats</p>
                </div>
              </div>
              <Badge className={`${r.bg} ${r.color} border-none font-black uppercase tracking-widest text-[10px]`}>
                {r.severity}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}