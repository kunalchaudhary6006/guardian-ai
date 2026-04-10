"use client";

import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { DollarSign, ShieldAlert, TrendingUp, Activity } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const fraudData = [
  { name: 'Mon', attempts: 45 },
  { name: 'Tue', attempts: 52 },
  { name: 'Wed', attempts: 38 },
  { name: 'Thu', attempts: 65 },
  { name: 'Fri', attempts: 48 },
  { name: 'Sat', attempts: 24 },
  { name: 'Sun', attempts: 18 },
];

const FinancialFraud = () => {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Financial Fraud Bot</h1>
        <p className="text-slate-400">AI-powered detection of suspicious transactions and payment fraud.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {[
          { label: 'Total Scanned', value: '$1.2M', icon: DollarSign, color: 'text-blue-400' },
          { label: 'Blocked Fraud', value: '$42.5K', icon: ShieldAlert, color: 'text-rose-400' },
          { label: 'Risk Score', value: 'Low', icon: TrendingUp, color: 'text-emerald-400' },
          { label: 'Active Rules', value: '24', icon: Activity, color: 'text-indigo-400' },
        ].map((stat, i) => (
          <Card key={i} className="border-[#1E293B] bg-[#0F172A] shadow-sm rounded-3xl">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#020617] rounded-xl flex items-center justify-center border border-[#1E293B]">
                  <stat.icon className={stat.color} size={20} />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500">{stat.label}</p>
                  <h3 className="text-xl font-bold text-white">{stat.value}</h3>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-[#1E293B] bg-[#0F172A] shadow-sm rounded-3xl mb-8">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-white">Fraud Attempts (Last 7 Days)</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={fraudData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1E293B" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
              <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0F172A', borderRadius: '12px', border: '1px solid #1E293B', color: '#fff' }}
                itemStyle={{ color: '#fff' }}
              />
              <Bar dataKey="attempts" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default FinancialFraud;