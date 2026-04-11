"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { Activity, Clock } from 'lucide-react';

const trendData = [
  { name: 'Jan', risk: 15, engagement: 4.2 },
  { name: 'Feb', risk: 12, engagement: 4.5 },
  { name: 'Mar', risk: 18, engagement: 4.1 },
  { name: 'Apr', risk: 14, engagement: 4.8 },
  { name: 'May', risk: 10, engagement: 5.2 },
  { name: 'Jun', risk: 13, engagement: 4.8 },
];

export default function TrendMonitoring({ data }: { data: any }) {
  return (
    <Card className="border-[#1E293B] bg-[#0F172A] rounded-[2.5rem] overflow-hidden shadow-xl">
      <CardHeader className="p-8 border-b border-[#1E293B] flex flex-row items-center justify-between">
        <CardTitle className="text-white text-lg flex items-center gap-2">
          <Activity className="text-blue-400" size={20} /> 6-Month Risk & Performance Trend
        </CardTitle>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Live Monitoring</span>
        </div>
      </CardHeader>
      <CardContent className="p-8">
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={trendData}>
              <defs>
                <linearGradient id="colorRisk" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1E293B" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
              <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
              <Tooltip contentStyle={{ backgroundColor: '#0F172A', border: '1px solid #1E293B', borderRadius: '12px' }} />
              <Area type="monotone" dataKey="risk" stroke="#3b82f6" fillOpacity={1} fill="url(#colorRisk)" strokeWidth={3} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mt-8 pt-8 border-t border-[#1E293B]">
          <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Recent Activity Logs</p>
          <div className="space-y-3">
            {[
              { event: 'Content Posted', details: 'Lifestyle reel with 120k views', time: '2h ago', type: 'post' },
              { event: 'Brand Mention', details: 'Tagged @TechFlow in story', time: '5h ago', type: 'mention' },
              { event: 'Engagement Spike', details: '+12% above baseline', time: '1d ago', type: 'spike' },
            ].map((log, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-[#020617] border border-[#1E293B] rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <span className="text-xs font-bold text-white">{log.event}</span>
                  <span className="text-xs text-slate-500">{log.details}</span>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-slate-600">
                  <Clock size={10} /> {log.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}