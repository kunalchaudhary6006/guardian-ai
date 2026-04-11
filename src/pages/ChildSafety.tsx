"use client";

import React, { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { 
  Baby, 
  ShieldCheck, 
  Bell, 
  Lock, 
  Eye, 
  Clock, 
  AlertTriangle,
  History,
  Smartphone,
  Globe
} from 'lucide-react';
import { toast } from 'sonner';

export default function ChildSafety() {
  const [isModeOn, setIsModeOn] = useState(true);

  const handleToggle = (val: boolean) => {
    setIsModeOn(val);
    toast.success(`Child Safety Mode ${val ? 'Activated' : 'Deactivated'}`);
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-black text-white uppercase tracking-tighter flex items-center gap-3">
            <Baby className="text-blue-500" size={32} /> Child Safety Mode
          </h1>
          <p className="text-slate-400 text-sm mt-1">Parental alerts, restricted logs, and specialized AI enforcement for minors.</p>
        </div>
        <div className="flex items-center gap-4 bg-[#0B1220] p-2 rounded-2xl border border-[#1E293B]">
          <span className="text-xs font-bold text-slate-400 px-2">MODE STATUS</span>
          <div className="flex items-center gap-2 bg-[#020617] px-4 py-2 rounded-xl border border-[#1E293B]">
            <span className={`text-xs font-black uppercase tracking-widest ${isModeOn ? 'text-emerald-500' : 'text-rose-500'}`}>
              {isModeOn ? 'Active' : 'Inactive'}
            </span>
            <Switch checked={isModeOn} onCheckedChange={handleToggle} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Card className="border-[#1E293B] bg-[#0B1220] rounded-[2.5rem] overflow-hidden shadow-xl">
            <CardHeader className="p-8 border-b border-[#1E293B] bg-[#020617]/50">
              <CardTitle className="text-white text-lg flex items-center gap-2">
                <ShieldCheck className="text-blue-400" size={20} /> Safety Controls
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { label: 'Adult Content Blocking', desc: 'Strict filtering for all web & app content', icon: Lock, active: true },
                  { label: 'Real-time Screen Scanning', desc: 'AI detection of unsafe visual content', icon: Eye, active: true },
                  { label: 'App Usage Limits', desc: 'Restrict time spent on social platforms', icon: Clock, active: false },
                  { label: 'Keyword Alerts', desc: 'Notify parents of suspicious search terms', icon: Bell, active: true },
                ].map((control, i) => (
                  <div key={i} className="p-5 bg-[#020617] border border-[#1E293B] rounded-2xl space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="p-2 bg-blue-600/10 rounded-xl text-blue-400">
                        <control.icon size={18} />
                      </div>
                      <Switch defaultChecked={control.active} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{control.label}</h4>
                      <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">{control.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-[#1E293B] bg-[#0B1220] rounded-[2.5rem] overflow-hidden shadow-xl">
            <CardHeader className="p-8 border-b border-[#1E293B]">
              <CardTitle className="text-white text-lg flex items-center gap-2">
                <History className="text-blue-400" size={20} /> Restricted Activity Logs
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-[#020617]/50 text-slate-500 text-[10px] uppercase font-black tracking-widest">
                      <th className="px-8 py-4">Device</th>
                      <th className="px-8 py-4">Activity</th>
                      <th className="px-8 py-4">Risk</th>
                      <th className="px-8 py-4">Action</th>
                      <th className="px-8 py-4 text-right">Time</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#1E293B]">
                    {[
                      { device: 'Android Tablet', activity: 'Blocked: Unsafe Website', risk: 'High', action: 'Auto-Block', time: '2m ago' },
                      { device: 'iPad Pro', activity: 'App Launch: YouTube', risk: 'Low', action: 'Monitored', time: '15m ago' },
                      { device: 'Windows PC', activity: 'Search: "Restricted Term"', risk: 'Medium', action: 'Alert Sent', time: '1h ago' },
                    ].map((log, i) => (
                      <tr key={i} className="hover:bg-[#1E293B]/30 transition-colors">
                        <td className="px-8 py-5">
                          <div className="flex items-center gap-3">
                            {log.device.includes('Android') ? <Smartphone size={14} className="text-slate-500" /> : <Globe size={14} className="text-slate-500" />}
                            <span className="text-xs font-bold text-white">{log.device}</span>
                          </div>
                        </td>
                        <td className="px-8 py-5 text-xs text-slate-400">{log.activity}</td>
                        <td className="px-8 py-5">
                          <Badge className={`border-none text-[8px] font-black uppercase tracking-widest ${
                            log.risk === 'High' ? 'bg-rose-500/10 text-rose-400' : 
                            log.risk === 'Medium' ? 'bg-amber-500/10 text-amber-400' : 
                            'bg-emerald-500/10 text-emerald-400'
                          }`}>
                            {log.risk}
                          </Badge>
                        </td>
                        <td className="px-8 py-5 text-xs text-slate-300">{log.action}</td>
                        <td className="px-8 py-5 text-right text-[10px] text-slate-500 font-bold uppercase">{log.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <Card className="border-none bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2.5rem] text-white shadow-2xl shadow-blue-900/20">
            <CardHeader>
              <CardTitle className="text-lg font-black uppercase tracking-widest">Parental Alerts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                <div className="flex items-center gap-3 mb-3">
                  <AlertTriangle className="text-rose-200" size={20} />
                  <span className="font-bold">Critical Alert</span>
                </div>
                <p className="text-xs text-blue-100 leading-relaxed">
                  Multiple attempts to access restricted content detected on <span className="font-bold">Android Tablet</span>.
                </p>
                <Button className="w-full mt-4 bg-white text-blue-600 hover:bg-white/90 rounded-xl font-bold text-xs">
                  Review Incident
                </Button>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium">Push Notifications</span>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium">Email Summaries</span>
                  <Switch defaultChecked />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-[#1E293B] bg-[#0B1220] rounded-3xl">
            <CardHeader>
              <CardTitle className="text-white text-sm uppercase tracking-widest">Safety Intelligence</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-[#020617] border border-[#1E293B] rounded-2xl text-center">
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Safety Score</p>
                <h3 className="text-3xl font-black text-white">94 <span className="text-xs text-slate-500">/ 100</span></h3>
                <Badge className="mt-2 bg-emerald-500/10 text-emerald-400">Optimal</Badge>
              </div>
              <Button variant="outline" className="w-full border-[#1E293B] text-white hover:bg-[#1E293B] rounded-xl">
                View Detailed Analytics
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}