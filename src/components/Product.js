// import React, { useState, useEffect } from "react";
// import AnimatedSection from '../components/AnimatedSection';

// const Product = () => {
//   const [testProgress, setTestProgress] = useState(0);
  
//     // Simulate test completion over time
//     useEffect(() => {
//       const timer = setInterval(() => {
//         setTestProgress(prev => {
//           if (prev < 4) return prev + 1;
//           clearInterval(timer);
//           return prev;
//         });
//       }, 1500); // Each test completes every 1.5 seconds
  
//       return () => clearInterval(timer);
//     }, []);
//   return (
//      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-black text-white" style={{ backgroundColor: '#080412' }}>
 
//     <div>
//          <AnimatedSection delay={200}>
//       <section className="mt-24 py-20 px-4 md:px-8 lg:px-16">
//         <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 relative">
//           {/* Left Content */}
//           <div className="lg:w-1/2 space-y-6">
//             <div className="text-sm text-gray-400 uppercase">Offline evaluation</div>
//             <h2 className="text-4xl md:text-5xl font-bold leading-tight">
//               Automate+ (Revenue Growth Engine)
//             </h2>
//             <p className="text-gray-300 text-lg mt-6">
//              Replies in  {'<'} 2 min (90% of inbound), +20–40% show rate, proposals in hours, revive ~10% of cold pipeline.

//             </p>
//             <div className="flex flex-wrap gap-4 mt-8">
//               <button className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center">
//                See the 7-day rollout →
//               </button>
//             </div>
//           </div>
          
//           {/* Right Content - Test Results Card */}
// <div className="lg:w-1/2 relative">
//   <div className="#151120 rounded-xl p-6 border border-gray-700 shadow-lg">
// <h4 className="text-center mb-4">
//   Environment{" "}
//   <span
//     className="px-2 py-1 rounded text-[#EDA430] bg-[linear-gradient(90deg,rgba(237,164,48,0.10)_0%,rgba(237,164,48,0.02)_100%)]"
//   >
//     Development
//   </span>
// </h4>
//     {/* Header */}
//     <div className = "rounded-xl pb-5 border border-gray-700 shadow-lg bg-[linear-gradient(90deg,rgba(91,47,234,0.10)_0%,rgba(228,207,255,0)_100%)]">
//     <div className="flex items-center mb-4 pb-4 border-b border-gray-700 w-full p-4">
//       <img src="https://via.placeholder.com/32" alt="Hurb" className="w-8 h-8 rounded" />
//       <div className="ml-3">
//         <span className="font-semibold">Hurb</span>
//                   <span className="text-sm text-gray-400 ml-2">4 of 4 Test results ready</span>
//       </div>
//     </div>

//     {/* Timeline Content */}
//     <div className="ml-4 relative pl-8  p-4 before:absolute before:left-4 before:top-0 before:bottom-0 before:w-0.5 before:bg-purple-500/30">
      
