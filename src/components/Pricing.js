import React from 'react';
import { FiZap, FiClock, FiDollarSign, FiSettings } from 'react-icons/fi'; // outline icons

const Pricing = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="pt-28 py-20 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          {/* Header */}
          <div className="max-w-xl mx-auto text-center mb-16">
            <div className="text-sm text-[#7E22CE] uppercase tracking-widest">
              Pricing
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-3">
              Get started in seconds
            </h2>
            <p className="text-gray-400 text-lg mt-4">
              Choose a plan that scales with your business goals.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-[#0b0b0b] rounded-2xl border border-gray-800 p-10 text-center hover:border-[#7E22CE] transition-all min-h-[400px] flex flex-col justify-center items-center">
              <div className="w-16 h-16 flex items-center justify-center border border-[#7E22CE] rounded-full mb-6">
                <FiZap className="text-[#7E22CE] text-3xl" />
              </div>
              <div className="text-2xl font-semibold text-[#7E22CE] mb-2">Pilot</div>
              <div className="text-lg font-medium text-white mb-3">Free (3 automations)</div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-[220px]">
                Start your journey with essential automations and simple setup.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#0b0b0b] rounded-2xl border border-gray-800 p-10 text-center hover:border-[#7E22CE] transition-all min-h-[400px] flex flex-col justify-center items-center">
              <div className="w-16 h-16 flex items-center justify-center border border-[#7E22CE] rounded-full mb-6">
                <FiSettings className="text-[#7E22CE] text-3xl" />
              </div>
              <div className="text-2xl font-semibold text-[#7E22CE] mb-2">Core (Automate+)</div>
              <div className="text-lg font-medium text-white mb-3">from $1,800/mo</div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-[220px]">
                Automate smarter with SLA-backed performance and priority support.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#0b0b0b] rounded-2xl border border-gray-800 p-10 text-center hover:border-[#7E22CE] transition-all min-h-[400px] flex flex-col justify-center items-center">
              <div className="w-16 h-16 flex items-center justify-center border border-[#7E22CE] rounded-full mb-6">
                <FiClock className="text-[#7E22CE] text-3xl" />
              </div>
              <div className="text-2xl font-semibold text-[#7E22CE] mb-2">SalesPilot Add-on</div>
              <div className="text-lg font-medium text-white mb-3">from $500/mo</div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-[220px]">
                Accelerate response time and improve sales conversions instantly.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#0b0b0b] rounded-2xl border border-gray-800 p-10 text-center hover:border-[#7E22CE] transition-all min-h-[400px] flex flex-col justify-center items-center">
              <div className="w-16 h-16 flex items-center justify-center border border-[#7E22CE] rounded-full mb-6">
                <FiDollarSign className="text-[#7E22CE] text-3xl" />
              </div>
              <div className="text-2xl font-semibold text-[#7E22CE] mb-2">Custom</div>
              <div className="text-lg font-medium text-white mb-3">Scoped</div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-[220px]">
                Build tailor-made automation systems aligned with your workflows.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
