"use client";

import React, { useEffect, useState } from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ReferenceDot } from "recharts";
import { fetchAnomalyDetection } from "@/api/mockApi";

type DataPoint = {
  time: string;
  activity: number;
  anomaly_points: Array<{ time: string; severity: number }>;
  severity: number;
};

export default function AnomalyDetectionGraph() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    const fetchData = async () => {
      const result = await fetchAnomalyDetection();
      if (!cancelled) {
        setData(result);
        setLoading(false);
      }
    };
    fetchData();

    // Refresh every 5 seconds
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
        <Line type="monotone" dataKey="activity" stroke="#3b82f6" strokeWidth={3} />
        {data?.anomaly_points?.map(pt => (
          <ReferenceDot
            x={pt.time}
            y={pt.severity}
            r={6}
            fill="#f87171"
            stroke="#f87171"
            shape={5}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}