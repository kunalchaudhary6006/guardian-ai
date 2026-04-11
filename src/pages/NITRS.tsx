"use client";

import React, { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  TowerControl, 
  ShieldAlert, 
  Zap, 
  Globe, 
  Activity, 
  Brain, 
  Database, 
  Lock, 
  TrendingUp,
  Clock,
  MapPin,
  Search,
  Filter,
  Plus,
  History,
  CheckCircle2,
  AlertTriangle,
  XCircle
} from 'lucide-react';
import { ResponsiveContainer, LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { toast } from 'sonner';
import AIChat from '@/components/AIChat';
import { cn } from "@/lib/utils";

const anomalyData = [
  { time: '12:00', actual: 400, baseline: 380 },
  { time: '12:10', actual: 420, baseline: 385 },
  { time: '12:20', actual: 850, baseline: 390, anomaly: true },
  { time: '12:30', actual: 500, baseline: 395 },
  { time: '12:40', actual: 480, baseline: 400 },
];

const forecastData = [
  { time: 'Now', actual: 78 },
  { time: '+1h', forecast: 82 },
  { time: '+2h', forecast: 88 },
  { time: '+3h', forecast: 94 },
  { time: '+4h', forecast: 92 },
];

export default function NITRS() {
  const [isCrisisActive, setIsCrisisActive] = useState(false);

  const handleCrisisEscalation = () => {
    setIsCrisisActive(true);
    toast.error("NATIONAL CRISIS PROTOCOL ACTIVATED", {
      description: "All agencies notified. Lockdown mode engaged.",
      duration: 10000
    });
  };

  return (
    <DashboardLayout>
      {/* NITRS Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-black text-white uppercase tracking-tighter flex items-center gap-3">
            <TowerControl className="text-rose-500" size={32} /> National Intelligence & Threat Response System
          </h1>
          <p className="text-slate-400 text-sm mt-1">NITRS v4.2 • Real-time National Command Center • AI-Driven Intelligence</p>
        </div>
        <div className="flex gap-3">
          <Badge className="bg-rose-500/10 text-rose-500 border-rose-500/20 px-4 py-2 h-11 flex items-center gap-2">
            <Zap size={14} fill="currentColor" /> AI Confidence: 96%
          </Badge>
          <Button 
            onClick={handleCrisisEscalation}
            className="bg-rose-600 hover:bg-rose-700 text-white rounded-2xl gap-2 h-11 px-8 shadow-lg shadow-rose-900/20 font-black uppercase tracking-widest"
          >
            Escalate to Crisis
          </Button>
        </div>
      </div>

      {/* Phase 1 & 2: Intake & Anomaly */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <Card className="lg:col-span-2 border-[#1E293B] bg-[#0F172A] rounded-[2.5rem] overflow-hidden shadow-xl">
          <CardHeader className="p-8 border-b border-[#1E293B] bg-[#020617]/50 flex flex-row items-center justify-between">
            <CardTitle className="text-white text-lg flex items-center gap-3">
              <Activity className="text-blue-400" size={20} /> National Anomaly Surveillance
            </CardTitle>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Live Monitoring</span>
            </div>
          </CardHeader>
          <CardContent className="p-8">
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={anomalyData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1E293B" />
                  <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 10}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 10}} />
                  <Tooltip contentStyle={{ backgroundColor: '#0F172A', border: '1px solid #1E293B', borderRadius: '12px' }} />
                  <Line type="monotone" dataKey="baseline" stroke="#334155" strokeWidth={2} strokeDasharray="5 5" dot={false} />
                  <Line 
                    type="monotone" 
                    dataKey="actual" 
                    stroke="#3b82f6" 
                    strokeWidth={3} 
                    dot={(props) => {
                      const { cx, cy, payload } = props;
                      if (payload.anomaly) return <circle cx={cx} cy={cy} r={6} fill="#f43f5e" stroke="#fff" strokeWidth={2} />;
                      return <circle cx={cx} cy={cy} r={4} fill="#3b82f6" />;
                    }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="p-4 bg-[#020617] border border-[#1E293B] rounded-2xl">
                <p className="text-[10px] text-slate-500 font-bold uppercase mb-1">Anomaly Score</p>
                <p className="text-2xl font-black text-rose-500">82 / 100</p>
              </div>
              <div className="p-4 bg-[#020617] border border-[#1E293B] rounded-2xl">
                <p className="text-[10px] text-slate-500 font-bold uppercase mb-1">Deviation</p>
                <p className="text-2xl font-black text-white">+214%</p>
              </div>
              <div className="p-4 bg-[#020617] border border-[#1E293B] rounded-2xl">
                <p className="text-[10px] text-slate-500 font-bold uppercase mb-1">Spike Frequency</p>
                <p className="text-2xl font-black text-white">High</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <Card className="border-[#1E293B] bg-[#0F172A] rounded-3xl shadow-xl">
            <CardHeader>
              <CardTitle className="text-white text-sm uppercase tracking-widest">National Threat Severity</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center py-6">
              <div className="w-32 h-32 rounded-full border-8 border-[#020617] flex flex-col items-center justify-center relative">
                <div className="absolute inset-0 rounded-full border-8 border-rose-500 border-t-transparent rotate-[135deg]" />
                <span className="text-4xl font-black text-white">HIGH</span>
              </div>
              <Badge className="mt-6 bg-rose-500/10 text-rose-500 border-rose-500/20 px-6 py-2 font-black uppercase tracking-widest">
                Action Required
              </Badge>
            </CardContent>
          </Card>

          <Card className="border-[#1E293B] bg-[#0F172A] rounded-3xl shadow-xl">
            <CardHeader>
              <CardTitle className="text-white text-sm uppercase tracking-widest">Future Threat Forecast</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[120px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={forecastData}>
                    <defs>
                      <linearGradient id="colorForecast" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#f43f5e" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <Area type="monotone" dataKey="forecast" stroke="#f43f5e" fillOpacity={1} fill="url(#colorForecast)" strokeWidth={3} strokeDasharray="5 5" />
                    <Area type="monotone" dataKey="actual" stroke="#f43f5e" fill="transparent" strokeWidth={3} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <p className="text-[10px] text-slate-500 mt-4 text-center font-bold uppercase tracking-widest">
                Predicted Risk Increase: <span className="text-rose-500">+18% in 4h</span>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Phase 3 & 6: Intelligence & Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2 space-y-8">
          <Card className="border-[#1E293B] bg-[#0F172A] rounded-[2.5rem] overflow-hidden shadow-xl">
            <CardHeader className="p-8 border-b border-[#1E293B] bg-[#020617]/50">
              <CardTitle className="text-white text-lg flex items-center gap-3">
                <ShieldAlert className="text-rose-500" size={20} /> Threat Intelligence Engine
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-2 divide-x divide-[#1E293B]">
                <div className="p-8 space-y-6">
                  {['Terrorism', 'Financial Fraud', 'Cyber Attack', 'Misinformation'].map((type, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-white">{type}</span>
                        <span className="text-xs font-black text-blue-400">{94 - (i * 12)}% Conf.</span>
                      </div>
                      <div className="w-full bg-[#020617] h-1.5 rounded-full overflow-hidden">
                        <div className="bg-blue-600 h-full" style={{ width: `${94 - (i * 12)}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-8 bg-[#020617]/30">
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Regional Distribution</p>
                  <div className="space-y-4">
                    {[
                      { region: 'Asia-Pacific', risk: 'High', color: 'text-rose-500' },
                      { region: 'Europe', risk: 'Medium', color: 'text-amber-500' },
                      { region: 'North America', risk: 'Low', color: 'text-emerald-500' },
                    ].map((r, i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-[#020617] border border-[#1E293B] rounded-xl">
                        <span className="text-xs text-white font-medium">{r.region}</span>
                        <Badge className={cn("border-none text-[8px] font-black uppercase tracking-widest", r.color.replace('text', 'bg') + '/10', r.color)}>
                          {r.risk} Risk
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* AI Decision Timeline */}
          <Card className="border-[#1E293B] bg-[#0F172A] rounded-[2.5rem] overflow-hidden shadow-xl">
            <CardHeader className="p-8 border-b border-[#1E293B]">
              <CardTitle className="text-white text-lg flex items-center gap-3">
                <Brain className="text-blue-400" size={20} /> AI Decision Timeline
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="relative space-y-8 before:absolute before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#1E293B]">
                {[
                  { step: 'Multi-Modal Fusion', model: 'Model 1', details: 'Unified embeddings created', conf: 95, time: '12:01:05' },
                  { step: 'Anomaly Detection', model: 'Model 3', details: 'Spike in login activity', conf: 88, time: '12:02:10' },
                  { step: 'Threat Detection', model: 'Model 2', details: 'Fraud signal detected', conf: 91, time: '12:03:00' },
                  { step: 'Severity Classification', model: 'Model 4', details: 'Crisis = Medium', conf: 84, time: '12:03:45' },
                  { step: 'Playbook Suggested', model: 'Model 6', details: 'Escalate to SOC', conf: 93, time: '12:04:20' },
                ].map((item, i) => (
                  <div key={i} className="relative pl-12 group">
                    <div className="absolute left-0 w-8 h-8 rounded-full bg-[#020617] border-2 border-blue-500 flex items-center justify-center z-10">
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-bold text-white">{item.step}</h4>
                        <p className="text-xs text-slate-500">{item.details} • {item.model}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest">{item.conf}% Conf.</p>
                        <p className="text-[10px] text-slate-600 font-mono">{item.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <Card className="border-none bg-gradient-to-br from-rose-600 to-rose-900 rounded-[2.5rem] text-white shadow-2xl shadow-rose-900/20">
            <CardHeader>
              <CardTitle className="text-lg font-black uppercase tracking-widest flex items-center gap-3">
                <TowerControl size={20} fill="currentColor" /> Action Command Center
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { label: 'Block IP Clusters', impact: 'High', conf: 94, icon: XCircle },
                { label: 'Freeze Transactions', impact: 'Critical', conf: 98, icon: Lock },
                { label: 'Alert Local Agencies', impact: 'Medium', conf: 91, icon: ShieldAlert },
                { label: 'Geo-fence Region', impact: 'High', conf: 89, icon: MapPin },
              ].map((action, i) => (
                <div key={i} className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 group hover:bg-white/20 transition-all cursor-pointer">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <action.icon size={18} />
                      <span className="text-sm font-bold">{action.label}</span>
                    </div>
                    <Badge className="bg-white/20 text-white border-none text-[8px]">{action.conf}%</Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1 bg-white text-rose-600 hover:bg-white/90 rounded-xl font-black uppercase tracking-widest text-[10px]">Approve</Button>
                    <Button size="sm" variant="ghost" className="flex-1 text-white/60 hover:text-white text-[10px] font-bold uppercase tracking-widest">Reject</Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <AIChat />
        </div>
      </div>

      {/* Global Threat Map Placeholder */}
      <Card className="border-[#1E293B] bg-[#0F172A] rounded-[2.5rem] overflow-hidden shadow-xl mb-8">
        <CardHeader className="p-8 border-b border-[#1E293B] bg-[#020617]/50">
          <CardTitle className="text-white text-lg flex items-center gap-3">
            <Globe className="text-blue-400" size={20} /> Global Threat Map
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0 relative aspect-[21/9] bg-[#020617] flex items-center justify-center">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <Globe className="w-full h-full text-blue-500" strokeWidth={0.5} />
          </div>
          <div className="relative z-10 text-center">
            <MapPin className="text-rose-500 mx-auto mb-4 animate-bounce" size={48} />
            <p className="text-white font-black uppercase tracking-tighter text-2xl">Interactive Heatmap Active</p>
            <p className="text-slate-500 text-sm mt-2">Real-time incident markers synced with anomaly models</p>
          </div>
        </CardContent>
      </Card>

      {/* Case Management */}
      <Card className="border-[#1E293B] bg-[#0F172A] rounded-[2.5rem] overflow-hidden shadow-xl">
        <CardHeader className="p-8 border-b border-[#1E293B] flex flex-row items-center justify-between">
          <CardTitle className="text-white text-lg flex items-center gap-3">
            <Database className="text-indigo-400" size={20} /> National Case Intelligence System
          </CardTitle>
          <Button variant="outline" className="rounded-xl border-[#1E293B] text-white hover:bg-[#1E293B]">
            <History size={16} className="mr-2" /> Audit Logs
          </Button>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-[#020617]/50 text-slate-500 text-[10px] uppercase font-black tracking-widest">
                  <th className="px-8 py-4">Case ID</th>
                  <th className="px-8 py-4">Threat Type</th>
                  <th className="px-8 py-4">Risk Score</th>
                  <th className="px-8 py-4">Evidence</th>
                  <th className="px-8 py-4 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1E293B]">
                {[
                  { id: 'NITRS-2026-001', type: 'Cyber Attack', risk: 94, evidence: 'Logs + IP Trace', status: 'Active' },
                  { id: 'NITRS-2026-002', type: 'Financial Fraud', risk: 82, evidence: 'Transaction Chain', status: 'Investigating' },
                ].map((c) => (
                  <tr key={c.id} className="hover:bg-[#1E293B]/30 transition-colors">
                    <td className="px-8 py-5 font-mono text-xs text-blue-400">{c.id}</td>
                    <td className="px-8 py-5 text-xs font-bold text-white">{c.type}</td>
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-2">
                        <div className="w-12 bg-[#020617] h-1.5 rounded-full overflow-hidden">
                          <div className="bg-rose-500 h-full" style={{ width: `${c.risk}%` }} />
                        </div>
                        <span className="text-xs font-bold text-white">{c.risk}</span>
                      </div>
                    </td>
                    <td className="px-8 py-5 text-xs text-slate-500">{c.evidence}</td>
                    <td className="px-8 py-5 text-right">
                      <Badge className={c.status === 'Active' ? 'bg-rose-500/10 text-rose-500' : 'bg-amber-500/10 text-amber-400'}>
                        {c.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
}