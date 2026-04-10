"use client";

import React, { useState } from 'react';
import { ShieldAlert, Zap, ShieldCheck, AlertTriangle, Power, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export default function ThreatResponseCenter() {
  const [incidents, setIncidents] = useState([
    { id: 'INC-902', type: 'DDoS', severity: 'High', status: 'Active', time: '2m ago' },
    { id: 'INC-903', type: 'SQLi', severity: 'Critical', status: 'Investigating', time: '5m ago' },
  ]);

  const handleMitigate = (id: string) => {
    toast.promise(new Promise(r => setTimeout(r, 1500)), {
      loading: `Deploying countermeasures for ${id}...`,
      success: () => {
        setIncidents(prev => prev.filter(i => i.id !== id));
        return `Threat ${id} successfully mitigated.`;
      },
      error: 'Mitigation failed'
    });
  };

  return (
    <div className="bg-[#0F172A] border border-[#1E293B] p-6 rounded-3xl shadow-xl">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-white font-bold flex items-center gap-2">
          <Zap className="text-rose-500" size={20} fill="currentColor" /> Active Response Center
        </h3>
        <Badge className="bg-rose-500/10 text-rose-500 border-rose-500/20 animate-pulse">Live Incidents</Badge>
      </div>

      <div className="space-y-4">
        {incidents.map((inc) => (
          <div key={inc.id} className="p-4 bg-[#020617] border border-[#1E293B] rounded-2xl flex items-center justify-between group hover:border-rose-500/30 transition-all">
            <div className="flex items-center gap-4">
              <div className={`p-2 rounded-xl ${inc.severity === 'Critical' ? 'bg-rose-500/10 text-rose-500' : 'bg-orange-500/10 text-orange-500'}`}>
                <ShieldAlert size={20} />
              </div>
              <div>
                <p className="text-sm font-bold text-white">{inc.type} Attack Detected</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest">{inc.id} • {inc.time}</p>
              </div>
            </div>
            <Button 
              size="sm" 
              onClick={() => handleMitigate(inc.id)}
              className="bg-rose-600 hover:bg-rose-700 text-white rounded-xl h-9 px-4 text-xs font-bold"
            >
              Mitigate
            </Button>
          </div>
        ))}
        {incidents.length === 0 && (
          <div className="text-center py-8">
            <ShieldCheck className="mx-auto text-emerald-500 mb-2" size={32} />
            <p className="text-sm text-slate-500">No active threats detected.</p>
          </div>
        )}
      </div>

      <div className="mt-6 pt-6 border-t border-[#1E293B] grid grid-cols-2 gap-3">
        <Button variant="outline" className="border-[#1E293B] text-white hover:bg-[#1E293B] rounded-xl gap-2 text-xs">
          <RefreshCw size={14} /> System Scan
        </Button>
        <Button variant="outline" className="border-[#1E293B] text-rose-400 hover:bg-rose-500/10 rounded-xl gap-2 text-xs">
          <Power size={14} /> Lockdown
        </Button>
      </div>
    </div>
  );
}

const Badge = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider border ${className}`}>
    {children}
  </span>
);