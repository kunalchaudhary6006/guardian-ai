"use client";

import React, { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  ShieldAlert, 
  Users, 
  Activity, 
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Clock,
  ArrowUpRight,
  RefreshCw,
  Download,
  Settings
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
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const generateData = () => [
  { name: 'Mon', threats: Math.floor(Math.random() * 50) + 10, moderation: Math.floor(Math.random() * 300) + 100 },
  { name: 'Tue', threats: Math.floor(Math.random() * 50) + 10, moderation: Math.floor(Math.random() * 300) + 100 },
  { name: 'Wed', threats: Math.floor(Math.random() * 50) + 10, moderation: Math.floor(Math.random() * 300) + 100 },
  { name: 'Thu', threats: Math.floor(Math.random() * 50) + 10, moderation: Math.floor(Math.random() * 300) + 100 },
  { name: 'Fri', threats: Math.floor(Math.random() * 50) + 10, moderation: Math.floor(Math.random() * 300) + 100 },
  { name: 'Sat', threats: Math.floor(Math.random() * 50) + 10, moderation: Math.floor(Math.random() * 300) + 100 },
  { name: 'Sun', threats: Math.floor(Math.random() * 50) + 10, moderation: Math.floor(Math.random() * 300) + 100 },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [chartData, setChartData] = useState(generateData());
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(new Date().toLocaleTimeString());

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setChartData(generateData());
      setLastUpdated(new Date().toLocaleTimeString());
      setIsRefreshing(false);
      toast.success("System data synchronized", {
        description: "All metrics have been updated to the latest real-time values."
      });
    }, 800);
  };

  const handleDownload = () => {
    toast.promise(new Promise((resolve) => setTimeout(resolve, 1500)), {
      loading: 'Generating PDF report...',
      success: 'Report downloaded successfully',
      error: 'Failed to generate report',
    });
  };

  const stats = [
    { label: 'Active Threats', value: '12', change: '+2.5%', icon: ShieldAlert, color: 'text-rose-600', bg: 'bg-rose-50', path: '/threats' },
    { label: 'Users Monitored', value: '1.2M', change: '+12%', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50', path: '/analytics' },
    { label: 'System Health', value: '99.9%', change: 'Stable', icon: Activity, color: 'text-emerald-600', bg: 'bg-emerald-50', path: '/settings' },
    { label: 'Safety Score', value: '94/100', change: '+4', icon: TrendingUp, color: 'text-indigo-600', bg: 'bg-indigo-50', path: '/policy' },
  ];

  return (
    <DashboardLayout>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">System Overview</h1>
          <p className="text-slate-500 flex items-center gap-2">
            Real-time safety metrics as of {lastUpdated}
            <button onClick={handleRefresh} className={cn("hover:text-primary transition-colors", isRefreshing && "animate-spin")}>
              <RefreshCw size={14} />
            </button>
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="rounded-2xl gap-2 h-11 px-6 border-slate-200 hover:bg-slate-50" onClick={handleDownload}>
            <Download size={18} /> Download Report
          </Button>
          <Button className="bg-slate-900 hover:bg-slate-800 rounded-2xl gap-2 h-11 px-6 shadow-lg shadow-slate-200" onClick={() => navigate('/policy')}>
            <Settings size={18} /> Manage Policies
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, i) => (
          <Card 
            key={i} 
            className="border-none shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer rounded-3xl"
            onClick={() => navigate(stat.path)}
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`${stat.bg} p-3 rounded-2xl group-hover:scale-110 transition-transform`}>
                  <stat.icon className={stat.color} size={24} />
                </div>
                <span className={cn(
                  "text-xs font-bold px-2 py-1 rounded-full",
                  stat.change.startsWith('+') ? "bg-emerald-50 text-emerald-600" : "bg-slate-50 text-slate-600"
                )}>
                  {stat.change}
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">{stat.value}</h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 border-none shadow-sm rounded-3xl">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-lg font-semibold">Threat Activity vs Moderation</CardTitle>
              <p className="text-xs text-slate-400 mt-1">Comparison of detected threats and automated actions</p>
            </div>
            <Button variant="ghost" size="icon" className="text-slate-400 rounded-full" onClick={handleRefresh}>
              <RefreshCw size={18} className={isRefreshing ? "animate-spin" : ""} />
            </Button>
          </CardHeader>
          <CardContent className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
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
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }}
                />
                <Area type="monotone" dataKey="threats" stroke="#ef4444" fillOpacity={1} fill="url(#colorThreats)" strokeWidth={3} />
                <Area type="monotone" dataKey="moderation" stroke="#3b82f6" fillOpacity={1} fill="url(#colorMod)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm rounded-3xl">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-semibold">Recent Alerts</CardTitle>
            <Button variant="ghost" size="sm" className="text-primary font-bold rounded-full" onClick={() => navigate('/moderation')}>View All</Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[
                { title: 'High Risk Content Detected', time: '2 mins ago', type: 'critical', icon: AlertTriangle, path: '/moderation' },
                { title: 'Policy Update Applied', time: '15 mins ago', type: 'success', icon: CheckCircle2, path: '/policy' },
                { title: 'New Threat Pattern Identified', time: '1 hour ago', type: 'warning', icon: Clock, path: '/threats' },
                { title: 'System Backup Complete', time: '3 hours ago', type: 'info', icon: CheckCircle2, path: '/settings' },
              ].map((alert, i) => (
                <div 
                  key={i} 
                  className="flex gap-4 group cursor-pointer"
                  onClick={() => navigate(alert.path)}
                >
                  <div className={cn(
                    "w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110",
                    alert.type === 'critical' ? "bg-rose-100 text-rose-600" :
                    alert.type === 'warning' ? "bg-amber-100 text-amber-600" :
                    alert.type === 'success' ? "bg-emerald-100 text-emerald-600" :
                    "bg-blue-100 text-blue-600"
                  )}>
                    <alert.icon size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-bold text-slate-900">{alert.title}</p>
                      <ArrowUpRight size={14} className="text-slate-300 group-hover:text-slate-900 transition-colors" />
                    </div>
                    <p className="text-xs text-slate-500">{alert.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;