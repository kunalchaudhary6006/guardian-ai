"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Upload, Fingerprint } from 'lucide-react';

export default function VerificationHeader({ onUpload }: { onUpload: (f: any) => void }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
      <div>
        <h1 className="text-3xl font-black text-[#1E293B] tracking-tight flex items-center gap-3">
          <Fingerprint className="text-[#00BFA5]" size={32} /> AI Identity Verification & Deepfake Detection
        </h1>
        <p className="text-slate-500 text-sm mt-1 font-medium">
          Multi-model verification powered by biometric, liveness, and deepfake intelligence
        </p>
      </div>
      
      <Button 
        className="bg-[#00BFA5] hover:bg-[#00A892] text-white rounded-full px-8 h-12 font-bold shadow-lg shadow-[#00BFA5]/20 transition-all hover:shadow-xl gap-2"
        onClick={() => document.getElementById('header-upload')?.click()}
      >
        <Upload size={18} /> Upload Media
        <input 
          id="header-upload" 
          type="file" 
          className="hidden" 
          onChange={(e) => e.target.files?.[0] && onUpload(e.target.files[0])} 
        />
      </Button>
    </div>
  );
}