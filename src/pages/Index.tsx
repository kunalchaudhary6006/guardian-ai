"use client";

import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  ShieldAlert, 
  Users, 
  Activity, 
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Clock
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer
} from 'recharts';
import { cn } from '@/lib/utils';

const data = [
  { name: 'Mon', threats: 40, moderation: 240 },
  { name: 'Tue', threats: 30, moderation: 198 },
  { name: 'Wed', threats: 20, moderation: 980 },
  { name: 'Thu', threats: 27, moderation: 390 },
  { name: 'Fri', threats: 18, moderation: 480 },
  { name: 'Sat', threats: 23, moderation: 380 },
  { name: 'Sun', threats: 34, moderation: 430 },
];

const stats = [
  { label: 'Active Threats', value: '12', icon: ShieldAlert, color: 'text-rose-600', bg: 'bg-rose-50' },
  { label: 'Users Monitored', value: '1.2M', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
  { label: 'System Health', value: '99.9%', icon: Activity, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { label: 'Safety Score', value: '94/100', icon: TrendingUp, color: 'text-indigo-600', bg: 'bg-indigo-50' },
];

const Index = () => {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">System Overview</h1>
        <p className="text-slate-500">Welcome back, Guardian. Here's what's happening across your network.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, i) => (
          <Card key={i} className="border-none shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                  <h3 className="text-2xl font-bold text-slate-900 mt-1">{stat.value}</h3>
                </div>
                <div className={`${stat.bg} p-3 rounded-2xl`}>
                  <stat.icon className={stat.color} size={24} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart */}
        <Card className="lg:col-span-2 border-none shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Threat Activity vs Moderation</CardTitle>
          </CardHeader>
          <CardContent className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorThreats" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorMod" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Area type="monotone" dataKey="threats" stroke="#ef4444" fillOpacity={1} fill="url(#colorThreats)" strokeWidth={2} />
                <Area type="monotone" dataKey="moderation" stroke="#3b82f6" fillOpacity={1} fill="url(#colorMod)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Recent Alerts */}
        <Card className="border-none shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Recent Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[
                { title: 'High Risk Content Detected', time: '2 mins ago', type: 'critical', icon: AlertTriangle },
                { title: 'Policy Update Applied', time: '15 mins ago', type: 'success', icon: CheckCircle2 },
                { title: 'New Threat Pattern Identified', time: '1 hour ago', type: 'warning', icon: Clock },
                { title: 'System Backup Complete', time: '3 hours ago', type: 'info', icon: CheckCircle2 },
              ].map((alert, i) => (
                <div key={i} className="flex gap-4">
                  <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center shrink-0",
                    alert.type === 'critical' ? "bg-rose-100 text-rose-600" :
                    alert.type === 'warning' ? "bg-amber-100 text-amber-600" :
                    alert.type === 'success' ? "bg-emerald-100 text-emerald-600" :
                    "bg-blue-100 text-blue-600"
                  )}>
                    <alert.icon size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{alert.title}</p>
                    <p className="text-xs text-slate-500">{alert.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors border-t border-slate-100">
              View All Alerts
            </button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Index;