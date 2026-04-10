"use client";

import React, { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import ThreatHeader from '@/components/ThreatIntelligence/ThreatHeader';
import GlobalThreatIndex from '@/components/ThreatIntelligence/GlobalThreatIndex';
import ThreatMonitor from '@/components/ThreatIntelligence/ThreatMonitor';
import ThreatSummaryKPIs from '@/components/ThreatIntelligence/ThreatSummaryKPIs';
import DecisionTimeline from '@/components/ThreatIntelligence/DecisionTimeline';
import IncidentLog from '@/components/ThreatIntelligence/IncidentLog';
import ResponsePlaybook from '@/components/ThreatIntelligence/ResponsePlaybook';
import CrisisProtocolModal from '@/components/ThreatIntelligence/CrisisProtocolModal';
import WhatIfSimulation from '@/components/ThreatIntelligence/WhatIfSimulation';

export default function ThreatIntelligence() {
  const [playbookOpen, setPlaybookOpen] = useState(false);
  const [crisisModalOpen, setCrisisModalOpen] = useState(false);

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <ThreatHeader onInitiateCrisis={() => setCrisisModalOpen(true)} />

        {/* Hero KPI Section */}
        <GlobalThreatIndex />

        {/* Monitor Section */}
        <ThreatMonitor />

        {/* Summary KPIs & Console Trigger */}
        <ThreatSummaryKPIs onOpenConsole={() => setPlaybookOpen(true)} />

        {/* Decision Timeline */}
        <DecisionTimeline />

        {/* Incident Log */}
        <IncidentLog />

        {/* What-If Simulation */}
        <div className="mt-8">
          <WhatIfSimulation />
        </div>

        {/* Slide-in Panels & Modals */}
        <ResponsePlaybook open={playbookOpen} onOpenChange={setPlaybookOpen} />
        <CrisisProtocolModal open={crisisModalOpen} onOpenChange={setCrisisModalOpen} />
      </div>
    </DashboardLayout>
  );
}