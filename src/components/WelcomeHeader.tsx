"use client";

import React, { useEffect, useState } from "react";
import { ShieldCheck, FileText, Zap } from "lucide-react";

export default function WelcomeHeader() {
  const [greet, setGreet] = useState("");
  const [userName, setUserName] = useState("Admin");

  useEffect(() => {
    const h = new Date().getHours();
    if (h < 12) setGreet("Good morning");
    else if (h < 18) setGreet("Good afternoon");
    else setGreet("Good evening");

    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsed = JSON.parse(storedUser);
      if (parsed.name) setUserName(parsed.name.split(' ')[0]);
    }
  }, []);

  return (
    <div className="bg-[#0F172A] border border-[#1E293B] p-6 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shadow-xl">
      <div>
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          {greet}, {userName} <span className="animate-bounce">👋</span>
        </h2>
        <p className="text-slate-400 text-sm flex items-center gap-2 mt-1">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          System Status: <span className="text-emerald-500 font-medium">Secure & Operational</span>
        </p>
      </div>

      <div className="flex gap-3 w-full md:w-auto">
        <button className="flex-1 md:flex-none border border-[#1E293B] hover:bg-[#1E293B] text-white px-5 py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm font-medium">
          <FileText size={18} /> Reports
        </button>
        <button className="flex-1 md:flex-none bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl transition-all shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2 text-sm font-medium">
          <Zap size={18} fill="currentColor" /> Run Scan
        </button>
      </div>
    </div>
  );
}