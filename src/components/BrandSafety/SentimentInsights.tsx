"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Cell } from 'recharts';
import { AlertTriangle, Heart } from 'lucide-react';

const data = [
  { name: 'Positive', value: 65, color: '#10b981' },
  { name: 'Neutral', value: 25, color: '#3b82f6' },
  { name: 'Negative', value: 10, color: '#f43f5e' },
];

export default function SentimentInsights() {
  return (
    <Card className="border-[#1E293B] bg-[#0F172A] rounded-3xl shadow-xl">
      <CardHeader>
        <CardTitle className="text-white text-lg flex items-center gap-2">
          <Heart className="text-rose-500" size={20} /> Sentiment & Emotion
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="h-[150px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 10}} />
              <YAxis hide />
              <Bar dataKey="value" radius={[4, 4, 0, 0]} barSize={40}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {['Joy', 'Fear', 'Anger'].map((emotion, i) => (
            <div key={i} className="p-2 bg-[#020617] border border-[#1E293B] rounded-xl text-center">
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">{emotion}</p>
              <p className="text-sm font-black text-white">{i === 0 ? 'High' : 'None'}</p>
            </div>
          ))}
        </div>

        <div className="p-4 bg-rose-500/10 border border-rose-500/20 rounded-2xl flex gap-3">
          <AlertTriangle className="text-rose-500 shrink-0" size={18} />
          <p className="text-xs text-rose-200 leading-relaxed">
            <span className="font-bold">Risk Insight:</span> Fear-based messaging detected — potential brand trust risk identified in the second creative variant.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}