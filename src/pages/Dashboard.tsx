"use client";

import React from "react";
import Sidebar from "@/components/Sidebar";
import WelcomeHeader from "@/components/WelcomeHeader";
import AlertPanel from "@/components/AlertPanel";
import ModuleCard from "@/components/ModuleCard";
import AIChat from "@/components/AIChat";
import ContentSafetyAI from "@/components/ContentSafetyAI";
import ActivityFeed from "@/components/ActivityFeed";
import { 
  ShieldAlert, 
  FileCheck, 
  Search, 
  ShieldCheck, 
  BarChart3, 
  ShieldBan,
  Lock,
  UserCheck,
  Shield,
  Smartphone,
  Globe,
  Cloud,
  Zap,
  Eye,
  Baby,
  Activity as ActivityIcon,
  Share2,
  Sparkles
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Dashboard() {
  const modules = [
    { title: "Violations", icon: ShieldAlert, path: "/moderation" },
    { title: "Enforcement", icon: FileCheck, path: "/policy" },
    { title: "Analytics", icon: Search, path: "/analytics" },
    { title: "Activity", icon: ActivityIcon, path: "/activity" },
    { title: "Marketing Intelligence", icon: Sparkles, path: "/marketing" },
    { title: "Threat Intelligence", icon: ShieldCheck, path: "/threats" },
  ];

  return (
    <div className="flex bg-[#020617] min-h-screen text-white">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <main className="p-6 lg:p-8 space-y-8 max-w-7xl mx-auto w-full">
          <WelcomeHeader />

          {/* System Layers Visual */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Device-Level Monitoring", icon: Smartphone, items: ["File scanning", "Screenshot detection", "Background agent"], color: "text-blue-400" },
              { title: "Platform-Level Control", icon: Globe, items: ["Browser blocking", "App monitoring", "Network filtering"], color: "text-indigo-400" },
              { title: "Cloud AI Intelligence", icon: Cloud, items: ["Multi-modal detection", "Central control", "Predictive alerts"], color: "text-violet-400" },
            ].map((layer, i) => (
              <Card key={i} className="border-[#1E293B] bg-[#0B1220] rounded-3xl shadow-lg group hover:border-blue-500/30 transition-all">
                <CardContent className="p-6">
                  <div className={`p-3 rounded-2xl bg-[#020617] border border-[#1E293B] w-fit mb-4 ${layer.color}`}>
                    <layer.icon size={24} />
                  </div>
                  <h3 className="text-lg font-black text-white uppercase tracking-tighter mb-4">{layer.title}</h3>
                  <ul className="space-y-2">
                    {layer.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-xs text-slate-400">
                        <div className="w-1 h-1 bg-blue-500 rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <AlertPanel />

              {/* Enforcement Panel */}
              <Card className="border-none bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2.5rem] text-white shadow-2xl shadow-blue-900/20">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-lg font-black uppercase tracking-widest flex items-center gap-2">
                    <Zap size={20} fill="currentColor" /> Enforcement Panel
                  </CardTitle>
                  <Badge className="bg-white/20 text-white border-none">AI Active</Badge>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <Button className="bg-white/10 hover:bg-white/20 text-white rounded-xl h-12 font-bold gap-2 border border-white/20">
                      <ShieldAlert size={18} /> Warning
                    </Button>
                    <Button className="bg-white/10 hover:bg-white/20 text-white rounded-xl h-12 font-bold gap-2 border border-white/20">
                      <Eye size={18} /> Blur
                    </Button>
                    <Button className="bg-rose-600 hover:bg-rose-700 text-white rounded-xl h-12 font-bold gap-2 shadow-lg shadow-rose-900/20">
                      <ShieldBan size={18} /> Block
                    </Button>
                    <Button className="bg-slate-900 hover:bg-black text-white rounded-xl h-12 font-bold gap-2 border border-white/10">
                      <Lock size={18} /> Admin Lock
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Core Modules - Exactly 6 Features */}
              <div>
                <h3 className="text-sm font-black text-slate-500 uppercase tracking-widest mb-4">360° AI Safety Enforcement</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {modules.map((m, i) => (
                    <ModuleCard key={i} title={m.title} icon={m.icon} path={m.path} />
                  ))}
                </div>
              </div>

              {/* Risk Intelligence */}
              <Card className="border-[#1E293B] bg-[#0B1220] rounded-3xl">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <BarChart3 className="text-blue-400" size={20} /> Risk Intelligence
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-4 bg-[#020617] border border-[#1E293B] rounded-2xl text-center">
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Risk Score</p>
                    <h3 className="text-2xl font-black text-white">12%</h3>
                    <Badge className="mt-2 bg-emerald-500/10 text-emerald-400">Low Risk</Badge>
                  </div>
                  <div className="p-4 bg-[#020617] border border-[#1E293B] rounded-2xl text-center">
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Behavior Analytics</p>
                    <h3 className="text-2xl font-black text-white">Stable</h3>
                    <Badge className="mt-2 bg-blue-500/10 text-blue-400">Normal</Badge>
                  </div>
                  <div className="p-4 bg-[#020617] border border-[#1E293B] rounded-2xl text-center">
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Predictive Alerts</p>
                    <h3 className="text-2xl font-black text-white">0</h3>
                    <Badge className="mt-2 bg-slate-800 text-slate-500">None</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <ContentSafetyAI />
              <AIChat />
              <ActivityFeed />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}