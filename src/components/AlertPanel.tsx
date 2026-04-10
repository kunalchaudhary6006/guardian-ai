"use client";

import React from 'react';
import { AlertCircle, ShieldAlert, Ban, Info } from 'lucide-react';

export default function AlertPanel() {
  const alerts = [
    { icon: ShieldAlert, text: "Fraud spike detected in EU region", color: "text-rose-400", bg: "bg-rose-400/10" },
    { icon: Ban, text: "NSFW content surge identified", color: "text-orange-400", bg: "bg-orange-400/10" },
    { icon: AlertCircle, text: "Policy violations increased by 12%", color: "text-amber-400", bg: "bg-amber-400/10" },
  ];

  return (
    <div className="bg-[#0F172A] border border-[#1E293B] p-5 rounded-2xl shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-rose-400 font-bold flex items-center gap-2">
          <ShieldAlert size={18} /> Critical Alerts
        </h3>
        <span className="text-[10px] bg-rose-500/20 text-rose-400 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">Live</span>
      </div>
      <div className="space-y-3">
        {alerts.map((alert, i) => (
          <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-[#020617] border border-[#1E293B] group hover:border-rose-500/30 transition-colors">
            <div className={`p-2 rounded-lg ${alert.bg}`}>
              <alert.icon className={alert.color} size={16} />
            </div>
            <p className="text-sm text-slate-300 group-hover:text-white transition-colors">{alert.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}