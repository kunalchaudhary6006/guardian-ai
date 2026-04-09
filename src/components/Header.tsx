"use client";

import React from 'react';
import { Search, Bell, User, HelpCircle } from 'lucide-react';
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
import { Badge } from '@/components/ui/badge';

const Header = () => {
  return (
    <header className="h-16 border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-30 px-4 lg:px-8 flex items-center justify-between">
      <div className="flex-1 max-w-md hidden md:block">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <Input 
            className="pl-10 bg-slate-50 border-none focus-visible:ring-1 focus-visible:ring-slate-200" 
            placeholder="Search for threats, users, or logs..." 
          />
        </div>
      </div>

      <div className="flex items-center gap-2 lg:gap-4">
        <Button variant="ghost" size="icon" className="text-slate-500 hover:text-slate-900 relative">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-white" />
        </Button>
        
        <Button variant="ghost" size="icon" className="text-slate-500 hover:text-slate-900 hidden sm:flex">
          <HelpCircle size={20} />
        </Button>

        <div className="h-8 w-[1px] bg-slate-200 mx-2 hidden sm:block" />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="gap-3 px-2 hover:bg-slate-50">
              <div className="w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center text-white text-xs font-bold">
                JD
              </div>
              <div className="text-left hidden lg:block">
                <p className="text-sm font-bold text-slate-900 leading-none">John Doe</p>
                <p className="text-[10px] text-slate-500 mt-1">Senior Security Analyst</p>
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile Settings</DropdownMenuItem>
            <DropdownMenuItem>Security Preferences</DropdownMenuItem>
            <DropdownMenuItem>API Keys</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-rose-600">Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;