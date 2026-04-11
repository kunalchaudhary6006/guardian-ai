"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, AlertTriangle, XCircle, ShieldCheck } from 'lucide-react';

export default function FinalVerdict({ result, isProcessing }: { result: any, isProcessing: boolean }) {
  const verdict = result?.verdict || 'Waiting';

  const getVerdictStyles = () => {
    if (verdict === 'Authentic') return { color: 'text-[#00BFA5]', bg: 'bg-[#00BFA5]/5', icon: CheckCircle2, border: 'border-[#00BFA5]/20' };
    if (verdict === 'Suspicious') return { color: 'text-amber-500', bg: 'bg-amber-50', icon: AlertTriangle, border: 'border-amber-200' };
    if (verdict === 'Fake') return { color: 'text-rose-500', bg: 'bg-rose-50', icon: XCircle, border: 'border-rose-200' };
    return { color: 'text-slate-300', bg: 'bg-[#F5F7FA]', icon: ShieldCheck, border: 'border-[#E2E8F0]' };
  };

  const styles = getVerdictStyles();

  return (
    <Card className={`border-2 rounded-[2.5rem] shadow-lg flex flex-col items-center justify-center p-8 transition-all duration-500 ${styles.bg} ${styles.border}`}>
      <CardContent className="p-0 flex flex-col items-center text-center gap-6">
        <div className={`w-24 h-24 rounded-full flex items-center justify-center ${styles.color} bg-white shadow-xl border border-[#E2E8F0]`}>
          <styles.icon size={48} />
        </div>
        <div>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Final System Verdict</p>
          <h2 className={`text-5xl font-black uppercase tracking-tighter ${styles.color}`}>
            {isProcessing ? 'Analyzing...' : verdict}
          </h2>
        </div>
        <p className="text-xs text-slate-500 font-bold leading-relaxed max-w-[240px]">
          {verdict === 'Authentic' ? 'Identity verified with high confidence across all biometric and liveness models.' : 
           verdict === 'Waiting' ? 'Upload media to begin the multi-model verification process.' : 
           'Potential anomalies or synthetic patterns detected in the verification pipeline.'}
        </p>
      </CardContent>
    </Card>
  );
}