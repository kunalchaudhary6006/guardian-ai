"use client";

import React, { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Sparkles } from "lucide-react";

export default function AIChat() {
  const [messages, setMessages] = useState<any[]>([
    { 
      role: "ai", 
      text: "Hey there! I'm your Guardian AI assistant. I've been keeping an eye on the system logs—everything looks pretty solid right now, but I'm here if you need help with anything or want to run a quick check on something specific. What's on your mind?" 
    }
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const getConversationalResponse = (userInput: string) => {
    const lowerInput = userInput.toLowerCase();
    
    if (lowerInput.includes("hello") || lowerInput.includes("hi")) {
      return "Hi! Hope you're having a smooth day. Is there anything security-related I can help you look into?";
    }
    
    if (lowerInput.includes("status") || lowerInput.includes("how is the system")) {
      return "The system is looking healthy! I just finished a background scan and didn't find any major red flags. Traffic patterns are normal for this time of day.";
    }
    
    if (lowerInput.includes("threat") || lowerInput.includes("phishing") || lowerInput.includes("attack")) {
      return "I'm actually seeing a slight uptick in suspicious login attempts from a few unfamiliar IPs. It's nothing to panic about yet, but it might be a good idea to double-check our rate-limiting policies just to be safe. Want me to show you the logs?";
    }

    if (lowerInput.includes("help") || lowerInput.includes("what can you do")) {
      return "I can help you analyze traffic logs, identify potential security risks, or even help you configure your moderation rules. Just let me know what you're working on!";
    }

    return "That's interesting. From a security perspective, I'd say we should keep a close watch on how that impacts our user data. I'll keep monitoring the background processes and let you know if I spot anything unusual related to that.";
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
    }, 1000);
  };

  return (
    <div className="bg-[#0F172A] border border-[#1E293B] p-5 rounded-2xl h-[400px] flex flex-col shadow-xl">
      <div className="flex items-center justify-between mb-4 pb-4 border-b border-[#1E293B]">
        <h3 className="text-white font-bold flex items-center gap-2">
          <Sparkles className="text-blue-400" size={18} /> AI Security Assistant
        </h3>
        <span className="w-2 h-2 bg-emerald-500 rounded-full" />
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto space-y-4 pr-2 custom-scrollbar">
        {messages.map((m, i) => (
          <div key={i} className={`flex gap-3 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
              m.role === 'user' ? 'bg-blue-600' : 'bg-slate-800'
            }`}>
              {m.role === 'user' ? <User size={16} className="text-white" /> : <Bot size={16} className="text-blue-400" />}
            </div>
            <div className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
              m.role === 'user' 
                ? 'bg-blue-600 text-white rounded-tr-none' 
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
          placeholder="Chat with your security assistant..."
          className="flex-1 bg-[#020617] border border-[#1E293B] text-white p-3 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-colors"
        />
        <button 
          onClick={send} 
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-xl transition-all shadow-lg shadow-blue-900/20"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
}