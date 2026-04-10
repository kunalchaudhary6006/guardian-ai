"use client";

import React, { useEffect, useState } from "react";
import { Activity, Clock, ShieldCheck, ShieldAlert, UserCheck } from "lucide-react";

export default function ActivityFeed() {
  const [logs, setLogs] = useState<any[]>([
    { text: "System initialized", time: "Just now", icon: ShieldCheck, color: "text-emerald-400" },
    { text: "Firewall rules updated", time: "2m ago", icon: ShieldCheck, color: "text-emerald-400" },
  ]);

  useEffect(() => {
    const i = setInterval(() => {
      const events = [
        { text: "Fraud attempt blocked", icon: ShieldAlert, color: "text-rose-400" },
        { text: "New user verified", icon: UserCheck, color: "text-blue-400" },
        { text: "Policy scan complete", icon: ShieldCheck, color: "text-emerald-400" },
        { text: "Suspicious IP flagged", icon: ShieldAlert, color: "text-orange-400" },
      ];
      
      const event = events[Math.floor(Math.random() * events.length)];
      const log = {
        ...event,
        time: "Just now",
      };
      
      setLogs((p) => [log, ...p.slice(0, 5)]);
    }, 5000);

    return () => clearInterval(i);
  }, []);

  return (
    <div className="bg-[#0F172A] border border-[#1E293B] p-6 rounded-2xl shadow-xl">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-white font-bold flex items-center gap-2">
          <Activity className="text-blue-400" size={18} /> Live Activity
        </h3>
        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Real-time</span>
      </div>
      
      <div className="space-y-4">
        {logs.map((l, i) => (
          <div key={i} className="flex items-start gap-3 group">
            <div className={`mt-1 p-1.5 rounded-lg bg-[#020617] border border-[#1E293B] ${l.color}`}>
              <l.icon size={14} />
            </div>
            <div className="flex-1">
              <p className="text-sm text-slate-300 group-hover:text-white transition-colors">{l.text}</p>
              <div className="flex items-center gap-1 mt-0.5">
                <Clock size={10} className="text-slate-600" />
                <span className="text-[10px] text-slate-500">{l.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <button className="w-full mt-6 py-2 text-xs font-bold text-slate-500 hover:text-blue-400 transition-colors border-t border-[#1E293B] pt-4">
        VIEW ALL LOGS
      </button>
    </div>
  );
}