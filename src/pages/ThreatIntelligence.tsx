"use client";

import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShieldCheck, Globe, Zap, Lock, AlertCircle } from 'lucide-react';
import ThreatResponseCenter from '@/components/ThreatResponseCenter';
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

const threatData = [
  { name: 'DDoS', value: 45, color: '#3b82f6' },
  { name: 'Phishing', value: 32, color: '#6366f1' },
  { name: 'Malware', value: 28, color: '#8b5cf6' },
  { name: 'SQL Injection', value: 15, color: '#ec4899' },
  { name: 'Brute Force', value: 55, color: '#f43f5e' },
];

const ThreatIntelligence = () => {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Threat Intelligence</h1>
        <p className="text-slate-400">Real-time monitoring of global security threats and attack vectors.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2 space-y-8">
          <Card className="border-[#1E293B] bg-[#0F172A] shadow-sm rounded-3xl">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-white">Attack Vector Distribution</CardTitle>
            </CardHeader>
            <CardContent className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={threatData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#1E293B" />
                  <XAxis type="number" hide />
                  <YAxis 
                    dataKey="name" 
                    type="category" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{fill: '#64748b', fontSize: 14, fontWeight: 500}}
                    width={100}
                  />
                  <Tooltip 
                    cursor={{fill: '#1E293B'}}
                    contentStyle={{ backgroundColor: '#0F172A', borderRadius: '12px', border: '1px solid #1E293B', color: '#fff' }}
                  />
                  <Bar dataKey="value" radius={[0, 8, 8, 0]} barSize={32}>
                    {threatData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          
          <ThreatResponseCenter />
        </div>

        <div className="space-y-6">
          <Card className="border-[#1E293B] bg-[#0F172A] shadow-sm text-white rounded-3xl">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#020617] border border-[#1E293B] rounded-2xl flex items-center justify-center">
                  <Globe className="text-blue-400" size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Global Threat Level</p>
                  <h3 className="text-xl font-bold text-white">Elevated (Orange)</h3>
                </div>
              </div>
              <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                <div className="bg-orange-500 h-full w-[75%]" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-[#1E293B] bg-[#0F172A] shadow-sm rounded-3xl">
            <CardHeader>
              <CardTitle className="text-base font-semibold text-white">Active Countermeasures</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { label: 'IP Rate Limiting', status: 'Active', icon: Zap },
                { label: 'Geo-Blocking', status: 'Active', icon: Globe },
                { label: '2FA Enforcement', status: 'Active', icon: Lock },
                { label: 'Anomaly Detection', status: 'Learning', icon: AlertCircle },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-[#020617] border border-[#1E293B] rounded-xl">
                  <div className="flex items-center gap-3">
                    <item.icon size={18} className="text-slate-500" />
                    <span className="text-sm font-medium text-slate-300">{item.label}</span>
                  </div>
                  <Badge variant="outline" className="bg-[#0F172A] border-[#1E293B] text-slate-400">{item.status}</Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ThreatIntelligence;