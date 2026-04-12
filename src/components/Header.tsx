"use client";

import React, { useEffect, useState } from 'react';
import { Search, Bell, Command } from 'lucide-react';
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
    <header className="h-20 border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-30 px-4 lg:px-8 flex items-center justify-between">
      <div className="flex-1 max-w-md hidden md:block">
        <form onSubmit={handleSearch} className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-slate-900 transition-colors" size={18} />
          <Input 
            className="pl-10 bg-slate-50 border-slate-100 text-slate-900 focus-visible:ring-1 focus-visible:ring-slate-200 transition-all h-11 rounded-xl" 
            placeholder="Search for threats, users, or logs..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 px-1.5 py-0.5 rounded border border-slate-200 bg-white text-[10px] font-bold text-slate-400">
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
              className="text-slate-400 hover:text-slate-900 relative rounded-full bg-slate-50 border-slate-100 hover:bg-slate-100 transition-all"
            >
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-blue-600 rounded-full border-2 border-white" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80 rounded-2xl p-2 shadow-xl border-slate-100 bg-white text-slate-900">
            <DropdownMenuLabel className="text-xs font-bold uppercase tracking-widest text-slate-400">Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-slate-100" />
            <DropdownMenuItem className="p-3 cursor-pointer hover:bg-slate-50 rounded-xl" onClick={() => navigate('/moderation')}>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-bold">New High Risk Content</p>
                <p className="text-xs text-slate-500">A new item requires immediate review in the moderation queue.</p>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        
        <div className="h-8 w-[1px] bg-slate-100 mx-2 hidden sm:block" />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="gap-3 px-3 bg-slate-50 border-slate-100 hover:bg-slate-100 rounded-xl transition-all h-11">
              <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-slate-200">
                {getInitials(user.name)}
              </div>
              <div className="text-left hidden lg:block">
                <p className="text-sm font-bold text-slate-900 leading-none">{user.name}</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">{user.role}</p>
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 rounded-2xl p-2 shadow-xl border-slate-100 bg-white text-slate-900">
            <DropdownMenuLabel className="text-xs text-slate-400 uppercase tracking-widest font-bold">My Account</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-slate-100" />
            <DropdownMenuItem className="rounded-lg py-2 cursor-pointer hover:bg-slate-50 font-bold text-sm" onClick={() => navigate('/settings')}>Profile Settings</DropdownMenuItem>
            <DropdownMenuSeparator className="bg-slate-100" />
            <DropdownMenuItem className="text-rose-600 rounded-lg py-2 cursor-pointer font-bold text-sm hover:bg-rose-50" onClick={handleLogout}>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;