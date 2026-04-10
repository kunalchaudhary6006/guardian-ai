"use client";

import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer
} from 'recharts';
import { Sparkles, Target, MousePointer2, Share2, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';

const campaignData = [
  { name: 'Safety First', reach: 4500, conversion: 120 },
  { name: 'AI Guardian', reach: 3200, conversion: 85 },
  { name: 'Secure Future', reach: 5800, conversion: 210 },
  { name: 'Trust Tech', reach: 2900, conversion: 65 },
];

const MarketingDashboard = () => {
  const handleRecommendation = (title: string) => {
    toast.promise(new Promise(r => setTimeout(r, 1000)), {
      loading: `Applying AI optimization for ${title}...`,
      success: `Optimization applied successfully!`,
      error: 'Failed to apply optimization'
    });
  };

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Marketing Insights</h1>
        <p className="text-slate-400">AI-driven analysis of campaign performance.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          { label: 'Total Reach', value: '124.5K', icon: Target, color: 'text-blue-400' },
          { label: 'Avg. CTR', value: '4.2%', icon: MousePointer2, color: 'text-indigo-400' },
          { label: 'Social Shares', value: '12.8K', icon: Share2, color: 'text-emerald-400' },
        ].map((stat, i) => (
          <Card key={i} className="border-[#1E293B] bg-[#0F172A] shadow-sm rounded-3xl cursor-pointer hover:bg-[#1E293B]/50 transition-colors" onClick={() => toast.info(`Detailed report for ${stat.label}`)}>
            <CardContent className="p-6 flex items-center gap-4">
              <div className="w-12 h-12 bg-[#020617] border border-[#1E293B] rounded-2xl flex items-center justify-center">
                <stat.icon className={stat.color} size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="border-[#1E293B] bg-[#0F172A] shadow-sm rounded-3xl">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-white">Campaign Reach</CardTitle>
          </CardHeader>
          <CardContent className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={campaignData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1E293B" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0F172A', borderRadius: '12px', border: '1px solid #1E293B', color: '#fff' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Bar dataKey="reach" fill="#3b82f6" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-3xl">
          <CardHeader>
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              <Sparkles size={20} /> AI Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { title: 'Optimize "Secure Future"', desc: 'Increase budget by 20% for maximum ROI.' },
              { title: 'New Audience Segment', desc: 'Target "Cybersecurity Professionals" demographic.' },
              { title: 'Content Refresh', desc: 'Update visual assets for "Trust Tech" campaign.' },
            ].map((rec, i) => (
              <div key={i} className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm group cursor-pointer hover:bg-white/20 transition-colors" onClick={() => handleRecommendation(rec.title)}>
                <div className="flex items-center justify-between">
                  <h4 className="font-bold mb-1">{rec.title}</h4>
                  <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-sm text-blue-100">{rec.desc}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default MarketingDashboard;