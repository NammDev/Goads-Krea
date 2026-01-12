"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

type Phase = "problem" | "solution" | "scaling";

const phases: { id: Phase; icon: string; label: string }[] = [
  { id: "problem", icon: "😰", label: "Issue" },
  { id: "solution", icon: "💬", label: "Support" },
  { id: "scaling", icon: "📈", label: "Scale" },
];

export function AppPreview() {
  const [phase, setPhase] = useState<Phase>("problem");
  const [metrics, setMetrics] = useState({ spend: 0, roas: 0, conversions: 0 });

  // Auto-cycle through phases
  useEffect(() => {
    const phaseIds: Phase[] = ["problem", "solution", "scaling"];
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % phaseIds.length;
      setPhase(phaseIds[currentIndex]);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Animate metrics when in scaling phase
  useEffect(() => {
    if (phase === "scaling") {
      const duration = 2000;
      const steps = 60;
      const stepTime = duration / steps;

      let step = 0;
      const interval = setInterval(() => {
        step++;
        const progress = step / steps;
        setMetrics({
          spend: Math.floor(2847 * progress),
          roas: parseFloat((4.2 * progress).toFixed(1)),
          conversions: Math.floor(892 * progress),
        });
        if (step >= steps) clearInterval(interval);
      }, stepTime);

      return () => clearInterval(interval);
    } else {
      setMetrics({ spend: 0, roas: 0, conversions: 0 });
    }
  }, [phase]);

  return (
    <div className="my-20 w-[1240px] max-w-full text-center mx-auto">
      <div
        className={cn(
          "bg-primary-950 aspect-[160/95] w-full",
          "origin-top overflow-hidden rounded-md",
          "border border-white/15 shadow-2xl",
          "relative"
        )}
      >
        {/* App Interface Container */}
        <div className="absolute inset-0 flex flex-col">

          {/* Top Navigation Bar */}
          <div className="flex items-center justify-between px-3 sm:px-4 py-2 border-b border-white/10 bg-primary-900/50">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-xs font-bold">
                G
              </div>
              <span className="text-white font-semibold text-sm hidden sm:block">GoAds</span>
            </div>

            {/* Center Tabs */}
            <div className="flex items-center gap-1 bg-primary-800/50 rounded-lg p-1">
              {["Meta", "TikTok", "Google"].map((tab, i) => (
                <button
                  key={tab}
                  className={cn(
                    "px-3 py-1.5 rounded-md text-xs font-medium transition-all",
                    i === 0
                      ? "bg-primary-700 text-white"
                      : "text-gray-400 hover:text-white"
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="relative">
                <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                </svg>
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-[8px] text-white flex items-center justify-center">3</span>
              </div>
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600" />
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 flex">

            {/* Left Sidebar - Phase Thumbnails */}
            <div className="w-14 sm:w-16 border-r border-white/10 bg-primary-900/30 p-2 flex flex-col gap-2">
              {/* Add button */}
              <button className="w-full aspect-square rounded-lg border border-dashed border-gray-600 flex items-center justify-center text-gray-500 hover:border-gray-400 hover:text-gray-400 transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </button>

              {/* Phase thumbnails */}
              {phases.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setPhase(p.id)}
                  className={cn(
                    "w-full aspect-square rounded-lg flex flex-col items-center justify-center gap-0.5 transition-all",
                    phase === p.id
                      ? "bg-primary-700 ring-2 ring-blue-500 ring-offset-1 ring-offset-primary-950"
                      : "bg-primary-800/50 hover:bg-primary-800"
                  )}
                >
                  <span className="text-base">{p.icon}</span>
                  <span className={cn(
                    "text-[8px] font-medium",
                    phase === p.id ? "text-white" : "text-gray-500"
                  )}>
                    {p.label}
                  </span>
                </button>
              ))}
            </div>

            {/* Main Preview Area */}
            <div className="flex-1 flex flex-col p-3 sm:p-4">
              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 text-xs">Customer Journey</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400">Live</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500 text-[10px]">Product:</span>
                  <span className="text-white text-xs font-medium">BM5 ▾</span>
                </div>
              </div>

              {/* Large Content Area */}
              <div className="flex-1 relative bg-primary-900/50 rounded-lg overflow-hidden">

                {/* PROBLEM PHASE */}
                <div
                  className={cn(
                    "absolute inset-0 flex items-center justify-center p-4 transition-all duration-500",
                    phase === "problem" ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                  )}
                >
                  <div className="w-full max-w-md bg-white rounded-lg shadow-2xl overflow-hidden">
                    {/* Browser bar */}
                    <div className="bg-gray-100 px-3 py-2 flex items-center gap-2 border-b">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                      </div>
                      <div className="flex-1 bg-white rounded px-3 py-1 text-[10px] text-gray-400 ml-2">
                        business.facebook.com/adsmanager
                      </div>
                    </div>

                    {/* Error content */}
                    <div className="p-6 text-center">
                      <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-red-100 flex items-center justify-center">
                        <svg className="w-7 h-7 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </div>
                      <h3 className="text-base font-semibold text-gray-900 mb-1">Account Restricted</h3>
                      <p className="text-xs text-gray-500 mb-3">
                        Your ad account has been restricted due to policy violations.
                      </p>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-50 rounded-full text-red-600 text-xs font-medium">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        Cannot run ads
                      </div>
                    </div>
                  </div>
                </div>

                {/* SOLUTION PHASE */}
                <div
                  className={cn(
                    "absolute inset-0 flex items-center justify-center p-4 transition-all duration-500",
                    phase === "solution" ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                  )}
                >
                  <div className="w-full max-w-md bg-primary-800 rounded-xl border border-primary-700 overflow-hidden shadow-2xl">
                    {/* Chat header */}
                    <div className="px-4 py-3 bg-primary-900 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-sm font-bold">
                          G
                        </div>
                        <div>
                          <div className="text-white font-medium text-sm">GoAds Support</div>
                          <div className="text-emerald-400 text-xs flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-emerald-400" />
                            Online now
                          </div>
                        </div>
                      </div>
                      <div className="text-[10px] text-gray-400">Response: &lt;5 min</div>
                    </div>

                    {/* Chat messages */}
                    <div className="p-4 space-y-3">
                      <div className="flex justify-end">
                        <div className="bg-blue-600 text-white px-3 py-2 rounded-2xl rounded-br-sm text-xs max-w-[80%]">
                          My BM5 just got restricted 😫 Need replacement ASAP
                        </div>
                      </div>
                      <div className="flex justify-start">
                        <div className="bg-primary-700 text-white px-3 py-2 rounded-2xl rounded-bl-sm text-xs max-w-[80%]">
                          No worries! ✅ Your 7-day warranty covers this. Sending verified BM5 replacement now.
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <div className="bg-blue-600 text-white px-3 py-2 rounded-2xl rounded-br-sm text-xs max-w-[80%]">
                          Already received! That was fast 🙏🔥
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SCALING PHASE */}
                <div
                  className={cn(
                    "absolute inset-0 flex items-center justify-center p-4 transition-all duration-500",
                    phase === "scaling" ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                  )}
                >
                  <div className="w-full max-w-md bg-white rounded-lg shadow-2xl overflow-hidden">
                    {/* Browser bar */}
                    <div className="bg-gray-100 px-3 py-2 flex items-center gap-2 border-b">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                      </div>
                      <div className="flex-1 bg-white rounded px-3 py-1 text-[10px] text-gray-400 ml-2">
                        business.facebook.com/adsmanager
                      </div>
                    </div>

                    {/* Success content */}
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h3 className="text-xs font-medium text-gray-500">Summer Sale 2024</h3>
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-full text-[10px] font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            Active
                          </span>
                        </div>
                        <div className="text-[10px] text-gray-400">GoAds Protected</div>
                      </div>

                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-2 mb-3">
                        <div className="bg-gray-50 rounded-lg p-2.5 text-center">
                          <div className="text-lg font-bold text-gray-900">
                            ${metrics.spend.toLocaleString()}
                          </div>
                          <div className="text-[10px] text-gray-500">Spend</div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-2.5 text-center">
                          <div className="text-lg font-bold text-emerald-600">
                            {metrics.roas}x
                          </div>
                          <div className="text-[10px] text-gray-500">ROAS</div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-2.5 text-center">
                          <div className="text-lg font-bold text-gray-900">
                            {metrics.conversions}
                          </div>
                          <div className="text-[10px] text-gray-500">Conversions</div>
                        </div>
                      </div>

                      {/* Mini chart */}
                      <div className="h-10 flex items-end gap-1">
                        {[40, 55, 45, 60, 50, 70, 65, 80, 75, 90, 85, 100].map((h, i) => (
                          <div
                            key={i}
                            className="flex-1 bg-gradient-to-t from-emerald-500 to-emerald-400 rounded-t transition-all duration-300"
                            style={{
                              height: phase === "scaling" ? `${h}%` : "0%",
                              transitionDelay: `${i * 50}ms`
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="flex items-center justify-center gap-4 sm:gap-6 mt-3 text-gray-500">
                {[
                  { icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15", label: "Retry" },
                  { icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z", label: "Support" },
                  { icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", label: "Docs" },
                  { icon: "M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z", label: "Share" },
                  { icon: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4", label: "Download" },
                ].map((item) => (
                  <button key={item.label} className="flex items-center gap-1.5 hover:text-white transition-colors text-xs">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                    <span className="hidden sm:inline">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Prompt Area */}
          <div className="border-t border-white/10 bg-primary-900/50 p-3 sm:p-4">
            <div className="flex items-center gap-3">
              <div className="flex-1 bg-primary-800 rounded-lg px-4 py-2.5 flex items-center">
                <span className="text-gray-400 text-xs sm:text-sm truncate">
                  "My BM5 got restricted, need replacement ASAP"
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-primary-800 text-emerald-400 text-[10px] font-medium">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  7-Day
                </span>
                <span className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-primary-800 text-gray-400 text-[10px] font-medium">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  &lt;10min
                </span>
                <button className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg text-xs sm:text-sm font-medium transition-all">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Caption */}
      <p className="text-primary-500 mt-4 text-sm">
        From banned to scaling — that's the GoAds difference.
      </p>
    </div>
  );
}
