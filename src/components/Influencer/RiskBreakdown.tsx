import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

export default function RiskBreakdown({ data }: { data: any }) {
  const chartData = [
    { name: 'Content', value: data.breakdown.content, color: '#3b82f6' },
    { name: 'Audience', value: data.breakdown.audience, color: '#6366f1' },
    { name: 'Alignment', value: data.breakdown.alignment, color: '#8b5cf6' },
    { name: 'Violations', value: 100 - (data.breakdown.violations * 20), color: '#f43f5e' },
    { name: 'Network', value: 100 - data.breakdown.network, color: '#f59e0b' },
  ];

  return (
    <Card className="border-[#1E293B] bg-[#0F172A] rounded-[2.5rem] overflow-hidden shadow-xl">
      <CardHeader className="p-8 border-b border-[#1E293B]">
        <CardTitle className="text-white text-lg uppercase tracking-widest">Risk Intelligence Breakdown</CardTitle>
      </CardHeader>
      <CardContent className="p-8">
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} layout="vertical">
              <XAxis type="number" hide domain={[0, 100]} />
              <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12, fontWeight: 'bold'}} width={100} />
              <Tooltip contentStyle={{ backgroundColor: '#0F172A', border: '1px solid #1E293B', borderRadius: '12px' }} />
              <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={24}>
                {chartData.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Bar>
            </ResponsiveContainer>
          </ResponsiveContainer>
        </div>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-4">
          {chartData.map((item, i) => (
            <div key={i} className="text-center">
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">{item.name}</p>
              <p className="text-sm font-bold text-white">{item.value}%</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}