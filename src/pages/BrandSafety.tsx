"use client";

import React, { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, Plus, ShieldCheck } from 'lucide-react';
import KPIOverview from '@/components/BrandSafety/KPIOverview';
import CampaignsTable from '@/components/BrandSafety/CampaignsTable';
import RiskAssessment from '@/components/BrandSafety/RiskAssessment';
import ContentModerationPanel from '@/components/BrandSafety/ContentModerationPanel';
import PolicyCompliance from '@/components/BrandSafety/PolicyCompliance';
import SentimentInsights from '@/components/BrandSafety/SentimentInsights';
import ContextSimulator from '@/components/BrandSafety/ContextSimulator';
import CreatorSafetyPanel from '@/components/BrandSafety/CreatorSafetyPanel';
import DecisionActions from '@/components/BrandSafety/DecisionActions';
import { CampaignReportModal, NewCampaignModal, CreatorRiskGraphModal } from '@/components/BrandSafety/Modals';

export default function BrandSafety() {
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [newCampaignModalOpen, setNewCampaignModalOpen] = useState(false);
  const [creatorModalOpen, setCreatorModalOpen] = useState(false);
  const [selectedCreator, setSelectedCreator] = useState<any>(null);

  const handleViewCreatorGraph = (creator: any) => {
    setSelectedCreator(creator);
    setCreatorModalOpen(true);
  };

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-black text-white uppercase tracking-tighter flex items-center gap-3">
            <ShieldCheck className="text-blue-500" size={32} /> Ad & Brand Safety Manager
          </h1>
          <p className="text-slate-400 text-sm mt-1">AI-powered brand protection, policy compliance & contextual ad intelligence</p>
        </div>
        <div className="flex gap-3">
          <Button 
            variant="outline" 
            onClick={() => setReportModalOpen(true)}
            className="rounded-2xl border-[#1E293B] bg-[#0F172A] text-white hover:bg-[#1E293B] gap-2 h-11 px-6"
          >
            <FileText size={18} /> Campaign Report
          </Button>
          <Button 
            onClick={() => setNewCampaignModalOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 rounded-2xl gap-2 h-11 px-6 shadow-lg shadow-blue-900/20"
          >
            <Plus size={18} /> New Campaign
          </Button>
        </div>
      </div>

      {/* KPI Section */}
      <div className="mb-8">
        <KPIOverview />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - 2/3 width */}
        <div className="lg:col-span-2 space-y-8">
          <CampaignsTable />
          <RiskAssessment />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ContentModerationPanel />
            <PolicyCompliance />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SentimentInsights />
            <ContextSimulator />
          </div>
        </div>

        {/* Right Column - 1/3 width */}
        <div className="space-y-8">
          <DecisionActions />
          <CreatorSafetyPanel onViewGraph={handleViewCreatorGraph} />
          
          {/* Quick Stats / Info Card */}
          <div className="p-6 bg-[#0F172A] border border-[#1E293B] rounded-3xl">
            <h4 className="text-white font-bold mb-4">System Intelligence</h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-xs text-slate-500">Active Models</span>
                <span className="text-xs font-bold text-blue-400">6 / 6 Online</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-slate-500">Last Global Sync</span>
                <span className="text-xs font-bold text-white">Just now</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-slate-500">Threat Level</span>
                <Badge className="bg-emerald-500/10 text-emerald-400">Low</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <CampaignReportModal open={reportModalOpen} onOpenChange={setReportModalOpen} />
      <NewCampaignModal open={newCampaignModalOpen} onOpenChange={setNewCampaignModalOpen} />
      <CreatorRiskGraphModal open={creatorModalOpen} onOpenChange={setCreatorModalOpen} creator={selectedCreator} />
    </DashboardLayout>
  );
}