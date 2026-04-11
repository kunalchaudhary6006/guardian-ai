"use client";

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Upload, FileText, X, Image as ImageIcon, Video, Mic } from 'lucide-react';

export default function InputPanel({ onUpload, isProcessing }: { onUpload: (f: File) => void, isProcessing: boolean }) {
  const [file, setFile] = useState<File | null>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) {
      setFile(f);
      onUpload(f);
    }
  };

  return (
    <Card className="border-[#E2E8F0] bg-[#F5F7FA] rounded-3xl shadow-sm h-full">
      <CardContent className="p-6 space-y-6">
        <h3 className="text-xs font-black text-slate-500 uppercase tracking-widest">Input Section</h3>
        
        <div 
          onClick={() => !isProcessing && document.getElementById('panel-upload')?.click()}
          className={`border-2 border-dashed border-[#E2E8F0] rounded-2xl p-8 flex flex-col items-center justify-center gap-4 bg-white transition-all cursor-pointer group ${
            isProcessing ? 'opacity-50 cursor-not-allowed' : 'hover:border-[#00BFA5] hover:bg-[#00BFA5]/5'
          }`}
        >
          <div className="w-12 h-12 bg-[#F5F7FA] rounded-xl flex items-center justify-center text-[#00BFA5] group-hover:scale-110 transition-transform">
            <Upload size={24} />
          </div>
          <div className="text-center">
            <p className="text-[#1E293B] font-bold text-sm">Drop file or click to upload</p>
            <p className="text-[10px] text-slate-400 mt-1 font-medium">JPG, PNG, MP4, WAV</p>
          </div>
          <input id="panel-upload" type="file" className="hidden" onChange={handleFile} />
        </div>

        {file && (
          <div className="p-4 bg-white border border-[#E2E8F0] rounded-2xl space-y-4 animate-in fade-in slide-in-from-bottom-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#F5F7FA] rounded-lg text-[#00BFA5]">
                  {file.type.includes('image') ? <ImageIcon size={16} /> : file.type.includes('video') ? <Video size={16} /> : <Mic size={16} />}
                </div>
                <div className="max-w-[120px]">
                  <p className="text-xs font-bold text-[#1E293B] truncate">{file.name}</p>
                  <p className="text-[10px] text-slate-400">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                </div>
              </div>
              <button onClick={() => setFile(null)} className="text-slate-300 hover:text-rose-500">
                <X size={16} />
              </button>
            </div>
            <div className="aspect-video bg-[#F5F7FA] rounded-xl flex items-center justify-center overflow-hidden border border-[#E2E8F0]">
              {file.type.includes('image') ? (
                <img src={URL.createObjectURL(file)} alt="Preview" className="w-full h-full object-cover" />
              ) : (
                <div className="flex flex-col items-center gap-2 text-slate-400">
                  <FileText size={24} />
                  <span className="text-[10px] font-bold uppercase">Media Preview</span>
                </div>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}