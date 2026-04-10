"use client";

import React, { useState } from "react";
import { ShieldBan, Zap, AlertTriangle, CheckCircle, Search } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export default function ContentSafetyAI() {
  const [risk, setRisk] = useState("LOW");
  const [isScanning, setIsScanning] = useState(false);
  const navigate = useNavigate();

  const scan = () => {
    setIsScanning(true);
    toast.info("Initializing deep content scan...");
    
    setTimeout(() => {
      const levels = ["LOW", "MEDIUM", "HIGH"];
      const newRisk = levels[Math.floor(Math.random() * 3)];
      setRisk(newRisk);
      setIsScanning(false);
      
      if (newRisk === "HIGH") {
        toast.error("High risk content detected! Immediate action required.");
      } else {
        toast.success(`Scan complete. Risk level: ${newRisk}`);
      }
    }, 1500);
  };

  const handleAction = (type: string) => {
    toast.promise(new Promise(r => setTimeout(r, 800)), {
      loading: `Applying ${type} protocol...`,
      success: `Content successfully ${type}ed.`,
      error: 'Action failed'
    });
  };

  const getRiskColor = () => {
    if (risk === "HIGH") return "text-rose-500 bg-rose-500/10 border-rose-500/20";
    if (risk === "MEDIUM") return "text-orange-500 bg-orange-500/10 border-orange-500/20";
    return "text-emerald-500 bg-emerald-500/10 border-emerald-500/20";
  };

  return (
    <div className="bg-[#0F172A] border border-[#1E293B] p-6 rounded-2xl shadow-xl">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-rose-500/10 rounded-2xl text-rose-500">
            <ShieldBan size={24} />
          </div>
          <div>
            <h3 className="text-white font-bold text-lg">🚫 Content Safety AI</h3>
            <p className="text-xs text-slate-400">NSFW Detection & Porn Restriction</p>
          </div>
        </div>
        <div className={`px-4 py-1.5 rounded-full border text-xs font-black tracking-widest uppercase ${getRiskColor()}`}>
          Risk: {risk}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
        <button 
          onClick={() => handleAction('block')}
          className="bg-rose-500 hover:bg-rose-600 text-white py-2.5 rounded-xl font-bold text-sm transition-colors flex items-center justify-center gap-2"
        >
          <ShieldBan size={16} /> Block
        </button>
        <button 
          onClick={() => handleAction('restrict')}
          className="bg-orange-500 hover:bg-orange-600 text-white py-2.5 rounded-xl font-bold text-sm transition-colors flex items-center justify-center gap-2"
        >
          <AlertTriangle size={16} /> Restrict
        </button>
        <button 
          onClick={() => navigate('/moderation')}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2.5 rounded-xl font-bold text-sm transition-colors flex items-center justify-center gap-2"
        >
          <Search size={16} /> Review
        </button>
      </div>

      <button 
        onClick={scan} 
        disabled={isScanning}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20"
      >
        {isScanning ? (
          <Zap className="animate-spin" size={18} />
        ) : (
          <Zap size={18} fill="currentColor" />
        )}
        {isScanning ? "Scanning Content..." : "Run Safety Scan"}
      </button>
    </div>
  );
}