//       {/* Timeline Item 1 - Optimal F1 and precision */}
//       <div 
//         className={`flex items-start mb-4 group ${testProgress >= 1 ? 'opacity-100' : 'opacity-50'}`}
//         style={{ transition: 'opacity 0.5s ease-in-out' }}
//       >
//         <div className={`absolute left-1 w-6 h-6 bg-black border-2 ${
//           testProgress >= 1 ? 'border-purple-500' : 'border-gray-500'
//         }  flex items-center justify-center group-hover:bg-purple-600 transition-colors`}>
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2v4l2 2h4l2-2v-4h2a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 002-2h2a2 2 0 002 2m-6 9l2 2 4-4" />
//           </svg>
//         </div>
//         <div className="ml-6 flex-1">
//           <div className="flex items-center justify-between">
//             <span>Outputs do not contain PII</span>
//             {testProgress >= 1 && (
//               <span className="text-green-500 text-sm font-medium px-2 py-1 bg-green-900/30 rounded">Passing</span>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Timeline Item 2 - LLM accurately summarizes context */}
//       <div 
//         className={`flex items-start mb-4 group ${testProgress >= 2 ? 'opacity-100' : 'opacity-50'}`}
//         style={{ transition: 'opacity 0.5s ease-in-out' }}
//       >
//         <div className={`absolute left-1 w-6 h-6 bg-black border-2 ${
//           testProgress >= 2 ? 'border-purple-500' : 'border-gray-500'
//         } flex items-center justify-center group-hover:bg-purple-600 transition-colors`}>
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.8-8h4.8l-.4-1.6A9.863 9.863 0 0112 12zm0 0a9.863 9.863 0 01-4.8-8h4.8l-.4-1.6A9.863 9.863 0 0112 12z" />
//           </svg>
//         </div>
//         <div className="ml-6 flex-1">
//           <div className="flex items-center justify-between">
//             <span>Surface diverse recommendations</span>
//             {testProgress >= 2 && (
//               <span className="text-green-500 text-sm font-medium px-2 py-1 bg-green-900/30 rounded">Passing</span>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Timeline Item 3 - Prevent fake product prompts */}
//       <div 
//         className={`flex items-start mb-4 group ${testProgress >= 3 ? 'opacity-100' : 'opacity-50'}`}
//         style={{ transition: 'opacity 0.5s ease-in-out' }}
//       >
//         <div className={`absolute left-1 w-6 h-6 bg-black border-2 ${
//           testProgress >= 3 ? 'border-purple-500' : 'border-gray-500'
//         } flex items-center justify-center group-hover:bg-purple-600 transition-colors`}>
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9M5 11V9m2 2a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H7a2 2 0 01-2-2v-6z" />
//           </svg>
//         </div>
//         <div className="ml-6 flex-1">
//           <div className="flex items-center justify-between">
//             <span>Time-to-first-token {'<'} 100ms </span>
//             {testProgress >= 3 && (
//               <span className="text-green-500 text-sm font-medium px-2 py-1 bg-green-900/30 rounded">Passing</span>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Timeline Item 4 - P99 latency < 5000ms */}
//       <div 
//         className={`flex items-start mb-4 group ${testProgress >= 4 ? 'opacity-100' : 'opacity-50'}`}
//         style={{ transition: 'opacity 0.5s ease-in-out' }}
//       >
//            <div className={`absolute left-1 w-6 h-6 bg-black border-2 ${
//           testProgress >= 4 ? 'border-purple-500' : 'border-gray-500'
//         } flex items-center justify-center group-hover:bg-purple-600 transition-colors`}>
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8v6h-8v-6z" />
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 13h8v6h-8v-6z" />
//           </svg>
//         </div>
//         <div className="ml-6 flex-1">
//           <div className="flex items-center justify-between">
//             <span>Ensure answers in PT-BR</span>
//             {testProgress >= 4 && (
//               <span className="text-green-500 text-sm font-medium px-2 py-1 bg-green-900/30 rounded">Passing</span>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Summary Stats - Appears AFTER all timeline items */}
//       <div className={`mt-8 pt-4 border-t border-gray-700 flex items-center justify-between ${testProgress === 4 ? 'opacity-100' : 'opacity-0'}`} style={{ transition: 'opacity 0.5s ease-in-out' }}>
//         <div className="flex items-center space-x-4">
//           <div className="flex items-center space-x-1">
//             <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//             <span className="text-sm">22 tests passing</span>
//           </div>
//           <div className="flex items-center space-x-1">
//             <div className="w-3 h-3 bg-red-500 rounded-full"></div>
//             <span className="text-sm">10 tests failing</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// </div>
//         </div> 
//       </section>
//       </AnimatedSection>

