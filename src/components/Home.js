import React from 'react';
import Logo from '../Images/Logo.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-black text-white" style={{ backgroundColor: 'rgba(4, 1, 14, 0.9)' }}>
 
      
      {/* Hero Section */}
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
            <div className="bg-black/50 rounded-xl p-6 border border-gray-700 shadow-lg">
              <div className="flex items-center mb-4">
                <img src="https://via.placeholder.com/32" alt="eBay" className="w-8 h-8 rounded" />
                <div className="ml-3">
                  <span className="font-semibold">eBay</span>
                  <span className="text-sm text-gray-400 ml-2">4 of 4 Test results ready</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-800 rounded">
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 bg-gray-600 rounded flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2v4l2 2h4l2-2v-4h2a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 002-2h2a2 2 0 002 2m-6 9l2 2 4-4" />
                      </svg>
                    </div>
                    <span>Optimal F1 and precision</span>
                  </div>
                  <span className="text-green-500 text-sm font-medium px-2 py-1 bg-green-900/30 rounded">Passing</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-800 rounded">
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 bg-gray-600 rounded flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.8-8h4.8l-.4-1.6A9.863 9.863 0 0112 12zm0 0a9.863 9.863 0 01-4.8-8h4.8l-.4-1.6A9.863 9.863 0 0112 12z" />
                      </svg>
                    </div>
                    <span>LLM accurately summarizes context</span>
                  </div>
                  <span className="text-green-500 text-sm font-medium px-2 py-1 bg-green-900/30 rounded">Passing</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-800 rounded">
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 bg-gray-600 rounded flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9M5 11V9m2 2a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H7a2 2 0 01-2-2v-6z" />
                      </svg>
                    </div>
                    <span>Prevent fake product prompts</span>
                  </div>
                  <span className="text-green-500 text-sm font-medium px-2 py-1 bg-green-900/30 rounded">Passing</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-800 rounded">
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 bg-gray-600 rounded flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8v6h-8v-6z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 13h8v6h-8v-6z" />
                      </svg>
                    </div>
                    <span>P99 latency  {'<'} 5000ms</span>
                  </div>
                  <span className="text-green-500 text-sm font-medium px-2 py-1 bg-green-900/30 rounded">Passing</span>
                </div>
              </div>
              
              {/* Stats */}
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-700">
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
        
    
      </section>
      
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
      
      {/* Second Section */}
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
            <div className="bg-black/50 rounded-xl p-6 border border-gray-700 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-400">Environment</span>
                  <span className="bg-yellow-800 text-yellow-200 text-xs px-2 py-1 rounded">Development</span>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                <img src="https://via.placeholder.com/32" alt="Hurb" className="w-8 h-8 rounded" />
                <div className="ml-3">
                  <span className="font-semibold">Hurb</span>
                  <span className="text-sm text-gray-400 ml-2">4 of 4 Test results ready</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-800 rounded">
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 bg-gray-600 rounded flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 6v.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2h2a2 2 0 002-2zm0 0V9M9 9M9 9l6 6M9 9l6-6m6 6a2 2 0 012 2v6a2 2 0 01-2 2h-2a2 2 0 01-2-2v-6a2 2 0 012-2h2z" />
                      </svg>
                    </div>
                    <span>Outputs do not contain PII</span>
                  </div>
                  <span className="text-green-500 text-sm font-medium px-2 py-1 bg-green-900/30 rounded">Passing</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-800 rounded">
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 bg-gray-600 rounded flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9M9 9M9 9l6 6M9 9l6-6m6 6a2 2 0 012 2v6a2 2 0 01-2 2h-2a2 2 0 01-2-2v-6a2 2 0 012-2h2z" />
                      </svg>
                    </div>
                    <span>Surface diverse recommendations</span>
                  </div>
                  <span className="text-red-500 text-sm font-medium px-2 py-1 bg-red-900/30 rounded">Failing</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-800 rounded">
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 bg-gray-600 rounded flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2h3.28a1 1 0 01.806.57l1.954 4.276a1 1 0 01-.806.806L7.28 10H4a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9M9 9M9 9l6 6M9 9l6-6m6 6a2 2 0 012 2v6a2 2 0 01-2 2h-2a2 2 0 01-2-2v-6a2 2 0 012-2h2z" />
                      </svg>
                    </div>
                    <span>Time-to-first-token  {'<'} 100ms</span>
                  </div>
                  <span className="text-red-500 text-sm font-medium px-2 py-1 bg-red-900/30 rounded">Failing</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-800 rounded">
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 bg-gray-600 rounded flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.806.57l1.954 4.276a1 1 0 01-.806.806L7.28 10H4a2 2 0 01-2-2V5zM3 10a2 2 0 012-2h3.28a1 1 0 01.806.57l1.954 4.276a1 1 0 01-.806.806L7.28 15H4a2 2 0 01-2-2V10zM3 15a2 2 0 012-2h3.28a1 1 0 01.806.57l1.954 4.276a1 1 0 01-.806.806L7.28 20H4a2 2 0 01-2-2v-5z" />
                      </svg>
                    </div>
                    <span>Ensure answers in PT-BR</span>
                  </div>
                  <span className="text-green-500 text-sm font-medium px-2 py-1 bg-green-900/30 rounded">Passing</span>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </section>

      {/* Third Section: Monitor Production Requests */}
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
            <div className="bg-black/50 rounded-xl p-6 border border-gray-700 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-400">Environment</span>
                  <span className="bg-green-800 text-green-200 text-xs px-2 py-1 rounded">Production</span>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                <img src="https://via.placeholder.com/32" alt="Cutshort" className="w-8 h-8 rounded" />
                <div className="ml-3">
                  <span className="font-semibold">Cutshort</span>
                  <span className="text-sm text-gray-400 ml-2">4 of 4 Test results ready</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-800 rounded">
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 bg-gray-600 rounded flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 6v.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2h2a2 2 0 002-2zm0 0V9M9 9M9 9l6 6M9 9l6-6m6 6a2 2 0 012 2v6a2 2 0 01-2 2h-2a2 2 0 01-2-2v-6a2 2 0 012-2h2z" />
                      </svg>
                    </div>
                    <span>Context precision > 0.9</span>
                  </div>
                  <span className="text-green-500 text-sm font-medium px-2 py-1 bg-green-900/30 rounded">Passing</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-800 rounded">
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 bg-gray-600 rounded flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9M5 11V9m2 2a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H7a2 2 0 01-2-2v-6z" />
                      </svg>
                    </div>
                    <span>Outputs are in JSON</span>
                  </div>
                  <span className="text-green-500 text-sm font-medium px-2 py-1 bg-green-900/30 rounded">Passing</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-800 rounded">
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 bg-gray-600 rounded flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9M9 9M9 9l6 6M9 9l6-6m6 6a2 2 0 012 2v6a2 2 0 01-2 2h-2a2 2 0 01-2-2v-6a2 2 0 012-2h2z" />
                      </svg>
                    </div>
                    <span>LLM score avoids discrimination</span>
                  </div>
                  <span className="text-green-500 text-sm font-medium px-2 py-1 bg-green-900/30 rounded">Passing</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-800 rounded">
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 bg-gray-600 rounded flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8v6h-8v-6z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 13h8v6h-8v-6z" />
                      </svg>
                    </div>
                    <span>Average latency {"<"} 0.5s</span>
                  </div>
                  <span className="text-green-500 text-sm font-medium px-2 py-1 bg-green-900/30 rounded">Passing</span>
                </div>
              </div>
              
              {/* Real-time status */}
              <div className="mt-6 pt-4 border-t border-gray-700 flex items-center">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Cutshort receiving real-time requests</span>
                </div>
              </div>
            </div>
            
            {/* Timeline indicator dots below card */}
            <div className="flex justify-center mt-6 space-x-3">
              {[1,2,3,4,5].map((i) => (
                <div key={i} className="w-4 h-4 bg-gray-700 rounded border border-gray-500"></div>
              ))}
            </div>
          </div>
        </div>
        
      </section>
      
      {/* Fourth Section: Automated Checks for Data Quality */}
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
            <div className="bg-black/50 rounded-xl p-6 border border-gray-700 shadow-lg">
              <div className="relative">
                {/* Central Icon */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m-2 6h-2M5 5h14v14H5z" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Floating Icons Around Center */}
                <div className="flex justify-around items-center h-40 relative">
                  {/* Left Icons */}
                  <div className="flex flex-col items-center space-y-4">
                    <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9M5 11V9m2 2a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H7a2 2 0 01-2-2v-6z" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Right Icons */}
                  <div className="flex flex-col items-center space-y-4">
                    <div className="w-12 h-12 bg-purple-800 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9M9 9M9 9l6 6M9 9l6-6m6 6a2 2 0 012 2v6a2 2 0 01-2 2h-2a2 2 0 01-2-2v-6a2 2 0 012-2h2z" />
                      </svg>
                    </div>
                    <div className="w-12 h-12 bg-purple-800 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9M5 11V9m2 2a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H7a2 2 0 01-2-2v-6z" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Status indicators */}
                <div className="mt-8 pt-4 border-t border-gray-700 flex flex-col space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Schema changes ✓</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Drift ✓</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Anomalies ✓</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
     
      </section>

      {/* Fifth Section: Effortless Governance */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
        
          {/* Cards Grid - Below Header */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1: Activity Log */}
            <div className="bg-black/50 rounded-xl p-6 border border-gray-700 shadow-lg">
              <div className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2v4l2 2h4l2-2v-4h2a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 002-2h2a2 2 0 002 2m-6 9l2 2 4-4" />
                </svg>
                <span className="font-semibold">Activity log</span>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.456 9.118 5 7.5 5S4.168 5.456 3 6.253v13C4.168 18.456 5.882 18 7.5 18s3.332.456 4.5 1.253m0-13C13.168 5.456 14.882 5 16.5 5c1.618 0 3.332.456 4.5 1.253v13C19.832 18.456 18.118 18 16.5 18c-1.618 0-3.332.456-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">Test created</span>
                      <span className="text-xs text-gray-400">a week ago</span>
                    </div>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="font-medium">Commented</span>
                      <span className="text-xs text-gray-400">30 min ago</span>
                    </div>
                  </div>
                </div>
                
                <div className="ml-11 pl-4 border-l border-gray-600">
                  <div className="text-gray-300">@caleb should we revert the latest changes?</div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.8-8h4.8l-.4-1.6A9.863 9.863 0 0112 12zm0 0a9.863 9.863 0 01-4.8-8h4.8l-.4-1.6A9.863 9.863 0 0112 12z" />
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">Commented</span>
                      <span className="text-xs text-gray-400">30 min ago</span>
                    </div>
                  </div>
                </div>
                
                <div className="ml-11 pl-4 border-l border-gray-600">
                  <div className="text-gray-300">This was expected @ava — please take a look</div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.8-8h4.8l-.4-1.6A9.863 9.863 0 0112 12zm0 0a9.863 9.863 0 01-4.8-8h4.8l-.4-1.6A9.863 9.863 0 0112 12z" />
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">Commented</span>
                      <span className="text-xs text-gray-400">3 min ago</span>
                    </div>
                  </div>
                </div>
                
                <div className="ml-11 pl-4 border-l border-gray-600">
                  <div className="text-gray-300">Understood — I reviewed the underlying rows and looks like we’re all clear</div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.456 9.118 5 7.5 5S4.168 5.456 3 6.253v13C4.168 18.456 5.882 18 7.5 18s3.332.456 4.5 1.253m0-13C13.168 5.456 14.882 5 16.5 5c1.618 0 3.332.456 4.5 1.253v13C19.832 18.456 18.118 18 16.5 18c-1.618 0-3.332.456-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">Test created</span>
                      <span className="text-xs text-gray-400">a week ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Graph */}
            <div className="bg-black/50 rounded-xl p-6 border border-gray-700 shadow-lg">
              <div className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18v2h-2M3 20h18v2h-2M3 4h18v2h-2" />
                </svg>
                <span className="font-semibold">Outputs relevant to user question</span>
              </div>
              
              <div className="mb-4">
                <div className="grid grid-cols-4 gap-4 text-sm text-gray-400">
                  <div><strong>Threshold</strong><br/>Answer relevancy > 0.95</div>
                  <div><strong>Evaluation window</strong><br/>24h</div>
                  <div><strong>Status</strong><br/><span className="text-green-500 inline-flex items-center"><span className="w-3 h-3 bg-green-500 rounded-full mr-1"></span> Passing</span></div>
                  <div><strong>Result</strong><br/><span className="text-green-500">0.98</span></div>
                </div>
              </div>
              
              {/* Simple Line Graph */}
              <div className="h-32 bg-gray-800 rounded relative">
                <div className="absolute top-1/2 left-0 right-0 h-px bg-green-500/30"></div>
                <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
                  <polyline 
                    fill="none" 
                    stroke="#8B5CF6" 
                    strokeWidth="2"
                    points="0,80 50,60 100,70 150,50 200,65 250,45 300,55 350,35 400,40"
                  />
                </svg>
                <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-400 px-2">
                  <span>10:32 AM</span>
                  <span>3:20 PM</span>
                  <span>8:08 PM</span>
                  <span>12:58 AM</span>
                  <span>5:44 AM</span>
                  <span>10:32 AM</span>
                </div>
              </div>
            </div>

            {/* Card 3: Deployment Status */}
            <div className="bg-black/50 rounded-xl p-6 border border-gray-700 shadow-lg">
              <div className="flex items-center space-x-3">
                <img src="https://via.placeholder.com/24" alt="Openlayer" className="w-6 h-6 rounded" />
                <div>
                  <div className="font-semibold">Openlayer</div>
                  <div className="text-sm text-gray-300">Deployment status changed to</div>
                  <div className="text-sm text-green-500 flex items-center">
                    <span className="w-3 h-3 bg-green-500 rounded-full mr-1"></span>
                    Ready to deploy for Cutshort
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

       
      </section>

      {/* Sixth Section: Designed for Builders */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          {/* Header - Centered */}
          <div className="max-w-xl mx-auto text-center mb-12">
            <div className="text-sm text-purple-400 uppercase">Platform</div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-2">
              Designed for builders
            </h2>
            <p className="text-gray-300 text-lg mt-6">
              Openlayer fits into your workflow without friction, allowing you to focus on what matters most: crafting high-quality systems with AI.
            </p>
          </div>

          {/* Feature Cards Grid - Below Header */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: Tests for any scenario */}
            <div className="bg-black/50 rounded-xl p-6 border border-gray-700 shadow-lg">
              <div className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2v4l2 2h4l2-2v-4h2a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 002-2h2a2 2 0 002 2m-6 9l2 2 4-4" />
                </svg>
                <span className="font-semibold">Tests for any scenario</span>
              </div>
              <p className="text-gray-300 text-sm">
                Openlayer offers an expansive set of customizable tests to help you make systematic progress and avoid regressions.
              </p>
            </div>
            
            {/* Card 2: Observability */}
            <div className="bg-black/50 rounded-xl p-6 border border-gray-700 shadow-lg">
              <div className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2v4l2 2h4l2-2v-4h2a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 002-2h2a2 2 0 002 2m-6 9l2 2 4-4" />
                </svg>
                <span className="font-semibold">Observability</span>
              </div>
              <p className="text-gray-300 text-sm">
                Trace and track all your system’s requests in real-time, annotate these requests with human feedback for better insights and run tests on live data to ensure robustness and reliability.
              </p>
            </div>
            
            {/* Card 3: API & CLI */}
            <div className="bg-black/50 rounded-xl p-6 border border-gray-700 shadow-lg">
              <div className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 16l4-16m-8 8h8M6 8h8v8H6z" />
                </svg>
                <span className="font-semibold">Your favorite tools</span>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Openlayer integrates with Git, has SDKs in your favorite programming languages, and works out of the box for every LLM provider. Fully customizable via a CLI and REST API, Openlayer fits any workflow seamlessly.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-700 rounded text-xs">REST APIs</span>
                <span className="px-3 py-1 bg-gray-700 rounded text-xs">CLI</span>
                <span className="px-3 py-1 bg-gray-700 rounded text-xs">Git</span>
                <span className="px-3 py-1 bg-gray-700 rounded text-xs">SDKs</span>
                <span className="px-3 py-1 bg-gray-700 rounded text-xs">Integrations</span>
              </div>
            </div>
            
            {/* Card 4: Collaboration */}
            <div className="bg-black/50 rounded-xl p-6 border border-gray-700 shadow-lg">
              <div className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h-2v-2a6 6 0 00-5.356-5.356L9 9H7v2H4v10h13v-2zM7 19h6v-2a3 3 0 005.356-2.356L15 12H9z" />
                </svg>
                <span className="font-semibold">Collaboration</span>
              </div>
              <p className="text-gray-300 text-sm">
                Collaborate effortlessly with your team in a shared workspace. Assign roles, define tests, and debug issues together, ensuring all stakeholders are aligned.
              </p>
            </div>
          </div>
        </div>

   
      </section>
      {/* Seventh Section: Testimonials */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          {/* Header */}
          <div className="max-w-xl mx-auto text-center mb-12">
            <p className="text-gray-300 text-lg">
              and seamless integration.
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

      {/* Eighth Section: Openlayer in Action */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          {/* Header */}
          <div className="max-w-xl mx-auto text-center mb-12">
            <div className="text-sm text-purple-400 uppercase">Impact</div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-2">
              Openlayer in action
            </h2>
            <p className="text-gray-300 text-lg mt-6">
              See how Openlayer helps teams across different industries ship AI with confidence.
            </p>
          </div>

          {/* Industry Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['Cybersecurity', 'Travel & tourism', 'E-commerce', 'Property management', 'Automation'].map((item, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  item === 'Cybersecurity'
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Case Study Card */}
          <div className="bg-black/50 rounded-xl p-6 border border-gray-700 shadow-lg relative overflow-hidden">
            {/* Top Bar */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-purple-600 rounded flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2v4l2 2h4l2-2v-4h2a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 002-2h2a2 2 0 002 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <span className="text-sm">Tests Jericho created</span>
                <a href="#" className="text-purple-400 text-xs ml-2">View site {'>'}</a>
              </div>
              <div className="text-sm text-gray-400">1 of 3</div>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Card - Phishing Test */}
              <div className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.456 9.118 5 7.5 5S4.168 5.456 3 6.253v13C4.168 18.456 5.882 18 7.5 18s3.332.456 4.5 1.253m0-13C13.168 5.456 14.882 5 16.5 5c1.618 0 3.332.456 4.5 1.253v13C19.832 18.456 18.118 18 16.5 18c-1.618 0-3.332.456-4.5 1.253" />
                      </svg>
                    </div>
                    <span className="font-semibold">Phishing message hides AI source</span>
                  </div>
                  <span className="text-green-500 text-xs font-medium px-2 py-1 bg-green-900/30 rounded">Passing</span>
                </div>
                
                <div className="mb-4">
                  <div className="text-xs text-gray-400 mb-1">Environments:</div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-300">Development</span>
                    <span className="text-xs text-gray-300">Production</span>
                  </div>
                </div>
                
                <div className="text-sm text-gray-300">
                  <strong>Objective:</strong> ensure that phishing messages do not disclose they are generated by AI, maintaining authenticity, effectiveness, and user deception.
                </div>
              </div>

              {/* Right Card - LinkedIn Message */}
              <div className="bg-gray-800 rounded-xl p-4">
                <div className="bg-purple-600 text-white px-4 py-2 rounded-t-xl">
                  <div className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m-2 13a2 2 0 01-2-2V7m-2 13a2 2 0 01-2-2V7m-2 13a2 2 0 01-2-2V7m-2 13a2 2 0 01-2-2V7" />
                    </svg>
                    <span>Let's connect on LinkedIn</span>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <img src="https://via.placeholder.com/40" alt="Gavin Di Luca" className="w-10 h-10 rounded-full" />
                    <div>
                      <div className="font-semibold">Gavin Di Luca</div>
                      <div className="text-xs text-gray-400">gavin@talentbridge.com</div>
                    </div>
                  </div>
                  
                  <div className="text-sm text-gray-300 space-y-2">
                    <p>Hey Jo, how are you doing?</p>
                    <p>I'm the head of engineering at TalentBridge, and I'm looking to bring cybersecurity experts to our team. TalentBridge is a startup that helps businesses protect themselves easily when they launch their business online.</p>
                    <p>Your position at Good Org grabbed my interest.</p>
                    <p>If this interests you, here is the job description.</p>
                    <p>Let me know if you'd like to schedule some time to discuss the position.</p>
                    <p>Have a great day!</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Metrics */}
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400">78%</div>
                <div className="text-sm text-gray-400 mt-1">Revenue</div>
                <div className="text-xs text-gray-500 mt-1">We observed a sharp increase</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400">6x</div>
                <div className="text-sm text-gray-400 mt-1">Deployment frequency</div>
                <div className="text-xs text-gray-500 mt-1">We saw a 6x increase in</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ninth Section: Templates */}
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

      {/* Tenth Section: Final CTA */}
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

 {/* Footer */}
 <footer className="border-t border-gray-100 px-6 py-12">
  <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-8">
  <div>
   <div className=" font-bold text-xl mb-6">
      <Link to="/" className="flex items-center">
                       <img 
                          src= {Logo}
                          alt="Openlayer" 
                          className="h-16 w-auto"
                        />
                      </Link>
            </div>
           
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-xs text-gray-600">All systems operational</span>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-600 hover:text-purple-600">LLM observability</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-purple-600">LLM evaluation</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-purple-600">ML observability</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-purple-600">ML evaluation</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-purple-600">Data quality monitoring</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-purple-600">AI governance & compliance</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-purple-600">Other products</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-600 hover:text-purple-600">Blog</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-purple-600">Changelog</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-purple-600">Customers</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-purple-600">Glossary</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-purple-600">Pricing</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-purple-600">Discord</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-purple-600">Request demo</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Documentation</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-600 hover:text-purple-600">Getting started</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-purple-600">API reference</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-purple-600">SDKs</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-purple-600">CLI</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-purple-600">Integrations</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-purple-600">Templates</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-600 hover:text-purple-600">About us</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-purple-600">Manifesto</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-purple-600">Careers</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-purple-600">Security</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-purple-600">Terms of service</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-purple-600">Privacy policy</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-purple-600">Cookie policy</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-purple-600">Responsible disclosure</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;