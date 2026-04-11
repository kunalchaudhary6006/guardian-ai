"use client";

import React from "react";
import Sidebar from "@/components/Sidebar";
import WelcomeHeader from "@/components/WelcomeHeader";
import AlertPanel from "@/components/AlertPanel";
import ActivityFeed from "@/components/ActivityFeed";
import ContentSafetyAI from "@/components/ContentSafetyAI";
import { 
  ShieldAlert, 
  Zap, 
  ShieldBan, 
  Lock, 
  Eye, 
  BarChart3, 
  Clock, 
  Database,
  Activity as ActivityIcon,
  Baby
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";

export default function Dashboard() {
  return (
    <div className="flex bg-[#020617] min-h-screen text-white">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <main className="p-6 lg:p-8 space-y-8 max-w-7xl mx-auto w-full">
          <WelcomeHeader />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Panels */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* 1. REAL-TIME ACTIVITY PANEL */}
              <ActivityFeed />

              {/* 2. VIOLATION TRACKER (Timeline Visualization) */}
              <Card className="border-[#1E293B] bg-[#0B1220] rounded-3xl shadow-xl">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <ShieldAlert className="text-rose-500" size={20} /> Violation Tracker
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#1E293B]">
                    {[
                      { type: 'Image', desc: 'NSFW content detected on Device-04', time: '2m ago', color: 'bg-rose-500' },
                      { type: 'Website', desc: 'Restricted domain access attempt', time: '15m ago', color: 'bg-amber-500' },
                      { type: 'Video', desc: 'Unsafe visual patterns identified', time: '1h ago', color: 'bg-rose-500' },
                    ].map((v, i) => (
                      <div key={i} className="relative pl-8 flex items-center justify-between group">
                        <div className={`absolute left-0 w-4 h-4 rounded-full ${v.color} border-4 border-[#0B1220]`} />
                        <div>
                          <p className="text-sm font-bold text-white">{v.type} Violation</p>
                          <p className="text-xs text-slate-500">{v.desc}</p>
                        </div>
                        <span className="text-[10px] font-bold text-slate-600 uppercase">{v.time}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* 3. ENFORCEMENT PANEL */}
              <Card className="border-none bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2.5rem] text-white shadow-2xl shadow-blue-900/20">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-lg font-black uppercase tracking-widest flex items-center gap-2">
                    <Zap size={20} fill="currentColor" /> Enforcement Panel
                  </CardTitle>
                  <Badge className="bg-white/20 text-white border-none">AI Active</Badge>
                </CardHeader>
                <CardContent>
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

              {/* 4. CHILD SAFETY MODE */}
              <Card className="border-[#1E293B] bg-[#0B1220] rounded-3xl">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-white flex items-center gap-2">
                    <Baby className="text-blue-400" size={20} /> Child Safety Mode
                  </CardTitle>
                  <Switch defaultChecked />
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 bg-[#020617] border border-[#1E293B] rounded-2xl">
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-2">Parental Alerts</p>
                    <p className="text-xs text-slate-300">Real-time notifications for restricted content attempts are <span className="text-emerald-500 font-bold">Enabled</span>.</p>
                  </div>
                  <div className="p-4 bg-[#020617] border border-[#1E293B] rounded-2xl">
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-2">Restricted Logs</p>
                    <p className="text-xs text-slate-300">Access to detailed browsing history is <span className="text-blue-400 font-bold">Locked</span> by Admin.</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* 5. RIGHT PANEL: RISK INTELLIGENCE */}
              <Card className="border-[#1E293B] bg-[#0B1220] rounded-3xl">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <BarChart3 className="text-blue-400" size={20} /> Risk Intelligence
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="p-4 bg-[#020617] border border-[#1E293B] rounded-2xl text-center">
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Risk Score</p>
                    <h3 className="text-3xl font-black text-white">12%</h3>
                    <Badge className="mt-2 bg-emerald-500/10 text-emerald-400">Low Risk</Badge>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-slate-400">Behavior Analytics</span>
                      <span className="text-xs font-bold text-blue-400">Stable</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-slate-400">Predictive Alerts</span>
                      <span className="text-xs font-bold text-white">0 Active</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <ContentSafetyAI />
            </div>
          </div>

          {/* 6. BOTTOM SECTION: LOGS TABLE */}
          <Card className="border-[#1E293B] bg-[#0B1220] rounded-3xl overflow-hidden">
            <CardHeader className="border-b border-[#1E293B]">
              <CardTitle className="text-white text-sm uppercase tracking-widest">System Logs</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="bg-[#020617] text-slate-500 uppercase font-black tracking-widest">
                      <th className="px-6 py-4">Device</th>
                      <th className="px-6 py-4">Action</th>
                      <th className="px-6 py-4">Result</th>
                      <th className="px-6 py-4 text-right">Timestamp</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#1E293B]">
                    {[
                      { device: 'Android-Tablet', action: 'URL Scan', result: 'Blocked', time: '12:30:01' },
                      { device: 'Windows-PC', action: 'File Scan', result: 'Clean', time: '12:28:45' },
                      { device: 'iPhone-15', action: 'App Monitor', result: 'Verified', time: '12:25:12' },
                    ].map((log, i) => (
                      <tr key={i} className="hover:bg-[#1E293B]/30 transition-colors">
                        <td className="px-6 py-4 font-bold text-white">{log.device}</td>
                        <td className="px-6 py-4 text-slate-400">{log.action}</td>
                        <td className="px-6 py-4">
                          <Badge className={log.result === 'Blocked' ? 'bg-rose-500/10 text-rose-400' : 'bg-emerald-500/10 text-emerald-400'}>
                            {log.result}
                          </Badge>
                        </td>
                        <td className="px-6 py-4 text-right text-slate-500 font-mono">{log.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <footer className="text-center pt-8 border-t border-[#1E293B]">
            <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest">360° AI Safety Enforcement System</p>
          </footer>
        </main>
      </div>
    </div>
  );
}