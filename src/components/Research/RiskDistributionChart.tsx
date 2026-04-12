"use client";

import React from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, ResponsiveContainer as Responsive } from "recharts";
import { fetchRiskDistribution } from "@/api";

const RiskDistributionChart = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchRiskDistribution();
        setData(response);
      } catch (err) {
        setError(true);
        console.error("Error fetching risk distribution data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  if (loading) return <div className="text-center p-8 text-slate-500">Loading risk distribution...</div>;
  if (error) return <div className="text-center p-8 text-rose-400">Error loading data</div>;

  return (
    <div className="space-y-4">
      {data && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {Object.entries(data).map(([category, value]) => (
            <div key={category} className="p-4 bg-[#020617] border border-[#1E293B] rounded-2xl text-center">
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">{category}</p>
              <p className="text-xl font-bold text-white">{value}</p>
              <div className="w-full bg-[#020617] h-1 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#00BFA5]" 
                  style={{ width: `${value}%` }} 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RiskDistributionChart;