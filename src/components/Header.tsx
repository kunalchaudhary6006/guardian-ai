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
  const [user, setUser] = useState({ name: 'John Doe', role: 'Senior Security Analyst' });
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsed = JSON.parse(storedUser);
      setUser({
        name: parsed.name || 'John Doe',
        role: parsed.role || 'Senior Security Analyst'
      });
    }
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery) return;
    toast.info(`Searching for: "${searchQuery}"...`);
    // Simulate navigation to a search results page or filtering
    if (searchQuery.toLowerCase().includes('mod')) navigate('/moderation');
    if (searchQuery.toLowerCase().includes('threat')) navigate('/threats');
    if (searchQuery.toLowerCase().includes('policy')) navigate('/policy');
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    toast.success("Logged out successfully");
    navigate('/');
  };

  return (
    <header className="h-16 border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-30 px-4 lg:px-8 flex items-center justify-between">
      <div className="flex-1 max-w-md hidden md:block">
        <form onSubmit={handleSearch} className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={18} />
          <Input 
            className="pl-10 bg-slate-50 border-none focus-visible:ring-1 focus-visible:ring-slate-200 transition-all" 
            placeholder="Search for threats, users, or logs..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 px-1.5 py-0.5 rounded border border-slate-200 bg-white text-[10px] font-medium text-slate-400">
            <Command size={10} /> K
          </div>
        </form>
      </div>

      <div className="flex items-center gap-2 lg:gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-slate-500 hover:text-slate-900 relative rounded-full"
            >
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-white" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80 rounded-2xl p-2 shadow-xl border-slate-100">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="p-3 cursor-pointer" onClick={() => navigate('/moderation')}>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-bold">New High Risk Content</p>
                <p className="text-xs text-slate-500">A new item requires immediate review in the moderation queue.</p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="p-3 cursor-pointer" onClick={() => navigate('/threats')}>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-bold">Threat Level Elevated</p>
                <p className="text-xs text-slate-500">Global threat level has been updated to Elevated.</p>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-slate-500 hover:text-slate-900 hidden sm:flex rounded-full"
          onClick={() => toast.info("Opening help center documentation...")}
        >
          <HelpCircle size={20} />
        </Button>

        <div className="h-8 w-[1px] bg-slate-200 mx-2 hidden sm:block" />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="gap-3 px-2 hover:bg-slate-50 rounded-xl">
              <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-slate-200">
                {getInitials(user.name)}
              </div>
              <div className="text-left hidden lg:block">
                <p className="text-sm font-bold text-slate-900 leading-none">{user.name}</p>
                <p className="text-[10px] text-slate-500 mt-1">{user.role}</p>
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 rounded-2xl p-2 shadow-xl border-slate-100">
            <DropdownMenuLabel className="text-xs text-slate-400 uppercase tracking-wider">My Account</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-slate-50" />
            <DropdownMenuItem className="rounded-lg py-2 cursor-pointer" onClick={() => navigate('/settings')}>Profile Settings</DropdownMenuItem>
            <DropdownMenuItem className="rounded-lg py-2 cursor-pointer" onClick={() => navigate('/settings')}>Security Preferences</DropdownMenuItem>
            <DropdownMenuItem className="rounded-lg py-2 cursor-pointer" onClick={() => toast.info("API Keys management coming soon")}>API Keys</DropdownMenuItem>
            <DropdownMenuSeparator className="bg-slate-50" />
            <DropdownMenuItem className="text-rose-600 rounded-lg py-2 cursor-pointer font-medium" onClick={handleLogout}>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;