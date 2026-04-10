"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, Filter, Zap, ShieldAlert, History, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

const incidents = [
  { 
    id: 'INC-902', 
    title: 'DDoS Attack Detected', 
    desc: 'High volume of traffic from multiple sources targeting the login endpoint.',
    region: 'Asia', 
    severity: 'High', 
    score: 0.88, 
    status: 'Active', 
    time: '2m ago',
    models: ['Anomaly Detection', 'Traffic Analysis'],
    pastIncidents: 3,
    playbook: 'DDoS Mitigation v2'
  },
  { 
    id: 'INC-903', 
    title: 'SQL Injection Attempt', 
    desc: 'Suspicious query patterns detected on the user profile API.',
    region: 'Europe', 
    severity: 'Medium', 
    score: 0.65, 
    status: 'Investigating', 
    time: '15m ago',
    models: ['Pattern Matching', 'WAF Logs'],
    pastIncidents: 1,
    playbook: 'SQLi Protection'
  },
];

export default function IncidentLog() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <Card className="border-[#1E293B] bg-[#0F172A] rounded-[2.5rem] shadow-xl overflow-hidden">
      <CardHeader className="p-8 border-b border-[#1E293B] flex flex-row items-center justify-between">
        <div className="flex items-center gap-3">
          <CardTitle className="text-white text-lg">Incident Log</CardTitle>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 bg-rose-500 rounded-full animate-pulse" />
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Live Updates</span>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="sm" className="text-slate-500 hover:text-white rounded-xl">
            <Filter size={14} className="mr-2" /> Filters
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y divide-[#1E293B]">
          {incidents.map((inc) => (
            <div key={inc.id} className="group">
              <div 
                className={cn(
                  "p-6 flex items-center justify-between cursor-pointer hover:bg-[#1E293B]/30 transition-colors",
                  expanded === inc.id && "bg-[#1E293B]/50"
                )}
                onClick={() => setExpanded(expanded === inc.id ? null : inc.id)}
              >
                <div className="flex-1">
                  <h4 className="text-white font-bold flex items-center gap-2">
                    {inc.title} <Badge className="bg-[#020617] border-[#1E293B] text-slate-500 text-[10px]">{inc.id}</Badge>
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 truncate max-w-md">{inc.desc}</p>
                </div>
                
                <div className="flex items-center gap-8">
                  <div className="text-center hidden md:block">
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Region</p>
                    <p className="text-xs text-white font-medium">{inc.region}</p>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Severity</p>
                    <Badge className={cn(
                      "border-none font-black uppercase tracking-widest text-[10px]",
                      inc.severity === 'High' ? 'bg-rose-500/10 text-rose-400' : 'bg-amber-500/10 text-amber-400'
                    )}>
                      {inc.severity}
                    </Badge>
                  </div>
                  
                  <div className="w-24 hidden lg:block">
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">AI Score</p>
                    <div className="h-1.5 bg-[#020617] rounded-full overflow-hidden">
                      <div 
                        className={cn("h-full", inc.score > 0.8 ? "bg-rose-500" : "bg-amber-500")} 
                        style={{ width: `${inc.score * 100}%` }} 
                      />
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <p className="text-xs text-white font-bold">{inc.status}</p>
                    <p className="text-[10px] text-slate-500">{inc.time}</p>
                  </div>
                  
                  {expanded === inc.id ? <ChevronUp size={18} className="text-slate-500" /> : <ChevronDown size={18} className="text-slate-500" />}
                </div>
              </div>
              
              {expanded === inc.id && (
                <div className="p-8 bg-[#020617]/50 border-t border-[#1E293B] animate-in slide-in-from-top-2">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-4">
                      <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Models Triggered</p>
                      <div className="flex flex-wrap gap-2">
                        {inc.models.map((m, i) => (
                          <Badge key={i} variant="outline" className="border-[#1E293B] text-slate-400 gap-2">
                            <Zap size={10} /> {m}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Intelligence Context</p>
                      <div className="flex items-center gap-3 p-3 bg-[#0F172A] border border-[#1E293B] rounded-xl">
                        <History size={16} className="text-blue-400" />
                        <span className="text-xs text-slate-300">{inc.pastIncidents} similar past incidents found</span>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Playbook Status</p>
                      <div className="flex items-center justify-between p-3 bg-[#0F172A] border border-[#1E293B] rounded-xl">
                        <span className="text-xs text-white font-bold">{inc.playbook}</span>
                        <Button size="sm" className="h-7 bg-blue-600 hover:bg-blue-700 text-[10px] font-black uppercase tracking-widest">
                          Execute
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-[#1E293B] flex justify-end gap-3">
                    <Button variant="ghost" className="text-slate-400 hover:text-white rounded-xl gap-2">
                      <ExternalLink size={16} /> View Full Logs
                    </Button>
                    <Button className="bg-rose-600 hover:bg-rose-700 text-white rounded-xl px-6 font-bold">
                      Mitigate Threat
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}