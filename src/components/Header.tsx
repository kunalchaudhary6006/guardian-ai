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

const Header = () => {
  const [user, setUser] = useState({ name: 'John Doe', role: 'Senior Security Analyst' });

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

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  return (
    <header className="h-16 border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-30 px-4 lg:px-8 flex items-center justify-between">
      <div className="flex-1 max-w-md hidden md:block">
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={18} />
          <Input 
            className="pl-10 bg-slate-50 border-none focus-visible:ring-1 focus-visible:ring-slate-200 transition-all" 
            placeholder="Search for threats, users, or logs..." 
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 px-1.5 py-0.5 rounded border border-slate-200 bg-white text-[10px] font-medium text-slate-400">
            <Command size={10} /> K
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 lg:gap-4">
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-slate-500 hover:text-slate-900 relative rounded-full"
          onClick={() => toast.info("You have 3 new security alerts")}
        >
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-white" />
        </Button>
        
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-slate-500 hover:text-slate-900 hidden sm:flex rounded-full"
          onClick={() => toast.info("Opening help center...")}
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
            <DropdownMenuItem className="rounded-lg py-2 cursor-pointer">Profile Settings</DropdownMenuItem>
            <DropdownMenuItem className="rounded-lg py-2 cursor-pointer">Security Preferences</DropdownMenuItem>
            <DropdownMenuItem className="rounded-lg py-2 cursor-pointer">API Keys</DropdownMenuItem>
            <DropdownMenuSeparator className="bg-slate-50" />
            <DropdownMenuItem className="text-rose-600 rounded-lg py-2 cursor-pointer font-medium">Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;