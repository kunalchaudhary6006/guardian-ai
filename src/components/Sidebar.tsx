"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Menu, 
  X, 
  LayoutDashboard, 
  ShieldAlert, 
  FileCheck, 
  Search, 
  ShieldCheck, 
  Database,
  Lock,
  LogOut,
  Shield,
  Activity as ActivityIcon,
  Baby,
  Share2,
  Sparkles,
  Fingerprint,
  Zap,
  Globe,
  TowerControl,
  Users
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { Switch } from "@/components/ui/switch";

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const [isGovMode, setIsGovMode] = useState(() => localStorage.getItem('system_mode') === 'government');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('system_mode', isGovMode ? 'government' : 'standard');
    window.dispatchEvent(new Event('mode-change'));
  }, [isGovMode]);

  const handleModeToggle = (val: boolean) => {
    setIsGovMode(val);
    toast.info(`Switching to ${val ? 'Government (NITRS)' : 'Standard'} Mode...`, {
      description: val ? "National Intelligence & Threat Response System Active" : "Enterprise Safety Dashboard Active"
    });
    if (val) navigate('/nitrs');
    else navigate('/dashboard');
  };

  const standardMenu = [
    { label: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
    { label: "Activity", icon: ActivityIcon, path: "/activity" },
    { label: "Violations", icon: ShieldAlert, path: "/moderation" },
    { label: "Enforcement", icon: FileCheck, path: "/policy" },
    { label: "Marketing Command", icon: Sparkles, path: "/marketing" },
    { label: "Influencer Intel", icon: Users, path: "/influencers" },
    { label: "Analytics", icon: Search, path: "/analytics" },
    { label: "Settings", icon: Shield, path: "/settings" },
  ];

  const govMenu = [
    { label: "NITRS Command", icon: TowerControl, path: "/nitrs" },
    { label: "Threat Intelligence", icon: ShieldCheck, path: "/threats" },
    { label: "Anomaly Surveillance", icon: Zap, path: "/activity" },
    { label: "Case Intelligence", icon: Database, path: "/logs" },
    { label: "Global Threat Map", icon: Globe, path: "/threats" },
    { label: "Settings", icon: Shield, path: "/settings" },
  ];

  const aiSuite = [
    { label: "Identity Verification", icon: Fingerprint, path: "/identity-verification" },
    { label: "Financial Fraud Bot", icon: Lock, path: "/fraud" },
    { label: "AI Verification Bot", icon: ShieldCheck, path: "/verification" },
    { label: "Child Safety", icon: Baby, path: "/child-safety" },
    { label: "Integration Hub", icon: Share2, path: "/integrations" },
  ];

  const handleLogout = () => {
    localStorage.removeItem('user');
    toast.success("Logged out successfully");
    navigate('/');
  };

  return (
    <motion.div
      animate={{ width: open ? 280 : 80 }}
      className="h-screen bg-[#020617] border-r border-[#1E293B] text-white flex flex-col sticky top-0 z-50"
    >
      <div className="p-6 mb-4">
        <div className="flex items-center justify-between mb-6">
          {open && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2">
              <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center shadow-lg", isGovMode ? "bg-rose-600 shadow-rose-900/20" : "bg-blue-600 shadow-blue-900/20")}>
                <ShieldCheck size={20} className="text-white" />
              </div>
              <h1 className="text-white font-black tracking-tighter text-xl uppercase">
                {isGovMode ? 'NITRS' : 'Guardian AI'}
              </h1>
            </motion.div>
          )}
          <button onClick={() => setOpen(!open)} className="p-2 bg-[#0B1220] border border-[#1E293B] hover:bg-[#1E293B] rounded-xl transition-colors text-slate-400 hover:text-white">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="p-4 bg-[#0B1220] border border-[#1E293B] rounded-2xl space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">System Mode</span>
              <Badge className={isGovMode ? "bg-rose-500/10 text-rose-500" : "bg-blue-500/10 text-blue-500"}>
                {isGovMode ? 'GOV' : 'STD'}
              </Badge>
            </div>
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-bold text-white">{isGovMode ? 'Government' : 'Standard'}</span>
              <Switch checked={isGovMode} onCheckedChange={handleModeToggle} className="data-[state=checked]:bg-rose-600" />
            </div>
          </div>
        )}
      </div>

      <div className="flex-1 overflow-y-auto px-3 space-y-8 custom-scrollbar">
        <div>
          {open && <p className="px-4 text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Command Center</p>}
          <div className="space-y-1">
            {(isGovMode ? govMenu : standardMenu).map((m, i) => {
              const isActive = location.pathname === m.path;
              const Icon = m.icon;
              return (
                <Link
                  key={i}
                  to={m.path}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-xl transition-all group border border-transparent",
                    isActive 
                      ? (isGovMode ? "bg-rose-600 text-white shadow-lg shadow-rose-900/20 border-rose-500" : "bg-blue-600 text-white shadow-lg shadow-blue-900/20 border-blue-500")
                      : "text-slate-400 bg-[#0B1220]/30 border-[#1E293B]/50 hover:bg-[#0B1220] hover:text-white hover:border-[#1E293B]"
                  )}
                >
                  <Icon size={20} className={cn(isActive ? "text-white" : "text-slate-500 group-hover:text-blue-400")} />
                  {open && <span className="text-sm font-medium">{m.label}</span>}
                </Link>
              );
            })}
          </div>
        </div>

        <div>
          {open && <p className="px-4 text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">AI Intelligence Suite</p>}
          <div className="space-y-1">
            {aiSuite.map((m, i) => {
              const isActive = location.pathname === m.path;
              return (
                <Link
                  key={i}
                  to={m.path}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-xl transition-all group border border-transparent",
                    isActive 
                      ? (isGovMode ? "bg-rose-600 text-white shadow-lg shadow-rose-900/20 border-rose-500" : "bg-blue-600 text-white shadow-lg shadow-blue-900/20 border-blue-500")
                      : "text-slate-400 bg-[#0B1220]/30 border-[#1E293B]/50 hover:bg-[#0B1220] hover:text-white hover:border-[#1E293B]"
                  )}
                >
                  <m.icon size={20} className={cn(isActive ? "text-white" : "text-slate-500 group-hover:text-blue-400")} />
                  {open && <span className="text-sm font-medium">{m.label}</span>}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div className="p-4 border-t border-[#1E293B]">
        <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 text-rose-400 bg-rose-500/5 border border-rose-500/10 hover:bg-rose-500/10 rounded-xl transition-all group">
          <LogOut size={20} className="group-hover:translate-x-1 transition-transform" />
          {open && <span className="text-sm font-bold">Logout</span>}
        </button>
      </div>
    </motion.div>
  );
}

const Badge = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <span className={cn("px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-widest border", className)}>
    {children}
  </span>
);