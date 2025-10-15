import React, { useState, useEffect } from "react";
import Logo from '../Images/Logo.png';
import { Link} from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
const Home = () => {

  const [testProgress, setTestProgress] = useState(0);

  // Simulate test completion over time
  useEffect(() => {
    const timer = setInterval(() => {
      setTestProgress(prev => {
        if (prev < 4) return prev + 1;
        clearInterval(timer);
        return prev;
      });
    }, 1500); // Each test completes every 1.5 seconds

    return () => clearInterval(timer);
  }, []);

    const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How does AuraOS automate customer follow-ups?",
      answer:
        "AuraOS uses AI-driven workflows to send personalized messages via email, SMS, and calls, ensuring timely and human-like engagement with every lead.",
    },
    {
      question: "How quickly can I set up AuraOS for my business?",
      answer:
        "Setup typically takes less than 48 hours. Our onboarding team assists with CRM integration, campaign configuration, and AI training for your brand voice.",
    },
    {
      question: "Can I customize messages and follow-up frequency?",
      answer:
        "Yes, every message, tone, and timing can be tailored to match your sales cycle, industry, and customer preferences — ensuring a non-intrusive experience.",
    },
    {
      question: "Is AuraOS compliant with data and privacy regulations?",
      answer:
        "Absolutely. AuraOS adheres to GDPR, TCPA, and other compliance standards, ensuring data protection and legal communication practices.",
    },
    {
      question: "How do I measure ROI from AI-powered follow-ups?",
      answer:
        "You can track performance through a built-in dashboard showing open rates, conversions, and revenue impact — giving you clear visibility into ROI.",
    },
  ];

  const toggleFAQ = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-black text-white" style={{ backgroundColor: '#080412' }}>
 
      
      {/* Hero Section */}
      <AnimatedSection>
      <section className="mt-24 pt-24 pb-20 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 relative">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight">
             Turn More Leads into Booked Calls & Closed Deals—Automatically
            </h1>
            <p className="text-gray-300 text-lg mt-6">
             Automate+ (ops & revenue), SalesPilot (AI sales Autopilot), and Custom
            Automations (enterprise). Save 40+ hours/week, reply to 90% of leads in  {'<'}2 min, ship
           proposals in hours.
            </p>
            <div className = "md:flex-row">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-medium transition-colors mt-6">
              Book a 15-min teardown
            </button>
            <button className=" ml-12 bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-medium transition-colors mt-6">
               See live demo
            </button>
            </div>
          </div>
          
          {/* Right Content - Test Results Card */}
      <div className="lg:w-1/2 relative">
  <div className="#151120 rounded-xl p-6 border border-gray-700 shadow-lg">
    {/* Header */}
    <div className = "rounded-xl pb-5 border border-gray-700 shadow-lg bg-[linear-gradient(90deg,rgba(91,47,234,0.10)_0%,rgba(228,207,255,0)_100%)]">
    <div className="flex items-center mb-4 pb-4 border-b border-gray-700 w-full p-4">
      <img src="https://via.placeholder.com/32" alt="eBay" className="w-8 h-8 rounded" />
      <div className="ml-3">
        <span className="font-semibold">eBay</span>
        <span className="text-sm text-gray-400 ml-2">4 of 4 Test results ready</span>
      </div>
    </div>

    {/* Timeline Content */}
    <div className="ml-4 relative pl-8  p-4 before:absolute before:left-4 before:top-0 before:bottom-0 before:w-0.5 before:bg-purple-500/30">
      
      {/* Timeline Item 1 - Optimal F1 and precision */}
      <div 
        className={`flex items-start mb-4 group ${testProgress >= 1 ? 'opacity-100' : 'opacity-50'}`}
        style={{ transition: 'opacity 0.5s ease-in-out' }}
      >
        <div className={`absolute left-1 w-6 h-6 bg-black border-2 ${
          testProgress >= 1 ? 'border-purple-500' : 'border-gray-500'
        }  flex items-center justify-center group-hover:bg-purple-600 transition-colors`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2v4l2 2h4l2-2v-4h2a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 002-2h2a2 2 0 002 2m-6 9l2 2 4-4" />
          </svg>
        </div>
        <div className="ml-6 flex-1">
          <div className="flex items-center justify-between">
            <span>Optimal F1 and precision</span>
            {testProgress >= 1 && (
              <span className="text-green-500 text-sm font-medium px-2 py-1 bg-green-900/30 rounded">Passing</span>
            )}
          </div>
        </div>
      </div>

      {/* Timeline Item 2 - LLM accurately summarizes context */}
      <div 
        className={`flex items-start mb-4 group ${testProgress >= 2 ? 'opacity-100' : 'opacity-50'}`}
        style={{ transition: 'opacity 0.5s ease-in-out' }}
      >
        <div className={`absolute left-1 w-6 h-6 bg-black border-2 ${
          testProgress >= 2 ? 'border-purple-500' : 'border-gray-500'
        } flex items-center justify-center group-hover:bg-purple-600 transition-colors`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.8-8h4.8l-.4-1.6A9.863 9.863 0 0112 12zm0 0a9.863 9.863 0 01-4.8-8h4.8l-.4-1.6A9.863 9.863 0 0112 12z" />
          </svg>
        </div>
        <div className="ml-6 flex-1">
          <div className="flex items-center justify-between">
            <span>LLM accurately summarizes context</span>
            {testProgress >= 2 && (
              <span className="text-green-500 text-sm font-medium px-2 py-1 bg-green-900/30 rounded">Passing</span>
            )}
          </div>
        </div>
      </div>

      {/* Timeline Item 3 - Prevent fake product prompts */}
      <div 
        className={`flex items-start mb-4 group ${testProgress >= 3 ? 'opacity-100' : 'opacity-50'}`}
        style={{ transition: 'opacity 0.5s ease-in-out' }}
      >
        <div className={`absolute left-1 w-6 h-6 bg-black border-2 ${
          testProgress >= 3 ? 'border-purple-500' : 'border-gray-500'
        } flex items-center justify-center group-hover:bg-purple-600 transition-colors`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9M5 11V9m2 2a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H7a2 2 0 01-2-2v-6z" />
          </svg>
        </div>
        <div className="ml-6 flex-1">
          <div className="flex items-center justify-between">
            <span>Prevent fake product prompts</span>
            {testProgress >= 3 && (
              <span className="text-green-500 text-sm font-medium px-2 py-1 bg-green-900/30 rounded">Passing</span>
            )}
          </div>
        </div>
      </div>

      {/* Timeline Item 4 - P99 latency < 5000ms */}
      <div 
        className={`flex items-start mb-4 group ${testProgress >= 4 ? 'opacity-100' : 'opacity-50'}`}
        style={{ transition: 'opacity 0.5s ease-in-out' }}
      >
           <div className={`absolute left-1 w-6 h-6 bg-black border-2 ${
          testProgress >= 4 ? 'border-purple-500' : 'border-gray-500'
        } flex items-center justify-center group-hover:bg-purple-600 transition-colors`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8v6h-8v-6z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 13h8v6h-8v-6z" />
          </svg>
        </div>
        <div className="ml-6 flex-1">
          <div className="flex items-center justify-between">
            <span>P99 latency {'<'} 5000ms</span>
            {testProgress >= 4 && (
              <span className="text-green-500 text-sm font-medium px-2 py-1 bg-green-900/30 rounded">Passing</span>
            )}
          </div>
        </div>
      </div>

      {/* Summary Stats - Appears AFTER all timeline items */}
      <div className={`mt-8 pt-4 border-t border-gray-700 flex items-center justify-between ${testProgress === 4 ? 'opacity-100' : 'opacity-0'}`} style={{ transition: 'opacity 0.5s ease-in-out' }}>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-sm">22 tests passing</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="text-sm">10 tests failing</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</div>
        
    
      </section>
      </AnimatedSection>

      <AnimatedSection delay={100}>
      {/* Trusted by Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <p className="text-gray-400 text-sm uppercase tracking-wider">Trusted by performance-led agencies & venture-backed teams.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
            <div className="flex justify-center">
              <img src="https://via.placeholder.com/120x40?text=birdie" alt="birdie" className="h-10" />
            </div>
            <div className="flex justify-center">
              <img src="https://via.placeholder.com/120x40?text=eBay" alt="eBay" className="h-10" />
            </div>
            <div className="flex justify-center">
              <img src="https://via.placeholder.com/120x40?text=zuma" alt="zuma" className="h-10" />
            </div>
            <div className="flex justify-center">
              <img src="https://via.placeholder.com/120x40?text=Company" alt="Company" className="h-10" />
            </div>
          </div>
        </div>
      </section>
      </AnimatedSection>
      {/* Second Section */}

      <AnimatedSection delay={200}>
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 relative">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-6">
            <div className="text-sm text-gray-400 uppercase">Offline evaluation</div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Automate+ (Revenue Growth Engine)
            </h2>
            <p className="text-gray-300 text-lg mt-6">
             Replies in  {'<'} 2 min (90% of inbound), +20–40% show rate, proposals in hours, revive ~10% of cold pipeline.

            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <button className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center">
               See the 7-day rollout →
              </button>
            </div>
          </div>
          
          {/* Right Content - Test Results Card */}
<div className="lg:w-1/2 relative">
  <div className="#151120 rounded-xl p-6 border border-gray-700 shadow-lg">
<h4 className="text-center mb-4">
  Environment{" "}
  <span
    className="px-2 py-1 rounded text-[#EDA430] bg-[linear-gradient(90deg,rgba(237,164,48,0.10)_0%,rgba(237,164,48,0.02)_100%)]"
  >
    Development
  </span>
</h4>
    {/* Header */}
    <div className = "rounded-xl pb-5 border border-gray-700 shadow-lg bg-[linear-gradient(90deg,rgba(91,47,234,0.10)_0%,rgba(228,207,255,0)_100%)]">
    <div className="flex items-center mb-4 pb-4 border-b border-gray-700 w-full p-4">
      <img src="https://via.placeholder.com/32" alt="Hurb" className="w-8 h-8 rounded" />
      <div className="ml-3">
        <span className="font-semibold">Hurb</span>
                  <span className="text-sm text-gray-400 ml-2">4 of 4 Test results ready</span>
      </div>
    </div>

    {/* Timeline Content */}
    <div className="ml-4 relative pl-8  p-4 before:absolute before:left-4 before:top-0 before:bottom-0 before:w-0.5 before:bg-purple-500/30">
      
      {/* Timeline Item 1 - Optimal F1 and precision */}
      <div 
        className={`flex items-start mb-4 group ${testProgress >= 1 ? 'opacity-100' : 'opacity-50'}`}
        style={{ transition: 'opacity 0.5s ease-in-out' }}
      >
        <div className={`absolute left-1 w-6 h-6 bg-black border-2 ${
          testProgress >= 1 ? 'border-purple-500' : 'border-gray-500'
        }  flex items-center justify-center group-hover:bg-purple-600 transition-colors`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2v4l2 2h4l2-2v-4h2a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 002-2h2a2 2 0 002 2m-6 9l2 2 4-4" />
          </svg>
        </div>
        <div className="ml-6 flex-1">
          <div className="flex items-center justify-between">
            <span>Outputs do not contain PII</span>
            {testProgress >= 1 && (
              <span className="text-green-500 text-sm font-medium px-2 py-1 bg-green-900/30 rounded">Passing</span>
            )}
          </div>
        </div>
      </div>

      {/* Timeline Item 2 - LLM accurately summarizes context */}
      <div 
        className={`flex items-start mb-4 group ${testProgress >= 2 ? 'opacity-100' : 'opacity-50'}`}
        style={{ transition: 'opacity 0.5s ease-in-out' }}
      >
        <div className={`absolute left-1 w-6 h-6 bg-black border-2 ${
          testProgress >= 2 ? 'border-purple-500' : 'border-gray-500'
        } flex items-center justify-center group-hover:bg-purple-600 transition-colors`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.8-8h4.8l-.4-1.6A9.863 9.863 0 0112 12zm0 0a9.863 9.863 0 01-4.8-8h4.8l-.4-1.6A9.863 9.863 0 0112 12z" />
          </svg>
        </div>
        <div className="ml-6 flex-1">
          <div className="flex items-center justify-between">
            <span>Surface diverse recommendations</span>
            {testProgress >= 2 && (
              <span className="text-green-500 text-sm font-medium px-2 py-1 bg-green-900/30 rounded">Passing</span>
            )}
          </div>
        </div>
      </div>

      {/* Timeline Item 3 - Prevent fake product prompts */}
      <div 
        className={`flex items-start mb-4 group ${testProgress >= 3 ? 'opacity-100' : 'opacity-50'}`}
        style={{ transition: 'opacity 0.5s ease-in-out' }}
      >
        <div className={`absolute left-1 w-6 h-6 bg-black border-2 ${
          testProgress >= 3 ? 'border-purple-500' : 'border-gray-500'
        } flex items-center justify-center group-hover:bg-purple-600 transition-colors`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9M5 11V9m2 2a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H7a2 2 0 01-2-2v-6z" />
          </svg>
        </div>
        <div className="ml-6 flex-1">
          <div className="flex items-center justify-between">
            <span>Time-to-first-token {'<'} 100ms </span>
            {testProgress >= 3 && (
              <span className="text-green-500 text-sm font-medium px-2 py-1 bg-green-900/30 rounded">Passing</span>
            )}
          </div>
        </div>
      </div>

      {/* Timeline Item 4 - P99 latency < 5000ms */}
      <div 
        className={`flex items-start mb-4 group ${testProgress >= 4 ? 'opacity-100' : 'opacity-50'}`}
        style={{ transition: 'opacity 0.5s ease-in-out' }}
      >
           <div className={`absolute left-1 w-6 h-6 bg-black border-2 ${
          testProgress >= 4 ? 'border-purple-500' : 'border-gray-500'
        } flex items-center justify-center group-hover:bg-purple-600 transition-colors`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8v6h-8v-6z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 13h8v6h-8v-6z" />
          </svg>
        </div>
        <div className="ml-6 flex-1">
          <div className="flex items-center justify-between">
            <span>Ensure answers in PT-BR</span>
            {testProgress >= 4 && (
              <span className="text-green-500 text-sm font-medium px-2 py-1 bg-green-900/30 rounded">Passing</span>
            )}
          </div>
        </div>
      </div>

      {/* Summary Stats - Appears AFTER all timeline items */}
      <div className={`mt-8 pt-4 border-t border-gray-700 flex items-center justify-between ${testProgress === 4 ? 'opacity-100' : 'opacity-0'}`} style={{ transition: 'opacity 0.5s ease-in-out' }}>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-sm">22 tests passing</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="text-sm">10 tests failing</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
        </div> 
      </section>
      </AnimatedSection>

      {/* Third Section: Monitor Production Requests */}
      <AnimatedSection delay={300}>
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 relative">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-6">
            <div className="text-sm text-purple-400 uppercase">Observability and real-time guardrails</div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
             SalesPilot
            </h2>
            <p className="text-gray-300 text-lg mt-6">
              AI lead triage, human-like follow-ups, meeting orchestration, pipeline hygiene.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <button className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center">
                Watch a 60-sec demo →
              </button>
            </div>
          </div>
          
          {/* Right Content - Test Results Card */}
         <div className="lg:w-1/2 relative">
  <div className="#151120 rounded-xl p-6 border border-gray-700 shadow-lg">
<h4 className="text-center mb-4">
  Environment{" "}
  <span
    className="px-2 py-1 rounded text-[#EDA430] bg-[linear-gradient(90deg,rgba(237,164,48,0.10)_0%,rgba(237,164,48,0.02)_100%)]"
  >
    Development
  </span>
</h4>
    {/* Header */}
    <div className = "rounded-xl pb-5 border border-gray-700 shadow-lg bg-[linear-gradient(90deg,rgba(91,47,234,0.10)_0%,rgba(228,207,255,0)_100%)]">
    <div className="flex items-center mb-4 pb-4 border-b border-gray-700 w-full p-4">
      <img src="https://via.placeholder.com/32" alt="Hurb" className="w-8 h-8 rounded" />
      <div className="ml-3">
        <span className="font-semibold">Cutshort</span>
                  <span className="text-sm text-gray-400 ml-2">4 of 4 Test results ready</span>
      </div>
    </div>

    {/* Timeline Content */}
    <div className="ml-4 relative pl-8  p-4 before:absolute before:left-4 before:top-0 before:bottom-0 before:w-0.5 before:bg-purple-500/30">
      
      {/* Timeline Item 1 - Optimal F1 and precision */}
      <div 
        className={`flex items-start mb-4 group ${testProgress >= 1 ? 'opacity-100' : 'opacity-50'}`}
        style={{ transition: 'opacity 0.5s ease-in-out' }}
      >
        <div className={`absolute left-1 w-6 h-6 bg-black border-2 ${
          testProgress >= 1 ? 'border-purple-500' : 'border-gray-500'
        }  flex items-center justify-center group-hover:bg-purple-600 transition-colors`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2v4l2 2h4l2-2v-4h2a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 002-2h2a2 2 0 002 2m-6 9l2 2 4-4" />
          </svg>
        </div>
        <div className="ml-6 flex-1">
          <div className="flex items-center justify-between">
            <span>Context precision {'>'} 0.9</span>
            {testProgress >= 1 && (
              <span className="text-green-500 text-sm font-medium px-2 py-1 bg-green-900/30 rounded">Passing</span>
            )}
          </div>
        </div>
      </div>

      {/* Timeline Item 2 - LLM accurately summarizes context */}
      <div 
        className={`flex items-start mb-4 group ${testProgress >= 2 ? 'opacity-100' : 'opacity-50'}`}
        style={{ transition: 'opacity 0.5s ease-in-out' }}
      >
        <div className={`absolute left-1 w-6 h-6 bg-black border-2 ${
          testProgress >= 2 ? 'border-purple-500' : 'border-gray-500'
        } flex items-center justify-center group-hover:bg-purple-600 transition-colors`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.8-8h4.8l-.4-1.6A9.863 9.863 0 0112 12zm0 0a9.863 9.863 0 01-4.8-8h4.8l-.4-1.6A9.863 9.863 0 0112 12z" />
          </svg>
        </div>
        <div className="ml-6 flex-1">
          <div className="flex items-center justify-between">
            <span>Outputs are in JSON</span>
            {testProgress >= 2 && (
              <span className="text-green-500 text-sm font-medium px-2 py-1 bg-green-900/30 rounded">Passing</span>
            )}
          </div>
        </div>
      </div>

      {/* Timeline Item 3 - Prevent fake product prompts */}
      <div 
        className={`flex items-start mb-4 group ${testProgress >= 3 ? 'opacity-100' : 'opacity-50'}`}
        style={{ transition: 'opacity 0.5s ease-in-out' }}
      >
        <div className={`absolute left-1 w-6 h-6 bg-black border-2 ${
          testProgress >= 3 ? 'border-purple-500' : 'border-gray-500'
        } flex items-center justify-center group-hover:bg-purple-600 transition-colors`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9M5 11V9m2 2a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H7a2 2 0 01-2-2v-6z" />
          </svg>
        </div>
        <div className="ml-6 flex-1">
          <div className="flex items-center justify-between">
            <span>LLM score avoids discrimination</span>
            {testProgress >= 3 && (
              <span className="text-green-500 text-sm font-medium px-2 py-1 bg-green-900/30 rounded">Passing</span>
            )}
          </div>
        </div>
      </div>

      {/* Timeline Item 4 - P99 latency < 5000ms */}
      <div 
        className={`flex items-start mb-4 group ${testProgress >= 4 ? 'opacity-100' : 'opacity-50'}`}
        style={{ transition: 'opacity 0.5s ease-in-out' }}
      >
           <div className={`absolute left-1 w-6 h-6 bg-black border-2 ${
          testProgress >= 4 ? 'border-purple-500' : 'border-gray-500'
        } flex items-center justify-center group-hover:bg-purple-600 transition-colors`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8v6h-8v-6z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 13h8v6h-8v-6z" />
          </svg>
        </div>
        <div className="ml-6 flex-1">
          <div className="flex items-center justify-between">
            <span>Average latency {'<'} 0.5s</span>
            {testProgress >= 4 && (
              <span className="text-green-500 text-sm font-medium px-2 py-1 bg-green-900/30 rounded">Passing</span>
            )}
          </div>
        </div>
      </div>

      {/* Summary Stats - Appears AFTER all timeline items */}
      <div className={`mt-8 pt-4 border-t border-gray-700 flex items-center justify-between ${testProgress === 4 ? 'opacity-100' : 'opacity-0'}`} style={{ transition: 'opacity 0.5s ease-in-out' }}>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-sm">22 tests passing</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="text-sm">10 tests failing</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
        </div>
        
      </section>
      </AnimatedSection>

      {/* Fourth Section: Automated Checks for Data Quality */}
      <AnimatedSection delay={400}>
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 relative">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-6">
            <div className="text-sm text-purple-400 uppercase">Data quality</div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
             Custom Automations
            </h2>
            <p className="text-gray-300 text-lg mt-6">
             Bespoke workflows across CRMs, ads, finance, support; SOC-friendly delivery &
SLAs
            </p>
            <button className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center mt-8">
              Scope a build →
            </button>
          </div>
          
          {/* Right Content - Data Quality Visualization */}
    <div className="lg:w-1/2 relative">
  <div className="#151120 rounded-xl p-6 border border-gray-700 shadow-lg">
<h4 className="text-center mb-4">
  Environment{" "}
  <span
    className="px-2 py-1 rounded text-[#EDA430] bg-[linear-gradient(90deg,rgba(237,164,48,0.10)_0%,rgba(237,164,48,0.02)_100%)]"
  >
    Development
  </span>
</h4>
    {/* Header */}
    <div className = "rounded-xl pb-5 border border-gray-700 shadow-lg bg-[linear-gradient(90deg,rgba(91,47,234,0.10)_0%,rgba(228,207,255,0)_100%)]">
    <div className="flex items-center mb-4 pb-4 border-b border-gray-700 w-full p-4">
      <img src="https://via.placeholder.com/32" alt="Hurb" className="w-8 h-8 rounded" />
      <div className="ml-3">
        <span className="font-semibold">Cutshort</span>
                  <span className="text-sm text-gray-400 ml-2">4 of 4 Test results ready</span>
      </div>
    </div>

    {/* Timeline Content */}
    <div className="ml-4 relative pl-8  p-4 before:absolute before:left-4 before:top-0 before:bottom-0 before:w-0.5 before:bg-purple-500/30">
      
      {/* Timeline Item 1 - Optimal F1 and precision */}
      <div 
        className={`flex items-start mb-4 group ${testProgress >= 1 ? 'opacity-100' : 'opacity-50'}`}
        style={{ transition: 'opacity 0.5s ease-in-out' }}
      >
        <div className={`absolute left-1 w-6 h-6 bg-black border-2 ${
          testProgress >= 1 ? 'border-purple-500' : 'border-gray-500'
        }  flex items-center justify-center group-hover:bg-purple-600 transition-colors`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2v4l2 2h4l2-2v-4h2a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 002-2h2a2 2 0 002 2m-6 9l2 2 4-4" />
          </svg>
        </div>
        <div className="ml-6 flex-1">
          <div className="flex items-center justify-between">
            <span>Context precision {'>'} 0.9</span>
            {testProgress >= 1 && (
              <span className="text-green-500 text-sm font-medium px-2 py-1 bg-green-900/30 rounded">Passing</span>
            )}
          </div>
        </div>
      </div>

      {/* Timeline Item 2 - LLM accurately summarizes context */}
      <div 
        className={`flex items-start mb-4 group ${testProgress >= 2 ? 'opacity-100' : 'opacity-50'}`}
        style={{ transition: 'opacity 0.5s ease-in-out' }}
      >
        <div className={`absolute left-1 w-6 h-6 bg-black border-2 ${
          testProgress >= 2 ? 'border-purple-500' : 'border-gray-500'
        } flex items-center justify-center group-hover:bg-purple-600 transition-colors`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.8-8h4.8l-.4-1.6A9.863 9.863 0 0112 12zm0 0a9.863 9.863 0 01-4.8-8h4.8l-.4-1.6A9.863 9.863 0 0112 12z" />
          </svg>
        </div>
        <div className="ml-6 flex-1">
          <div className="flex items-center justify-between">
            <span>Outputs are in JSON</span>
            {testProgress >= 2 && (
              <span className="text-green-500 text-sm font-medium px-2 py-1 bg-green-900/30 rounded">Passing</span>
            )}
          </div>
        </div>
      </div>

      {/* Timeline Item 3 - Prevent fake product prompts */}
      <div 
        className={`flex items-start mb-4 group ${testProgress >= 3 ? 'opacity-100' : 'opacity-50'}`}
        style={{ transition: 'opacity 0.5s ease-in-out' }}
      >
        <div className={`absolute left-1 w-6 h-6 bg-black border-2 ${
          testProgress >= 3 ? 'border-purple-500' : 'border-gray-500'
        } flex items-center justify-center group-hover:bg-purple-600 transition-colors`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9M5 11V9m2 2a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H7a2 2 0 01-2-2v-6z" />
          </svg>
        </div>
        <div className="ml-6 flex-1">
          <div className="flex items-center justify-between">
            <span>LLM score avoids discrimination</span>
            {testProgress >= 3 && (
              <span className="text-green-500 text-sm font-medium px-2 py-1 bg-green-900/30 rounded">Passing</span>
            )}
          </div>
        </div>
      </div>

      {/* Timeline Item 4 - P99 latency < 5000ms */}
      <div 
        className={`flex items-start mb-4 group ${testProgress >= 4 ? 'opacity-100' : 'opacity-50'}`}
        style={{ transition: 'opacity 0.5s ease-in-out' }}
      >
           <div className={`absolute left-1 w-6 h-6 bg-black border-2 ${
          testProgress >= 4 ? 'border-purple-500' : 'border-gray-500'
        } flex items-center justify-center group-hover:bg-purple-600 transition-colors`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8v6h-8v-6z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 13h8v6h-8v-6z" />
          </svg>
        </div>
        <div className="ml-6 flex-1">
          <div className="flex items-center justify-between">
            <span>Average latency {'<'} 0.5s</span>
            {testProgress >= 4 && (
              <span className="text-green-500 text-sm font-medium px-2 py-1 bg-green-900/30 rounded">Passing</span>
            )}
          </div>
        </div>
      </div>

      {/* Summary Stats - Appears AFTER all timeline items */}
      <div className={`mt-8 pt-4 border-t border-gray-700 flex items-center justify-between ${testProgress === 4 ? 'opacity-100' : 'opacity-0'}`} style={{ transition: 'opacity 0.5s ease-in-out' }}>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-sm">22 tests passing</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="text-sm">10 tests failing</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
        </div>
      
      </section>
       </AnimatedSection>

      {/* Sixth Section: Designed for Builders */}
      <AnimatedSection delay = {600}>
     {/* Experience Section */}
      <section className="py-12 px-6 bg-gray-900">
        <div className="text-center mb-10">
          <div className="inline-block bg-gray-800 text-xs px-3 py-1 rounded-full mb-4">EXPERIENCE THE DIFFERENCE</div>
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Don't Just Read About AuraOS – <br /> Experience It Live
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 mb-6">
            See exactly how AuraOS will handle your high-value prospects. Choose your experience:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 ml-28 mr-24">
          <div className="border border-gray-700 p-6 rounded-xl">
            <div className="text-center mb-4">
              <div className="text-3xl mb-2">📞</div>
              <h3 className="text-xl font-semibold">Experience AuraOS Live</h3>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Our AI will call you right now and demonstrate exactly how it handles prospects. See the technology in action with your own ears.
            </p>
            <ul className="space-y-1 text-xs mb-4">
              <li className="flex items-start"><span className="text-blue-400 mr-2">✓</span> Live conversation with AuraOS</li>
              <li className="flex items-start"><span className="text-blue-400 mr-2">✓</span> Immediate results showcased</li>
              <li className="flex items-start"><span className="text-blue-400 mr-2">✓</span> Feel the premium conversation quality</li>
            </ul>
            <button className="w-full bg-gradient-to-r from-purple-500 to-blue-600 px-4 py-2 rounded font-medium hover:shadow-lg transition">
              Call Me Now - Experience AuraOS
            </button>
          </div>
          <div className="border border-gray-700 p-6 rounded-xl">
            <div className="text-center mb-4">
              <div className="text-3xl mb-2">💼</div>
              <h3 className="text-xl font-semibold">Strategic Implementation Call</h3>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Speak with our team to understand how AuraOS will integrate with your business and drive revenue growth for your specific use case.
            </p>
            <ul className="space-y-1 text-xs mb-4">
              <li className="flex items-start"><span className="text-blue-400 mr-2">✓</span> Custom implementation strategy</li>
              <li className="flex items-start"><span className="text-blue-400 mr-2">✓</span> ROI projection for your business</li>
              <li className="flex items-start"><span className="text-blue-400 mr-2">✓</span> Technical integration overview</li>
            </ul>
            <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded font-medium hover:shadow-lg transition">
              Book Strategic Call
            </button>
          </div>
        </div>
        <div className="text-center text-sm text-gray-400">
          *Results in 24 hours • Risk-free guarantee • Average 817% ROI
        </div>
      </section>
      </AnimatedSection>

   {/* Speed to Lead Section */}
    <AnimatedSection delay = {600}>
      <section className="py-12 px-6">
        <div className="text-center mb-10">
          <div className="inline-block bg-gray-900 text-xs px-3 py-1 rounded-full mb-4">THE SPEED IMPERATIVE</div>
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
            Speed to Lead <br /> Determines Everything
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300">
            In today's market, the fastest response wins—regardless of price, quality, or reputation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: "📉", value: "900%", title: "Conversion Drop", desc: "Response delay beyond 5 minutes causes 900% decrease in lead conversion rates" },
            { icon: "🚀", value: "21x", title: "Speed Advantage", desc: "Companies responding within 5 minutes are 21x more likely to qualify leads" },
            { icon: "$", value: "78%", title: "Revenue at Risk", desc: "Of premium prospects research and decide within the first hour of inquiry" }
          ].map((item, index) => (
            <div key={index} className="border border-gray-700 p-6 rounded-xl hover:border-red-500 transition">
              <div className="text-2xl mb-3">{item.icon}</div>
              <div className="text-2xl font-bold text-red-400 mb-2">{item.value}</div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      </AnimatedSection>
      
      {/* Seventh Section: Testimonials */}
      <AnimatedSection delay = {700}>
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          {/* Header */}
          <div className="max-w-xl mx-auto text-center mb-12">
            <p className="text-gray-300 text-lg">
             Openlayer is trusted by leading organizations to enhance their development and operational efficiency for accuracy, scalability, and seamless integration.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="bg-black/50 rounded-xl p-6 border border-gray-700 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-br from-orange-500/20 to-transparent"></div>
              <div className="relative z-10">
                <p className="text-gray-300 text-sm mb-6">
                  "The Openlayer team deeply understands the challenges faced by the ML community. Their platform is the best way to streamline the evaluation and analysis of models to drive continuous improvement in AI."
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">Max Mullen</div>
                    <div className="text-xs text-gray-400">Founder of Instacart</div>
                  </div>
                  <img src="https://via.placeholder.com/40" alt="Max Mullen" className="w-10 h-10 rounded-full" />
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-black/50 rounded-xl p-6 border border-gray-700 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-br from-blue-500/20 to-transparent"></div>
              <div className="relative z-10">
                <p className="text-gray-300 text-sm mb-6">
                  "I've witnessed first-hand the critical importance of error analysis in the world of machine learning. The Openlayer platform can save countless debugging hours and significantly improve model performance for data scientists worldwide."
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">Mark Belvedere</div>
                    <div className="text-xs text-gray-400">Data Science Director at Meta</div>
                  </div>
                  <img src="https://via.placeholder.com/40" alt="Mark Belvedere" className="w-10 h-10 rounded-full" />
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-black/50 rounded-xl p-6 border border-gray-700 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-br from-purple-500/20 to-transparent"></div>
              <div className="relative z-10">
                <p className="text-gray-300 text-sm mb-6">
                  "Debugging error cases is the highest leverage way to improve ML systems. Openlayer makes it easy to debug those cases and, more importantly, helps fix them as well. I highly recommend using it in all ML workflows"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">Gautam Kedia</div>
                    <div className="text-xs text-gray-400">Applied ML Leader at Stripe</div>
                  </div>
                  <img src="https://via.placeholder.com/40" alt="Gautam Kedia" className="w-10 h-10 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>

   

      {/* Ninth Section: Templates */}
      <AnimatedSection delay = {900}>
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          {/* Header */}
          <div className="max-w-xl mx-auto text-center mb-12">
            <div className="text-sm text-purple-400 uppercase">Templates</div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-2">
              Get started in seconds
            </h2>
            <p className="text-gray-300 text-lg mt-6">
              Pick a template to accelerate your setup. Templates are sample projects with common AI patterns. They come pre-configured with all sorts of relevant tests.
            </p>
            <div className="flex justify-center gap-4 mt-8">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full font-medium transition-colors">
                Start from a template
              </button>
              <button className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center">
                Browse templates {'>'}
              </button>
            </div>
          </div>

          {/* Template Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Template 1: RAG with Python */}
            <div className="bg-black/50 rounded-xl p-6 border border-gray-700 shadow-lg relative overflow-hidden group hover:bg-black/70 transition-colors">
              <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8v6h-8v-6z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 13h8v6h-8v-6z" />
                    </svg>
                  </div>
                  <button className="text-xs text-gray-400 hover:text-white bg-gray-800 px-3 py-1 rounded">Clone template {'>'}</button>
                </div>
                <h3 className="font-semibold mb-2">Question-answering retrieval</h3>
                <div className="text-sm text-gray-400 mb-4">RAG with Python</div>
                <p className="text-gray-300 text-sm mb-4">
                  Create a RAG pipeline for question-answering using Azure OpenAI and Python
                </p>
                <div className="flex items-center space-x-2">
                  <span className="text-xs bg-gray-700 px-2 py-1 rounded">Generative</span>
                  <span className="text-xs bg-gray-700 px-2 py-1 rounded flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9M9 9M9 9l6 6M9 9l6-6m6 6a2 2 0 012 2v6a2 2 0 01-2 2h-2a2 2 0 01-2-2v-6a2 2 0 012-2h2z" />
                    </svg>
                    Python
                  </span>
                </div>
              </div>
            </div>

            {/* Template 2: Structured outputs */}
            <div className="bg-black/50 rounded-xl p-6 border border-gray-700 shadow-lg relative overflow-hidden group hover:bg-black/70 transition-colors">
              <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-br from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9M5 11V9m2 2a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H7a2 2 0 01-2-2v-6z" />
                    </svg>
                  </div>
                  <button className="text-xs text-gray-400 hover:text-white bg-gray-800 px-3 py-1 rounded">Clone template {'>'}</button>
                </div>
                <h3 className="font-semibold mb-2">Structured outputs</h3>
                <div className="text-sm text-gray-400 mb-4">Instructor and Claude with Python</div>
                <p className="text-gray-300 text-sm mb-4">
                  Create an AI with structured outputs using Claude, Instructor and Python
                </p>
                <div className="flex items-center space-x-2">
                  <span className="text-xs bg-gray-700 px-2 py-1 rounded">Generative</span>
                  <span className="text-xs bg-gray-700 px-2 py-1 rounded flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9M9 9M9 9l6 6M9 9l6-6m6 6a2 2 0 012 2v6a2 2 0 01-2 2h-2a2 2 0 01-2-2v-6a2 2 0 012-2h2z" />
                    </svg>
                    Python
                  </span>
                </div>
              </div>
            </div>

            {/* Template 3: Simple chatbot */}
            <div className="bg-black/50 rounded-xl p-6 border border-gray-700 shadow-lg relative overflow-hidden group hover:bg-black/70 transition-colors">
              <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-br from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8v6h-8v-6z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 13h8v6h-8v-6z" />
                    </svg>
                  </div>
                  <button className="text-xs text-gray-400 hover:text-white bg-gray-800 px-3 py-1 rounded">Clone template {'>'}</button>
                </div>
                <h3 className="font-semibold mb-2">Simple chatbot</h3>
                <div className="text-sm text-gray-400 mb-4">OpenAI with Python</div>
                <p className="text-gray-300 text-sm mb-4">
                  Create your own simple chatbot using OpenAI and Python
                </p>
                <div className="flex items-center space-x-2">
                  <span className="text-xs bg-gray-700 px-2 py-1 rounded">Generative</span>
                  <span className="text-xs bg-gray-700 px-2 py-1 rounded flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9M9 9M9 9l6 6M9 9l6-6m6 6a2 2 0 012 2v6a2 2 0 01-2 2h-2a2 2 0 01-2-2v-6a2 2 0 012-2h2z" />
                    </svg>
                    Python
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </AnimatedSection>


      {/* FAQ */}
      <AnimatedSection delay = {1000}>
      <section className="py-16 px-6 bg-black text-white">
      <div className="text-center mb-10">
        <div className="inline-block bg-gray-800 text-xs px-3 py-1 rounded-full mb-4">
          QUESTIONS ANSWERED
        </div>
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Everything You Need <br /> To Know About AuraOS
        </h2>
        <p className="max-w-2xl mx-auto text-gray-300">
          Find clear answers about setup, compliance, and how AuraOS helps you
          automate conversations to close more deals effortlessly.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-700 rounded-lg overflow-hidden"
          >
            <button
              className="w-full flex justify-between items-center px-4 py-4 text-left hover:bg-gray-900 transition"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-medium">{faq.question}</span>
              <span className="text-purple-400 text-lg">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {openIndex === index && (
              <div className="px-4 pb-4 text-gray-300 animate-fadeIn">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-10 text-center text-sm text-gray-400">
        Need more information? Our team offers personalized onboarding and
        24/7 support to ensure your success with AuraOS.
      </div>
    </section>
    </AnimatedSection>
      {/* Tenth Section: Final CTA */}
      <AnimatedSection delay = {1000}>
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-black/30">
        <div className="container mx-auto text-center">  
          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Ready to automate your revenue?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            The automated AI evaluation and monitoring platform.
          </p>
          <div className = "md:flex-row">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-medium transition-colors">
            Book 15-min teardown
          </button>
          <button className="ml-12 bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-medium transition-colors">
            See live demo 
          </button>
          </div>
        </div>
      </section>
      </AnimatedSection>
    </div>
  );
};

export default Home;

