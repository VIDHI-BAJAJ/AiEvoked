// RefundPolicy.js
import React from "react";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 py-12 px-6 md:px-12 lg:px-24 md:pt-28">
      <h1 className="text-4xl font-bold mb-6 text-center">Refund & Cancellation Policy</h1>
      <p className="mb-4">Effective Date: <strong>August 3, 2025</strong></p>
      <p className="mb-4">Company Name: <strong>AI EVOKED (OPC) Private Limited</strong></p>
      <p className="mb-6">
        Website: <a href="https://aievoked.com" className="text-black">https://aievoked.com</a>
      </p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Overview</h2>
        <p>
          At AI Evoked, we build tailored automation systems using Make.com, n8n, OpenAI, and other tools. 
          Because our services involve customised strategy, workflow design, and implementation, we maintain a clear and transparent refund and cancellation policy.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. Refund Eligibility</h2>
        <p>We offer refunds only under the following conditions:</p>
        <ul className="list-disc list-inside mb-2 space-y-1">
          <li>The client has made a payment, but no onboarding form has been submitted and no work has started.</li>
          <li>A written cancellation request is made within 24 hours of payment and before any discovery or kickoff meeting.</li>
          <li>We are unable to deliver the promised service due to technical limitations or internal fault and no alternate solution is viable.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. Non-Refundable Situations</h2>
        <p>We do not offer refunds in the following situations:</p>
        <ul className="list-disc list-inside mb-2 space-y-1">
          <li>After onboarding form submission or kickoff call</li>
          <li>After a custom automation build is partially or fully delivered</li>
          <li>If delays occur due to incomplete client responses, missing data, or communication gaps</li>
          <li>If the client chooses to discontinue after project initiation</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Cancellation Terms</h2>
        <ul className="list-disc list-inside mb-2 space-y-1">
          <li>Free Setup Pilots can be canceled before kickoff, with no obligations.</li>
          <li>For paid retainers, cancellation can be requested at any time, but no refund is guaranteed after service initiation.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. How to Request a Refund</h2>
        <p>To request a refund or cancellation, email us at:</p>
        <p className="text-purple-600 underline mb-2">contact@aievoked.com</p>
        <p>Include the following information:</p>
        <ul className="list-disc list-inside mb-2 space-y-1">
          <li>Full name</li>
          <li>Email used for payment</li>
          <li>Payment date</li>
          <li>Reason for refund</li>
        </ul>
        <p>
          We will respond within 3–5 business days, and if approved, process refunds within 7–10 business days to the original payment method.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. Contact Information</h2>
        <p>AI Evoked OPC Private Limited</p>
        <p>Address: 12-E, PKT-1, SECOND FLOOR, MAYUR VIHAR PHASE-I, East Delhi, East Delhi, East Delhi-110091, Delhi</p>
        <p>Email: <a href="mailto:Contact@aievoked.com" className="text-purple-600 underline">Contact@aievoked.com</a></p>
      </section>
    </div>
  );
};

export default RefundPolicy;
