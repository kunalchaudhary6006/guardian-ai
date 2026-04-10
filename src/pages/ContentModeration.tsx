"use client";

import React, { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { 
  LayoutDashboard, 
  Zap, 
  Database, 
  ShieldCheck, 
  History, 
  Search,
  Bell,
  Settings
} from 'lucide-react';
import RawDataAnalyzer from '@/components/Moderation/RawDataAnalyzer';
import ModerationResults from '@/components/Moderation/ModerationResults';
import AutoIngestion from '@/components/Moderation/AutoIngestion';
import AuditHistory from '@/components/Moderation/AuditHistory';

export default function ContentModeration() {
  const [activeTab, setActiveTab] = useState('analyzer');

  return (
    <DashboardLayout>
      {/* Global App Shell Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-black text-white uppercase tracking-tighter flex items-center gap-3">
            <ShieldCheck className="text-blue-500" size={32} /> Content Moderation Dashboard
          </h1>
          <p className="text-slate-400 text-sm mt-1">Manual + Auto Raw Data Input System · Production Workspace</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
            <input 
              className="pl-10 pr-4 py-2 bg-[#0F172A] border border-[#1E293B] text-white rounded-xl text-xs focus:outline-none focus:border-blue-500 w-64"
              placeholder="Search Content, User, or Case ID..."
            />
          </div>
          <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white rounded-xl hover:bg-[#0F172A]">
            <Bell size={20} />
          </Button>
          <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white rounded-xl hover:bg-[#0F172A]">
            <Settings size={20} />
          </Button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <Tabs defaultValue="analyzer" onValueChange={setActiveTab} className="space-y-8">
        <div className="overflow-x-auto pb-2">
          <TabsList className="bg-[#0F172A] border border-[#1E293B] p-1 h-auto gap-1 inline-flex">
            <TabsTrigger value="overview" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white px-6 py-2.5 rounded-xl text-slate-400 text-xs font-bold uppercase tracking-widest gap-2">
              <LayoutDashboard size={14} /> Overview
            </TabsTrigger>
            <TabsTrigger value="analyzer" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white px-6 py-2.5 rounded-xl text-slate-400 text-xs font-bold uppercase tracking-widest gap-2">
              <Zap size={14} /> Raw Data Analyzer
            </TabsTrigger>
            <TabsTrigger value="results" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white px-6 py-2.5 rounded-xl text-slate-400 text-xs font-bold uppercase tracking-widest gap-2">
              <ShieldCheck size={14} /> Results Explorer
            </TabsTrigger>
            <TabsTrigger value="auto" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white px-6 py-2.5 rounded-xl text-slate-400 text-xs font-bold uppercase tracking-widest gap-2">
              <Database size={14} /> Auto Ingestion
            </TabsTrigger>
            <TabsTrigger value="history" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white px-6 py-2.5 rounded-xl text-slate-400 text-xs font-bold uppercase tracking-widest gap-2">
              <History size={14} /> Audit & History
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="overview" className="animate-in fade-in duration-300">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              <div className="p-12 bg-[#0F172A] border border-[#1E293B] rounded-[2.5rem] text-center space-y-4">
                <div className="w-20 h-20 bg-blue-600/10 rounded-full flex items-center justify-center text-blue-400 mx-auto">
                  <LayoutDashboard size={40} />
                </div>
                <h2 className="text-2xl font-black text-white uppercase tracking-tighter">Moderation Overview</h2>
                <p className="text-slate-400 max-w-md mx-auto">Select a module from the navigation above to start analyzing content or managing platform integrations.</p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="p-6 bg-[#0F172A] border border-[#1E293B] rounded-3xl">
                <h4 className="text-white font-bold mb-4">System Status</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-500">Active Models</span>
                    <span className="text-xs font-bold text-emerald-400">4 / 4 Online</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-500">Queue Load</span>
                    <span className="text-xs font-bold text-white">Minimal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="analyzer" className="animate-in fade-in duration-300">
          <RawDataAnalyzer />
        </TabsContent>

        <TabsContent value="results" className="animate-in fade-in duration-300">
          <ModerationResults />
        </TabsContent>

        <TabsContent value="auto" className="animate-in fade-in duration-300">
          <AutoIngestion />
        </TabsContent>

        <TabsContent value="history" className="animate-in fade-in duration-300">
          <AuditHistory />
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
}