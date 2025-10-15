import React from 'react';

const AuraOSLandingPage = () => {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Header */}
      <header className="py-4 px-6 flex justify-between items-center border-b border-gray-800">
        <div className="flex items-center space-x-6">
          <img src="https://via.placeholder.com/150x30?text=Wave+Runner+Digital" alt="Wave Runner Digital" className="h-8" />
          <nav className="hidden md:flex space-x-6 text-sm">
            {['About', 'Blog', 'Recovery', 'Process', 'Results', 'Calculator'].map(item => (
              <a key={item} href="#" className="hover:text-purple-400 transition">{item}</a>
            ))}
          </nav>
        </div>
        <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition">
          BOOK REVENUE AUDIT →
        </button>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-purple-300 to-blue-400 bg-clip-text text-transparent">
          Turn Your Cold Database Into <br /> $50K+ Monthly Revenue
        </h1>
        <p className="text-xl mb-8 text-gray-300">While Capturing Every New Lead in Under 30 Seconds</p>
        <p className="max-w-2xl mx-auto mb-10 text-gray-400">
          AuraOS intelligently reacts to your warm leads while ensuring no new opportunity is ever missed—with zero technical work from your team.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {[
            { icon: "🔄", title: "Resurrect Dead Leads", desc: "Strategic reactivation of dormant database contacts" },
            { icon: "⚡", title: "Never Miss Opportunities", desc: "Instant responses to every new lead across all channels" },
            { icon: "📅", title: "Calendar on Autopilot", desc: "Intelligent appointment setting and qualification" }
          ].map((item, index) => (
            <div key={index} className="border border-gray-700 p-6 rounded-xl hover:border-purple-500 transition">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gradient-to-r from-purple-500 to-blue-600 px-6 py-3 rounded-full font-medium hover:shadow-lg transition">
            Experience AuraOS Live
          </button>
          <button className="border border-gray-600 px-6 py-3 rounded-full hover:bg-gray-900 transition">
            Get Free Database Audit
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-6 bg-gray-900">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6">
            <div className="text-3xl font-bold text-purple-400 mb-2">84.7%</div>
            <div className="text-sm text-gray-400">Average ROI achieved</div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-blue-400 mb-2">30s</div>
            <div className="text-sm text-gray-400">Lead response time</div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
            <div className="text-sm text-gray-400">Database reactivation</div>
          </div>
        </div>
        <div className="mt-6 text-center text-xs text-gray-500">
          Powered by AuraOS technology • Trusted by industry leaders across legal, medical, and consulting
        </div>
      </section>

      {/* Speed to Lead Section */}
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

      {/* After Hours Section */}
      <section className="py-12 px-6 bg-gray-900">
        <div className="text-center mb-10">
          <div className="inline-block bg-gray-800 text-xs px-3 py-1 rounded-full mb-4">AFTER HOURS IMPLICATIONS</div>
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            When Stakes Are <br /> 10x Higher
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300">
            After 6 PM and on weekends, speed-to-lead doesn't just matter—it becomes the only thing that matters.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: "%", value: "67%", title: "After-Hours Inquiries", desc: "Premium prospects research and book service evenings & weekends when you're unavailable" },
            { icon: "📈", value: "10x", title: "Amplified Impact", desc: "After 6 PM, speed-to-lead becomes 10x more critical—competitors sleep while you could win" },
            { icon: "$", value: "300%", title: "Premium Opportunity", desc: "After-hours leads convert at 300% higher value when contacted immediately" }
          ].map((item, index) => (
            <div key={index} className="border border-gray-700 p-6 rounded-xl hover:border-orange-500 transition">
              <div className="text-2xl mb-3">{item.icon}</div>
              <div className="text-2xl font-bold text-orange-400 mb-2">{item.value}</div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Ultimate Challenge Section */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold mb-4">The Ultimate Speed-to-Lead Challenge</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "📞", title: "Voicemail = Death", desc: "Premium prospects won't leave voicemails after hours—they call the next company" },
              { icon: "⚡", title: "Instant Advantage", desc: "Be the ONLY company that answers immediately when competitors are offline" },
              { icon: "💰", title: "Premium Pricing", desc: "After-hours urgency allows 300% higher pricing when you respond instantly" }
            ].map((item, index) => (
              <div key={index} className="border border-gray-700 p-6 rounded-xl hover:border-yellow-500 transition">
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What If You Could Achieve Section */}
      <section className="py-12 px-6 bg-gray-900">
        <div className="text-center mb-10">
          <div className="inline-block bg-gray-800 text-xs px-3 py-1 rounded-full mb-4">WHAT IF YOU COULD ACHIEVE...</div>
          <h2 className="text-2xl font-bold mb-4">What If You Could Achieve 2.3 Second Response Times?</h2>
          <p className="max-w-2xl mx-auto text-gray-300">
            What if every inquiry—day, night, weekend, holiday—was answered faster than humanly possible, qualified expertly, and converted automatically?
          </p>
        </div>
        <div className="flex justify-center">
          <button className="bg-gradient-to-r from-purple-500 to-blue-600 px-6 py-3 rounded-full font-medium hover:shadow-lg transition">
            Experience This Live
          </button>
        </div>
      </section>

      {/* Meet AuraOS Section */}
      <section className="py-12 px-6">
        <div className="text-center mb-10">
          <div className="inline-block bg-gray-800 text-xs px-3 py-1 rounded-full mb-4">REVOLUTIONARY AUTOMATION SYSTEM</div>
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Meet AuraOS <br /> Turn Every Lead Into Revenue
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 mb-6">
            The intelligent system that captures every opportunity, recovers lost revenue, and delivers only qualified prospects to your team. Three integrated capabilities that ensure maximum conversions at every touchpoint.
          </p>
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">+84.7%</div>
              <div className="text-xs text-gray-400">Average ROI Increase</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">$127K</div>
              <div className="text-xs text-gray-400">Hidden revenue recovered</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">24/7</div>
              <div className="text-xs text-gray-400">Revenue capture active</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              tag: "CAPTURE",
              icon: "🎯",
              title: "Instant Lead Capture & Qualification",
              desc: "Never lose another qualified prospect to timing or slow response rates",
              stats: [
                "2 second response across all channels",
                "24/7 availability",
                "300% higher conversion"
              ]
            },
            {
              tag: "RECOVER",
              icon: "💰",
              title: "Hidden Revenue Recovery",
              desc: "Transform dormant CRM contacts into $50K+ monthly revenue streams",
              stats: [
                "73% response rate on cold leads",
                "7 day revenue recovery",
                "$127K average discovery"
              ]
            },
            {
              tag: "CONVERT",
              icon: "📅",
              title: "Automated Calendar Booking",
              desc: "Only qualified, budget-confirmed prospects reach your calendar",
              stats: [
                "Pre-qualified meetings only",
                "Decision maker confirmed",
                "Zero time wasters"
              ]
            }
          ].map((item, index) => (
            <div key={index} className="border border-gray-700 p-6 rounded-xl hover:border-cyan-500 transition">
              <div className="flex justify-between items-center mb-4">
                <span className="bg-purple-600 text-xs px-2 py-1 rounded-full">{item.tag}</span>
                <div className="text-4xl">{item.icon}</div>
              </div>
              <h3 className="font-semibold mb-3">{item.title}</h3>
              <p className="text-sm text-gray-400 mb-4">{item.desc}</p>
              <ul className="space-y-1 text-xs">
                {item.stats.map((stat, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-green-400 mr-2">•</span> {stat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center text-sm text-gray-400">
          While instant capture maximizes new opportunities... there's untapped revenue sitting in your existing database.
        </div>
      </section>

      {/* Hidden Revenue Section */}
      <section className="py-12 px-6 bg-gray-900">
        <div className="text-center mb-10">
          <div className="inline-block bg-gray-800 text-xs px-3 py-1 rounded-full mb-4">HIDDEN REVENUE RECOVERY</div>
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
            You Have $100K+ in <br /> Dormant Leads in Your CRM
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 mb-6">
            Every day these qualified prospects sit cold, you're losing money to competitors who respond faster. AuraOS intelligently reactivates your database with personalized outreach that converts at 73% rates.
          </p>
          <div className="inline-flex items-center bg-red-900 text-red-300 px-4 py-2 rounded-full text-sm mb-8">
            <span className="mr-2">•</span> Every day delayed = $1,247 in lost reactivation revenue
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: "💰", value: "$127K", title: "Hidden Revenue Discovered", desc: "Average dormant leads sitting in client CRMs" },
            { icon: "📈", value: "73%", title: "Reactivation Success Rate", desc: "Cold prospects converted to qualified meetings" },
            { icon: "$", value: "7", title: "Revenue Recovery Speed", desc: "Days to Revenue" }
          ].map((item, index) => (
            <div key={index} className="border border-gray-700 p-6 rounded-xl hover:border-green-500 transition">
              <div className="text-3xl mb-3">{item.icon}</div>
              <div className="text-2xl font-bold text-green-400 mb-2">{item.value}</div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-red-700 p-6 rounded-xl">
            <h4 className="font-semibold mb-4 text-red-400">Without Database Reactivation</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start"><span className="text-red-400 mr-2">•</span> 3,247 qualified leads sitting dormant for 6+ months</li>
              <li className="flex items-start"><span className="text-red-400 mr-2">•</span> $127K+ in potential revenue aging out daily</li>
              <li className="flex items-start"><span className="text-red-400 mr-2">•</span> Competitors capturing your old prospects</li>
              <li className="flex items-start"><span className="text-red-400 mr-2">•</span> Zero ROI from past marketing investments</li>
              <li className="flex items-start"><span className="text-red-400 mr-2">•</span> Manual outreach that doesn't scale or convert</li>
            </ul>
          </div>
          <div className="border border-green-700 p-6 rounded-xl">
            <h4 className="font-semibold mb-4 text-green-400">With AuraOS Reactivation</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start"><span className="text-green-400 mr-2">•</span> First reactivated lead within 7 days guaranteed</li>
              <li className="flex items-start"><span className="text-green-400 mr-2">•</span> 73% response rate on dormant prospects</li>
              <li className="flex items-start"><span className="text-green-400 mr-2">•</span> $50K+ monthly revenue from "dead" database</li>
              <li className="flex items-start"><span className="text-green-400 mr-2">•</span> Intelligent AI sequences that feel personal</li>
              <li className="flex items-start"><span className="text-green-400 mr-2">•</span> Complete automation - zero work from your team</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Channel Integration Section */}
      <section className="py-12 px-6">
        <div className="text-center mb-10">
          <div className="inline-block bg-gray-800 text-xs px-3 py-1 rounded-full mb-4">COMPLETE MULTI-CHANNEL INTELLIGENCE</div>
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Every Channel. Every Lead. <br /> Captured and Converted
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 mb-6">
            See exactly how AuraOS transforms leads from any sources into qualified appointments—with lightning-fast response times that ensure no opportunity is ever missed.
          </p>
        </div>
        <div className="flex justify-center mb-8">
          <div className="bg-purple-600 px-4 py-2 rounded-full text-sm font-medium flex items-center">
            <span className="mr-2">📱</span> Facebook Ad Lead
          </div>
        </div>
        <div className="bg-gray-900 p-6 rounded-xl mb-8">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <span className="text-2xl mr-2">📱</span>
              <div>
                <div className="font-semibold">Facebook Ad Lead</div>
                <div className="text-sm text-gray-400">Lead submits form on Facebook ad</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xl font-bold text-green-400">30 seconds</div>
              <div className="text-sm text-gray-400">Response Time</div>
              <div className="text-xs text-green-400">3x Higher</div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            {[
              { icon: "⏱️", time: "0s", desc: "Form submitted on Facebook" },
              { icon: "⚡", time: "2s", desc: "AuraOS detects lead instantly" },
              { icon: "📞", time: "30s", desc: "Calls prospect within 30 seconds" },
              { icon: "✅", time: "90s", desc: "Qualified and meeting booked" }
            ].map((step, index) => (
              <div key={index} className="border border-gray-700 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">{step.icon}</div>
                <div className="text-sm font-semibold mb-1">{step.time}</div>
                <div className="text-xs text-gray-400">{step.desc}</div>
              </div>
            ))}
          </div>
          <div className="text-center text-sm text-gray-400">
            Total conversion time: 2 minutes | Success rate: 300% higher than industry average
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-gradient-to-r from-purple-500 to-blue-600 px-6 py-3 rounded-full font-medium hover:shadow-lg transition">
            Experience This Live
          </button>
        </div>
      </section>

      {/* 2.3 Second Response Section */}
      <section className="py-12 px-6 bg-gray-900">
        <div className="text-center mb-10">
          <div className="inline-block bg-gray-800 text-xs px-3 py-1 rounded-full mb-4">INSTANT SPEED ADVANTAGE</div>
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            2.3 Second <br /> Response Time
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 mb-6">
            While competitors sleep on leads, AuraOS answers in 2.3 seconds —24/7, 365 days a year. Turn after-hours into your biggest competitive advantage.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="border border-gray-700 p-6 rounded-xl">
            <h3 className="font-semibold mb-4">The Speed That Wins</h3>
            <div className="space-y-2 text-sm">
              <div>Weekend call answered: <span className="text-blue-400 ml-2">2.3 seconds</span></div>
              <div>Competitor response: <span className="text-red-400 ml-2">Monday morning</span></div>
              <div>Your advantage: <span className="text-green-400 ml-2">Deal closed</span></div>
            </div>
          </div>
          <div className="border border-gray-700 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-2">📞</span>
              <div>
                <div className="font-semibold">Emergency HVAC Call</div>
                <div className="text-sm text-gray-400">Answered in 2.3 seconds • Converted</div>
              </div>
            </div>
            <div className="bg-gray-800 p-3 rounded mb-4">
              <div className="flex justify-between text-xs">
                <span>Response Time:</span>
                <span className="text-green-400">2.3s</span>
              </div>
              <div className="text-xs text-gray-400">Faster than any competitor</div>
            </div>
            <div className="text-xs">
              <div className="flex justify-between mb-1">
                <span>Premium Emergency Service</span>
                <span className="text-green-400">$2,200 quoted</span>
              </div>
              <div className="text-gray-400">Heating system failure during weekend. Customer needed immediate response. AuraOS qualified urgency, confirmed premium pricing, and scheduled emergency service.</div>
              <div className="flex justify-between mt-2 text-xs">
                <span>Customer David Chen</span>
                <span className="text-green-400">Booked Same night</span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: "⚡", title: "Instant competitive edge", desc: "Answer in seconds while competitors miss calls for hours or days." },
            { icon: "💰", title: "Premium pricing power", desc: "After-hours urgency allows 300% higher pricing when you respond instantly." },
            { icon: "🌐", title: "24/7 market dominance", desc: "Own the after-hours market when competitors are unreachable." }
          ].map((item, index) => (
            <div key={index} className="border border-gray-700 p-6 rounded-xl hover:border-blue-500 transition">
              <div className="text-2xl mb-3">{item.icon}</div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Dramatic Difference Section */}
      <section className="py-12 px-6">
        <div className="text-center mb-10">
          <div className="inline-block bg-gray-800 text-xs px-3 py-1 rounded-full mb-4">BEFORE VS AFTER</div>
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            The Dramatic Difference <br /> In Lead Conversion Speed
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 mb-6">
            See exactly why speed matters. While your competitors take days to connect with prospects, AuraOS converts them in minutes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-gray-700 p-6 rounded-xl">
            <div className="text-center mb-4">
              <div className="text-4xl mb-2">🕒</div>
              <h3 className="text-2xl font-bold">Manual Process</h3>
              <p className="text-sm text-gray-400">The traditional way most businesses handle leads</p>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span>Lead submits form</span>
                <span>0 min</span>
              </div>
              <div className="flex justify-between">
                <span>Wait for business hours</span>
                <span>2-8 hours</span>
              </div>
              <div className="flex justify-between">
                <span>Staff member calls back</span>
                <span>+15 min</span>
              </div>
              <div className="flex justify-between">
                <span>Voice mail tag (87% of calls)</span>
                <span>+indefinite</span>
              </div>
              <div className="flex justify-between">
                <span>Multiple follow-up attempts</span>
                <span>+days</span>
              </div>
              <div className="flex justify-between">
                <span>Lead books (if still interested)</span>
                <span>3-7 days</span>
              </div>
            </div>
            <div className="mt-4 p-3 bg-red-900 rounded">
              <div className="text-sm font-semibold text-red-400">Conversion Rate: 12-18%</div>
              <div className="text-xs text-gray-400">Average time to booking: 3-7 days</div>
            </div>
          </div>
          <div className="border border-gray-700 p-6 rounded-xl">
            <div className="text-center mb-4">
              <div className="text-4xl mb-2">🤖</div>
              <h3 className="text-2xl font-bold">AuraOS Process</h3>
              <p className="text-sm text-gray-400">Intelligent automation that never misses</p>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span>Lead submits form</span>
                <span>0 min</span>
              </div>
              <div className="flex justify-between">
                <span>AuraOS instantly responds</span>
                <span>+30 seconds</span>
              </div>
              <div className="flex justify-between">
                <span>AI qualifies prospect</span>
                <span>+1 min</span>
              </div>
              <div className="flex justify-between">
                <span>Calendar link provided</span>
                <span>+30 seconds</span>
              </div>
              <div className="flex justify-between">
                <span>Prospect books immediately</span>
                <span>+1 min</span>
              </div>
              <div className="flex justify-between">
                <span>Confirmed in your CRM</span>
                <span>+instant</span>
              </div>
            </div>
            <div className="mt-4 p-3 bg-green-900 rounded">
              <div className="text-sm font-semibold text-green-400">Conversion Rate: 67-84%</div>
              <div className="text-xs text-gray-400">Average time to booking: 3 minutes</div>
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Impact Section */}
      <section className="py-12 px-6 bg-gray-900">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">The Revenue Impact</h2>
          <p className="max-w-2xl mx-auto text-gray-300 mb-6">
            Speed isn't just convenience—it's the difference between closing deals and losing them to competitors.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            { value: "4.2x", label: "Higher conversion rate" },
            { value: "2,880x", label: "Faster response time" },
            { value: "100%", label: "Leads captured 24/7" }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">{item.value}</div>
              <div className="text-sm text-gray-400">{item.label}</div>
            </div>
          ))}
        </div>
        <div className="bg-gray-800 p-6 rounded-xl max-w-2xl mx-auto">
          <div className="text-center mb-4">
            <div className="text-2xl mb-2">📊</div>
            <h3 className="font-semibold">Research-Backed Results</h3>
          </div>
          <p className="text-center text-sm mb-4">
            <span className="text-purple-400">Studies show</span> that prospects are <span className="text-blue-400">21x more likely</span> to convert when contacted <span className="text-green-400">within 5 minutes</span> vs. 30 minutes later.
          </p>
          <div className="text-xs text-gray-500 text-center">Source: Harvard Business Review Lead Response Management Study</div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-12 px-6">
        <div className="text-center mb-10">
          <div className="inline-block bg-gray-800 text-xs px-3 py-1 rounded-full mb-4">REVENUE PROJECTOR</div>
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Calculate Your <br /> Revenue Growth Potential
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 mb-6">
            Input your business metrics to discover exactly how much additional revenue AuraOS can generate through improved response times and booking rates.
          </p>
        </div>
        <div className="max-w-4xl mx-auto bg-gray-900 p-6 rounded-xl">
          <div className="flex items-center mb-6">
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-4">1</div>
            <div>
              <h3 className="font-semibold">Business Basics</h3>
              <div className="text-sm text-gray-400">Step 1 of 4</div>
            </div>
          </div>
          <div className="mb-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-2">Average Deal Size</label>
                <input type="number" defaultValue="25000" className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white" />
                <p className="text-xs text-gray-400 mt-1">What's the typical value of each client contract?</p>
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium mb-2">Monthly Inquiries</label>
                <input type="number" defaultValue="50" className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white" />
                <p className="text-xs text-gray-400 mt-1">How many potential clients reach out each month?</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 p-4 rounded mb-6">
            <div className="flex items-center mb-2">
              <span className="text-xs bg-blue-600 px-2 py-1 rounded mr-2">💡</span>
              <span className="text-sm font-medium">Quick Estimate</span>
            </div>
            <p className="text-xs text-gray-400">
              With 50 monthly inquiries at $25,000 per deal, your business has significant growth potential. Let's see how AuraOS can help you capture more of it.
            </p>
          </div>
          <div className="flex justify-between">
            <button className="border border-gray-600 px-4 py-2 rounded hover:bg-gray-800 transition">← Previous</button>
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 px-4 py-2 rounded hover:shadow-lg transition">Continue →</button>
          </div>
        </div>
      </section>

      {/* Speed Premium Section */}
      <section className="py-12 px-6 bg-gray-900">
        <div className="text-center mb-10">
          <div className="inline-block bg-gray-800 text-xs px-3 py-1 rounded-full mb-4">SPEED-TO-LEAD ROI</div>
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            The Speed Premium <br /> Real Numbers, Real Results
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 mb-6">
            When you respond in 2.3 seconds instead of hours, everything changes—especially your revenue.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { icon: "⚡", value: "1.9s", label: "Average Response Time", desc: "Faster than any human could ever achieve" },
            { icon: "📈", value: "1,746%", label: "Speed Improvement", desc: "From 6+ hours to 2.3 seconds response time" },
            { icon: "💰", value: "704%", label: "ROI on Speed", desc: "Return on investment within 90 days" },
            { icon: "$", value: "$106K", label: "Monthly Recovery", desc: "Previously lost revenue from slow response" }
          ].map((item, index) => (
            <div key={index} className="border border-gray-700 p-6 rounded-xl hover:border-green-500 transition">
              <div className="text-2xl mb-3">{item.icon}</div>
              <div className="text-2xl font-bold text-green-400 mb-2">{item.value}</div>
              <h3 className="font-semibold mb-2">{item.label}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-gray-800 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-4">Speed Multiplier Effects</h3>
          <p className="text-sm mb-4">How instant response amplifies every metric that matters</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2 text-red-400">Business Hours (Slow Response)</h4>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>Response Time:</span>
                  <span className="text-red-400">6+ hours</span>
                </div>
                <div className="flex justify-between">
                  <span>Conversion Rate:</span>
                  <span className="text-red-400">14%</span>
                </div>
                <div className="flex justify-between">
                  <span>Premium Pricing:</span>
                  <span className="text-red-400">Standard</span>
                </div>
                <div className="flex justify-between">
                  <span>Weekend Success:</span>
                  <span className="text-red-400">0%</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-green-400">24/7 Instant Response (AuraOS)</h4>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>Response Time:</span>
                  <span className="text-green-400">2.3 seconds</span>
                </div>
                <div className="flex justify-between">
                  <span>Conversion Rate:</span>
                  <span className="text-green-400">67%</span>
                </div>
                <div className="flex justify-between">
                  <span>Premium Pricing:</span>
                  <span className="text-green-400">+30%</span>
                </div>
                <div className="flex justify-between">
                  <span>Weekend Success:</span>
                  <span className="text-green-400">94%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 p-4 bg-green-900 rounded">
            <div className="text-2xl font-bold text-green-400">$371K</div>
            <div className="text-sm text-gray-400">Additional annual revenue from speed advantage</div>
          </div>
        </div>
      </section>

      {/* Speed Advantage Quote */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto bg-gray-900 p-6 rounded-xl">
          <div className="text-center mb-4">
            <div className="text-2xl mb-2">💬</div>
            <h3 className="text-xl font-semibold mb-2">The Speed Advantage</h3>
          </div>
          <blockquote className="text-center text-lg italic mb-4">
            "Speed-to-lead was our biggest weakness. Now, it's our biggest competitive advantage. We close deals while competitors are still checking their voice mail from yesterday."
          </blockquote>
          <div className="text-center text-sm">
            <div className="font-semibold">Marcus Rodriguez</div>
            <div className="text-gray-400">CEO, Elite HVAC Solutions</div>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-sm mb-2">Ready to turn speed into your competitive advantage?</p>
          <p className="text-sm text-green-400">Here's exactly how we make it happen...</p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 px-6 bg-gray-900">
        <div className="text-center mb-10">
          <div className="inline-block bg-gray-800 text-xs px-3 py-1 rounded-full mb-4">HOW IT WORKS</div>
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Simple Process <br /> Powerful Results
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 mb-6">
            Three simple steps to transform your business—zero technical work required.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            { step: "1", icon: "🧠", title: "We Learn Your Business", desc: "Our team analyzes your needs and designs your custom solution. Driving call, CRM integration, planning, custom AI training" },
            { step: "2", icon: "⚙️", title: "We Set Up Everything", desc: "Complete implementation with zero work required from you. Technical setup, system integration, testing and optimization" },
            { step: "3", icon: "👁️", title: "You See Results in 24 Hours", desc: "Start getting qualified meetings booked automatically. Live monitoring, performance tracking, ongoing optimization" }
          ].map((item, index) => (
            <div key={index} className="border border-gray-700 p-6 rounded-xl hover:border-purple-500 transition">
              <div className="text-2xl mb-3">{item.icon}</div>
              <div className="flex items-center mb-2">
                <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2 text-sm">Step {item.step}</div>
                <h3 className="font-semibold">{item.title}</h3>
              </div>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-gray-800 p-6 rounded-xl">
          <h3 className="font-semibold mb-2">White-Glove Implementation Promise</h3>
          <p className="text-sm text-gray-400 mb-4">
            We handle 100% of the technical setup. You focus on what you do best while we ensure your new revenue system works flawlessly from day one.
          </p>
          <p className="text-sm text-green-400">
            Simple process, enterprise-grade security. Your data and reputation are always protected.
          </p>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-12 px-6">
        <div className="text-center mb-10">
          <div className="inline-block bg-gray-800 text-xs px-3 py-1 rounded-full mb-4">ENTERPRISE TRUST</div>
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Security That <br /> Protects
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 mb-6">
            Built for the most security-conscious enterprises worldwide.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            { icon: "🔒", title: "Enterprise Security", desc: "SOC 2 Type II certified with bank-level encryption" },
            { icon: "✅", title: "Compliance Ready", desc: "TCPA, GDPR, and HIPAA compliant by design" },
            { icon: "🛡️", title: "Data Protection", desc: "Zero-knowledge architecture with end-to-end encryption" }
          ].map((item, index) => (
            <div key={index} className="border border-gray-700 p-6 rounded-xl hover:border-blue-500 transition">
              <div className="text-2xl mb-3">{item.icon}</div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <div className="inline-flex items-center bg-gray-800 px-4 py-2 rounded-full text-sm mb-2">
            <span className="text-green-400 mr-2">✅</span> Trusted by Fortune 500 Companies
          </div>
          <p className="text-sm text-gray-400">
            Where security matters most, industries choose AuraOS for mission-critical customer communications.
          </p>
        </div>
      </section>

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
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

      {/* FAQ Section */}
      <section className="py-12 px-6">
        <div className="text-center mb-10">
          <div className="inline-block bg-gray-800 text-xs px-3 py-1 rounded-full mb-4">QUESTIONS ANSWERED</div>
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Everything You Need <br /> To Know About AuraOS
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 mb-6">
            Get clear answers about implementation, multi-touch follow-up, compliance, and expected results from our AI-powered automation platform.
          </p>
        </div>
        <div className="max-w-4xl mx-auto space-y-4">
          {[
            "How does the multi-touch follow-up system work?",
            "How fast can I go live with AuraOS?",
            "What about follow-up frequency - won't prospects get annoyed?",
            "Does it comply with TCPA and other regulations?",
            "How does AuraOS integrate with my existing CRM and calendar?",
            "Can I customize the follow-up messages and timing?",
            "What if prospects prefer to speak with a human?",
            "How accurate is the AI qualification?",
            "What languages and accents are supported?",
            "What's the setup cost and monthly investment?",
            "Can I customize the AI voice and tone?",
            "What happens to leads that come in after hours?",
            "How do I know AuraOS is working and generating ROI?",
            "How do I track the ROI from follow-up campaigns?",
            "Still Have Questions?"
          ].map((question, index) => (
            <div key={index} className="border border-gray-700 p-4 rounded-lg hover:bg-gray-900 transition">
              <div className="flex justify-between items-center cursor-pointer">
                <span className="font-medium">{question}</span>
                <span className="text-gray-400">▼</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm mb-2">Need more information? Our team provides comprehensive onboarding and ongoing support to ensure your success with AuraOS.</p>
          <p className="text-sm text-blue-400">Personalized answers to your specific business needs.</p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 px-6 bg-gray-900">
        <div className="text-center mb-10">
          <div className="inline-block bg-gray-800 text-xs px-3 py-1 rounded-full mb-4">LIMITED TO 12 IMPLEMENTATIONS MONTHLY</div>
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Stop Losing Revenue <br /> To Faster Competitors
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 mb-6">
            Every day you delay costs you $1,247 in lost opportunities. Join industry leaders who have turned speed into their biggest competitive advantage.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="border border-gray-700 p-6 rounded-xl">
            <div className="text-center mb-4">
              <div className="text-2xl mb-2">🔁</div>
              <h3 className="text-xl font-semibold">Even Full Refund Guarantee</h3>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              If we don't recover our cost in leads within 60 days, full refund - no questions asked.
            </p>
            <p className="text-xs text-gray-500">
              Average client sees first reactivated lead within 7 days
            </p>
          </div>
          <div className="border border-gray-700 p-6 rounded-xl">
            <div className="text-center mb-4">
              <div className="text-2xl mb-2">🚀</div>
              <h3 className="text-xl font-semibold">Immediate Production</h3>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Complete setup and first leads captured within 24 hours of approval.
            </p>
            <p className="text-xs text-gray-500">
              Zero technical work required from your team
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-gradient-to-r from-purple-500 to-blue-600 px-6 py-3 rounded-full font-medium hover:shadow-lg transition">
            See Your Hidden Revenue
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <img src="https://via.placeholder.com/150x30?text=Wave+Runner+Digital" alt="Wave Runner Digital" className="h-8 mb-4" />
            <p className="text-sm text-gray-400 mb-4">
              Transforming voice platforms delivers consistent booking rates and complete analytics visibility.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <div>hello@waverunner.digital</div>
              <div>Contact Us</div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <div>Terms of Service</div>
              <div>Privacy Policy</div>
              <div>Cookie Preferences</div>
            </div>
          </div>
        </div>
        <div className="pt-4 border-t border-gray-800 text-xs text-gray-500 text-center">
          © 2024 Wave Runner Media LLC. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default AuraOSLandingPage;