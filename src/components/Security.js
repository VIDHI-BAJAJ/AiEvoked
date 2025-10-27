// ShippingPolicy.js
import React from "react";

const ShippingPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 py-12 px-6 md:px-12 lg:px-24 md:pt-28">
      <h1 className="text-4xl font-bold mb-6 text-center">Shipping & Delivery Policy</h1>
      <p className="mb-4">Effective Date: <strong>August 3, 2025</strong></p>
      <p className="mb-4">Company Name: <strong>AI EVOKED (OPC) Private Limited</strong></p>
      <p className="mb-6">
        Website: <a href="https://aievoked.com" className="text-black">https://aievoked.com</a>
      </p>

      <section className="mb-6">
        <p>
          At AI Evoked (OPC) Private Limited, we do not sell physical products. All our services are digital in nature, including custom automations, AI agents, and workflow integrations.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Digital Service Delivery</h2>
        <p>All our deliverables, including automation builds, documentation, and dashboards, are delivered digitally via:</p>
        <ul className="list-disc list-inside mb-2 space-y-1">
          <li>Email</li>
          <li>Google Drive</li>
          <li>Client dashboards</li>
          <li>Shared access to automation platforms (Make.com, n8n, Airtable, etc.)</li>
        </ul>
        <p>No physical goods are shipped.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. Turnaround Time</h2>
        <p>Delivery timelines vary based on the service type:</p>
        <ul className="list-disc list-inside mb-2 space-y-1">
          <li>Free Setup Pilots: Within 7-15 days post form submission</li>
          <li>Custom Automations: 5–15 business days depending on scope and complexity</li>
        </ul>
        <p>Exact timelines will be communicated on your kickoff call and via email.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. Support Channels</h2>
        <p>For delivery status or help accessing your automation system:</p>
        <ul className="list-disc list-inside mb-2 space-y-1">
          <li>📧 Email: <a href="mailto:Contact@aievoked.com" className="text-purple-600 underline">Contact@aievoked.com</a></li>
          <li>Our team is available Monday–Friday, 10 AM – 6 PM IST</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Physical Shipping Disclaimer</h2>
        <p>
          We do not handle or support physical logistics, courier shipments, or deliveries of any kind. This policy exists solely to fulfill platform compliance.
        </p>
      </section>
    </div>
  );
};

export default ShippingPolicy;
