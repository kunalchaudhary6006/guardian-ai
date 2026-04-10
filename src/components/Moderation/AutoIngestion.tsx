"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Instagram, 
  Facebook, 
  Twitter, 
  Youtube, 
  Globe, 
  Database, 
  Zap, 
  Filter, 
  MoreHorizontal,
  CheckCircle2,
  AlertTriangle,
  XCircle
} from 'lucide-react';
import { toast } from 'sonner';

const platforms = [
  { id: 'instagram', name: 'Instagram', icon: Instagram, status: 'Connected', freq: 'Real-time', color: 'text-pink-500' },
  { id: 'facebook', name: 'Facebook', icon: Facebook, status: 'Connected', freq: 'Real-time', color: 'text-blue-500' },
  { id: 'x', name: 'X (Twitter)', icon: Twitter, status: 'Connected', freq: 'Real-time', color: 'text-white' },
  { id: 'youtube', name: 'YouTube', icon: Youtube, status: 'Not Connected', freq: 'N/A', color: 'text-rose-500' },
  { id: 'cms', name: 'Enterprise CMS', icon: Database, status: 'Connected', freq: '5 min', color: 'text-emerald-500' },
  { id: 'app', name: 'App Backend', icon: Globe, status: 'Connected', freq: 'Real-time', color: 'text-indigo-500' },
];

const liveFeed = [
  { id: 'EVT-902', platform: 'Instagram', type: 'Image', risk: 88, decision: 'Blocked', time: '2m ago' },
  { id: 'EVT-903', platform: 'X', type: 'Text', risk: 42, decision: 'Allowed', time: '5m ago' },
  { id: 'EVT-904', platform: 'Facebook', type: 'Video', risk: 65, decision: 'Flagged', time: '12m ago' },
];

export default function AutoIngestion() {
  return (
    <div className="space-y-8">
      {/* Platform Connections */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {platforms.map((p) => (
          <Card key={p.id} className="border-[#1E293B] bg-[#0F172A] rounded-3xl hover:border-blue-500/30 transition-all group">
            <CardContent className="p-6 flex flex-col items-center text-center gap-4">
              <div className={`p-3 rounded-2xl bg-[#020617] ${p.color} group-hover:scale-110 transition-transform`}>
                <p.icon size={24} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">{p.name}</h4>
                <Badge className={`mt-2 border-none text-[8px] font-black uppercase tracking-widest ${
                  p.status === 'Connected' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-slate-800 text-slate-500'
                }`}>
                  {p.status}
                </Badge>
              </div>
              {p.status === 'Connected' ? (
                <Button variant="ghost" size="sm" className="text-[10px] font-black text-blue-400 uppercase tracking-widest hover:bg-blue-500/10">Analyze Now</Button>
              ) : (
                <Button variant="ghost" size="sm" className="text-[10px] font-black text-slate-500 uppercase tracking-widest hover:bg-white/5">Connect</Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Live Moderation Feed */}
        <div className="lg:col-span-2">
          <Card className="border-[#1E293B] bg-[#0F172A] rounded-[2.5rem] overflow-hidden shadow-xl">
            <CardHeader className="p-8 border-b border-[#1E293B] flex flex-row items-center justify-between">
              <div className="flex items-center gap-3">
                <CardTitle className="text-white text-lg">Auto Moderation Feed</CardTitle>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Live</span>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="text-slate-500 hover:text-white rounded-xl">
                <Filter size={14} className="mr-2" /> Filters
              </Button>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-[#020617]/50 text-slate-500 text-[10px] uppercase font-black tracking-widest">
                      <th className="px-8 py-4">Platform</th>
                      <th className="px-8 py-4">Type</th>
                      <th className="px-8 py-4">Risk Score</th>
                      <th className="px-8 py-4">Decision</th>
                      <th className="px-8 py-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#1E293B]">
                    {liveFeed.map((item) => (
                      <tr key={item.id} className="hover:bg-[#1E293B]/30 transition-colors group cursor-pointer">
                        <td className="px-8 py-5">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-[#020617] rounded-lg flex items-center justify-center text-slate-400">
                              {item.platform === 'Instagram' && <Instagram size={14} />}
                              {item.platform === 'X' && <Twitter size={14} />}
                              {item.platform === 'Facebook' && <Facebook size={14} />}
                            </div>
                            <span className="text-sm font-bold text-white">{item.platform}</span>
                          </div>
                        </td>
                        <td className="px-8 py-5 text-xs text-slate-400">{item.type}</td>
                        <td className="px-8 py-5">
                          <div className="flex items-center gap-2">
                            <div className="w-12 bg-[#020617] h-1.5 rounded-full overflow-hidden">
                              <div className={`h-full ${item.risk > 70 ? 'bg-rose-500' : item.risk > 40 ? 'bg-amber-500' : 'bg-emerald-500'}`} style={{ width: `${item.risk}%` }} />
                            </div>
                            <span className="text-xs font-bold text-white">{item.risk}%</span>
                          </div>
                        </td>
                        <td className="px-8 py-5">
                          <Badge className={`border-none text-[8px] font-black uppercase tracking-widest ${
                            item.decision === 'Blocked' ? 'bg-rose-500/10 text-rose-400' : 
                            item.decision === 'Flagged' ? 'bg-amber-500/10 text-amber-400' : 
                            'bg-emerald-500/10 text-emerald-400'
                          }`}>
                            {item.decision}
                          </Badge>
                        </td>
                        <td className="px-8 py-5 text-right">
                          <Button variant="ghost" size="icon" className="rounded-xl hover:bg-blue-500/10 text-slate-500 hover:text-blue-400">
                            <MoreHorizontal size={16} />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Auto Enforcement Rules */}
        <div className="space-y-6">
          <Card className="border-[#1E293B] bg-[#0F172A] rounded-[2.5rem] shadow-xl">
            <CardHeader>
              <CardTitle className="text-white text-lg flex items-center gap-2">
                <Zap className="text-blue-400" size={20} fill="currentColor" /> Auto Enforcement
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                {[
                  { if: 'Risk > 80%', then: 'Block Content', icon: XCircle, color: 'text-rose-500' },
                  { if: 'Risk > 50%', then: 'Send to Moderator', icon: AlertTriangle, color: 'text-amber-500' },
                  { if: 'Risk < 20%', then: 'Auto-Approve', icon: CheckCircle2, color: 'text-emerald-500' },
                ].map((rule, i) => (
                  <div key={i} className="p-4 bg-[#020617] border border-[#1E293B] rounded-2xl space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Rule {i+1}</span>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-[#0F172A] ${rule.color}`}>
                        <rule.icon size={16} />
                      </div>
                      <div>
                        <p className="text-xs text-white font-bold">IF {rule.if}</p>
                        <p className="text-[10px] text-slate-500 uppercase tracking-widest">THEN {rule.then}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full border-[#1E293B] text-white hover:bg-[#1E293B] rounded-xl font-bold">
                Create New Rule
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}