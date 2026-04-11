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
import { motion, AnimatePresence } from 'framer-motion';

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
        <div className="max-w-[1600px] mx-auto space-y-8">
          <VerificationHeader onUpload={handleUpload} />

          {/* Core Flow Visualization */}
          <div className="flex items-center justify-between px-12 py-4 bg-[#F5F7FA] rounded-2xl border border-[#E2E8F0]">
            {[
              { label: 'User Upload', active: true },
              { label: 'Model Processing', active: isProcessing || result },
              { label: 'Fusion Engine', active: !!result },
              { label: 'Final Verdict', active: !!result },
            ].map((step, i, arr) => (
              <React.Fragment key={i}>
                <div className="flex flex-col items-center gap-2">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
                    step.active ? 'bg-[#00BFA5] border-[#00BFA5] text-white' : 'bg-white border-[#E2E8F0] text-[#E2E8F0]'
                  }`}>
                    <span className="text-sm font-bold">{i + 1}</span>
                  </div>
                  <span className={`text-[10px] font-black uppercase tracking-widest ${step.active ? 'text-[#00BFA5]' : 'text-slate-400'}`}>
                    {step.label}
                  </span>
                </div>
                {i < arr.length - 1 && (
                  <div className={`flex-1 h-0.5 mx-4 transition-all ${step.active && arr[i+1].active ? 'bg-[#00BFA5]' : 'bg-[#E2E8F0]'}`} />
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Panel - Input */}
            <div className="lg:col-span-3">
              <InputPanel onUpload={handleUpload} isProcessing={isProcessing} />
            </div>

            {/* Center Panel - Models & Verdict */}
            <div className="lg:col-span-6 space-y-8">
              <ModelOutputs result={result} isProcessing={isProcessing} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FusionEngine result={result} isProcessing={isProcessing} />
                <FinalVerdict result={result} isProcessing={isProcessing} />
              </div>
            </div>

            {/* Right Panel - Insights */}
            <div className="lg:col-span-3">
              <AdvancedInsights result={result} isProcessing={isProcessing} />
            </div>
          </div>

          {/* Bottom Section - Logs */}
          <VerificationLogs />

          <footer className="pt-12 pb-8 border-t border-[#E2E8F0] bg-[#F5F7FA] -mx-8 px-8 text-center">
            <div className="w-24 h-1 bg-[#00BFA5] mx-auto mb-4 rounded-full" />
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
              Powered by Guardian AI Intelligence Layer
            </p>
          </footer>
        </div>
      </DashboardLayout>
    </div>
  );
}