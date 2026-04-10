"use client";

import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import DeepDiveReports from '@/components/DeepDiveReports';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { Download, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { downloadFile } from '@/utils/download';

const trendData = [
  { date: '2024-01', value: 400 },
  { date: '2024-02', value: 300 },
  { date: '2024-03', value: 600 },
  { date: '2024-04', value: 800 },
  { date: '2024-05', value: 500 },
  { date: '2024-06', value: 900 },
];

const pieData = [
  { name: 'Text', value: 400 },
  { name: 'Images', value: 300 },
  { name: 'Video', value: 300 },
  { name: 'Audio', value: 200 },
];

const COLORS = ['#3b82f6', '#6366f1', '#8b5cf6', '#ec4899'];

const ResearchAnalytics = () => {
  const handleExport = () => {
    toast.promise(
      new Promise(resolve => {
        setTimeout(() => {
          const header = "Date,Value\n";
          const rows = trendData.map(item => `${item.date},${item.value}`).join("\n");
          downloadFile(header + rows, `analytics-export-${new Date().toISOString().split('T')[0]}.csv`);
          resolve(true);
        }, 1200);
      }), 
      {
        loading: 'Preparing analytics export...',
        success: 'Analytics report exported to your system successfully',
        error: 'Export failed'
      }
    );
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">Research & Analytics</h1>
          <p className="text-slate-400">Deep dive into safety trends and behavioral patterns.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="rounded-2xl gap-2 h-11 px-6 border-[#1E293B] bg-[#0F172A] text-white hover:bg-[#1E293B]" onClick={() => toast.info("Date range selector opened")}>
            <Calendar size={18} /> Last 30 Days
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 rounded-2xl gap-2 h-11 px-6 shadow-lg shadow-blue-900/20" onClick={handleExport}>
            <Download size={18} /> Export Report
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Card className="border-[#1E293B] bg-[#0F172A] shadow-sm rounded-3xl">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-white">Safety Trend Analysis</CardTitle>
            </CardHeader>
            <CardContent className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={trendData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1E293B" />
                  <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0F172A', borderRadius: '12px', border: '1px solid #1E293B', color: '#fff' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={3} dot={{ r: 6, fill: '#3b82f6', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="border-[#1E293B] bg-[#0F172A] shadow-sm rounded-3xl">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-white">Content Type Distribution</CardTitle>
            </CardHeader>
            <CardContent className="h-[300px] flex flex-col items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0F172A', borderRadius: '12px', border: '1px solid #1E293B', color: '#fff' }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="grid grid-cols-2 gap-4 mt-4 w-full">
                {pieData.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[i] }} />
                    <span className="text-xs font-medium text-slate-400">{item.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-8">
          <DeepDiveReports />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ResearchAnalytics;