//       {/* Third Section: Monitor Production Requests */}
//       <AnimatedSection delay={300}>
//       <section className="py-20 px-4 md:px-8 lg:px-16">
//         <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 relative">
//           {/* Left Content */}
//           <div className="lg:w-1/2 space-y-6">
//             <div className="text-sm text-purple-400 uppercase">Observability and real-time guardrails</div>
//             <h2 className="text-4xl md:text-5xl font-bold leading-tight">
//              SalesPilot
//             </h2>
//             <p className="text-gray-300 text-lg mt-6">
//               AI lead triage, human-like follow-ups, meeting orchestration, pipeline hygiene.
//             </p>
//             <div className="flex flex-wrap gap-4 mt-8">
//               <button className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center">
//                 Watch a 60-sec demo →
//               </button>
//             </div>
//           </div>
          
//           {/* Right Content - Test Results Card */}
//          <div className="lg:w-1/2 relative">
//   <div className="#151120 rounded-xl p-6 border border-gray-700 shadow-lg">
// <h4 className="text-center mb-4">
//   Environment{" "}
//   <span
//     className="px-2 py-1 rounded text-[#EDA430] bg-[linear-gradient(90deg,rgba(237,164,48,0.10)_0%,rgba(237,164,48,0.02)_100%)]"
//   >
//     Development
//   </span>
// </h4>
//     {/* Header */}
//     <div className = "rounded-xl pb-5 border border-gray-700 shadow-lg bg-[linear-gradient(90deg,rgba(91,47,234,0.10)_0%,rgba(228,207,255,0)_100%)]">
//     <div className="flex items-center mb-4 pb-4 border-b border-gray-700 w-full p-4">
//       <img src="https://via.placeholder.com/32" alt="Hurb" className="w-8 h-8 rounded" />
//       <div className="ml-3">
//         <span className="font-semibold">Cutshort</span>
//                   <span className="text-sm text-gray-400 ml-2">4 of 4 Test results ready</span>
//       </div>
//     </div>

//     {/* Timeline Content */}
//     <div className="ml-4 relative pl-8  p-4 before:absolute before:left-4 before:top-0 before:bottom-0 before:w-0.5 before:bg-purple-500/30">
      
