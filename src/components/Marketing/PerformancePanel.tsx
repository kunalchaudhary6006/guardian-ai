"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { TrendingUp, MousePointer2, Target, DollarSign } from 'lucide-react';

const data = [
  { name: 'Mon', reach: 4500, ctr: 3.2, conv: 120 },
  { name: 'Tue', reach: 5200, ctr: 3.8, conv: 145 },
  { name: 'Wed', reach: 4800, ctr: 3.5, conv: 130 },
  { name: 'Thu', reach: 6100, ctr: 4.2, conv: 180 },
  { name: 'Fri', reach: 5900, ctr: 4.0, conv: 165 },
  { name: 'Sat', reach: 7200, ctr: 5.1, conv: 210 },
  { name: 'Sun', reach: 6800, ctr: 4.8, conv: 195 },
];

export default function PerformancePanel() {
  return (
    <Card className="border-[#1E293B] bg-[#0F172A] rounded-[2.5rem] shadow-xl">
      <CardHeader className="p-8 border-b border-[#1E293B]">
        <CardTitle className="text-white text-lg uppercase tracking-widest">5. Live Performance Intelligence</CardTitle>
      </CardHeader>
      <CardContent className="p-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { label: 'Total Reach', value: '40.5K', icon: Target, color: 'text-blue-400' },
            { label: 'Avg. CTR', value: '4.2%', icon: MousePointer2, color: 'text-indigo-400' },
            { label: 'Conversions', value: '1,145', icon: CheckCircle2, color: 'text-emerald-400' },
            { label: 'ROI Forecast', value: '3.8x', icon: DollarSign, color: 'text-teal-400' },
          ].map((stat, i) => (
            <div key={i} className="p-4 bg-[#020617] border border-[#1E293B] rounded-2xl">
              <div className="flex items-center gap-2 text-slate-500 mb-2">
                <stat.icon size={14} />
                <span className="text-[10px] font-black uppercase tracking-widest">{stat.label}</span>
              </div>
              <p className="text-xl font-black text-white">{stat.value}</p>
            </div>
          ))}
        </div>

        <Tabs defaultValue="reach" className="w-full">
          <TabsList className="bg-[#020617] border border-[#1E293B] p-1 h-auto gap-1 mb-6">
            {['Reach', 'CTR', 'Conversion', 'Revenue'].map(t => (
              <TabsTrigger key={t} value={t.toLowerCase()} className="flex-1 data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-xl text-[10px] font-black uppercase tracking-widest py-2">
                {t}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorPerf" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1E293B" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <Tooltip contentStyle={{ backgroundColor: '#0F172A', border: '1px solid #1E293B', borderRadius: '12px' }} />
                <Area type="monotone" dataKey="reach" stroke="#3b82f6" fillOpacity={1} fill="url(#colorPerf)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Tabs>
      </CardContent>
    </Card>
  );
}

import { CheckCircle2 } from 'lucide-react';