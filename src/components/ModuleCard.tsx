"use client";

import React from 'react';
import { ArrowRight, Layout } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ModuleCardProps {
  title: string;
  icon?: React.ElementType;
  path?: string;
}

export default function ModuleCard({ title, icon: Icon = Layout, path = "/dashboard" }: ModuleCardProps) {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate(path)}
      className="bg-[#0F172A] border border-[#1E293B] p-5 rounded-2xl hover:border-blue-500/50 hover:bg-[#1E293B]/50 transition-all cursor-pointer group shadow-lg"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="p-2.5 bg-blue-500/10 rounded-xl text-blue-400 group-hover:scale-110 transition-transform">
          <Icon size={20} />
        </div>
        <ArrowRight size={16} className="text-slate-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
      </div>
      <h4 className="text-white font-bold mb-1">{title}</h4>
      <p className="text-slate-400 text-xs leading-relaxed">
        Analyze patterns and manage {title.toLowerCase()} workflows.
      </p>
      <div className="mt-4 pt-4 border-t border-[#1E293B] flex items-center justify-between">
        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Insights</span>
        <span className="text-blue-400 text-xs font-medium">View →</span>
      </div>
    </div>
  );
}