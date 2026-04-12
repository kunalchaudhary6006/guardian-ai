"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';

export default function RiskBreakdown({ data }: { data: any }) {
  if (!data?.breakdown) return null;

  const chartData = [
    { name: 'Content', value: data.breakdown.content, color: '#3b82f6' },
    { name: 'Audience', value: data.breakdown.audience, color: '#6366f1' },
    { name: 'Alignment', value: data.breakdown.alignment, color: '#8b5cf6' },
    { name: 'Violations', value: 100 - (data.breakdown.violations * 20), color: '#f43f5e' },
    { name: 'Network', value: 100 - data.breakdown.network, color: '#f59e0b' },
  ];

  return (
    <Card className="border-slate-200 bg-white rounded-[2.5rem] overflow-hidden shadow-sm">
      <CardHeader className="p-8 border-b border-slate-100">
        <CardTitle className="text-slate-900 text-lg uppercase tracking-widest font-black">Risk Intelligence Breakdown</CardTitle>
      </CardHeader>
      <CardContent className="p-8">
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} layout="vertical" margin={{ left: 20, right: 20 }}>
              <XAxis type="number" hide domain={[0, 100]} />
              <YAxis 
                dataKey="name" 
                type="category" 
                axisLine={false} 
                tickLine={false} 
                tick={{fill: '#64748b', fontSize: 12, fontWeight: 'bold'}} 
                width={100} 
              />
              <Tooltip 
                cursor={{fill: '#f8fafc'}}
                contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px' }} 
              />
              <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={24}>
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-4">
          {chartData.map((item, i) => (
            <div key={i} className="text-center">
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">{item.name}</p>
              <p className="text-sm font-black text-slate-900">{item.value}%</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}