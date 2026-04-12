"use client";

import React, { useEffect, useState } from "react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { fetchForecast } from "@/api/mockApi";

type DataPoint = {
  time: string;
  actual: number;
  predicted: number;
  confidence_lower: number;
  confidence_upper: number;
};

export default function ForecastGraph() {
  const [data, setData] = useState<DataPoint[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    const fetchData = async () => {
      const result = await fetchForecast();
      if (!cancelled) {
        setData(result);
        setLoading(false);
      }
    };
    fetchData();

    const interval = setInterval(fetchData, 5000);
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, []);

  if (loading) return <div className="p-4 text-slate-500">Loading…</div>;

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data}>
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.3} />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1E293B" />
        <XAxis dataKey="time" axisLine={false} tickLine={false} />
        <YAxis hide />
        <Tooltip contentStyle={{ backgroundColor: "#0F172A", border: "1px solid #1E293B", borderRadius: "12px", color: "#fff" }} />
        <Area type="monotone" dataKey="actual" stroke="#3b82f6" fill="url(#grad)" fillOpacity={0.5} />
        <Area type="monotone" dataKey="predicted" stroke="#3b82f6" fill="url(#grad)" fillOpacity={0.2} />
      </ResponsiveContainer>
    </ResponsiveContainer>
  );
}