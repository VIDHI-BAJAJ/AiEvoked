import React from 'react';

const Home = () => {
  return (
      <div className="bg-white font-sans">
      {/* Hero Section */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-r from-purple-50 to-indigo-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI governance platform for trust and control
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Automate compliance, behavioral testing, and security to detect and prevent risks like prompt injections, bias, hallucinations, and PII leakage before they spread.
            </p>
            <button className="bg-purple-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-purple-700 transition">
              Let's talk AI governance
            </button>
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
          <h2 className="text-center text-sm text-gray-500 mb-8">Trusted by top AI teams</h2>
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

      {/* From Prototype to Production Section */}
      <section className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-sm text-purple-600 mb-2">Offline evaluation</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">From prototype to production. Safely.</h2>
            <p className="text-lg text-gray-700 mb-8">
              Across ML and LLM systems, Openlayer supports you from day one, ensuring a smooth transition from prototype to production through ongoing testing.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-gray-700 hover:text-purple-600">Explore for LLMs →</a>
              <a href="#" className="text-sm text-gray-700 hover:text-purple-600">Explore for traditional ML →</a>
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

      {/* Monitor Production Requests Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-sm text-purple-600 mb-2">Observability and real-time guardrails</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Monitor production requests with ease</h2>
            <p className="text-lg text-gray-700 mb-8">
              Observe and monitor your AI systems in real-time with Openlayer. Catch issues in production and fix your AI within a matter of minutes.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-gray-700 hover:text-purple-600">Explore for LLMs →</a>
              <a href="#" className="text-sm text-gray-700 hover:text-purple-600">Explore for traditional ML →</a>
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
            <div className="text-sm text-purple-600 mb-2">Data quality</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Automated checks for data quality</h2>
            <p className="text-lg text-gray-700 mb-8">
              Connect your data pipelines and automatically test for schema changes, drift, and anomalies, so you catch bad data before it reaches your models.
            </p>
            <a href="#" className="text-sm text-gray-700 hover:text-purple-600">Explore data quality monitoring →</a>
          </div>
          <div className="relative">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2a8 8 0 100 16 8 8 0 000-16z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex justify-center space-x-6 mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16z" />
                  </svg>
                </div>
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16z" />
                  </svg>
                </div>
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16z" />
                  </svg>
                </div>
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16z" />
                  </svg>
                </div>
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16z" />
                  </svg>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Schema changes ✓</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Drifts ✓</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Anomalies ✓</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Effortless Governance Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-sm text-purple-600 mb-2">Automated compliance</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Effortless governance</h2>
            <p className="text-lg text-gray-700 mb-8">
              Align AI systems with standards like ISO/IEC 42001, OWASP, NIST, and the EU AI Act for worry-free compliance.
            </p>
            <a href="#" className="text-sm text-gray-700 hover:text-purple-600">Explore governance and compliance →</a>
          </div>
          <div className="relative">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2a8 8 0 100 16 8 8 0 000-16z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex justify-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16z" />
                  </svg>
                </div>
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16z" />
                  </svg>
                </div>
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16z" />
                  </svg>
                </div>
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16z" />
                  </svg>
                </div>
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16z" />
                  </svg>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">
                  All Checks Passed
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <div className="w-20 h-20 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a8 8 0 100 16 8 8 0 000-16z" />
            </svg>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Stop guessing. Ship with confidence.</h2>
          <p className="text-lg text-gray-700 mb-8">The automated AI evaluation and monitoring platform.</p>
          <button className="bg-purple-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-purple-700 transition">
            Request demo
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 px-6 py-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-8">
          <div>
            <div className="text-purple-600 font-bold text-xl mb-6">Ai evoked</div>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-gray-600 hover:text-purple-600">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111 1.022-.254 1.022-.577v-2.123c-3.576.846-4.254-1.696-4.254-1.696-.577-.745-.745-1.696-.745-2.647 0-.951.168-1.897.745-2.647 4.897-5.302 12.674-5.302 17.571 0 .577.75.745 1.696.745 2.647 0 .951-.168 1.897-.745 2.647-.577.745-1.022 1.696-1.022 2.647v2.123c0 .323.423.688 1.022.577 4.769-1.587 8.207-6.085 8.207-11.387 0-6.627-5.374-12-12-12z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-purple-600">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.991 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.978.923-1.978 1.875v2.23h3.357l-.53 3.47h-2.827v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-purple-600">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.55v-5.86c0-1.405-1.139-2.544-2.544-2.544S11.799 13.187 11.799 14.592v5.86h-3.55V9.55h3.55v1.625c.51-.78 1.45-1.29 2.544-1.29 1.74 0 3.145 1.405 3.145 3.145v6.322zM6.677 9.165c-1.144 0-2.07-.926-2.07-2.07 0-1.144.926-2.07 2.07-2.07s2.07.926 2.07 2.07c0 1.144-.926 2.07-2.07 2.07zm1.778 11.287h-3.55V9.55h3.55v10.902z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-purple-600">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.55v-5.86c0-1.405-1.139-2.544-2.544-2.544S11.799 13.187 11.799 14.592v5.86h-3.55V9.55h3.55v1.625c.51-.78 1.45-1.29 2.544-1.29 1.74 0 3.145 1.405 3.145 3.145v6.322zM6.677 9.165c-1.144 0-2.07-.926-2.07-2.07 0-1.144.926-2.07 2.07-2.07s2.07.926 2.07 2.07c0 1.144-.926 2.07-2.07 2.07zm1.778 11.287h-3.55V9.55h3.55v10.902z"/>
                </svg>
              </a>
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