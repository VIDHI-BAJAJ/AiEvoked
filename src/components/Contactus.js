import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
const Contactus = () => {
  const [submitting, setSubmitting] = React.useState(false);
  const [succeeded, setSucceeded] = React.useState(false);

const handleGoogleSubmit = async (e) => {
  e.preventDefault();
  setSubmitting(true);

  const form = e.target;
  const name = encodeURIComponent(form.name.value);
  const email = encodeURIComponent(form.email.value);
  const message = encodeURIComponent(form.message.value);

  const url = `https://script.google.com/macros/s/AKfycbyr8PJ9jr9bz3tUIktrO-2uNxkpZH4qKzn5B-kWd5rtLz-sDvXVxDpKGDpDkQ0eoPPk/exec?name=${name}&email=${email}&message=${message}`;

  try {
    const response = await fetch(url);
    const result = await response.json();

    if (result.result === "success") {
      setSucceeded(true);
      form.reset();
      setTimeout(() => setSucceeded(false), 5000);
    } else {
      alert("Failed: " + result.message);
    }
  } catch (error) {
    console.error("Error sending message:", error);
    alert("Failed to send message. Please try again.");
  } finally {
    setSubmitting(false);
  }
};

  return (
    <div className="bg-gradient-to-br from-slate-900 to-black text-white min-h-screen py-16 px-6 md:px-12 md:pb-24">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-16 mt-24">
        <span className="inline-block bg-gray-900 text-xs px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
          Get in Touch
        </span>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#7E22CE] via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Let’s Talk About Your Growth
        </h1>
        <p className="text-gray-400 text-lg">
          Have questions or want to discuss how we can help scale your business? Fill out the form, and we’ll reach out soon.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 shadow-xl">
          <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>

          {succeeded && (
            <div className="mb-6 p-4 bg-green-900 text-green-200 rounded-lg flex items-center">
              <i className="fas fa-check-circle text-green-400 mr-2"></i>
              Message sent successfully! We’ll get back to you soon.
            </div>
          )}

          <form onSubmit={handleGoogleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Tell us how we can help..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className={`w-full bg-gradient-to-r from-[#7E22CE] to-[#7E22CE] px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                submitting ? "opacity-70 cursor-not-allowed" : "hover:shadow-lg hover:scale-105"
              }`}
            >
              {submitting ? (
                <span className="flex items-center justify-center">
                  <i className="fas fa-spinner animate-spin mr-2"></i>
                  Sending...
                </span>
              ) : (
                "Send Message →"
              )}
            </button>
          </form>
        </div>

      {/* Contact Info */}
{/* Contact Info */}
<div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 shadow-xl space-y-10">
  <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>

  <div className="flex items-center space-x-4">
    <div className="w-12 h-12 rounded-full bg-[#7E22CE] flex items-center justify-center">
      <FontAwesomeIcon icon={faEnvelope} className="text-white text-lg" />
    </div>
    <a href="mailto:Pragun@aievoked.com" className="text-white hover:underline">
      Pragun@aievoked.com
    </a>
  </div>

  <div className="flex items-center space-x-4">
    <div className="w-12 h-12 rounded-full bg-[#7E22CE] flex items-center justify-center">
      <FontAwesomeIcon icon={faPhone} className="text-white text-lg" />
    </div>
    <a href="tel:+919266101567" className="text-white hover:underline">
      9266101567
    </a>
  </div>

  <div className="flex items-center space-x-4">
    <div className="w-12 h-12 rounded-full bg-[#7E22CE] flex items-center justify-center">
      <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white text-lg" />
    </div>
    <p className="text-white">Delhi, India</p>
  </div>
</div>


      </div>
    </div>
  );
};

export default Contactus;
