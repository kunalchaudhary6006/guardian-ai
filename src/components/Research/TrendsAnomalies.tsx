"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceDot } from "recharts";
import { Activity, AlertTriangle } from "lucide-react";

const data = [
  { time: '00:00', value: 400 },
  { time: '04:00', value: 300 },
  { time: '08:00', value: 600 },
  { time: '12:00', value: 1200, anomaly: true },
  { time: '16:00', value: 500 },
  { time: '20:00', value: 900 },
  { time: '23:59', value: 700 },
];

export default function TrendsAnomalies() {
  const [data, setData] = useState<any[]>(data);
  const [activeAnomaly, setActiveAnomaly] = useState(null);

  const handleMouseEnter = (index: number) => {
    setActiveAnomaly(index);
  };

  const handleMouseLeave = () => {
    setActiveAnomaly(null);
  };

  return (
    <Card className="border-[#1E293B] bg-[#0F172A] rounded-3xl shadow-xl">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-white text-lg flex items-center gap-2">
          <Activity className="text-rose-500" size={20} /> Trends & Anomalies
        </CardTitle>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-rose-500 rounded-full animate-pulse" />
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Historical</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-rose-500 rounded-full" />
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Anomaly</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1E293B" />
              <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 10}} />
              <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 10}} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0F172A', borderRadius: '12px', border: '1px solid #1E293B', color: '#fff' }}
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload;
                    return (
                      <div className="bg-[#0F172A] border border-[#1E293B] p-3 rounded-xl shadow-xl">
                        <p className="text-xs font-bold text-white mb-1">{data.time}</p>
                        <p className="text-sm text-blue-400 font-black">{data.value} Events</p>
                        {data.anomaly && (
                          <div className="mt-2 pt-2 border-t border-[#1E293B]">
                            <p className="text-[10px] text-rose-400 font-bold uppercase flex items-center gap-1">
                              <AlertTriangle size={10} /> Anomaly Detected
                            </p>
                            <p className="text-[10px] text-slate-400 mt-1">Activity spike 2.6× above baseline</p>
                          </div>
                        )}
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Line 
                type="monotone"                 dataKey="value" 
                stroke="#3b82f6"                 strokeWidth={3} 
                dot={(props) => {
                  const { cx, cy, payload } = props;
                  if (payload.anomaly) {
                    return <circle cx={cx} cy={cy} r={6} fill="#f43f5e" stroke="#fff" strokeWidth={2} />;
                  }
                  return <circle cx={cx} cy={cy} r={4} fill="#3b82f6" />;
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </CardContent>
    </Card>
  );
}