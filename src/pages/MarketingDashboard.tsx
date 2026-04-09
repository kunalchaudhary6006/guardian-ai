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
  ResponsiveContainer,
  Cell
} from 'recharts';
import { Sparkles, Target, MousePointer2, Share2 } from 'lucide-react';

const campaignData = [
  { name: 'Safety First', reach: 4500, conversion: 120 },
  { name: 'AI Guardian', reach: 3200, conversion: 85 },
  { name: 'Secure Future', reach: 5800, conversion: 210 },
  { name: 'Trust Tech', reach: 2900, conversion: 65 },
];

const MarketingDashboard = () => {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Marketing Insights</h1>
        <p className="text-slate-500">AI-driven analysis of campaign performance and user engagement.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          { label: 'Total Reach', value: '124.5K', icon: Target, color: 'text-blue-600' },
          { label: 'Avg. CTR', value: '4.2%', icon: MousePointer2, color: 'text-indigo-600' },
          { label: 'Social Shares', value: '12.8K', icon: Share2, color: 'text-emerald-600' },
        ].map((stat, i) => (
          <Card key={i} className="border-none shadow-sm">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center">
                <stat.icon className={stat.color} size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                <h3 className="text-2xl font-bold text-slate-900">{stat.value}</h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="border-none shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Campaign Reach</CardTitle>
          </CardHeader>
          <CardContent className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={campaignData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="reach" fill="#3b82f6" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm bg-gradient-to-br from-indigo-600 to-blue-700 text-white">
          <CardHeader>
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              <Sparkles size={20} /> AI Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
              <h4 className="font-bold mb-1">Optimize "Secure Future"</h4>
              <p className="text-sm text-blue-100">This campaign is performing 45% better than average. Increase budget by 20% for maximum ROI.</p>
            </div>
            <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
              <h4 className="font-bold mb-1">New Audience Segment</h4>
              <p className="text-sm text-blue-100">AI detected a high-intent cluster in the "Cybersecurity Professionals" demographic. Target them next.</p>
            </div>
            <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
              <h4 className="font-bold mb-1">Content Refresh</h4>
              <p className="text-sm text-blue-100">Engagement on "Trust Tech" is dipping. AI suggests updating visual assets to match current trends.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default MarketingDashboard;