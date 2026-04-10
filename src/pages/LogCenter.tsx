"use client";

import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search, Database, Terminal, Clock } from 'lucide-react';

const LogCenter = () => {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">AI Log Center</h1>
        <p className="text-slate-400">Centralized repository for all AI-driven security events and system logs.</p>
      </div>

      <Card className="border-[#1E293B] bg-[#0F172A] shadow-sm rounded-3xl overflow-hidden">
        <CardHeader className="border-b border-[#1E293B] p-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
            <Input className="pl-12 bg-[#020617] border-[#1E293B] text-white h-12 rounded-2xl focus-visible:ring-1 focus-visible:ring-blue-500" placeholder="Search logs by event, ID, or timestamp..." />
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="bg-slate-950 p-6 font-mono text-xs text-slate-300 space-y-2 min-h-[500px]">
            {[
              { time: '14:22:01', event: 'AUTH_SUCCESS', msg: 'User admin_01 logged in from 192.168.1.1', color: 'text-emerald-400' },
              { time: '14:22:15', event: 'SCAN_START', msg: 'Global safety scan initiated by system scheduler', color: 'text-blue-400' },
              { time: '14:23:42', event: 'THREAT_DETECTED', msg: 'Potential SQL injection attempt blocked on /api/v1/users', color: 'text-rose-400' },
              { time: '14:24:10', event: 'POLICY_UPDATE', msg: 'Hate speech detection model updated to v2.4.1', color: 'text-amber-400' },
              { time: '14:25:05', event: 'MOD_ACTION', msg: 'Item MOD-1024 approved by AI moderator', color: 'text-slate-400' },
            ].map((log, i) => (
              <div key={i} className="flex gap-4 hover:bg-white/5 p-1 rounded transition-colors">
                <span className="text-slate-600 shrink-0">[{log.time}]</span>
                <span className={`font-bold shrink-0 w-32 ${log.color}`}>{log.event}</span>
                <span className="text-slate-400">{log.msg}</span>
              </div>
            ))}
            <div className="animate-pulse text-blue-400 mt-4">_ Listening for live events...</div>
          </div>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default LogCenter;