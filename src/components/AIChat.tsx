"use client";

import React, { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Sparkles, Paperclip, Image as ImageIcon, FileText, Zap, MapPin, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export default function AIChat() {
  const [messages, setMessages] = useState<any[]>([
    { 
      role: "ai", 
      text: "I'm your AI Intelligence Copilot. I have full access to NITRS anomaly logs, threat feeds, and predictive models. How can I assist your investigation today?",
      structured: {
        summary: "System operational. No critical escalations in the last 10 minutes.",
        risk: 12,
        models: ["Anomaly Detection", "RAG Engine"]
      }
    }
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", text: input };
    setMessages(prev => [...prev, userMsg]);
    const currentInput = input.toLowerCase();
    setInput("");

    setTimeout(() => {
      let response: any = { role: "ai" };
      
      if (currentInput.includes("threat") || currentInput.includes("attack")) {
        response.text = "I've analyzed the current threat landscape. A coordinated DDoS attempt is being mitigated in the Asia-Pacific region.";
        response.structured = {
          type: "Cyber Attack (DDoS)",
          risk: 88,
          location: "Asia-Pacific",
          models: ["Traffic Analysis", "Anomaly Detection"],
          action: "Block IP clusters & Alert Cyber Unit"
        };
      } else if (currentInput.includes("fraud") || currentInput.includes("money")) {
        response.text = "Financial fraud models have flagged a suspicious transaction chain involving 12 accounts.";
        response.structured = {
          type: "Financial Fraud",
          risk: 74,
          location: "Global / Digital",
          models: ["Graph AI", "NLP Fusion"],
          action: "Freeze transactions & Initiate Case"
        };
      } else {
        response.text = "I'm cross-referencing your query with our real-time intelligence database. Everything appears stable within this vector.";
        response.structured = {
          summary: "Normal activity detected.",
          risk: 15,
          models: ["RAG Intelligence"],
          action: "Continue Monitoring"
        };
      }

      setMessages(prev => [...prev, response]);
    }, 1000);
  };

  return (
    <div className="bg-[#0F172A] border border-[#1E293B] p-5 rounded-[2.5rem] h-[600px] flex flex-col shadow-2xl">
      <div className="flex items-center justify-between mb-4 pb-4 border-b border-[#1E293B]">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          <h3 className="text-white font-bold flex items-center gap-2">
            <Sparkles className="text-blue-400" size={18} /> Intelligence Copilot
          </h3>
        </div>
        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">RAG Engine Active</span>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto space-y-6 pr-2 custom-scrollbar">
        {messages.map((m, i) => (
          <div key={i} className={`flex flex-col gap-3 ${m.role === 'user' ? 'items-end' : 'items-start'}`}>
            <div className={`flex gap-3 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                m.role === 'user' ? 'bg-blue-600' : 'bg-slate-800'
              }`}>
                {m.role === 'user' ? <User size={16} className="text-white" /> : <Bot size={16} className="text-blue-400" />}
              </div>
              <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                m.role === 'user' 
                  ? 'bg-blue-600 text-white rounded-tr-none shadow-lg shadow-blue-900/20' 
                  : 'bg-[#020617] border border-[#1E293B] text-slate-300 rounded-tl-none'
              }`}>
                {m.text}
              </div>
            </div>

            {m.structured && (
              <div className="ml-11 mr-11 w-full max-w-[80%] p-4 bg-blue-600/5 border border-blue-500/20 rounded-2xl space-y-3 animate-in fade-in slide-in-from-top-2">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">AI Intelligence Report</span>
                  <Badge className={m.structured.risk > 70 ? "bg-rose-500/10 text-rose-500" : "bg-emerald-500/10 text-emerald-500"} cn={cn}>
                    Risk: {m.structured.risk}/100
                  </Badge>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {m.structured.type && (
                    <div className="space-y-1">
                      <p className="text-[8px] text-slate-500 font-bold uppercase">Threat Type</p>
                      <p className="text-xs text-white font-bold">{m.structured.type}</p>
                    </div>
                  )}
                  {m.structured.location && (
                    <div className="space-y-1">
                      <p className="text-[8px] text-slate-500 font-bold uppercase">Location</p>
                      <p className="text-xs text-white font-bold flex items-center gap-1"><MapPin size={10} /> {m.structured.location}</p>
                    </div>
                  )}
                </div>
                <div className="pt-2 border-t border-blue-500/10">
                  <p className="text-[8px] text-slate-500 font-bold uppercase mb-1">Recommended Action</p>
                  <p className="text-xs text-emerald-400 font-bold flex items-center gap-2">
                    <Zap size={12} fill="currentColor" /> {m.structured.action || 'Continue Monitoring'}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex gap-2 mt-4 pt-4 border-t border-[#1E293B]">
        <Button variant="ghost" size="icon" className="text-slate-500 hover:text-white rounded-xl">
          <Paperclip size={18} />
        </Button>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Investigate incidents, ask about threats..."
          className="flex-1 bg-[#020617] border border-[#1E293B] text-white p-3 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-600"
        />
        <Button 
          onClick={handleSend} 
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-xl transition-all shadow-lg shadow-blue-900/20 active:scale-95"
        >
          <Send size={18} />
        </Button>
      </div>
    </div>
  );
}

const Badge = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <span className={cn("px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-widest border", className)}>
    {children}
  </span>
);