//       {/* Timeline Item 1 - Optimal F1 and precision */}
//       <div 
//         className={`flex items-start mb-4 group ${testProgress >= 1 ? 'opacity-100' : 'opacity-50'}`}
//         style={{ transition: 'opacity 0.5s ease-in-out' }}
//       >
//         <div className={`absolute left-1 w-6 h-6 bg-black border-2 ${
//           testProgress >= 1 ? 'border-purple-500' : 'border-gray-500'
//         }  flex items-center justify-center group-hover:bg-purple-600 transition-colors`}>
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2v4l2 2h4l2-2v-4h2a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 002-2h2a2 2 0 002 2m-6 9l2 2 4-4" />
//           </svg>
//         </div>
//         <div className="ml-6 flex-1">
//           <div className="flex items-center justify-between">
//             <span>Context precision {'>'} 0.9</span>
//             {testProgress >= 1 && (
//               <span className="text-green-500 text-sm font-medium px-2 py-1 bg-green-900/30 rounded">Passing</span>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Timeline Item 2 - LLM accurately summarizes context */}
//       <div 
//         className={`flex items-start mb-4 group ${testProgress >= 2 ? 'opacity-100' : 'opacity-50'}`}
//         style={{ transition: 'opacity 0.5s ease-in-out' }}
//       >
//         <div className={`absolute left-1 w-6 h-6 bg-black border-2 ${
//           testProgress >= 2 ? 'border-purple-500' : 'border-gray-500'
//         } flex items-center justify-center group-hover:bg-purple-600 transition-colors`}>
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.8-8h4.8l-.4-1.6A9.863 9.863 0 0112 12zm0 0a9.863 9.863 0 01-4.8-8h4.8l-.4-1.6A9.863 9.863 0 0112 12z" />
//           </svg>
//         </div>
//         <div className="ml-6 flex-1">
//           <div className="flex items-center justify-between">
//             <span>Outputs are in JSON</span>
//             {testProgress >= 2 && (
//               <span className="text-green-500 text-sm font-medium px-2 py-1 bg-green-900/30 rounded">Passing</span>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Timeline Item 3 - Prevent fake product prompts */}
//       <div 
//         className={`flex items-start mb-4 group ${testProgress >= 3 ? 'opacity-100' : 'opacity-50'}`}
//         style={{ transition: 'opacity 0.5s ease-in-out' }}
//       >
//         <div className={`absolute left-1 w-6 h-6 bg-black border-2 ${
//           testProgress >= 3 ? 'border-purple-500' : 'border-gray-500'
//         } flex items-center justify-center group-hover:bg-purple-600 transition-colors`}>
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9M5 11V9m2 2a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H7a2 2 0 01-2-2v-6z" />
//           </svg>
//         </div>
//         <div className="ml-6 flex-1">
//           <div className="flex items-center justify-between">
//             <span>LLM score avoids discrimination</span>
//             {testProgress >= 3 && (
//               <span className="text-green-500 text-sm font-medium px-2 py-1 bg-green-900/30 rounded">Passing</span>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Timeline Item 4 - P99 latency < 5000ms */}
//       <div 
//         className={`flex items-start mb-4 group ${testProgress >= 4 ? 'opacity-100' : 'opacity-50'}`}
//         style={{ transition: 'opacity 0.5s ease-in-out' }}
//       >
//            <div className={`absolute left-1 w-6 h-6 bg-black border-2 ${
//           testProgress >= 4 ? 'border-purple-500' : 'border-gray-500'
//         } flex items-center justify-center group-hover:bg-purple-600 transition-colors`}>
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8v6h-8v-6z" />
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 13h8v6h-8v-6z" />
//           </svg>
//         </div>
//         <div className="ml-6 flex-1">
//           <div className="flex items-center justify-between">
//             <span>Average latency {'<'} 0.5s</span>
//             {testProgress >= 4 && (
//               <span className="text-green-500 text-sm font-medium px-2 py-1 bg-green-900/30 rounded">Passing</span>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Summary Stats - Appears AFTER all timeline items */}
//       <div className={`mt-8 pt-4 border-t border-gray-700 flex items-center justify-between ${testProgress === 4 ? 'opacity-100' : 'opacity-0'}`} style={{ transition: 'opacity 0.5s ease-in-out' }}>
//         <div className="flex items-center space-x-4">
//           <div className="flex items-center space-x-1">
//             <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//             <span className="text-sm">22 tests passing</span>
//           </div>
//           <div className="flex items-center space-x-1">
//             <div className="w-3 h-3 bg-red-500 rounded-full"></div>
//             <span className="text-sm">10 tests failing</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// </div>
//         </div>
        
//       </section>
//       </AnimatedSection>

//       {/* Fourth Section: Automated Checks for Data Quality */}
//       <AnimatedSection delay={400}>
//       <section className="py-20 px-4 md:px-8 lg:px-16">
//         <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 relative">
//           {/* Left Content */}
//           <div className="lg:w-1/2 space-y-6">
//             <div className="text-sm text-purple-400 uppercase">Data quality</div>
//             <h2 className="text-4xl md:text-5xl font-bold leading-tight">
//              Custom Automations
//             </h2>
//             <p className="text-gray-300 text-lg mt-6">
//              Bespoke workflows across CRMs, ads, finance, support; SOC-friendly delivery &
// SLAs
//             </p>
//             <button className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center mt-8">
//               Scope a build →
//             </button>
//           </div>
          
//           {/* Right Content - Data Quality Visualization */}
//     <div className="lg:w-1/2 relative">
//   <div className="#151120 rounded-xl p-6 border border-gray-700 shadow-lg">
// <h4 className="text-center mb-4">
//   Environment{" "}
//   <span
//     className="px-2 py-1 rounded text-[#EDA430] bg-[linear-gradient(90deg,rgba(237,164,48,0.10)_0%,rgba(237,164,48,0.02)_100%)]"
//   >
//     Development
//   </span>
// </h4>
//     {/* Header */}
//     <div className = "rounded-xl pb-5 border border-gray-700 shadow-lg bg-[linear-gradient(90deg,rgba(91,47,234,0.10)_0%,rgba(228,207,255,0)_100%)]">
//     <div className="flex items-center mb-4 pb-4 border-b border-gray-700 w-full p-4">
//       <img src="https://via.placeholder.com/32" alt="Hurb" className="w-8 h-8 rounded" />
//       <div className="ml-3">
//         <span className="font-semibold">Cutshort</span>
//                   <span className="text-sm text-gray-400 ml-2">4 of 4 Test results ready</span>
//       </div>
//     </div>

