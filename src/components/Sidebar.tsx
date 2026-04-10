"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Menu, 
  X, 
  LayoutDashboard, 
  ShieldAlert, 
  FileCheck, 
  Search, 
  ShieldCheck, 
  BarChart3,
  ShieldBan,
  UserCheck,
  Database,
  Lock,
  LogOut
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const menu = [
    { label: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
    { label: "Content Moderation", icon: ShieldAlert, path: "/moderation" },
    { label: "Policy Enforcement", icon: FileCheck, path: "/policy" },
    { label: "Research & Analytics", icon: Search, path: "/analytics" },
    { label: "Brand Safety", icon: ShieldCheck, path: "/threats" },
    { label: "Threat Response", icon: ShieldBan, path: "/threats" },
    { label: "Marketing Intelligence", icon: BarChart3, path: "/marketing" },
  ];

  const ai = [
    { label: "Financial Fraud Bot", icon: Lock, path: "/fraud" },
    { label: "AI Verification Bot", icon: UserCheck, path: "/verification" },
    { label: "AI Log Center", icon: Database, path: "/logs" },
    { label: "Content Safety AI", icon: ShieldBan, path: "/moderation" },
  ];

  const handleLogout = () => {
    localStorage.removeItem('user');
    toast.success("Logged out successfully");
    navigate('/');
  };

  return (
    <motion.div
      animate={{ width: open ? 260 : 80 }}
      className="h-screen bg-[#020617] border-r border-[#1E293B] text-white flex flex-col sticky top-0 z-50"
    >
      <div className="flex items-center justify-between p-6 mb-4">
        {open && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-900/20">
              <ShieldCheck size={20} className="text-white" />
            </div>
            <h1 className="text-white font-black tracking-tighter text-xl uppercase">Guardian AI</h1>
          </motion.div>
        )}
        <button 
          onClick={() => setOpen(!open)}
          className="p-2 hover:bg-[#0F172A] rounded-xl transition-colors text-slate-400 hover:text-white"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-3 space-y-8 custom-scrollbar">
        <div>
          {open && <p className="px-4 text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Main Menu</p>}
          <div className="space-y-1">
            {menu.map((m, i) => {
              const isActive = location.pathname === m.path;
              return (
                <Link
                  key={i}
                  to={m.path}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-xl transition-all group",
                    isActive 
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-900/20" 
                      : "text-slate-400 hover:bg-[#0F172A] hover:text-white"
                  )}
                >
                  <m.icon size={20} className={cn(isActive ? "text-white" : "text-slate-500 group-hover:text-blue-400")} />
                  {open && <span className="text-sm font-medium">{m.label}</span>}
                </Link>
              );
            })}
          </div>
        </div>

        <div>
          {open && <p className="px-4 text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">AI Suite</p>}
          <div className="space-y-1">
            {ai.map((m, i) => {
              const isActive = location.pathname === m.path;
              return (
                <Link
                  key={i}
                  to={m.path}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-xl transition-all group",
                    isActive 
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-900/20" 
                      : "text-slate-400 hover:bg-[#0F172A] hover:text-white"
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
        <button 
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 text-rose-400 hover:bg-rose-500/10 rounded-xl transition-all group"
        >
          <LogOut size={20} className="group-hover:translate-x-1 transition-transform" />
          {open && <span className="text-sm font-bold">Logout</span>}
        </button>
      </div>
    </motion.div>
  );
}