"use client";

import React from 'react';
import { Heart, MessageCircle, TrendingUp, TrendingDown, Search } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const data = [
  { name: 'Mon', sentiment: 65 },
  { name: 'Tue', sentiment: 72 },
  { name: 'Wed', sentiment: 68 },
  { name: 'Thu', sentiment: 85 },
  { name: 'Fri', sentiment: 82 },
  { name: 'Sat', sentiment: 90 },
  { name: 'Sun', sentiment: 88 },
];

export default function SentimentTracker() {
  return (
    <div className="bg-[#0F172A] border border-[#1E293B] p-6 rounded-3xl shadow-xl">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-white font-bold flex items-center gap-2">
          <Heart className="text-rose-500" size={20} fill="currentColor" /> Brand Sentiment
        </h3>
        <div className="flex items-center gap-1 text-emerald-500 text-xs font-bold">
          <TrendingUp size={14} /> +12.4%
        </div>
      </div>

      <div className="h-[200px] mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorSentiment" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1E293B" />
            <XAxis dataKey="name" hide />
            <YAxis hide domain={[0, 100]} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#0F172A', borderRadius: '12px', border: '1px solid #1E293B', color: '#fff' }}
            />
            <Area type="monotone" dataKey="sentiment" stroke="#3b82f6" fillOpacity={1} fill="url(#colorSentiment)" strokeWidth={3} />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-[#020617] border border-[#1E293B] rounded-2xl">
          <div className="flex items-center gap-2 text-slate-500 mb-1">
            <MessageCircle size={14} />
            <span className="text-[10px] font-bold uppercase tracking-widest">Mentions</span>
          </div>
          <p className="text-xl font-black text-white">12.4K</p>
        </div>
        <div className="p-4 bg-[#020617] border border-[#1E293B] rounded-2xl">
          <div className="flex items-center gap-2 text-slate-500 mb-1">
            <Search size={14} />
            <span className="text-[10px] font-bold uppercase tracking-widest">Reach</span>
          </div>
          <p className="text-xl font-black text-white">850K</p>
        </div>
      </div>
    </div>
  );
}