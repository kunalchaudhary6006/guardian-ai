"use client";

import React, { useEffect, useState } from 'react';
import { Search, Bell, HelpCircle, Command } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: 'Guest User', role: 'Security Analyst' });
  const [searchQuery, setSearchQuery] = useState("");

  const loadUser = () => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsed = JSON.parse(storedUser);
      setUser({
        name: parsed.name || 'Guest User',
        role: parsed.role || 'Security Analyst'
      });
    }
  };

  useEffect(() => {
    loadUser();
    window.addEventListener('storage', loadUser);
    return () => window.removeEventListener('storage', loadUser);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery) return;
    toast.info(`Searching for: "${searchQuery}"...`);
    if (searchQuery.toLowerCase().includes('mod')) navigate('/moderation');
    if (searchQuery.toLowerCase().includes('threat')) navigate('/threats');
    if (searchQuery.toLowerCase().includes('policy')) navigate('/policy');
  };

  const getInitials = (name: string) => {
    if (!name) return "GU";
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    toast.success("Logged out successfully");
    navigate('/');
  };

  return (
    <header className="h-16 border-b border-[#1E293B] bg-[#020617]/80 backdrop-blur-md sticky top-0 z-30 px-4 lg:px-8 flex items-center justify-between">
      <div className="flex-1 max-w-md hidden md:block">
        <form onSubmit={handleSearch} className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors" size={18} />
          <Input 
            className="pl-10 bg-[#0F172A] border-[#1E293B] text-white focus-visible:ring-1 focus-visible:ring-blue-500 transition-all" 
            placeholder="Search for threats, users, or logs..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 px-1.5 py-0.5 rounded border border-[#1E293B] bg-[#020617] text-[10px] font-medium text-slate-500">
            <Command size={10} /> K
          </div>
        </form>
      </div>

      <div className="flex items-center gap-2 lg:gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="outline" 
              size="icon" 
              className="text-blue-400 hover:text-white relative rounded-full bg-blue-600/10 border-blue-500/30 hover:bg-blue-600 transition-all"
            >
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-[#020617]" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80 rounded-2xl p-2 shadow-xl border-[#1E293B] bg-[#0F172A] text-white">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-[#1E293B]" />
            <DropdownMenuItem className="p-3 cursor-pointer hover:bg-[#1E293B] rounded-xl" onClick={() => navigate('/moderation')}>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-bold">New High Risk Content</p>
                <p className="text-xs text-slate-400">A new item requires immediate review in the moderation queue.</p>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        
        <div className="h-8 w-[1px] bg-[#1E293B] mx-2 hidden sm:block" />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="gap-3 px-3 bg-blue-600/10 border-blue-500/30 hover:bg-blue-600/20 rounded-xl transition-all">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-blue-900/20">
                {getInitials(user.name)}
              </div>
              <div className="text-left hidden lg:block">
                <p className="text-sm font-bold text-white leading-none">{user.name}</p>
                <p className="text-[10px] text-slate-500 mt-1">{user.role}</p>
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 rounded-2xl p-2 shadow-xl border-[#1E293B] bg-[#0F172A] text-white">
            <DropdownMenuLabel className="text-xs text-slate-500 uppercase tracking-wider">My Account</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-[#1E293B]" />
            <DropdownMenuItem className="rounded-lg py-2 cursor-pointer hover:bg-[#1E293B]" onClick={() => navigate('/settings')}>Profile Settings</DropdownMenuItem>
            <DropdownMenuSeparator className="bg-[#1E293B]" />
            <DropdownMenuItem className="text-rose-400 rounded-lg py-2 cursor-pointer font-medium hover:bg-rose-500/10" onClick={handleLogout}>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;