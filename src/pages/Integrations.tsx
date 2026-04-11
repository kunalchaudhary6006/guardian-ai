"use client";

import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { 
  Smartphone, 
  Globe, 
  Share2, 
  Cloud, 
  CheckCircle2, 
  Zap, 
  ShieldCheck,
  Monitor,
  Chrome,
  Instagram,
  MessageCircle,
  Youtube,
  Database
} from 'lucide-react';
import { toast } from 'sonner';

const categories = [
  {
    title: "Device & OS Integration",
    icon: Smartphone,
    items: [
      { name: "Android System Service", desc: "APK / MDM level monitoring", status: "Connected" },
      { name: "iOS Profile Integration", desc: "Screen Time / VPN config", status: "Not Connected" },
      { name: "Windows Agent", desc: "Background monitoring", status: "Connected" },
      { name: "macOS Security Extension", desc: "System-level enforcement", status: "Not Connected" },
    ]
  },
  {
    title: "Browser & Network",
    icon: Globe,
    items: [
      { name: "Chrome Extension", desc: "Real-time web scanning", status: "Connected" },
      { name: "Edge Extension", desc: "Adult site blocking", status: "Connected" },
      { name: "DNS Filtering", desc: "Router-level protection", status: "Not Connected" },
      { name: "VPN-based Filtering", desc: "Network-wide enforcement", status: "Not Connected" },
    ]
  },
  {
    title: "App & Platform",
    icon: Share2,
    items: [
      { name: "Instagram Monitoring", desc: "Media analysis & detection", status: "Connected" },
      { name: "WhatsApp Scanning", desc: "Media content filtering", status: "Not Connected" },
      { name: "YouTube Restricted Mode", desc: "Enforced safe viewing", status: "Connected" },
      { name: "TikTok Detection", desc: "Unsafe content auto-blur", status: "Connected" },
    ]
  },
  {
    title: "Cloud & API",
    icon: Cloud,
    items: [
      { name: "REST API", desc: "Third-party app connectivity", status: "Connected" },
      { name: "School Dashboard", desc: "Centralized monitoring", status: "Not Connected" },
      { name: "Gov System Integration", desc: "Regulatory compliance", status: "Not Connected" },
    ]
  }
];

export default function Integrations() {
  const handleToggle = (name: string) => {
    toast.success(`${name} integration updated.`);
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-black text-white uppercase tracking-tighter flex items-center gap-3">
            <Share2 className="text-blue-500" size={32} /> Integrations Hub
          </h1>
          <p className="text-slate-400 text-sm mt-1">Deep system-level connectivity across devices, OS, networks, and platforms.</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 rounded-2xl gap-2 h-11 px-6 shadow-lg shadow-blue-900/20 font-bold">
          <Zap size={18} fill="currentColor" /> One-Click Secure Setup
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {categories.map((cat, i) => (
          <Card key={i} className="border-[#1E293B] bg-[#0B1220] rounded-[2.5rem] overflow-hidden shadow-xl">
            <CardHeader className="p-8 border-b border-[#1E293B] bg-[#020617]/50">
              <CardTitle className="text-white text-lg flex items-center gap-3">
                <div className="p-2 bg-blue-600/10 rounded-xl text-blue-400">
                  <cat.icon size={20} />
                </div>
                {cat.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <div className="space-y-4">
                {cat.items.map((item, j) => (
                  <div key={j} className="p-5 bg-[#020617] border border-[#1E293B] rounded-2xl flex items-center justify-between group hover:border-blue-500/30 transition-all">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.status === 'Connected' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-slate-800 text-slate-500'}`}>
                        {item.name.includes('Android') && <Smartphone size={20} />}
                        {item.name.includes('Chrome') && <Chrome size={20} />}
                        {item.name.includes('Instagram') && <Instagram size={20} />}
                        {item.name.includes('API') && <Database size={20} />}
                        {!['Android', 'Chrome', 'Instagram', 'API'].some(k => item.name.includes(k)) && <Monitor size={20} />}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">{item.name}</h4>
                        <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right hidden sm:block">
                        <Badge className={`border-none text-[8px] font-black uppercase tracking-widest ${item.status === 'Connected' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-slate-800 text-slate-500'}`}>
                          {item.status}
                        </Badge>
                        {item.status === 'Connected' && <p className="text-[8px] text-emerald-500 font-bold mt-1">SYNCED</p>}
                      </div>
                      <Switch 
                        defaultChecked={item.status === 'Connected'} 
                        onCheckedChange={() => handleToggle(item.name)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 p-8 bg-blue-600/5 border border-blue-500/20 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-900/20">
            <ShieldCheck size={28} />
          </div>
          <div>
            <h3 className="text-xl font-black text-white uppercase tracking-tighter">360° AI Safety Enforcement</h3>
            <p className="text-slate-400 text-sm">Unified protection across all connected endpoints and cloud services.</p>
          </div>
        </div>
        <Button variant="outline" className="border-[#1E293B] text-white hover:bg-[#1E293B] rounded-xl h-12 px-8 font-bold">
          View Global Sync Status
        </Button>
      </div>
    </DashboardLayout>
  );
}