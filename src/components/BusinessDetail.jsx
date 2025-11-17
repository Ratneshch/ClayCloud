import React from "react";
import analyticsDashboard from "../assets/analytics-dashboard.png";
import teamHighfive from "../assets/team-highfive.png";

const BusinessDetail = () => {
  return (
    <section className="w-full bg-gradient-to-r from-white to-[#fde9c3] py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

      {/* Left Images */}
<div className="relative w-full flex justify-center">

  {/* Back Image — Hidden on mobile */}
  <img
    src={analyticsDashboard}
    alt="Analytics Dashboard"
    className="
      hidden sm:block
      w-[280px] sm:w-[320px] md:w-[430px]
      rounded-2xl
      shadow-xl
      object-cover
    "
  />

  {/* Front Image */}
  <img
    src={teamHighfive}
    alt="Team High-Five"
    className="
      w-[240px] 
      sm:w-[260px] 
      md:w-[300px]
      rounded-2xl
      shadow-xl
      object-cover

      /* Mobile: No overlap */
      relative mx-auto sm:mx-0

      /* Tablet & Desktop: Overlap */
      sm:absolute
      sm:bottom-[-30px] 
      sm:right-[-30px]
      md:bottom-[-40px] 
      md:right-[-40px]
    "
  />
</div>


        {/* Right Content */}
        <div className="px-2 md:ml-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-black">
            Scale your <br />
            business with <br />
            <span className="text-[#f59e0b]">confidence</span>
          </h1>

          <p className="text-gray-700 mt-4 sm:mt-6 leading-relaxed">
            ClayCloud provides enterprise-grade infrastructure with the
            simplicity your team needs. Our AI-powered platform automatically
            optimizes performance, predicts issues before they occur, and scales
            seamlessly with your growth.
          </p>

          <ul className="mt-6 space-y-3 text-gray-700">
            <li className="flex items-center gap-3">
              <span className="text-[#f59e0b] text-xl">✓</span>
              99.99% uptime SLA with automated failover
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#f59e0b] text-xl">✓</span>
              AI-driven performance optimization & cost reduction
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#f59e0b] text-xl">✓</span>
              24/7 expert support with 15-minute response time
            </li>
          </ul>

          <button className="mt-8 px-6 py-3 bg-[#f59e0b] hover:bg-[#e59406] text-white font-medium rounded-lg shadow-lg transition">
            Get Started Today!
          </button>
        </div>

      </div>
    </section>
  );
};

export default BusinessDetail;