//     {/* Timeline Content */}
//     <div className="ml-4 relative pl-8  p-4 before:absolute before:left-4 before:top-0 before:bottom-0 before:w-0.5 before:bg-purple-500/30">
      
//       {/* Timeline Item 1 - Optimal F1 and precision */}
//       <div 
//         className={`flex items-start mb-4 group ${testProgress >= 1 ? 'opacity-100' : 'opacity-50'}`}
//         style={{ transition: 'opacity 0.5s ease-in-out' }}
//       >
//         <div className={`absolute left-1 w-6 h-6 bg-black border-2 ${
//           testProgress >= 1 ? 'border-purple-500' : 'border-gray-500'
//         }  flex items-center justify-center group-hover:bg-purple-600 transition-colors`}>
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2v4l2 2h4l2-2v-4h2a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 002-2h2a2 2 0 002 2m-6 9l2 2 4-4" />
//           </svg>
//         </div>
//         <div className="ml-6 flex-1">
//           <div className="flex items-center justify-between">
//             <span>Context precision {'>'} 0.9</span>
//             {testProgress >= 1 && (
//               <span className="text-green-500 text-sm font-medium px-2 py-1 bg-green-900/30 rounded">Passing</span>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Timeline Item 2 - LLM accurately summarizes context */}
//       <div 
//         className={`flex items-start mb-4 group ${testProgress >= 2 ? 'opacity-100' : 'opacity-50'}`}
//         style={{ transition: 'opacity 0.5s ease-in-out' }}
//       >
//         <div className={`absolute left-1 w-6 h-6 bg-black border-2 ${
//           testProgress >= 2 ? 'border-purple-500' : 'border-gray-500'
//         } flex items-center justify-center group-hover:bg-purple-600 transition-colors`}>
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.8-8h4.8l-.4-1.6A9.863 9.863 0 0112 12zm0 0a9.863 9.863 0 01-4.8-8h4.8l-.4-1.6A9.863 9.863 0 0112 12z" />
//           </svg>
//         </div>
//         <div className="ml-6 flex-1">
//           <div className="flex items-center justify-between">
//             <span>Outputs are in JSON</span>
//             {testProgress >= 2 && (
//               <span className="text-green-500 text-sm font-medium px-2 py-1 bg-green-900/30 rounded">Passing</span>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Timeline Item 3 - Prevent fake product prompts */}
//       <div 
//         className={`flex items-start mb-4 group ${testProgress >= 3 ? 'opacity-100' : 'opacity-50'}`}
//         style={{ transition: 'opacity 0.5s ease-in-out' }}
//       >
//         <div className={`absolute left-1 w-6 h-6 bg-black border-2 ${
//           testProgress >= 3 ? 'border-purple-500' : 'border-gray-500'
//         } flex items-center justify-center group-hover:bg-purple-600 transition-colors`}>
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9M5 11V9m2 2a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H7a2 2 0 01-2-2v-6z" />
//           </svg>
//         </div>
//         <div className="ml-6 flex-1">
//           <div className="flex items-center justify-between">
//             <span>LLM score avoids discrimination</span>
//             {testProgress >= 3 && (
//               <span className="text-green-500 text-sm font-medium px-2 py-1 bg-green-900/30 rounded">Passing</span>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Timeline Item 4 - P99 latency < 5000ms */}
//       <div 
//         className={`flex items-start mb-4 group ${testProgress >= 4 ? 'opacity-100' : 'opacity-50'}`}
//         style={{ transition: 'opacity 0.5s ease-in-out' }}
//       >
//            <div className={`absolute left-1 w-6 h-6 bg-black border-2 ${
//           testProgress >= 4 ? 'border-purple-500' : 'border-gray-500'
//         } flex items-center justify-center group-hover:bg-purple-600 transition-colors`}>
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8v6h-8v-6z" />
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 13h8v6h-8v-6z" />
//           </svg>
//         </div>
//         <div className="ml-6 flex-1">
//           <div className="flex items-center justify-between">
//             <span>Average latency {'<'} 0.5s</span>
//             {testProgress >= 4 && (
//               <span className="text-green-500 text-sm font-medium px-2 py-1 bg-green-900/30 rounded">Passing</span>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Summary Stats - Appears AFTER all timeline items */}
//       <div className={`mt-8 pt-4 border-t border-gray-700 flex items-center justify-between ${testProgress === 4 ? 'opacity-100' : 'opacity-0'}`} style={{ transition: 'opacity 0.5s ease-in-out' }}>
//         <div className="flex items-center space-x-4">
//           <div className="flex items-center space-x-1">
//             <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//             <span className="text-sm">22 tests passing</span>
//           </div>
//           <div className="flex items-center space-x-1">
//             <div className="w-3 h-3 bg-red-500 rounded-full"></div>
//             <span className="text-sm">10 tests failing</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// </div>
//         </div>
      
