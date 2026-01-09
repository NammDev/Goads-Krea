"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { KreaLogo } from "@/components/icons";
import { Sparkles, Image, Video, Pencil, Type, Film, Search, Bell, Settings } from "lucide-react";

const tabs = [
  { icon: Sparkles, label: "AI" },
  { icon: Image, label: "Image" },
  { icon: Video, label: "Video" },
  { icon: Pencil, label: "Edit" },
  { icon: Type, label: "Text" },
  { icon: Film, label: "Animate" },
];

const sidebarItems = [
  { src: "https://s.krea.ai/landing-v3/sidebar-1.webp", label: "Portrait" },
  { src: "https://s.krea.ai/landing-v3/sidebar-2.webp", label: "Animal" },
  { src: "https://s.krea.ai/landing-v3/sidebar-3.webp", label: "Style" },
  { src: "https://s.krea.ai/landing-v3/sidebar-4.webp", label: "Product" },
  { src: "https://s.krea.ai/landing-v3/sidebar-5.webp", label: "Art" },
];

export function AppPreview() {
  const [activeTab, setActiveTab] = useState(1);
  const [activeSidebarItem, setActiveSidebarItem] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => setIsGenerating(false), 2000);
  };

  return (
    <div className="w-full max-w-[900px] mx-auto mt-8">
      <div
        className={cn(
          "bg-primary-950 aspect-[160/95] w-full",
          "origin-top overflow-hidden rounded-md",
          "border border-white/15 shadow-2xl",
          "transition-all duration-[1s] ease-out",
          "grid grid-cols-[100px_1fr] grid-rows-[56px_1fr]"
        )}
      >
        {/* App Header */}
        <div
          className={cn(
            "col-span-full",
            "bg-primary-950 border-b border-primary-800",
            "flex items-center justify-between px-4"
          )}
        >
          {/* Left side - Logo and tabs */}
          <div className="flex items-center gap-4">
            <div className="text-white">
              <KreaLogo width={18} height={18} />
            </div>
            <div className="flex items-center">
              {tabs.map((tab, index) => (
                <button
                  key={tab.label}
                  onClick={() => setActiveTab(index)}
                  className={cn(
                    "flex items-center justify-center",
                    "w-9 h-9 rounded-lg",
                    "transition-colors duration-200",
                    index === activeTab
                      ? "bg-primary-800 text-white"
                      : "text-gray-400 hover:text-white"
                  )}
                >
                  <tab.icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Right side - Actions */}
          <div className="flex items-center gap-2">
            <button className="p-2 text-gray-400 hover:text-white transition-colors">
              <Search className="w-4 h-4" />
            </button>
            <button className="p-2 text-gray-400 hover:text-white transition-colors relative">
              <Bell className="w-4 h-4" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <button className="p-2 text-gray-400 hover:text-white transition-colors">
              <Settings className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div
          className={cn(
            "bg-primary-900 border-r border-primary-800",
            "flex flex-col items-center py-4 gap-2"
          )}
        >
          <button className="w-10 h-10 rounded-lg bg-primary-800 flex items-center justify-center text-white mb-2">
            <span className="text-lg">+</span>
          </button>
          {sidebarItems.map((item, index) => (
            <button
              key={item.label}
              onClick={() => setActiveSidebarItem(index)}
              className={cn(
                "w-12 h-12 rounded-lg overflow-hidden",
                "transition-all duration-200",
                index === activeSidebarItem
                  ? "ring-2 ring-white ring-offset-2 ring-offset-primary-900"
                  : "opacity-70 hover:opacity-100"
              )}
            >
              <img
                src={item.src}
                alt={item.label}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="bg-primary-900 p-6 flex flex-col">
          {/* Model indicator */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-full">
              <div className="w-4 h-4 bg-primary-900 rounded-sm flex items-center justify-center">
                <KreaLogo width={10} height={10} className="text-white" />
              </div>
              <span className="text-sm font-medium text-black">Krea 1</span>
            </div>
          </div>

          {/* Prompt Area */}
          <div className="bg-white rounded-xl p-4 flex-1 flex flex-col">
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              Editorial portrait, young man with messy black bun glancing back over shoulder, oversized moss-green fuzzy wool coat
            </p>

            {/* Options row */}
            <div className="flex items-center gap-2 mt-auto">
              <button className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 rounded-full text-xs text-gray-600">
                <Sparkles className="w-3 h-3" />
                Style
              </button>
              <button className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 rounded-full text-xs text-gray-600">
                <Image className="w-3 h-3" />
                Image prompt
              </button>
              <button className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 rounded-full text-xs text-gray-600">
                Style transfer
              </button>
              <div className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 rounded-full text-xs text-gray-600">
                <span>16:9</span>
              </div>
              <div className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 rounded-full text-xs text-gray-600">
                <span>1K</span>
              </div>
              <div className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 rounded-full text-xs text-gray-600">
                <span>Raw</span>
              </div>

              {/* Generate button */}
              <button
                onClick={handleGenerate}
                disabled={isGenerating}
                className={cn(
                  "ml-auto px-5 py-2 rounded-lg",
                  "bg-primary-900 text-white text-sm font-medium",
                  "flex items-center gap-2",
                  "transition-all duration-200",
                  "hover:bg-primary-800",
                  "disabled:opacity-70"
                )}
              >
                {isGenerating ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    Generate
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Caption */}
      <p className="text-center text-xs text-gray-400 mt-5">
        Realtime streaming image generation, video generation, visual refinement, and style exploration in Krea.
      </p>
    </div>
  );
}
