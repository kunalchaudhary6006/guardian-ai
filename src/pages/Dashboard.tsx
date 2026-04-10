"use client";

import React from "react";
import Sidebar from "@/components/Sidebar";
import WelcomeHeader from "@/components/WelcomeHeader";
import AlertPanel from "@/components/AlertPanel";
import ModuleCard from "@/components/ModuleCard";
import AIChat from "@/components/AIChat";
import ContentSafetyAI from "@/components/ContentSafetyAI";
import ActivityFeed from "@/components/ActivityFeed";
import { 
  ShieldAlert, 
  FileCheck, 
  Search, 
  ShieldCheck, 
  BarChart3, 
  ShieldBan,
  Lock,
  UserCheck
} from "lucide-react";

export default function Dashboard() {
  const modules = [
    { title: "Content Moderation", icon: ShieldAlert },
    { title: "Policy Enforcement", icon: FileCheck },
    { title: "Research & Analytics", icon: Search },
    { title: "Brand Safety", icon: ShieldCheck },
    { title: "Threat Response", icon: ShieldBan },
    { title: "Marketing Intelligence", icon: BarChart3 },
  ];

  return (
    <div className="flex bg-[#020617] min-h-screen text-white">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <main className="p-6 lg:p-8 space-y-8 max-w-7xl mx-auto w-full">
          <WelcomeHeader />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <AlertPanel />

              {/* AI Suite Quick Access */}
              <div>
                <h3 className="text-sm font-black text-slate-500 uppercase tracking-widest mb-4">AI Suite Quick Access</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ModuleCard title="Financial Fraud Bot" icon={Lock} />
                  <ModuleCard title="AI Verification Bot" icon={UserCheck} />
                </div>
              </div>

              {/* Core Modules */}
              <div>
                <h3 className="text-sm font-black text-slate-500 uppercase tracking-widest mb-4">Core Infrastructure</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {modules.map((m, i) => (
                    <ModuleCard key={i} title={m.title} icon={m.icon} />
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <ContentSafetyAI />
              <AIChat />
              <ActivityFeed />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}