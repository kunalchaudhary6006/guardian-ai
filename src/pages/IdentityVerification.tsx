"use client";

import React, { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import VerificationHeader from '@/components/Identity/VerificationHeader';
import InputPanel from '@/components/Identity/InputPanel';
import ModelOutputs from '@/components/Identity/ModelOutputs';
import FusionEngine from '@/components/Identity/FusionEngine';
import FinalVerdict from '@/components/Identity/FinalVerdict';
import AdvancedInsights from '@/components/Identity/AdvancedInsights';
import VerificationLogs from '@/components/Identity/VerificationLogs';

export default function IdentityVerification() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleUpload = (file: File) => {
    setIsProcessing(true);
    setResult(null);
    
    // Simulate AI Pipeline
    setTimeout(() => {
      setIsProcessing(false);
      setResult({
        biometric: { status: 'Verified', confidence: 98 },
        liveness: { status: 'Live', type: 'Synthetic Check Passed' },
        deepfake: { status: 'Real', score: 94 },
        fusion: { score: 96, risk: 'Low' },
        verdict: 'Authentic',
        latency: 420,
        id: 'REQ-' + Math.random().toString(36).substring(2, 9).toUpperCase()
      });
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[#1E293B]">
      <DashboardLayout>
        <div className="max-w-[1600px] mx-auto space-y-8 bg-white p-8 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-[#E2E8F0]">
          <VerificationHeader onUpload={handleUpload} />

          {/* CORE FLOW VISUALIZATION */}
          <div className="flex items-center justify-between px-12 py-6 bg-[#F5F7FA] rounded-3xl border border-[#E2E8F0]">
            {[
              { label: 'User Upload', active: true },
              { label: 'Model Processing', active: isProcessing || result },
              { label: 'Fusion Engine', active: !!result },
              { label: 'Final Verdict', active: !!result },
            ].map((step, i, arr) => (
              <React.Fragment key={i}>
                <div className="flex flex-col items-center gap-3">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${
                    step.active ? 'bg-[#00BFA5] border-[#00BFA5] text-white shadow-lg shadow-[#00BFA5]/20' : 'bg-white border-[#E2E8F0] text-[#E2E8F0]'
                  }`}>
                    <span className="text-base font-black">{i + 1}</span>
                  </div>
                  <span className={`text-[10px] font-black uppercase tracking-widest ${step.active ? 'text-[#00BFA5]' : 'text-slate-400'}`}>
                    {step.label}
                  </span>
                </div>
                {i < arr.length - 1 && (
                  <div className={`flex-1 h-1 mx-4 rounded-full transition-all duration-700 ${step.active && arr[i+1].active ? 'bg-[#00BFA5]' : 'bg-[#E2E8F0]'}`} />
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* LEFT PANEL — Input Section */}
            <div className="lg:col-span-3">
              <InputPanel onUpload={handleUpload} isProcessing={isProcessing} />
            </div>

            {/* CENTER PANEL — Model Outputs + Fusion + Verdict */}
            <div className="lg:col-span-6 space-y-8">
              <ModelOutputs result={result} isProcessing={isProcessing} />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FusionEngine result={result} isProcessing={isProcessing} />
                <FinalVerdict result={result} isProcessing={isProcessing} />
              </div>
            </div>

            {/* RIGHT PANEL — Advanced Insights */}
            <div className="lg:col-span-3">
              <AdvancedInsights result={result} isProcessing={isProcessing} />
            </div>
          </div>

          {/* BOTTOM SECTION — Logs Table */}
          <VerificationLogs />

          <footer className="pt-8 border-t border-[#E2E8F0] text-center">
            <div className="w-24 h-1 bg-[#00BFA5] mx-auto mb-4 rounded-full opacity-50" />
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
              Powered by Guardian AI Intelligence Layer
            </p>
          </footer>
        </div>
      </DashboardLayout>
    </div>
  );
}