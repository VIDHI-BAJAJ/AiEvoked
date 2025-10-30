import React, { useState, useEffect } from "react";
import AnimatedSection from '../components/AnimatedSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faCalendar } from '@fortawesome/free-solid-svg-icons';
import {
  Zap,
  Clock,
  DollarSign,
  MessageSquare,
  Phone,
  Mail,
  Bot,
  CheckCircle,
  TrendingUp,
  FileCheck,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import FixedFooter from './FixedFooter';
import algheroLogo from '../Images/alghero.png';
import marichamLogo from '../Images/maricham.png';
import sncLogo from '../Images/snc.png';
import vidhitsuLogo from '../Images/vidhitsu.png';

const Home = () => {
  const [testProgress, setTestProgress] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setTestProgress(prev => {
        if (prev < 4) return prev + 1;
        clearInterval(timer);
        return prev;
      });
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    {
      question: "What exactly does Automate+ do?",
      answer:
        "Automate+ installs your agency’s Revenue Engine — a done-for-you automation system that replies to leads, sends proposals, revives cold prospects and manages operations without your team lifting a finger.",
    },
    {
      question: "How fast can we see results?",
      answer: (
        <>
          <p>Usually, within 48 hours of setup.</p>
          <p>Our full install takes about 7 days, and by the first month, most agencies see:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Replies going out in under 2 minutes</li>
            <li>Proposals sent the same day instead of 2–3 days</li>
            <li>Show rates increase by 20–40%</li>
            <li>A smoother operations flow and faster pipeline that converts more deals</li>
          </ul>
        </>
      ),
    },
    {
      question: "How much work will this be for my team?",
      answer:
        "Almost none. You’ll just assign three people — a lead owner, proposal approver, and ops point of contact. We handle everything else async. Two short check-ins a month, and you’ll get weekly dashboards showing progress and ROI.",
    },
    {
      question: "What if it doesn’t work for us?",
      answer:
        "Then you don’t pay. If we miss our benchmarks (like <2-minute replies or 10% pipeline revival), you get credits, free optimisation time, or a refund — your choice. We take the risk so you can focus on results.",
    },
    {
      question: "How do we get started?",
      answer:
        "Book a quick 15-minute teardown. We’ll review your current lead flow, show where time and money are leaking, and map exactly how to automate replies, proposals, operations and follow-ups within 7 days.",
    },
  ];

  const stats = [
    {
      icon: <Zap className="w-10 h-10 text-[#7E22CE]" />,
      value: "900%",
      title: "Conversion Drop",
      desc: "Response delay beyond 5 minutes causes 900% decrease in lead conversion rates",
    },
    {
      icon: <Clock className="w-10 h-10 text-[#7E22CE]" />,
      value: "21x",
      title: "Speed Advantage",
      desc: "Companies responding within 5 minutes are 21x more likely to qualify leads",
    },
    {
      icon: <DollarSign className="w-10 h-10 text-[#7E22CE]" />,
      value: "78%",
      title: "Revenue at Risk",
      desc: "Of premium prospects research and decide within the first hour of inquiry",
    },
  ];

  const toggleFAQ = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  const channels = [
    {
      id: "chat",
      name: "Meta Ads / Google Ads",
      subtitle: "Instant web conversations",
      icon: <MessageSquare className="w-5 h-5" />,
      color: "from-[#7E22CE] to-purple-500",
      stats: { captureRate: "94%", availability: "24/7 Response" },
      flow: [
        { icon: <Zap className="text-[#7E22CE]" />, time: "0s", title: "Leads Captured", desc: "Forms, WhatsApp, Email, or Ads lead captured instantly." },
        { icon: <Bot className="text-[#7E22CE]" />, time: "0.5s", title: "Speed Stack + Hot-Route", desc: "Instant humanlike reply + owner alerted for claim." },
        { icon: <Phone className="text-[#7E22CE]" />, time: "2m", title: "Proposal Accelerator", desc: "Auto-draft proposals sent & e-sign enabled." },
        { icon: <CheckCircle className="text-[#7E22CE]" />, time: "5m", title: "CRM Update & Reporting", desc: "Leads updated, revival engine triggered, and reports generated." },
      ],
    },
    {
      id: "email",
      name: "Website",
      subtitle: "Smart inbox response",
      icon: <Mail className="w-5 h-5" />,
      color: "from-[#7E22CE] to-purple-400",
      stats: { captureRate: "87%", availability: "Auto-Replies within 1 min" },
      flow: [
        { icon: <Mail className="text-[#7E22CE]" />, time: "0s", title: "Leads Captured", desc: "Website inquiries parsed automatically." },
        { icon: <Bot className="text-[#7E22CE]" />, time: "1s", title: "Speed Stack + Hot-Route", desc: "AI reply + owner alerted for immediate follow-up." },
        { icon: <Phone className="text-[#7E22CE]" />, time: "3m", title: "Proposal Accelerator", desc: "Auto-drafted responses sent to leads quickly." },
        { icon: <CheckCircle className="text-[#7E22CE]" />, time: "10m", title: "CRM Update & Reporting", desc: "Non-responders revived and performance reports updated." },
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState("chat");
  const selectedChannel = channels.find(c => c.id === activeTab);

  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    dealSize: 25000,
    monthlyInquiries: 80,
    bookingRate: 15,
    conversionRate: 25,
    industry: "",
  });

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const calculateResults = () => {
    const { dealSize, monthlyInquiries, bookingRate, conversionRate } = form;
    const currentRevenue =
      dealSize * monthlyInquiries * (bookingRate / 100) * (conversionRate / 100);
    const improvedBookingRate = bookingRate * 1.5;
    const improvedConversionRate = conversionRate * 1.1;
    const improvedRevenue =
      dealSize *
      monthlyInquiries *
      (improvedBookingRate / 100) *
      (improvedConversionRate / 100);
    return {
      currentRevenue,
      improvedRevenue,
      additionalRevenue: improvedRevenue - currentRevenue,
      annualPotential: (improvedRevenue - currentRevenue) * 12,
    };
  };

  const results = calculateResults();

  const metrics = [
    { icon: Clock, value: "90s", label: "p90 reply time", description: "From 6 hours to under 2 minutes" },
    { icon: TrendingUp, value: "+38%", label: "Show rate lift", description: "20-40% improvement typical" },
    { icon: FileCheck, value: "4 hrs", label: "Proposal speed", description: "Down from 3 days average" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const logos = [
    { src: algheroLogo, alt: 'Alghero' },
    { src: marichamLogo, alt: 'Maricham' },
    { src: sncLogo, alt: 'SNC' },
    { src: vidhitsuLogo, alt: 'Vidhitsu' },
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-black text-white" style={{ backgroundColor: '#080412' }}>
        {/* Hero Section */}
        <AnimatedSection>
          <section className="md:mt-24 mt-1 pt-24 pb-20 px-4 sm:px-6 md:px-8 lg:px-16">
            <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="lg:w-1/2 space-y-6">
                <h1 className="text-2xl sm:text-2xl md:text-2xl lg:text-5xl font-bold leading-tight">
                  Convert More Leads Into Booked Calls & Clients in 7 Days — Automatically.
                </h1>
                <p className="text-gray-300 text-base sm:text-lg mt-6">
                  Install your Revenue Engine in 7 days — 2-min replies, +40% more calls, proposals in hours. Backed by SLAs and weekly proof.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-medium transition-colors whitespace-nowrap">
                    Book a 15-min pilot
                  </button>
                </div>
              </div>

              <div className="lg:w-1/2 w-full mt-10 lg:mt-0">
                <div className="bg-[#151120] rounded-xl p-6 border border-gray-700 shadow-lg">
                  <div className="rounded-xl pb-5 border border-gray-700 shadow-lg bg-[linear-gradient(90deg,rgba(91,47,234,0.10)_0%,rgba(228,207,255,0)_100%)]">
                    <div className="flex items-center mb-4 pb-4 border-b border-gray-700 w-full p-4">
                      <div className="ml-3">
                        <span className="font-semibold">Your Revenue Engine — tested, monitored, always-on.</span>
                        <span className="text-sm text-gray-400 ml-2">7 of 7 Test results ready</span>
                      </div>
                    </div>
                    <div className="ml-4 relative pl-8 p-4 before:absolute before:left-4 before:top-0 before:bottom-0 before:w-0.5 before:bg-purple-500/30 max-h-[400px] overflow-y-auto">
                      {[
                        { text: "Leads In (Forms / WhatsApp/ Email / Ads)", passed: testProgress >= 1 },
                        { text: "Speed Stack (instant humanlike reply + calendar)", passed: testProgress >= 2 },
                        { text: "Hot-Route (owner alert + claim)", passed: testProgress >= 3 },
                        { text: "Proposal Accelerator (autodraft → e-sign)", passed: testProgress >= 4 },
                        { text: "CRM Update & Reporting", passed: testProgress >= 4 },
                        { text: "Revival Engine (nonresponders + old pipeline)", passed: testProgress >= 4 },
                        { text: "Onboarding + Reporting", passed: testProgress >= 4 },
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          className={`flex items-start mb-4 group ${item.passed ? 'opacity-100' : 'opacity-50'}`}
                          style={{ transition: 'opacity 0.5s ease-in-out' }}
                        >
                          <div
                            className={`absolute left-1 w-6 h-6 bg-black border-2 ${
                              item.passed ? 'border-purple-500' : 'border-gray-500'
                            } flex items-center justify-center group-hover:bg-opacity-80 transition-colors`}
                          >
                            {item.passed && (
                              <span className="text-white text-lg font-bold">✓</span>
                            )}
                          </div>
                          <div className="ml-6 flex-1">
                            <div className="flex items-center justify-between">
                              <span>{item.text}</span>
                              {item.passed && (
                                <span className="text-green-500 text-sm font-medium px-2 py-1 bg-green-900/30 rounded">
                                  Passing
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Trusted by Section */}
        <AnimatedSection delay={100}>
          <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-16">
            <div className="container mx-auto">
              <div className="text-center mb-12">
                <p className="text-gray-400 text-sm uppercase tracking-wider">
                  Trusted by YC-backed teams and 15+ performance agencies.
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 items-center justify-items-center">
                {logos.map((logo, index) => (
                  <div key={index} className="flex justify-center">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="h-32 sm:h-24 object-contain opacity-100 hover:opacity-150 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Experience Section */}
        <AnimatedSection delay={600}>
          <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-16">
            <div className="text-center mb-12">
              <div className="inline-block text-xs px-3 py-1 rounded-full mb-4 text-[#7E22CE]">
                EXPERIENCE THE DIFFERENCE
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white bg-clip-text text-transparent">
                Watch Automate+ Convert Leads Faster Than Your Team — Live
              </h2>
              <p className="max-w-2xl mx-auto text-gray-300 mb-8 px-2">
                See exactly how Automate+ will handle your high-value prospects. Choose your experience:
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto px-2">
              <div className="border border-[#7E22CE] p-6 rounded-2xl hover:shadow-lg transition duration-300">
                <div className="text-center mb-4">
                  <div className="inline-block text-[#7E22CE] border border-[#7E22CE] p-3 rounded-full mb-2">
                    <FontAwesomeIcon icon={faPhone} size="lg" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">See Automate+ in Action — Your Revenue Engine, Live</h3>
                </div>
                <p className="text-sm text-gray-400 mb-4">
                  Watch Automate+ handle real inbound leads, from form fill to booked call — in minutes.
                </p>
                <ul className="space-y-2 text-xs mb-4">
                  <li className="flex items-start">Experience the system that delivers:</li>
                  <li className="flex items-start"><span className="text-[#7E22CE] mr-2">✓</span> 2-min human-like replies across WhatsApp, Email & Ads</li>
                  <li className="flex items-start"><span className="text-[#7E22CE] mr-2">✓</span> Proposals generated and shared in hours</li>
                  <li className="flex items-start"><span className="text-[#7E22CE] mr-2">✓</span> CRM updates, owner routing, and revival flows — all on autopilot</li>
                </ul>
                <Link to="/contact">
                  <button className="w-full bg-gradient-to-r from-[#7E22CE] to-[#7E22CE] px-4 py-2 rounded-xl font-medium hover:shadow-xl transition duration-300">
                    Watch Live Demo — Experience Automate+
                  </button>
                </Link>
              </div>
              <div className="border border-[#7E22CE] p-6 rounded-2xl hover:shadow-lg transition duration-300">
                <div className="text-center mb-4">
                  <div className="inline-block text-[#7E22CE] border border-[#7E22CE] p-3 rounded-full mb-2">
                    <FontAwesomeIcon icon={faCalendar} size="lg" />
                  </div>
                  <h3 className="text-xl font-semibold text-white"> Strategy Call — Build Your 7-Day Revenue Engine</h3>
                </div>
                <p className="text-sm text-gray-400 mb-4">
                  Speak with our team to design your agency’s 7-day rollout — the exact system that replies to 90%+ of inbound leads in under 2 minutes, sends proposals in hours, and revives dead pipeline automatically.
                </p>
                <ul className="space-y-2 text-xs mb-4">
                  <li className="flex items-start"> You’ll walk away with:</li>
                  <li className="flex items-start"><span className="text-[#7E22CE] mr-2">✓</span> A custom automation roadmap for your agency</li>
                  <li className="flex items-start"><span className="text-[#7E22CE] mr-2">✓</span> Clear ROI projection & performance benchmarks</li>
                  <li className="flex items-start"><span className="text-[#7E22CE] mr-2">✓</span> A full integration plan across your current stack</li>
                </ul>
                <Link to="/contact">
                  <button className="w-full bg-gradient-to-r from-[#7E22CE] to-[#7E22CE] px-4 py-2 rounded-xl font-medium hover:shadow-xl transition duration-300">
                    Book 15-Min Strategy Call
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Speed to Lead Section */}
        <AnimatedSection delay={600}>
          <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-16">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-[#7E22CE] via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Speed to Lead <br /> Determines Everything
              </h2>
              <p className="max-w-2xl mx-auto text-gray-300 px-2">
                In today's market, the fastest response wins—regardless of price, quality, or reputation.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2">
              {stats.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-700 p-5 sm:p-6 rounded-xl hover:border-[#7E22CE] transition duration-300"
                >
                  <div className="flex justify-center mb-3">{item.icon}</div>
                  <div className="text-xl sm:text-2xl font-bold text-[#7E22CE] mb-2 text-center">
                    {item.value}
                  </div>
                  <h3 className="font-semibold mb-2 text-center text-white text-sm sm:text-base">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 text-center">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </AnimatedSection>

        {/* Lead Generation */}
        <AnimatedSection delay={700}>
          <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-16">
            <div className="max-w-4xl mx-auto text-center mb-8 px-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#7E22CE] via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Every Channel. Every Lead. <br /> Captured and Converted
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                See exactly how Automate+ transforms leads from any source into qualified appointments—with lightning-fast response times that ensure no opportunity is ever missed.
              </p>
            </div>
            <div className="max-w-4xl mx-auto mb-8 flex flex-wrap justify-center gap-2 sm:gap-3 px-2">
              {channels.map((channel) => (
                <button
                  key={channel.id}
                  onClick={() => setActiveTab(channel.id)}
                  className={`flex items-center space-x-2 px-3 py-2 sm:px-4 sm:py-2 rounded-full text-sm sm:text-base transition-all duration-300 ${
                    activeTab === channel.id
                      ? `bg-gradient-to-r ${channel.color} text-white shadow-lg shadow-[#7E22CE]/30`
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  <span>{channel.icon}</span>
                  <div className="text-left">
                    <div className="font-medium">{channel.name}</div>
                    <div className="text-[10px] sm:text-xs opacity-70">{channel.subtitle}</div>
                  </div>
                </button>
              ))}
            </div>
            <div className="max-w-5xl mx-auto bg-gray-900 rounded-xl p-5 sm:p-6 md:p-8 border border-gray-800 shadow-2xl px-2">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 pb-4 border-b border-gray-800">
                <div className="flex items-center space-x-3 mb-4 md:mb-0">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#7E22CE] to-purple-500 rounded-full flex items-center justify-center text-xl">
                    {selectedChannel.icon}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold">{selectedChannel.name}</h3>
                    <p className="text-xs sm:text-sm text-gray-400">{selectedChannel.subtitle}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xl sm:text-2xl font-bold text-[#7E22CE]">
                    {selectedChannel.stats.captureRate}
                  </div>
                  <div className="text-xs text-gray-400">
                    {selectedChannel.stats.availability}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {selectedChannel.flow.map((step, index) => (
                  <div
                    key={index}
                    className="relative bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors cursor-pointer group"
                  >
                    <div className="text-xl mb-2 group-hover:scale-110 transition-transform">
                      {step.icon}
                    </div>
                    <div className="text-xs font-semibold mb-1">{step.time}</div>
                    <div className="text-xs text-gray-300 mb-1">{step.title}</div>
                    <div className="text-[10px] text-gray-500">{step.desc}</div>
                    {index < selectedChannel.flow.length - 1 && (
                      <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3 text-gray-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Testimonials */}
        <AnimatedSection delay={700}>
          <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-16">
            <div className="container mx-auto">
              <div className="max-w-xl mx-auto text-center mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-[#7E22CE] via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Testimonials
                </h2>
                <p className="text-gray-300 text-lg">
                  Automate+ is trusted by leading organizations to enhance their development and operational efficiency for accuracy, scalability, and seamless integration.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-black/50 rounded-xl p-6 border border-gray-700 shadow-lg relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-br from-orange-500/20 to-transparent"></div>
                  <div className="relative z-10">
                    <p className="text-gray-300 text-sm mb-6">
                      "Before Automate+, we were losing deals because replies took forever. Within a week, our response time was under two minutes. Everything just feels faster now. Follow-ups, proposals, even internal updates. Easily the best ops decision we’ve made this year."
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold">Sudhir Minotra</div>
                        <div className="text-xs text-gray-400">Vidhitsu Concepts</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-black/50 rounded-xl p-6 border border-gray-700 shadow-lg relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-br from-blue-500/20 to-transparent"></div>
                  <div className="relative z-10">
                    <p className="text-gray-300 text-sm mb-6">
                      "We had great funnels but were bleeding leads after form fills. Automate+ fixed that in a week. Response time dropped from six hours to 90 seconds, and show rates shot up nearly 40%."
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold">Poonam</div>
                        <div className="text-xs text-gray-400">Omnific Fitouts LLP</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-black/50 rounded-xl p-6 border border-gray-700 shadow-lg relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-br from-purple-500/20 to-transparent"></div>
                  <div className="relative z-10">
                    <p className="text-gray-300 text-sm mb-6">
                      "AI Evoked made our operations insanely fast. Proposals that used to take two days now go out the same day, and we even revived 12% of old leads. "
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold">Sunil Nayyar</div>
                        <div className="text-xs text-gray-400">Consultants</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Proof & Wins */}
        <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">Proof & Wins</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                We publish proof screenshots weekly. No cherry-picking.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {metrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <div key={metric.label} className="border border-purple-500/30 rounded-xl p-6 text-center hover:border-purple-500 transition">
                    <div className="inline-flex items-center justify-center p-3 rounded-full mb-4 bg-purple-500/10">
                      <Icon className="w-6 h-6 text-purple-500" />
                    </div>
                    <div className="text-3xl sm:text-4xl font-bold text-purple-500 mb-2">{metric.value}</div>
                    <div className="text-sm font-semibold mb-1">{metric.label}</div>
                    <div className="text-xs text-gray-400">{metric.description}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Revenue Projector */}
        <AnimatedSection delay={900}>
          <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-16">
            <div className="max-w-3xl mx-auto text-center mb-10 px-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                Calculate Your{" "}
                <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                  Revenue Growth Potential
                </span>
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                Input your business metrics to discover how much additional revenue
                you can generate through improved response times and booking rates.
              </p>
            </div>
            <div className="flex justify-center items-center space-x-2 sm:space-x-3 mb-8">
              {[1, 2, 3].map((num) => (
                <div
                  key={num}
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm border-2 ${
                    step >= num
                      ? "border-purple-500 bg-purple-600 text-white"
                      : "border-gray-700 text-gray-500"
                  }`}
                >
                  {num}
                </div>
              ))}
            </div>
            <div className="max-w-2xl mx-auto bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg">
              {step === 1 && (
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-purple-400">
                    Let’s start with your business basics
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm mb-1">Average Deal Size</label>
                      <input
                        type="number"
                        value={form.dealSize}
                        onChange={(e) => handleChange("dealSize", e.target.value)}
                        className="w-full bg-black border border-gray-700 rounded-lg px-4 py-2 focus:border-purple-500 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-1">Monthly Inquiries</label>
                      <input
                        type="number"
                        value={form.monthlyInquiries}
                        onChange={(e) => handleChange("monthlyInquiries", e.target.value)}
                        className="w-full bg-black border border-gray-700 rounded-lg px-4 py-2 focus:border-purple-500 outline-none"
                      />
                    </div>
                  </div>
                </div>
              )}
              {step === 2 && (
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-purple-400">
                    What’s your current performance?
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm mb-1">Booking Rate (%)</label>
                      <input
                        type="number"
                        value={form.bookingRate}
                        onChange={(e) => handleChange("bookingRate", e.target.value)}
                        className="w-full bg-black border border-gray-700 rounded-lg px-4 py-2 focus:border-purple-500 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-1">Conversion Rate (%)</label>
                      <input
                        type="number"
                        value={form.conversionRate}
                        onChange={(e) => handleChange("conversionRate", e.target.value)}
                        className="w-full bg-black border border-gray-700 rounded-lg px-4 py-2 focus:border-purple-500 outline-none"
                      />
                    </div>
                  </div>
                </div>
              )}
              {step === 3 && (
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-purple-400">
                    Your Growth Potential
                  </h3>
                  <div className="bg-black rounded-lg border border-purple-600 p-6 text-center">
                    <p className="text-sm text-gray-400 mb-2">Additional Monthly Revenue</p>
                    <div className="text-3xl font-bold text-purple-400 mb-4">
                      +${results.additionalRevenue.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-sm text-gray-400">
                      <div>
                        <p>Annual Potential</p>
                        <p className="text-white font-semibold">
                          ${results.annualPotential.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                        </p>
                      </div>
                      <div>
                        <p>Booking Improvement</p>
                        <p className="text-white font-semibold">+50%</p>
                      </div>
                      <div>
                        <p>Conversion Lift</p>
                        <p className="text-white font-semibold">+10%</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div className="flex flex-col sm:flex-row justify-between gap-4 mt-8">
                <button
                  onClick={() => setStep(step - 1)}
                  disabled={step === 1}
                  className={`px-4 py-2 rounded-lg border border-gray-700 hover:border-purple-500 transition ${
                    step === 1 ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  Previous
                </button>
                <button
                  onClick={() => setStep(step + 1)}
                  disabled={step === 3}
                  className={`px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium hover:opacity-90 transition ${
                    step === 3 ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {step === 2 ? "Calculate" : "Continue"}
                </button>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* FAQ */}
        <AnimatedSection delay={1000}>
          <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-16">
            <div className="text-center mb-10 px-2">
              <div className="inline-block bg-gray-800 text-xs px-3 py-1 rounded-full mb-4">
                QUESTIONS ANSWERED
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Everything You Need <br /> To Know About Automate+
              </h2>
              <p className="max-w-2xl mx-auto text-gray-300 px-2">
                Find clear answers about setup, compliance, and how Automate+ helps you
                automate conversations to close more deals effortlessly.
              </p>
            </div>
            <div className="max-w-3xl mx-auto space-y-4 px-2">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-700 rounded-lg overflow-hidden"
                >
                  <button
                    className="w-full flex justify-between items-center px-4 py-4 text-left hover:bg-gray-900 transition"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="font-medium text-sm sm:text-base">{faq.question}</span>
                    <span className="text-purple-400 text-lg">
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </button>
                  {openIndex === index && (
                    <div className="px-4 pb-4 text-gray-300 text-sm">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </AnimatedSection>

        {/* Final CTA */}
        <AnimatedSection delay={1000}>
          <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-16">
            <div className="container mx-auto text-center max-w-3xl px-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                Ready to automate your revenue?
              </h2>
              <p className="text-gray-300 text-base sm:text-lg mb-8">
                The automated AI evaluation and monitoring platform.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-medium transition-colors whitespace-nowrap">
                  Book a 15-min pilot
                </button>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Video Modal */}
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl w-full max-w-3xl relative">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-4 text-2xl text-gray-600 hover:text-black z-10"
              >
                &times;
              </button>
              <div className="aspect-w-16 aspect-h-9 w-full">
                <iframe
                  className="w-full h-[300px] sm:h-[400px]"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Experience Automate+"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>

      <FixedFooter />
    </>
  );
};

export default Home;