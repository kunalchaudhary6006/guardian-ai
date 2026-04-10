"use client";

import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { UserCheck, Bot, ShieldCheck, Fingerprint } from 'lucide-react';

const AIVerification = () => {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">AI Verification Bot</h1>
        <p className="text-slate-400">Automated identity verification and bot behavior analysis.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="border-[#1E293B] bg-[#0F172A] shadow-sm rounded-3xl">
          <CardHeader>
            <CardTitle className="text-lg font-semibold flex items-center gap-2 text-white">
              <UserCheck className="text-emerald-500" /> Verification Queue
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { user: 'user_992', method: 'ID Scan', status: 'Verified', time: '2m ago' },
              { user: 'alpha_dev', method: 'Biometric', status: 'Pending', time: '5m ago' },
              { user: 'new_joiner', method: 'Email/SMS', status: 'Verified', time: '12m ago' },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-[#020617] border border-[#1E293B] rounded-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#0F172A] rounded-xl flex items-center justify-center shadow-sm">
                    <Fingerprint size={20} className="text-slate-500" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{item.user}</p>
                    <p className="text-xs text-slate-500">{item.method}</p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge className={item.status === 'Verified' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border-amber-500/20'}>
                    {item.status}
                  </Badge>
                  <p className="text-[10px] text-slate-500 mt-1">{item.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-[#1E293B] bg-[#0F172A] shadow-sm rounded-3xl">
          <CardHeader>
            <CardTitle className="text-lg font-semibold flex items-center gap-2 text-white">
              <Bot className="text-blue-500" /> Bot Detection Metrics
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-6 bg-[#020617] border border-[#1E293B] text-white rounded-2xl">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-slate-400">Bot Traffic Filtered</span>
                <span className="text-2xl font-bold">99.8%</span>
              </div>
              <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                <div className="bg-blue-500 h-full w-[99.8%]" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 border border-[#1E293B] bg-[#020617] rounded-2xl">
                <p className="text-xs text-slate-500 mb-1">Suspicious IPs</p>
                <p className="text-xl font-bold text-white">1,242</p>
              </div>
              <div className="p-4 border border-[#1E293B] bg-[#020617] rounded-2xl">
                <p className="text-xs text-slate-500 mb-1">API Challenges</p>
                <p className="text-xl font-bold text-white">856</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default AIVerification;