//       </section>
//        </AnimatedSection>
//     </div>
//     </div>
//   )
// }

// export default Product

import React from 'react'

const Product = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-black text-white" style={{ backgroundColor: '#080412' }}>
    <div>
      <section className="mt-24 py-20 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          {/* Header */}
          <div className="max-w-xl mx-auto text-center mb-12">
            <div className="text-xl text-purple-400 uppercase">OUR SERVICES</div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-2">
              Explore Our Automation Products
            </h2>
            <p className="text-gray-300 text-lg mt-6">
              Pick a Plan to accelerate your setup. 
          </p>
          </div>

          {/* Template Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Template 1: RAG with Python */}
            <div className="bg-black/50 rounded-xl p-6 border border-gray-700 shadow-lg relative overflow-hidden group hover:bg-black/70 transition-colors">
              <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <h3 className="font-semibold mb-2 text-center">Automate+</h3>
                <div className="text-xl text-center text-white mb-4">Automate client onboarding, campaign reporting, CRM updates, and creative review cycles, all in one seamless system.</div>
                <p className="text-gray-300 text-sm mb-4 text-center">
                  This plug-and-play workflow suite eliminates 40+ hours/month of ops work.
                </p>
              </div>
            </div>

            {/* Template 2: Structured outputs */}
            <div className="bg-black/50 rounded-xl p-6 border border-gray-700 shadow-lg relative overflow-hidden group hover:bg-black/70 transition-colors">
              <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-br from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <h3 className="font-semibold mb-2 text-center">SalesPilot</h3>
                <div className="text-lg text-white text-center mb-4">A fully automated outbound system powered by GPT and Make.</div>
              <p className="text-gray-300 text-sm mb-4 text-center">
                  SalesPilot personalises email follow-ups, sequences, and CRM handoffs, helping you close more deals without ever touching your inbox.
                </p>
              </div>
            </div>

            {/* Template 3: Simple chatbot */}
            <div className="bg-black/50 rounded-xl p-6 border border-gray-700 shadow-lg relative overflow-hidden group hover:bg-black/70 transition-colors">
              <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-br from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <h3 className="font-semibold mb-2 text-center">Custom Automations</h3>
                <div className="text-xl text-white mb-4 text-center">Automate the tools you already use, from Google Sheets, Notion, Slack, and HubSpot to WhatsApp and ClickUp.</div>
                <p className="text-gray-300 text-sm mb-4 text-center">
                 We build smart, AI-powered systems that connect your workflows, reduce manual work, and give your team back their time.
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

export default Product ;