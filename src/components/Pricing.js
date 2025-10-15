import React from 'react'

const Prcining = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-black text-white" style={{ backgroundColor: '#080412' }}>
    <div>
      <section className="mt-24 py-20 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          {/* Header */}
          <div className="max-w-xl mx-auto text-center mb-12">
            <div className="text-sm text-purple-400 uppercase">Pricing</div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-2">
              Get started in seconds
            </h2>
            <p className="text-gray-300 text-lg mt-6">
              Pick a Plan to accelerate your setup. 
          </p>
          </div>

          {/* Template Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Template 1: RAG with Python */}
            <div className="bg-black/50 rounded-xl p-6 border border-gray-700 shadow-lg relative overflow-hidden group hover:bg-black/70 transition-colors">
              <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <h3 className="font-semibold mb-2 text-center">Pilot</h3>
                <div className="text-lg text-center text-white mb-4">Free (3 automations)</div>
                <p className="text-gray-300 text-sm mb-4 text-center">
                  Create a RAG pipeline for question-answering using Azure OpenAI and Python
                </p>
              </div>
            </div>

            {/* Template 2: Structured outputs */}
            <div className="bg-black/50 rounded-xl p-6 border border-gray-700 shadow-lg relative overflow-hidden group hover:bg-black/70 transition-colors">
              <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-br from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <h3 className="font-semibold mb-2 text-center">Core (Automate+)</h3>
                <div className="text-lg text-white text-center mb-4"> from $1,800/mo (SLA & outcomes).</div>
              </div>
            </div>

            {/* Template 3: Simple chatbot */}
            <div className="bg-black/50 rounded-xl p-6 border border-gray-700 shadow-lg relative overflow-hidden group hover:bg-black/70 transition-colors">
              <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-br from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <h3 className="font-semibold mb-2 text-center">SalesPilot add-on</h3>
                <div className="text-lg text-white mb-4 text-center">from $500/mo</div>
                <p className="text-gray-300 text-sm mb-4 text-center">
                  Create your own simple chatbot using OpenAI and Python
                </p>
              </div>
            </div>


              <div className="bg-black/50 rounded-xl p-6 border border-gray-700 shadow-lg relative overflow-hidden group hover:bg-black/70 transition-colors">
              <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-br from-pink-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <h3 className="font-semibold mb-2 text-center">Custom</h3>
                <div className="text-lg text-white mb-4 text-center">Scoped</div>
                <p className="text-gray-300 text-sm mb-4 text-center">
                  Create your own simple chatbot using OpenAI and Python
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  )
}

export default Prcining
