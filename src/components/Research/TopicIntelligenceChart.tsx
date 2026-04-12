"use client";

import React, { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { fetchTopicIntelligence } from "@/api";

const TopicIntelligenceChart = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchTopicIntelligence();
        setData(response);
      } catch (err) {
        setError(true);
        console.error("Error fetching topic intelligence:", err);
      } finally {
        setLoading(false);
      });
    });

    // Set up interval for live updates every 5 seconds    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  if (loading) return <div className="text-center p-8 text-slate-500">Loading topic intelligence...</div>;
  if (error) return <div className="text-center p-8 text-rose-400">Error loading data</div>;

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 20, right: 30, right: 0, bottom: 5 }}>
        <defs>
          <linearGradient id="topicGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8884d8" stopOpacity={0.6} />
            <stop offset="100%" stopColor="#8884d8" stopOpacity={0.3} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1E293B" />
        <XAxis dataKey="time" axisLine={false} tickLine={false} />
        <YAxis axisLine={false} tickLine={false} />
        <Tooltip contentStyle={{ backgroundColor: '#0F172A', border: '1px solid #1E293B', borderRadius: '12px' }} />
        <Line type="monotone" dataKey="hate_speech" stroke="#ef4444" strokeWidth={2} />
        <Line type="monotone" dataKey="misinformation" stroke="#f59e0b" strokeWidth={2} />
        <Line type="monotone" dataKey="scams" stroke="#f87171" strokeWidth={2} />
        <Line type="monotone" dataKey="normal" stroke="#10b981" strokeWidth={2} />
        <Tooltip contentStyle={{ backgroundColor: '#0F172A', border: '1px solid #1E293B', borderRadius: '12px' }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default TopicIntelligenceChart;

```

<dyad-write path="src/components/Research/AnomalyDetectionChart.tsx" description="Create Anomaly Detection Chart component with live anomaly markers and severity indicators.">
"use client";

import React, { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { fetchAnomalyDetection } from "@/api";

const AnomalyDetectionChart = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchAnomalyDetection();
        setData(response);
      } catch (err) {
        setError(true);
        console.error("Error fetching anomaly detection data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  if (loading) return <div className="text-center p-8 text-slate-500">Loading anomaly detection...</div>;
  if (error) return <div className="text-center p-8 text-rose-400">Error loading data</div>;

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 20, right: 30, right: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1E293B" />
        <XAxis dataKey="activity" axisLine={false} tickLine={false} tick={{ fill: "#64748b", fontSize: 12 }} />
        <YAxis axisLine={false} tickLine={false} tick={{ fill: "#64748b", fontSize: 12 }} />
        <Tooltip contentStyle={{ backgroundColor: "#0F172A", border: "1px solid #1E293B", borderRadius: "12px" }} />
        <Line type="monotone" dataKey="activity" stroke="#3b82f6" strokeWidth={3} />
        {data?.anomaly_points?.map((isAnomaly, i) => {
          if (isAnomaly) {
            return (
              <circle                key={`dot-${i}`}
                cx={i}
                cy={data.activity[i]}
                r={6}
                fill="#f43f5e"
                stroke="#fff"
                strokeWidth={2}
              />
            );
          })
          return null;
        })}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default AnomalyDetectionChart;

```

<dyad-write path="src/components/Research/CoordinationNetworkChart.tsx" description="Create Coordination Network Graph component using D3-like visualization with risk-based node coloring.">
"use client";

import React, { useState, useEffect } from "react";
import { ResponsiveContainer, RadialBarChart, RadialBar, Tooltip, ResponsiveContainer as Responsive } from "recharts";
import { fetchGraphNetwork } from "@/api";

const CoordinationNetworkChart = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchGraphNetwork();
        setData(response);
      } catch (err) {
        setError(true);
        console.error("Error fetching graph network data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  if (loading) return <div className="text-center p-8 text-slate-500">Loading coordination network...</div>;
  if (error) return <div className="text-center p-8 text-rose-400">Error loading data</div>;

  return (
    <div className="h-[300px] w-full">
      {data && (
        <div className="relative">
          {/* Simplified radial chart representation for network */}
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart dataKey="risk_score" data={data.nodes}>
              {data.nodes.map((node, i) => (
                <RadialBar 
                  key={i} 
                  dataKey="risk_score" 
                  stroke="#3b82f6" 
                  activeStroke="#f59e0b"                   activeFill="#f59e0b" 
                  fill="#8884d8" 
                  radius={120} 
                  cx={50} 
                  cy={50}                   height={100} 
                  innerRadius={40} 
                  label={node.id} 
                  labelLine={false} 
                />
              ))}
              <Tooltip contentStyle={{ backgroundColor: "#0F172A", border: "1px solid #1E293B", borderRadius: "12px" }}>
                {data.nodes.map((node, i) => (
                  <div key={i}>
                    <p className="text-sm font-bold text-white">{node.id}</p>
                    <p className="text-xs text-slate-500">Risk: {node.risk_score}%</p>
                  </div>
                ))}
              </Tooltip>
            </RadialBarChart>
          </ResponsiveContainer>
        </div>
      )}
      <div className="mt-6 text-center">
        <p className="text-slate-400 text-[10px] uppercase tracking-widest">Network Risk Clusters</p>
        {[data?.clusters?.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {data.clusters.map((cluster: any) => (
              <Badge 
                key={cluster} 
                className={`bg-[#020617] text-slate-400 border-[#1E293B] rounded-2xl px-3 py-1 text-[8px] font-black uppercase tracking-widest ${
                  data.nodes.some(n => n.cluster === cluster) ? 'bg-[#020617]' : ''
                }`}
              >
                Cluster {cluster}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CoordinationNetworkChart;

```

<dyad-write path="src/components/Research/ForecastChart.tsx" description="Create Forecast Chart component with actual vs predicted lines and confidence bands.">
"use client";

import React, { useState, useEffect } from "react";
import { ResponsiveContainer, Line, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer as Responsive } from "recharts";
import { fetchForecast } from "@/api";

const ForecastChart = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchForecast();
        setData(response);
      } catch (err) {
        setError(true);
        console.error("Error fetching forecast data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  if (loading) return <div className="text-center p-8 text-slate-500">Loading forecast data...</div>;
  if (error) return <div className="text-center p-8 text-rose-400">Error loading data</div>;

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <ResponsiveContainer>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="forecastGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1E293B" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "#64748b", fontSize: 12 }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: "#64748b", fontSize: 12 }} />
            <Tooltip contentStyle={{ backgroundColor: "#0F172A", border: "1px solid #1E293B", borderRadius: "12px" }} />
            <Area type="monotone" dataKey="actual" stroke="#3b82f6" fill="url(#forecastGradient)" fillOpacity={0.5} strokeWidth={3} />
            <Area type="monotone" dataKey="forecast" stroke="#3b82f6" fill="url(#forecastGradient)" fillOpacity={0.2} strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </ResponsiveContainer>
    </div>
  );
};

export default ForecastChart;