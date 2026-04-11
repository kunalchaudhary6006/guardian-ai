"use client";

import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Activity as ActivityIcon, 
  ShieldAlert, 
  ShieldCheck, 
  Clock, 
  Filter,
  Type,
  Image as ImageIcon,
  Video,
  Globe
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const activities = [
  { type: 'Image', content: 'Detected NSFW content in browser', risk: 'Critical', action: 'Blocked', time: 'Just now', icon: ImageIcon, color: 'text-rose-500' },
  { type: 'Text', content: 'Hate speech detected in chat', risk: 'High', action: 'Flagged', time: '2m ago', icon: Type, color: 'text-orange-500' },
  { type: 'Website', content: 'Access to restricted domain blocked', risk: 'Medium', action: 'Blocked', time: '5m ago', icon: Globe, color: 'text-amber-500' },
  { type: 'Video', content: 'Unsafe visual patterns identified', risk: 'High', action: 'Blurred', time: '12m ago', icon: Video, color: 'text-rose-500' },
  { type: 'System', content: 'New device agent connected', risk: 'Low', action: 'Verified', time: '20m ago', icon: ShieldCheck, color: 'text-emerald-500' },
];

export default function Activity() {
  return (
    <DashboardLayout>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-black text-white uppercase tracking-tighter flex items-center gap-3">
            <ActivityIcon className="text-blue-500" size={32} /> Real-time Activity
          </h1>
          <p className="text-slate-400 text-sm mt-1">Live feed of detected content, risk levels, and automated enforcement actions.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="rounded-xl border-[#1E293B] bg-[#0B1220] text-white hover:bg-[#1E293B] gap-2">
            <Filter size={16} /> Filters
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 rounded-xl gap-2 font-bold">
            Export Logs
          </Button>
        </div>
      </div>

      <Card className="border-[#1E293B] bg-[#0B1220] rounded-[2.5rem] overflow-hidden shadow-xl">
        <CardHeader className="p-8 border-b border-[#1E293B] bg-[#020617]/50 flex flex-row items-center justify-between">
          <CardTitle className="text-white text-lg flex items-center gap-2">
            <ActivityIcon className="text-blue-400" size={20} /> Live Activity Feed
          </CardTitle>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Live Monitoring</span>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="divide-y divide-[#1E293B]">
            {activities.map((act, i) => (
              <div key={i} className="p-6 flex items-center justify-between hover:bg-[#1E293B]/30 transition-colors group">
                <div className="flex items-center gap-6">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-[#020617] border border-[#1E293B] ${act.color} group-hover:scale-110 transition-transform`}>
                    <act.icon size={24} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h4 className="text-white font-bold">{act.content}</h4>
                      <Badge className={`border-none text-[8px] font-black uppercase tracking-widest ${
                        act.risk === 'Critical' ? 'bg-rose-600 text-white' :
                        act.risk === 'High' ? 'bg-rose-500/10 text-rose-400' : 
                        act.risk === 'Medium' ? 'bg-amber-500/10 text-amber-400' : 
                        'bg-emerald-500/10 text-emerald-400'
                      }`}>
                        {act.risk}
                      </Badge>
                    </div>
                    <p className="text-xs text-slate-500 flex items-center gap-2">
                      <span className="font-bold text-blue-400 uppercase tracking-widest text-[10px]">{act.type}</span>
                      <span className="w-1 h-1 bg-slate-700 rounded-full" />
                      <span>Action: {act.action}</span>
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-white font-bold">{act.time}</p>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Detected</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
}