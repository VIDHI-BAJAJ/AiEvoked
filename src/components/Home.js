import React from 'react';

const Home = () => {
  return (
      <div className="bg-white font-sans">
      {/* Hero Section */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-r from-purple-50 to-indigo-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Turn More Leads into Booked Calls & Closed Deals—Automatically
            </h1>
            <p className="text-lg text-gray-700 mb-8">
             Automate+ (ops & revenue), SalesPilot (AI sales Autopilot), and Custom
Automations (enterprise). Save 40+ hours/week, reply to 90% of leads in 2 min, ship
proposals in hours.
            </p>
            <div className = "flex flex-row">
               <button className="bg-purple-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-purple-700 transition">
             Book a 15-min teardown
            </button>
            <button className="bg-purple-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-purple-700 transition ml-10">
             See live demo
            </button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <img src="https://via.placeholder.com/20" alt="eBay" className="w-5 h-5" />
                  <span className="text-sm font-medium">eBay</span>
                </div>
                <div className="text-xs text-gray-500">4 of 4 Test results ready</div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <div className="flex items-center space-x-2">
                    <img src="https://via.placeholder.com/16" alt="Icon" className="w-4 h-4" />
                    <span className="text-sm">Optimal F1 and precision</span>
                  </div>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Passing</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <div className="flex items-center space-x-2">
                    <img src="https://via.placeholder.com/16" alt="Icon" className="w-4 h-4" />
                    <span className="text-sm">LLM accurately summarizes context</span>
                  </div>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Passing</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <div className="flex items-center space-x-2">
                    <img src="https://via.placeholder.com/16" alt="Icon" className="w-4 h-4" />
                    <span className="text-sm">Prevent fake product prompts</span>
                  </div>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Passing</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <div className="flex items-center space-x-2">
                    <img src="https://via.placeholder.com/16" alt="Icon" className="w-4 h-4" />
                    <span className="text-sm">P99 latency  5000ms</span>
                  </div>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Passing</span>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                    <span>22 tests passing</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                    <span>10 tests failing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by Section */}
      <section className="py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-sm text-gray-500 mb-8">Trusted by performance-led agencies & venture-backed teams</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="flex justify-center">
              <img src="https://via.placeholder.com/120x40?text=rootly" alt="Rootly" className="h-10" />
            </div>
            <div className="flex justify-center">
              <img src="https://via.placeholder.com/120x40?text=Virtu+Financial" alt="Virtu Financial" className="h-10" />
            </div>
            <div className="flex justify-center">
              <img src="https://via.placeholder.com/120x40?text=eBay" alt="eBay" className="h-10" />
            </div>
            <div className="flex justify-center">
              <img src="https://via.placeholder.com/120x40?text=birdie" alt="Birdie" className="h-10" />
            </div>
            <div className="flex justify-center">
              <img src="https://via.placeholder.com/120x40?text=Gallagher" alt="Gallagher" className="h-10" />
            </div>
            <div className="flex justify-center">
              <img src="https://via.placeholder.com/120x40?text=Telefonica" alt="Telefonica" className="h-10" />
            </div>
          </div>
        </div>
      </section>



      {/* Monitor Production Requests Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-sm text-purple-600 mb-2">Automate+ (Revenue Growth Engine)</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Automate+ (Revenue Growth Engine)</h2>
            <p className="text-lg text-gray-700 mb-8">
             Replies in 2 min (90% of inbound), +20–40% show rate, proposals in hours, revive
~10% of cold pipeline.

            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-gray-700 hover:text-purple-600"> See the 7-day rollout →</a>
              {/* <a href="#" className="text-sm text-gray-700 hover:text-purple-600">Explore for traditional ML →</a> */}
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <img src="https://via.placeholder.com/20" alt="Cutshort" className="w-5 h-5" />
                  <span className="text-sm font-medium">Cutshort</span>
                </div>
                <div className="text-xs text-gray-500">0 of 4 Waiting for requests...</div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <div className="flex items-center space-x-2">
                    <img src="https://via.placeholder.com/16" alt="Icon" className="w-4 h-4" />
                    <span className="text-sm">Request received</span>
                  </div>
                  <span className="text-xs text-gray-500">10:32 AM</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <div className="flex items-center space-x-2">
                    <img src="https://via.placeholder.com/16" alt="Icon" className="w-4 h-4" />
                    <span className="text-sm">Processing</span>
                  </div>
                  <span className="text-xs text-gray-500">10:32 AM</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <div className="flex items-center space-x-2">
                    <img src="https://via.placeholder.com/16" alt="Icon" className="w-4 h-4" />
                    <span className="text-sm">Response generated</span>
                  </div>
                  <span className="text-xs text-gray-500">10:32 AM</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <div className="flex items-center space-x-2">
                    <img src="https://via.placeholder.com/16" alt="Icon" className="w-4 h-4" />
                    <span className="text-sm">Guardrail check passed</span>
                  </div>
                  <span className="text-xs text-gray-500">10:32 AM</span>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
                <div>Waiting for requests to the deployment...</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automated Checks Section */}
      <section className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-sm text-purple-600 mb-2">SalesPilot</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">SalesPilot</h2>
            <p className="text-lg text-gray-700 mb-8">
            AI lead triage, human-like follow-ups, meeting orchestration, pipeline hygiene.
            </p>
            <a href="#" className="text-sm text-gray-700 hover:text-purple-600">Watch a 60-sec demo →</a>
          </div>
          <div className="relative">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <img src="https://via.placeholder.com/20" alt="Cutshort" className="w-5 h-5" />
                  <span className="text-sm font-medium">Cutshort</span>
                </div>
                <div className="text-xs text-gray-500">0 of 4 Waiting for requests...</div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <div className="flex items-center space-x-2">
                    <img src="https://via.placeholder.com/16" alt="Icon" className="w-4 h-4" />
                    <span className="text-sm">Request received</span>
                  </div>
                  <span className="text-xs text-gray-500">10:32 AM</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <div className="flex items-center space-x-2">
                    <img src="https://via.placeholder.com/16" alt="Icon" className="w-4 h-4" />
                    <span className="text-sm">Processing</span>
                  </div>
                  <span className="text-xs text-gray-500">10:32 AM</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <div className="flex items-center space-x-2">
                    <img src="https://via.placeholder.com/16" alt="Icon" className="w-4 h-4" />
                    <span className="text-sm">Response generated</span>
                  </div>
                  <span className="text-xs text-gray-500">10:32 AM</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <div className="flex items-center space-x-2">
                    <img src="https://via.placeholder.com/16" alt="Icon" className="w-4 h-4" />
                    <span className="text-sm">Guardrail check passed</span>
                  </div>
                  <span className="text-xs text-gray-500">10:32 AM</span>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
                <div>Waiting for requests to the deployment...</div>
              </div>
            </div>
          </div>
        </div>
      </section>

    
          {/* From Prototype to Production Section */}
      <section className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-sm text-purple-600 mb-2">Custom Automations</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Custom Automations</h2>
            <p className="text-lg text-gray-700 mb-8">
             Bespoke workflows across CRMs, ads, finance, support; SOC-friendly delivery & SLAs.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-gray-700 hover:text-purple-600">Scope a build →</a>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <img src="https://via.placeholder.com/20" alt="Hurb" className="w-5 h-5" />
                  <span className="text-sm font-medium">Hurb</span>
                </div>
                <div className="text-xs text-gray-500">4 of 4 Test results ready</div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <div className="flex items-center space-x-2">
                    <img src="https://via.placeholder.com/16" alt="Icon" className="w-4 h-4" />
                    <span className="text-sm">Outputs do not contain PII</span>
                  </div>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Passing</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <div className="flex items-center space-x-2">
                    <img src="https://via.placeholder.com/16" alt="Icon" className="w-4 h-4" />
                    <span className="text-sm">Surface diverse recommendations</span>
                  </div>
                  <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">Failing</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <div className="flex items-center space-x-2">
                    <img src="https://via.placeholder.com/16" alt="Icon" className="w-4 h-4" />
                    <span className="text-sm">Time-to-first-token 100ms</span>
                  </div>
                  <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">Failing</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <div className="flex items-center space-x-2">
                    <img src="https://via.placeholder.com/16" alt="Icon" className="w-4 h-4" />
                    <span className="text-sm">Ensure answers in PT-BR</span>
                  </div>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Passing</span>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
                <div>Waiting for results...</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 px-6 py-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-8">
          <div>
            <div className="text-purple-600 font-bold text-xl mb-6">Ai evoked</div>
           
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