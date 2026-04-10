"use client";

import React, { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Sparkles, Image as ImageIcon, Video, Share2, CheckCircle2, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function MarketingChatbot() {
  const [messages, setMessages] = useState<any[]>([
    { 
      role: "ai", 
      text: "Hi 👋 I'm your AI Marketing Assistant. Tell me what you want to promote today. You can say: 'Create Instagram reel for my clothing brand' or 'Run Google ads for my app'." 
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
      let response = "";
      if (currentInput.includes("create") || currentInput.includes("generate")) {
        response = "Got it 💡 To get started, what is your primary goal? (Sales, Leads, or Brand Awareness?) Also, which platforms should we target?";
      } else if (currentInput.includes("sales") || currentInput.includes("leads")) {
        response = "Perfect. I'm analyzing market trends for your industry. I've generated a draft campaign with a predicted CTR of 4.8%. Would you like to: 1️⃣ Edit, 2️⃣ Approve & Post, or 3️⃣ Run Ads?";
      } else if (currentInput.includes("post") || currentInput.includes("ads")) {
        response = "🚀 Processing... I've checked the content against platform policies. Minor risk detected in Meta Ads caption, but I've auto-fixed it to stay compliant. Should I launch the ads now?";
      } else {
        response = "I'm on it. I'm cross-referencing your request with our real-time performance data to ensure maximum ROI.";
      }

      setMessages(prev => [...prev, { role: "ai", text: response }]);
    }, 1000);
  };

  return (
    <div className="bg-[#0F172A] border border-[#1E293B] p-5 rounded-3xl h-[500px] flex flex-col shadow-2xl">
      <div className="flex items-center justify-between mb-4 pb-4 border-b border-[#1E293B]">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          <h3 className="text-white font-bold flex items-center gap-2">
            <Sparkles className="text-blue-400" size={18} /> Guardian AI Assistant
          </h3>
        </div>
        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Growth Copilot</span>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto space-y-4 pr-2 custom-scrollbar">
        {messages.map((m, i) => (
          <div key={i} className={`flex gap-3 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
              m.role === 'user' ? 'bg-blue-600' : 'bg-slate-800'
            }`}>
              {m.role === 'user' ? <User size={16} className="text-white" /> : <Bot size={16} className="text-blue-400" />}
            </div>
            <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
              m.role === 'user' 
                ? 'bg-blue-600 text-white rounded-tr-none shadow-lg shadow-blue-900/20' 
                : 'bg-[#020617] border border-[#1E293B] text-slate-300 rounded-tl-none'
            }`}>
              {m.text}
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-2 mt-4 pt-4 border-t border-[#1E293B]">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Type a prompt to create a campaign..."
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