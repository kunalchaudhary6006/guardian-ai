"use client";

import React, { useState, useEffect } from 'react';
import { Mail, ArrowLeft, ShieldCheck, ExternalLink } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';

interface MockEmail {
  id: string;
  subject: string;
  from: string;
  to: string;
  body: string;
  timestamp: string;
  type: 'verification';
}

const MockInbox = () => {
  const [emails, setEmails] = useState<MockEmail[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedEmails = JSON.parse(localStorage.getItem('mock_emails') || '[]');
    setEmails(storedEmails);
  }, []);

  const handleVerify = (emailId: string) => {
    const pendingUser = JSON.parse(localStorage.getItem('pending_user') || '{}');
    localStorage.setItem('user', JSON.stringify({ ...pendingUser, confirmed: true }));
    localStorage.removeItem('pending_user');
    
    // Remove the verification email after use
    const updatedEmails = emails.filter(e => e.id !== emailId);
    localStorage.setItem('mock_emails', JSON.stringify(updatedEmails));
    
    toast.success("Email verified successfully!");
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <Link to="/signup" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors">
            <ArrowLeft size={20} /> Back to Signup
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
              <ShieldCheck className="text-white" size={18} />
            </div>
            <span className="font-bold text-slate-900">Guardian AI Mailer</span>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
          <Mail className="text-primary" /> Prototype Inbox
        </h1>

        <div className="space-y-4">
          {emails.length > 0 ? emails.map((email) => (
            <Card key={email.id} className="border-none shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-white p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg">{email.subject}</h3>
                      <p className="text-sm text-slate-500">From: {email.from}</p>
                    </div>
                    <span className="text-xs text-slate-400">{email.timestamp}</span>
                  </div>
                  <div className="py-6 border-y border-slate-50 my-4 text-slate-700 whitespace-pre-line">
                    {email.body}
                  </div>
                  <Button 
                    onClick={() => handleVerify(email.id)}
                    className="bg-primary hover:bg-primary/90 text-white gap-2"
                  >
                    Verify My Account <ExternalLink size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )) : (
            <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
              <Mail className="mx-auto text-slate-200 mb-4" size={48} />
              <p className="text-slate-500">Your inbox is empty. Try signing up to receive a verification email.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MockInbox;