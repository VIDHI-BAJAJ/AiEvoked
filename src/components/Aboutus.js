// src/components/AboutPage.js
import {ArrowRight,CheckCircle2,TrendingDown,Trophy,Shield,Zap as ZapIcon,Feather,FileText,
  RefreshCw,Target,Settings,TrendingUp,Clock,FileCheck,BadgeCheck,X,Code,BookOpen,Key,Lock,Award,BarChart3,Rocket,} from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from '../components/AnimatedSection';
import FixedFooter from './FixedFooter';

const AboutPage = () => {
  // Mission values
  const values = [
    { icon: Trophy, title: "Dream outcome ↑", description: "More booked calls, faster closes" },
    { icon: Shield, title: "Likelihood of success ↑", description: "Public proof, SLAs, guarantees" },
    { icon: ZapIcon, title: "Time delay ↓", description: "7-day install, wins in 48 hours" },
    { icon: Feather, title: "Effort & sacrifice ↓", description: "DFY, async, ≤2 meetings/month" },
  ];

  // System levers
  const levers = [
    { icon: ZapIcon, title: "Speed-to-Lead", outcome: "Reply <2 min", description: "90% of inbound replied to in <2 min (WhatsApp/SMS/Email with failovers)" },
    { icon: FileText, title: "Proposal Accelerator", outcome: "Hours, not days", description: "Auto-filled templates, approvals, send—proposals in hours instead of days" },
    { icon: RefreshCw, title: "Revival Engine", outcome: "~10% reactivated", description: "~10% of cold pipeline re-activated in 30 days with smart nurture" },
    { icon: Target, title: "Hot-Lead Router", outcome: "Zero slip-throughs", description: "Owner alerts + claim system; no qualified leads slip through the cracks" },
    { icon: Settings, title: "Ops Engine", outcome: "Runs in background", description: "Onboarding, approvals, GPT reports, CRM hygiene—automated ops foundation" },
  ];

  // Proof metrics
  const metrics = [
    { icon: Clock, value: "90s", label: "p90 reply time", description: "From 6 hours to under 2 minutes" },
    { icon: TrendingUp, value: "+38%", label: "Show rate lift", description: "20-40% improvement typical" },
    { icon: FileCheck, value: "4 hrs", label: "Proposal speed", description: "Down from 3 days average" },
  ];


  const notAFit = [
    "Tool shoppers looking for DIY solutions",
    "<30 leads/mo with no growth plan",
    "Unwilling to assign owners/approve templates",
  ];

  // Team principles
  const principles = [
    { icon: Code, text: "Async-first workflow" },
    { icon: BookOpen, text: "Playbooks not projects" },
    { icon: Key, text: "SOPs + admin access—you own the stack" },
  ];

  // Differentiation pillars
  const pillars = [
    { icon: Lock, title: "Readiness Gates", description: "Owners, calendars, templates, compliance verified before SLAs" },
    { icon: Award, title: "SLAs & Guarantees", description: "Speed credit, revive promise, ops refund—after readiness" },
    { icon: BarChart3, title: "Weekly Proof", description: "Dashboards, not adjectives. Real metrics, real screenshots" },
    { icon: Rocket, title: "DFY & Minimal Meetings", description: "First wins in 48 hours, full install in 7 days, ≤2 meetings/month" },
  ];

  // Final CTA benefits
  const benefits = [
    "3 installs free (₹1.5L value)",
    "Pilot credits to setup if it works",
    "First wins in 48 hours",
    "Only 6 pilot slots per 14 days",
  ];

  return (
    <>
    <div className="bg-gradient-to-br from-slate-900 to-black">
      {/* Hero */}
         <AnimatedSection>
      <section className="relative min-h-screen flex items-center overflow-hidden md:pt-32 pb-12 mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-fade-in">
              
              <h1 className="text-3xl sm:text-2xl lg:text-4xl font-bold leading-tight mb-6 text-white mt-12">
                We don't sell automations.
                <span className="block mt-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  We install Revenue Engines.
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-white-600 mb-8 leading-relaxed text-white">
                <span className="font-semibold text-white-900">2-min replies.</span> +20–40% higher show rates. Proposals in hours. Proof every week. SLAs after readiness.
              </p>
              <div className="flex items-start gap-3 mb-8 p-4 bg-gray-50 border border-purple-200 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-white-600">
                  <span className="font-semibold text-white-900">YC-backed client</span> cut replies 6h → 90s and lifted show rate +38% in 30 days.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg font-medium text-base hover:bg-purple-700 transition-colors">
                  Book a 15-min teardown
                  <ArrowRight className="w-5 h-5" />
                </button>
                {/* <button className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-purple-600 text-purple-600 rounded-lg font-medium text-base hover:bg-purple-50 transition-colors">
                  See your 7-day plan
                </button> */}
              </div>
            </div>
            {/* <div className="relative lg:ml-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <div className="w-full h-96 bg-gray-200 rounded-2xl flex items-center justify-center border border-gray-300">
                <span className="text-white-500">Dashboard Preview</span>
              </div>
              <div className="absolute -left-4 top-1/4 bg-white border border-purple-300 rounded-lg px-4 py-3 shadow-sm animate-fade-in" style={{ animationDelay: "400ms" }}>
                <div className="text-2xl font-bold text-purple-600">90s</div>
                <div className="text-xs text-white-600">avg reply</div>
              </div>
              <div className="absolute -right-4 bottom-1/4 bg-white border border-pink-300 rounded-lg px-4 py-3 shadow-sm animate-fade-in" style={{ animationDelay: "600ms" }}>
                <div className="text-2xl font-bold text-pink-600">+38%</div>
                <div className="text-xs text-white-600">show rate</div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
        </AnimatedSection>
      {/* Story */}
       <AnimatedSection delay={100}>
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">Our Story</h2>
              <div className="space-y-4 text-lg text-white-600 leading-relaxed text-white">
                <p>We built agencies. We ran growth. We watched great campaigns die in the gap between <span className="text-white-900 font-semibold">lead → reply</span> and <span className="text-white-900 font-semibold">call → proposal</span>.</p>
                <p>Teams were busy. Leads waited hours. Proposals took days. Money leaked out.</p>
                <p>We started AI Evoked to fix the leak with one idea: <span className="text-purple-600 font-semibold">outcomes beat effort.</span></p>
                <p>The "aha" was simple—when the right templates, owners, and channels are in place,2-minute replies and same-day proposals become normal.</p>
                <p>That became <span className="text-white-900 font-semibold text-white">Automate+</span>—a done-for-you system that turns more of your existing leads into booked calls and paying clients.</p>
              </div>
            </div>
            <div className="relative animate-fade-in" style={{ animationDelay: "200ms" }}>
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <div className="space-y-6">
                  <div className="relative pl-8 pb-8 border-l-2 border-red-500/50">
                    <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-red-500 border-4 border-white" />
                    <div className="text-sm text-white-500 mb-1">The Problem</div>
                    <div className="text-lg font-semibold mb-2">Money leaking in the gaps</div>
                    <div className="flex flex-wrap gap-4 text-sm text-white-500">
                      <div className="flex items-center gap-2"><TrendingDown className="w-4 h-4 text-red-500" /><span>Leads waiting hours</span></div>
                      <div className="flex items-center gap-2"><TrendingDown className="w-4 h-4 text-red-500" /><span>Proposals delayed</span></div>
                    </div>
                  </div>
                  <div className="relative pl-8 pb-8 border-l-2 border-purple-500/50">
                    <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-purple-500 border-4 border-white" />
                    <div className="text-sm text-white-500 mb-1">The Aha</div>
                    <div className="text-lg font-semibold mb-2">Outcomes beat effort</div>
                    <div className="text-sm text-white-500">Right templates + owners + channels = speed becomes normal</div>
                  </div>
                  <div className="relative pl-8">
                    <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-pink-500 border-4 border-white" />
                    <div className="text-sm text-white-500 mb-1">The Solution</div>
                    <div className="text-lg font-semibold mb-2">Automate+</div>
                    <div className="text-sm text-white-500">DFY system that turns leads into revenue</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </AnimatedSection>
      {/* Mission */}
      <AnimatedSection delay={200}>
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">Our Mission</h2>
            <p className="text-xl text-white-600 max-w-2xl mx-auto text-white">Make revenue the default outcome of your ops.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="bg-white border border-gray-200 rounded-xl p-8 hover:border-purple-500 transition-all duration-300 group animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors">
                      <Icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                      <p className="text-white-600">{value.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center">
            <p className="text-lg font-medium text-purple-600">If it doesn't move revenue, we don't ship it.</p>
          </div>
        </div>
      </section>
      </AnimatedSection>
      {/* System Overview */}
      {/* <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
              The <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent text-white">Automate+</span> Revenue Engine
            </h2>
            <p className="text-xl text-white-600 max-w-2xl mx-auto">Five levers, one result: more calls, shorter cycles, fewer meetings.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {levers.map((lever, index) => {
              const Icon = lever.icon;
              return (
                <div key={lever.title} className="bg-white border border-gray-200 rounded-xl p-6 hover:border-purple-500 transition-all duration-300 group animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors">
                        <Icon className="w-6 h-6 text-purple-600" />
                      </div>
                      <div className="px-3 py-1 bg-pink-100 border border-pink-300 rounded-full">
                        <span className="text-xs font-semibold text-pink-600">{lever.outcome}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{lever.title}</h3>
                    <p className="text-sm text-white-600 flex-grow">{lever.description}</p>
                  </div>
                </div>
              );
            })}
            <div className="md:col-span-2 lg:col-span-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 text-center animate-fade-in" style={{ animationDelay: "500ms" }}>
              <p className="text-2xl font-bold text-white">Outcome: More calls booked. Shorter sales cycles. Less manual effort.</p>
            </div>
          </div>
        </div>
      </section> */}
      
      {/* Team */}
      {/* <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-block mb-4 px-4 py-2 bg-purple-100 border border-purple-300 rounded-full">
                <span className="text-sm font-medium text-purple-600 ">Meet the Operators</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">Operators, not slide-makers.</h2>
              <p className="text-xl text-white-600 max-w-2xl mx-auto text-white">Built and ran revenue systems across Airtable/Make, WhatsApp, HubSpot/GHL.</p>
            </div>
            <div className="bg-white border border-purple-300 rounded-3xl p-12 mb-12 animate-fade-in hover:border-purple-500 transition-all duration-300">
              <div className="flex items-center gap-6 mb-12">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center text-4xl font-bold text-white shadow-lg">
                  AE
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-2">Pragun & team</h3>
                  <p className="text-lg text-white-600">We work async, ship playbooks not projects, and leave you with SOPs + admin access.</p>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {principles.map((principle, index) => {
                  const Icon = principle.icon;
                  return (
                    <div key={principle.text} className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-purple-500 transition-all duration-300" style={{ animationDelay: `${index * 100}ms` }}>
                      <div className="p-3 bg-purple-100 rounded-lg inline-flex mb-4"><Icon className="w-6 h-6 text-purple-600" /></div>
                      <p className="text-base font-medium">{principle.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-center animate-fade-in" style={{ animationDelay: "400ms" }}>
              <p className="text-2xl font-bold text-white">You own the stack. You just won't want to go back.</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Differentiation */}
      <AnimatedSection delay={300}>
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">Why We're Different</h2>
            <p className="text-xl text-white-600 max-w-2xl mx-auto text-white">The moat isn't the tools—it's the process + promises.</p>
          </div>
          <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.title} className="bg-white border border-gray-200 rounded-xl p-6 hover:border-purple-500 transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="flex flex-col h-full">
                    <div className="p-3 bg-purple-100 rounded-lg mb-4 inline-flex w-fit hover:bg-purple-200 transition-colors">
                      <Icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{pillar.title}</h3>
                    <p className="text-sm text-gray-600 flex-grow">{pillar.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      </AnimatedSection>
      {/* Final CTA */}
      <AnimatedSection delay={400}>
      <section className="py-24  relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white border border-purple-300 rounded-3xl p-8 sm:p-12 shadow-sm animate-fade-in">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div>
                  <div className="inline-block mb-4 px-4 py-2 bg-purple-100 border border-purple-300 rounded-full">
                    <span className="text-sm font-medium text-purple-600">14-Day Pilot Program</span>
                  </div>
                  <h2 className="text-4xl sm:text-5xl font-bold mb-6 ">Start your 14-day rollout</h2>
                  <p className="text-lg text-white-600 mb-8">
                    We onboard 6 clients every 14 days to keep service tight. If it works, pilot credits to setup. If not, you walk away.
                  </p>
                  <div className="space-y-3 mb-8">
                    {benefits.map((benefit) => (
                      <div key={benefit} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span className="text-white-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="bg-gray-50 border border-purple-200 rounded-2xl p-6">
                    <div className="text-sm text-purple-600 font-semibold mb-2">PRIMARY ACTION</div>
                     <Link
                      to="/contact"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg font-medium text-lg hover:bg-purple-700 transition-colors mb-3">
                      Book a 15-min teardown
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                    <p className="text-xs text-white-600 text-center">We'll show you exactly what's leaking and how to fix it</p>
                  </div>
                  {/* <div className="bg-gray-50 border border-gray-300 rounded-2xl p-6">
                    <div className="text-sm text-white-600 font-semibold mb-2">OR START HERE</div>
                    <button className="w-full inline-flex items-center justify-center px-6 py-3 bg-white border border-gray-300 text-white-900 rounded-lg font-medium text-lg hover:bg-gray-100 transition-colors mb-3">
                      Get the readiness checklist
                    </button>
                    <p className="text-xs text-white-600 text-center">See if you're ready for the 7-day install</p>
                  </div> */}
                  <div className="text-center pt-4">
                    <p className="text-sm text-purple-600 font-medium">⚡ First wins inside 48 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </AnimatedSection>
      </div>
       <FixedFooter />
    </>
  );
};

export default AboutPage;