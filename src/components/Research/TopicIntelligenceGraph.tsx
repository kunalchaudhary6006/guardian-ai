"use client";

import React, { useEffect, useState } from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { fetchTopicIntelligence } from "@/api/mockApi";

type DataPoint = {
  time: string;
  hate_speech: number;
  misinformation: number;
  scams: number;
  normal: number;
};

export default function TopicIntelligenceGraph() {
  const [data, setData] = useState<DataPoint[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    const fetchData = async () => {
      const result = await fetchTopicIntelligence();
      if (!cancelled) {
        setData(result);
        setLoading(false);
      }
    };
    fetchData();

    // Poll every 5 seconds to keep the chart live
    const interval = setInterval(fetchData, 5000);
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, []);

  if (loading) return <div className="p-4 text-slate-500">Loading…</div>;

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1E293B" />
        <XAxis dataKey="time" axisLine={false} tickLine={false} />
        <YAxis domain={[0, 100]} hide />
        <Tooltip contentStyle={{ backgroundColor: "#0F172A", border: "1px solid #1E293B", borderRadius: "12px", color: "#fff" }} />
        <Line type="monotone" dataKey="hate_speech" stroke="#f43f5e" strokeWidth={3} />
        <Line type="monotone" dataKey="misinformation" stroke="#f87171" strokeWidth={3} />
        <Line type="monotone" dataKey="scams" stroke="#e11d48" strokeWidth={3} />
        <Line type="monotone" dataKey="normal" stroke="#10b981" strokeWidth={3} />
      </LineChart>
    </ResponsiveContainer>
  );
}