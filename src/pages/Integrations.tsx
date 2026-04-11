"use client";

import React, { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Smartphone, 
  Globe, 
  Share2, 
  Cloud, 
  Zap, 
  ShieldCheck,
  Monitor,
  Chrome,
  Instagram,
  MessageCircle,
  Youtube,
  Database,
  Lock,
  TowerControl,
  Activity,
  Link as LinkIcon,
  ShieldAlert,
  History
} from 'lucide-react';
import { toast } from 'sonner';

export default function Integrations() {
  const [activeTab, setActiveTab] = useState('enterprise');

  const stats = [
    { label: 'Active Connections', value: '24', icon: LinkIcon, color: 'text-blue-400' },
    { label: 'API Health', value: '99.8%', icon: Activity, color: 'text-emerald-400' },
    { label: 'Data Synced Today', value: '1.2 TB', icon: Database, color: 'text-indigo-400' },
    { label: 'Active Webhooks', value: '12', icon: Zap, color: 'text-amber-400' },
  ];

  const handleToggle = (name: string) => {
    toast.success(`${name} integration updated.`);
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-black text-white uppercase tracking-tighter flex items-center gap-3">
            <Share2 className="text-blue-500" size={32} /> Intelligence Integration Hub
          </h1>
          <p className="text-slate-400 text-sm mt-1">Connect platforms, devices, and systems for real-time AI detection and enforcement.</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 rounded-2xl gap-2 h-11 px-6 shadow-lg shadow-blue-900/20 font-bold">
          <Zap size={18} fill="currentColor" /> One-Click Secure Setup
        </Button>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((s, i) => (
          <Card key={i} className="border-[#1E293B] bg-[#0F172A] rounded-2xl shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className={`p-2 rounded-lg bg-[#020617] border border-[#1E293B] ${s.color}`}>
                  <s.icon size={18} />
                </div>
                <Badge className="bg-emerald-500/10 text-emerald-400 border-none text-[8px]">Live</Badge>
              </div>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">{s.label}</p>
              <h3 className="text-xl font-black text-white">{s.value}</h3>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="enterprise" onValueChange={setActiveTab} className="space-y-8">
        <TabsList className="bg-[#0F172A] border border-[#1E293B] p-1 h-auto gap-1">
          {['Individual', 'Enterprise', 'Government'].map((t) => (
            <TabsTrigger key={t} value={t.toLowerCase()} className="data-[state=active]:bg-blue-600 data-[state=active]:text-white px-8 py-2.5 rounded-xl text-slate-400 text-xs font-bold uppercase tracking-widest">
              {t} Mode
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Enterprise Mode (Default) */}
        <TabsContent value="enterprise" className="space-y-8 animate-in fade-in duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-[#1E293B] bg-[#0F172A] rounded-[2.5rem] overflow-hidden shadow-xl">
              <CardHeader className="p-8 border-b border-[#1E293B] bg-[#020617]/50">
                <CardTitle className="text-white text-lg flex items-center gap-3">
                  <Share2 className="text-blue-400" size={20} /> Platform Integrations
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-4">
                {[
                  { name: 'Instagram API', status: 'Connected', sync: '2m ago', icon: Instagram },
                  { name: 'YouTube Moderation', status: 'Connected', sync: '5m ago', icon: Youtube },
                  { name: 'Discord / Slack', status: 'Not Connected', sync: 'N/A', icon: MessageCircle },
                ].map((item, i) => (
                  <div key={i} className="p-5 bg-[#020617] border border-[#1E293B] rounded-2xl flex items-center justify-between group hover:border-blue-500/30 transition-all">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#0F172A] flex items-center justify-center text-slate-400">
                        <item.icon size={20} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">{item.name}</h4>
                        <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-0.5">Last Sync: {item.sync}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge className={item.status === 'Connected' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-slate-800 text-slate-500'}>
                        {item.status}
                      </Badge>
                      <Switch defaultChecked={item.status === 'Connected'} onCheckedChange={() => handleToggle(item.name)} />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-[#1E293B] bg-[#0F172A] rounded-[2.5rem] overflow-hidden shadow-xl">
              <CardHeader className="p-8 border-b border-[#1E293B] bg-[#020617]/50">
                <CardTitle className="text-white text-lg flex items-center gap-3">
                  <Database className="text-indigo-400" size={20} /> Enterprise Systems
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-4">
                {[
                  { name: 'Website CMS (REST)', status: 'Connected', icon: Globe },
                  { name: 'Mobile App SDK', status: 'Connected', icon: Smartphone },
                  { name: 'Cloud Storage (S3)', status: 'Connected', icon: Cloud },
                ].map((item, i) => (
                  <div key={i} className="p-5 bg-[#020617] border border-[#1E293B] rounded-2xl flex items-center justify-between group hover:border-indigo-500/30 transition-all">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#0F172A] flex items-center justify-center text-slate-400">
                        <item.icon size={20} />
                      </div>
                      <h4 className="text-sm font-bold text-white">{item.name}</h4>
                    </div>
                    <Button variant="outline" size="sm" className="rounded-xl border-[#1E293B] text-white hover:bg-[#1E293B]">Configure</Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Government Mode */}
        <TabsContent value="government" className="space-y-8 animate-in fade-in duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-rose-500/30 bg-[#0F172A] rounded-[2.5rem] overflow-hidden shadow-xl">
              <CardHeader className="p-8 border-b border-rose-500/20 bg-rose-500/5">
                <CardTitle className="text-white text-lg flex items-center gap-3">
                  <TowerControl className="text-rose-500" size={20} /> National System Connections
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-4">
                {[
                  { name: 'Cybercrime Database', status: 'Connected', clearance: 'Level 4' },
                  { name: 'Law Enforcement Systems', status: 'Connected', clearance: 'Level 5' },
                  { name: 'Intelligence Surveillance', status: 'Restricted', clearance: 'Level 5' },
                ].map((item, i) => (
                  <div key={i} className="p-5 bg-[#020617] border border-[#1E293B] rounded-2xl flex items-center justify-between group hover:border-rose-500/30 transition-all">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-500">
                        <Lock size={20} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">{item.name}</h4>
                        <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-0.5">Clearance: {item.clearance}</p>
                      </div>
                    </div>
                    <Badge className={item.status === 'Connected' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-500'}>
                      {item.status}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-[#1E293B] bg-[#0F172A] rounded-[2.5rem] overflow-hidden shadow-xl">
              <CardHeader className="p-8 border-b border-[#1E293B] bg-[#020617]/50">
                <CardTitle className="text-white text-lg flex items-center gap-3">
                  <Globe className="text-blue-400" size={20} /> Infrastructure Monitoring
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-4">
                {[
                  { name: 'Mobile Network Feeds', status: 'Active', icon: Activity },
                  { name: 'Public System Monitoring', status: 'Active', icon: Monitor },
                  { name: 'Geo-based Threat Signals', status: 'Active', icon: Globe },
                ].map((item, i) => (
                  <div key={i} className="p-5 bg-[#020617] border border-[#1E293B] rounded-2xl flex items-center justify-between group hover:border-blue-500/30 transition-all">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                        <item.icon size={20} />
                      </div>
                      <h4 className="text-sm font-bold text-white">{item.name}</h4>
                    </div>
                    <Badge className="bg-emerald-500/10 text-emerald-400 border-none">LIVE FEED</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Webhooks Section */}
      <Card className="mt-8 border-[#1E293B] bg-[#0F172A] rounded-[2.5rem] overflow-hidden shadow-xl">
        <CardHeader className="p-8 border-b border-[#1E293B] flex flex-row items-center justify-between">
          <CardTitle className="text-white text-lg flex items-center gap-3">
            <Zap className="text-amber-400" size={20} /> Active Webhooks
          </CardTitle>
          <Button variant="outline" size="sm" className="rounded-xl border-[#1E293B] text-white hover:bg-[#1E293B]">
            <Plus size={14} className="mr-2" /> Add Webhook
          </Button>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-[#020617]/50 text-slate-500 text-[10px] uppercase font-black tracking-widest">
                  <th className="px-8 py-4">Webhook ID</th>
                  <th className="px-8 py-4">Event Type</th>
                  <th className="px-8 py-4">URL</th>
                  <th className="px-8 py-4">Status</th>
                  <th className="px-8 py-4 text-right">Last Triggered</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1E293B]">
                {[
                  { id: 'WH-902', event: 'content.flagged', url: 'https://api.client.com/hooks', status: 'Active', time: '2m ago' },
                  { id: 'WH-903', event: 'threat.detected', url: 'https://nitrs.gov.in/alerts', status: 'Active', time: '15m ago' },
                ].map((hook) => (
                  <tr key={hook.id} className="hover:bg-[#1E293B]/30 transition-colors">
                    <td className="px-8 py-5 font-mono text-xs text-blue-400">{hook.id}</td>
                    <td className="px-8 py-5 text-xs font-bold text-white">{hook.event}</td>
                    <td className="px-8 py-5 text-xs text-slate-500 truncate max-w-[200px]">{hook.url}</td>
                    <td className="px-8 py-5">
                      <Badge className="bg-emerald-500/10 text-emerald-400 border-none">{hook.status}</Badge>
                    </td>
                    <td className="px-8 py-5 text-right text-xs text-slate-500">{hook.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Data Flow Visual */}
      <div className="mt-12 p-12 bg-[#020617] border border-[#1E293B] rounded-[3rem] text-center">
        <h3 className="text-xl font-black text-white uppercase tracking-tighter mb-8">Secure AI Data Pipeline</h3>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {[
            { label: 'Device / Platform', icon: Smartphone },
            { label: 'AI Detection', icon: Zap },
            { label: 'Enforcement Engine', icon: ShieldAlert },
            { label: 'Audit Logs', icon: History },
          ].map((step, i, arr) => (
            <React.Fragment key={i}>
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-400 border border-blue-500/20">
                  <step.icon size={32} />
                </div>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{step.label}</span>
              </div>
              {i < arr.length - 1 && (
                <div className="hidden md:block w-12 h-0.5 bg-gradient-to-r from-blue-500/50 to-blue-500/10" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

const Plus = ({ className, size }: { className?: string, size?: number }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5v14" />
  </svg>
);