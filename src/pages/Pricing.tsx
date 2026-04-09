"use client";

import React from 'react';
import LandingLayout from '@/components/LandingLayout';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const tiers = [
    {
      name: 'Starter',
      price: '$0',
      desc: 'Perfect for small communities and side projects.',
      features: ['Up to 10k requests/mo', 'Basic text moderation', 'Community support', 'Standard API access'],
      button: 'Start for Free',
      link: '/signup'
    },
    {
      name: 'Pro',
      price: '$99',
      desc: 'Advanced safety for growing platforms.',
      features: ['Up to 500k requests/mo', 'Image & Video analysis', 'Priority support', 'Custom policy rules', 'Threat intelligence'],
      button: 'Get Started',
      link: '/signup',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      desc: 'Dedicated infrastructure for global scale.',
      features: ['Unlimited requests', 'Dedicated account manager', 'SLA guarantees', 'On-premise deployment', 'Custom AI training'],
      button: 'Contact Sales',
      link: '/signup'
    }
  ];

  return (
    <LandingLayout>
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Simple, transparent pricing</h1>
          <p className="text-xl text-slate-600">Choose the plan that fits your platform's needs.</p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <div key={i} className={`relative p-8 rounded-3xl border ${tier.popular ? 'border-primary shadow-xl ring-1 ring-primary' : 'border-slate-200 shadow-sm'} bg-white flex flex-col`}>
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold text-slate-900">{tier.price}</span>
                  {tier.price !== 'Custom' && <span className="text-slate-500">/mo</span>}
                </div>
                <p className="text-slate-600 text-sm">{tier.desc}</p>
              </div>
              <div className="space-y-4 mb-8 flex-1">
                {tier.features.map((feature, j) => (
                  <div key={j} className="flex items-center gap-3 text-sm text-slate-600">
                    <CheckCircle2 className="text-emerald-500 shrink-0" size={18} />
                    {feature}
                  </div>
                ))}
              </div>
              <Button asChild variant={tier.popular ? 'default' : 'outline'} className="w-full rounded-full h-12">
                <Link to={tier.link}>{tier.button}</Link>
              </Button>
            </div>
          ))}
        </div>
      </section>
    </LandingLayout>
  );
};

export default Pricing;