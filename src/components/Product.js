import React from "react";
import { FiZap, FiTrendingUp, FiSettings } from "react-icons/fi"; // outlined icons
import FixedFooter from './FixedFooter';


const Product = () => {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-black text-white">
      <section className="md:mt-24 mt-12 py-20 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          {/* Header */}
          <div className="max-w-xl mx-auto text-center mb-16">
            <div
              className="text-sm uppercase tracking-widest"
              style={{ color: "#7E22CE" }}
            >
              Our Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-3">
              Explore Our Automation Products
            </h2>
            <p className="text-gray-400 text-lg mt-4">
              Empower your workflow with AI-driven automation solutions.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Automate+ */}
            <div className="rounded-2xl border border-gray-800 p-10 text-center hover:border-[#7E22CE] transition-all min-h-[420px] flex flex-col justify-center items-center">
              <div
                className="w-16 h-16 flex items-center justify-center rounded-full mb-6"
                style={{
                  border: "1.5px solid #7E22CE",
                }}
              >
                <FiZap style={{ color: "#7E22CE", fontSize: "28px" }} />
              </div>
              <h3
                className="text-2xl font-semibold mb-3"
                style={{ color: "#7E22CE" }}
              >
                Automate+
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-3 max-w-[260px]">
                Automate client onboarding, campaign reporting, CRM updates, and
                creative review cycles — all in one seamless system.
              </p>
              <p className="text-gray-500 text-sm max-w-[240px]">
                Eliminate 40+ hours/month of ops work with plug-and-play
                workflow automation.
              </p>
            </div>

            {/* SalesPilot */}
            <div className="rounded-2xl border border-gray-800 p-10 text-center hover:border-[#7E22CE] transition-all min-h-[420px] flex flex-col justify-center items-center">
              <div
                className="w-16 h-16 flex items-center justify-center rounded-full mb-6"
                style={{
                  border: "1.5px solid #7E22CE",
                }}
              >
                <FiTrendingUp style={{ color: "#7E22CE", fontSize: "28px" }} />
              </div>
              <h3
                className="text-2xl font-semibold mb-3"
                style={{ color: "#7E22CE" }}
              >
                SalesPilot
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-3 max-w-[260px]">
                A fully automated outbound system powered by GPT and Make.
                Personalizes email follow-ups, sequences, and CRM handoffs.
              </p>
              <p className="text-gray-500 text-sm max-w-[240px]">
                Close more deals without ever touching your inbox.
              </p>
            </div>

            {/* Custom Automations */}
            <div className="rounded-2xl border border-gray-800 p-10 text-center hover:border-[#7E22CE] transition-all min-h-[420px] flex flex-col justify-center items-center">
              <div
                className="w-16 h-16 flex items-center justify-center rounded-full mb-6"
                style={{
                  border: "1.5px solid #7E22CE",
                }}
              >
                <FiSettings style={{ color: "#7E22CE", fontSize: "28px" }} />
              </div>
              <h3
                className="text-2xl font-semibold mb-3"
                style={{ color: "#7E22CE" }}
              >
                Custom Automations
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-3 max-w-[260px]">
                Automate your favorite tools — Google Sheets, Notion, Slack,
                HubSpot, WhatsApp, ClickUp, and more.
              </p>
              <p className="text-gray-500 text-sm max-w-[240px]">
                Build AI-powered workflows that save time and boost efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
     <FixedFooter />
     </>
  );
};

export default Product;
