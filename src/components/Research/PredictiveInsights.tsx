"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { Zap, TrendingUp, Clock } from 'lucide-react';

const data = [
  { name: 'Day 1', actual: 400, forecast: 400 },
  { name: 'Day 2', actual: 450, forecast: 450 },
  { name: 'Day 3', actual: 420, forecast: 420 },
  { name: 'Day 4', forecast: 500 },
  { name: 'Day 5', forecast: 580 },
  { name: 'Day 6', forecast: 650 },
  { name: 'Day 7', forecast: 720 },
];

export default function PredictiveInsights() {
  return (
    <Card className="border-[#1E293B] bg-[#0F172A] rounded-3xl shadow-xl">
      <CardHeader>
        <CardTitle className="text-white text-lg flex items-center gap-2">
          <Zap className="text-blue-400" size={20} fill="currentColor" /> Predictive Insights
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="h-[200px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorForecast" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1E293B" />
              <XAxis dataKey="name" hide />
              <YAxis hide />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0F172A', borderRadius: '12px', border: '1px solid #1E293B', color: '#fff' }}
              />
              <Area type="monotone" dataKey="forecast" stroke="#3b82f6" strokeDasharray="5 5" fillOpacity={1} fill="url(#colorForecast)" strokeWidth={2} />
              <Area type="monotone" dataKey="actual" stroke="#3b82f6" fill="transparent" strokeWidth={3} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="p-4 bg-blue-600/10 border border-blue-500/20 rounded-2xl">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">7-Day Forecast</p>
            <TrendingUp size={14} className="text-blue-400" />
          </div>
          <h3 className="text-xl font-black text-white">+22% <span className="text-xs font-normal text-slate-500">Predicted Risk Increase</span></h3>
          <p className="text-[10px] text-slate-500 mt-1 flex items-center gap-1">
            <Clock size={10} /> Confidence Band: ±4.2%
          </p>
        </div>
      </CardContent>
    </Card>
  );
}