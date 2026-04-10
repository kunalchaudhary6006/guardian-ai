"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const pieData = [{ name: 'Safe', value: 87 }, { name: 'Risk', value: 13 }];
const barData = [
  { name: 'Content', value: 30 },
  { name: 'Policy', value: 15 },
  { name: 'Sentiment', value: 10 },
  { name: 'Context', value: 25 },
  { name: 'Creator', value: 20 },
];

export default function RiskAssessment() {
  return (
    <Card className="border-[#1E293B] bg-[#0F172A] rounded-3xl shadow-xl">
      <CardHeader>
        <CardTitle className="text-white text-lg">Campaign Risk Assessment</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center justify-center relative">
          <div className="h-[200px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={pieData} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                  <Cell fill="#3b82f6" />
                  <Cell fill="#1E293B" />
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center pt-8">
            <span className="text-3xl font-black text-white">87%</span>
            <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">Safe</span>
          </div>
          <p className="text-xs text-slate-500 mt-4 text-center">Overall Risk Score: Safe to Run</p>
        </div>

        <div className="h-[200px]">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">Risk Contribution Breakdown</p>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData} layout="vertical">
              <XAxis type="number" hide />
              <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 10}} width={70} />
              <Tooltip cursor={{fill: 'transparent'}} contentStyle={{backgroundColor: '#0F172A', border: '1px solid #1E293B', borderRadius: '12px'}} />
              <Bar dataKey="value" fill="#3b82f6" radius={[0, 4, 4, 0]} barSize={12} />
            </BarChart>
          </ResponsiveContainer>
          <p className="text-[10px] text-slate-600 italic mt-2">Powered by Explainable AI (XGBoost)</p>
        </div>
      </CardContent>
    </Card>
  );
}