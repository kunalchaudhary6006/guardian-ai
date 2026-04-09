"use client";

import React, { useState } from 'react';
import LandingLayout from '@/components/LandingLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Send, Loader2, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://formspree.io/f/xojpbzlo", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast.success("Message sent successfully!");
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <LandingLayout>
      <section className="pt-20 pb-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Get in touch with <span className="text-primary">Guardian AI</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Have questions about our safety infrastructure? Our team is here to help you secure your platform.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Details */}
            <div className="space-y-8">
              <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-900 mb-8">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm shrink-0">
                      <Mail className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Support</p>
                      <a href="mailto:support@guardianai.co.in" className="text-lg font-medium text-slate-900 hover:text-primary transition-colors">
                        support@guardianai.co.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm shrink-0">
                      <Mail className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">General Inquiries</p>
                      <a href="mailto:info@guardianai.co.in" className="text-lg font-medium text-slate-900 hover:text-primary transition-colors">
                        info@guardianai.co.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm shrink-0">
                      <MapPin className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Global Presence</p>
                      <p className="text-lg font-medium text-slate-900">
                        India • Europe • USA
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Why contact us?</h3>
                <ul className="space-y-3">
                  {['Custom enterprise deployments', 'Technical integration support', 'Partnership opportunities', 'Media inquiries'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-600">
                      <CheckCircle2 className="text-emerald-500" size={18} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-200 shadow-xl shadow-slate-100">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="text-emerald-500" size={40} />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h2>
                  <p className="text-slate-600 mb-8">Thank you for reaching out. Our team will get back to you shortly.</p>
                  <Button variant="outline" onClick={() => setIsSubmitted(false)} className="rounded-xl">
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="full-name">Full Name</Label>
                      <Input id="full-name" name="name" placeholder="John Doe" required className="rounded-xl h-12" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Work Email</Label>
                      <Input id="email" name="email" type="email" placeholder="john@company.com" required className="rounded-xl h-12" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" name="subject" placeholder="How can we help?" required className="rounded-xl h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" name="message" placeholder="Tell us more about your needs..." required className="rounded-xl min-h-[150px]" />
                  </div>
                  <Button type="submit" disabled={isSubmitting} className="w-full bg-slate-900 hover:bg-slate-800 h-14 rounded-xl text-lg font-bold gap-2">
                    {isSubmitting ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />}
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </LandingLayout>
  );
};

export default Contact;