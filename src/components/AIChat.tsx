"use client";

import React, { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Sparkles } from "lucide-react";

export default function AIChat() {
  const [messages, setMessages] = useState<any[]>([
    { 
      role: "ai", 
      text: "Hey! I'm Guardian AI. I'm currently monitoring your platform's traffic, moderation queues, and global threat intelligence. Everything looks stable at the moment, but I'm here if you need a deep dive into any specific area. What can I check for you?" 
    }
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  // Simulated "Live" System State
  const [systemStats, setSystemStats] = useState({
    pendingModeration: 12,
    activeThreats: 2,
    blockedIPs: 145,
    lastScanTime: "2 minutes ago",
    globalThreatLevel: "Elevated"
  });

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  // Periodically "update" stats to simulate live monitoring
  useEffect(() => {
    const interval = setInterval(() => {
      setSystemStats(prev => ({
        ...prev,
        pendingModeration: prev.pendingModeration + (Math.random() > 0.7 ? 1 : 0),
        activeThreats: Math.max(0, prev.activeThreats + (Math.random() > 0.9 ? 1 : -1))
      }));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const getConversationalResponse = (userInput: string) => {
    const lowerInput = userInput.toLowerCase();
    
    if (lowerInput.includes("moderation") || lowerInput.includes("queue") || lowerInput.includes("flagged")) {
      return `I'm seeing ${systemStats.pendingModeration} items currently waiting in the moderation queue. Most of them are low-risk, but there's one flagged for potential hate speech that you might want to look at soon. Should I open the moderation panel for you?`;
    }
    
    if (lowerInput.includes("threat") || lowerInput.includes("attack") || lowerInput.includes("security")) {
      return `The global threat level is currently ${systemStats.globalThreatLevel}. I've blocked ${systemStats.blockedIPs} suspicious addresses in the last hour. There are ${systemStats.activeThreats} active investigations ongoing regarding brute-force attempts on the login endpoint.`;
    }
    
    if (lowerInput.includes("policy") || lowerInput.includes("rules")) {
      return "Your safety policies are all active. The 'Hate Speech Detection' rule has been the most active today, triggering about 45 times. Everything seems to be filtering correctly according to your current configuration.";
    }

    if (lowerInput.includes("status") || lowerInput.includes("how is everything")) {
      return `Overall, the system is healthy. Last full scan was ${systemStats.lastScanTime}. We've got ${systemStats.pendingModeration} moderation tasks pending and ${systemStats.activeThreats} minor security anomalies being handled. Nothing critical that requires your immediate attention right now!`;
    }

    if (lowerInput.includes("who are you") || lowerInput.includes("help")) {
      return "I'm your dedicated security co-pilot. I monitor your entire Guardian AI infrastructure in real-time. You can ask me about moderation backlogs, active security threats, policy performance, or just for a general system health check.";
    }

    const genericResponses = [
      "I'll keep a close eye on that. My logs show that related processes are running within normal parameters for now.",
      "That's a good point. I'm cross-referencing that with our historical threat data to see if there's a pattern we should be worried about.",
      "I'm monitoring the background traffic for any spikes related to that. I'll alert you immediately if I see anything suspicious.",
      "Understood. I've added that to my priority monitoring list for this session."
    ];

    return genericResponses[Math.floor(Math.random() * genericResponses.length)];
  };

  const send = () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", text: input };
    setMessages([...messages, userMsg]);
    const currentInput = input;
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: getConversationalResponse(currentInput),
        },
      ]);
    }, 800);
  };

  return (
    <div className="bg-[#0F172A] border border-[#1E293B] p-5 rounded-2xl h-[400px] flex flex-col shadow-xl">
      <div className="flex items-center justify-between mb-4 pb-4 border-b border-[#1E293B]">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          <h3 className="text-white font-bold flex items-center gap-2">
            <Sparkles className="text-blue-400" size={18} /> AI Security Assistant
          </h3>
        </div>
        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Live Monitoring</span>
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
          onKeyPress={(e) => e.key === 'Enter' && send()}
          placeholder="Ask about moderation, threats, or system status..."
          className="flex-1 bg-[#020617] border border-[#1E293B] text-white p-3 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-600"
        />
        <button 
          onClick={send} 
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-xl transition-all shadow-lg shadow-blue-900/20 active:scale-95"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
}