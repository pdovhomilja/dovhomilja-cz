"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Terminal,
  Code2,
  Database,
  Cpu,
  ChevronRight,
  GitBranch,
} from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-zinc-950">
      {/* Technical Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-emerald-500/5"></div>

      {/* Animated scan line */}
      <div className="absolute inset-0 scan-line"></div>

      {/* Corner brackets - HUD style */}
      <div className="absolute top-8 left-8 w-24 h-24 border-l-2 border-t-2 border-cyan-400/50 animate-pulse-slow"></div>
      <div className="absolute top-8 right-8 w-24 h-24 border-r-2 border-t-2 border-cyan-400/50 animate-pulse-slow"></div>
      <div className="absolute bottom-8 left-8 w-24 h-24 border-l-2 border-b-2 border-emerald-400/50 animate-pulse-slow"></div>
      <div className="absolute bottom-8 right-8 w-24 h-24 border-r-2 border-b-2 border-emerald-400/50 animate-pulse-slow"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="flex flex-col lg:flex-row gap-16 min-h-[calc(100vh-10rem)]">
          {/* Main Content - 3/5 width */}
          <div className="flex-1 lg:w-3/5 flex flex-col justify-center space-y-12">
            {/* Terminal-style header */}
            <div className="font-mono text-sm text-cyan-400 space-y-1">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                <span className="opacity-70">$ whoami</span>
              </div>
              <div className="pl-6 text-emerald-400">
                <span className="typing-text">
                  CTO | AI_ARCHITECT | CO-FOUNDER
                </span>
              </div>
            </div>

            {/* Main Headline - Bold & Impactful */}
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-none tracking-tighter">
                <span className="text-white">PAVEL</span>
                <br />
                <span className="text-white">DOVHOMILJA</span>
                <br />
                <span className="terminal-gradient bg-clip-text text-transparent">
                  /AI_SYSTEMS
                </span>
              </h1>

              <div className="flex items-center gap-3 text-zinc-400 font-mono text-sm">
                <div className="h-px w-12 bg-cyan-400"></div>
                <span>ENGINEERING THE FUTURE</span>
              </div>
            </div>

            {/* Description */}
            <div className="max-w-xl space-y-4">
              <p className="text-lg text-zinc-300 leading-relaxed">
                Co-founding{" "}
                <span className="text-cyan-400 font-semibold">EndorphinIT</span>{" "}
                and architecting{" "}
                <span className="text-emerald-400 font-semibold">Xmation</span>{" "}
                — next-generation AI automation systems transforming enterprise
                operations.
              </p>
              <p className="text-zinc-500 text-sm font-mono">
                [ 10+ years | 1M+ interactions | 50+ deployments ]
              </p>
            </div>

            {/* CTA Buttons - Command Line Style */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-8 h-14 text-base group transition-all duration-300"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Terminal className="mr-2 w-5 h-5" />
                INITIATE_CONTACT
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-emerald-500/50 hover:bg-emerald-500/10 text-emerald-400 font-bold px-8 h-14 text-base group transition-all duration-300"
                onClick={() =>
                  document
                    .getElementById("company")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Code2 className="mr-2 w-5 h-5" />
                VIEW_SYSTEMS
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Tech stack indicators */}
            <div className="flex flex-wrap gap-3">
              {[
                "MACHINE_LEARNING",
                "NEURAL_NETWORKS",
                "AUTOMATION",
                "AI_STRATEGY",
              ].map((tech) => (
                <div
                  key={tech}
                  className="px-4 py-2 bg-zinc-900 border border-zinc-800 hover:border-cyan-500/50 transition-colors font-mono text-xs text-zinc-400 hover:text-cyan-400"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Terminal Window */}
          <div className="flex-1 lg:w-2/5 flex flex-col justify-center">
            <div className="terminal-window">
              {/* Terminal Header */}
              <div className="terminal-header">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                </div>
                <div className="text-xs text-zinc-500 font-mono">
                  system@endorphinit:~$
                </div>
              </div>

              {/* Terminal Content */}
              <div className="p-6 space-y-4 font-mono text-sm">
                <div className="space-y-2">
                  <div className="text-zinc-500">
                    <span className="text-emerald-400">$</span> cat profile.json
                  </div>
                  <div className="pl-4 text-zinc-400 space-y-1">
                    <div className="flex gap-2">
                      <span className="text-cyan-400">"name":</span>
                      <span className="text-emerald-400">
                        "Pavel Dovhomilja"
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-cyan-400">"role":</span>
                      <span className="text-emerald-400">
                        "CTO | CO-FOUNDER"
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-cyan-400">"company":</span>
                      <span className="text-emerald-400">"EndorphinIT"</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-cyan-400">"status":</span>
                      <span className="text-emerald-400">
                        "Building Future"
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-zinc-500">
                    <span className="text-emerald-400">$</span> ./get_metrics.sh
                  </div>
                  <div className="pl-4 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-zinc-500">EXPERIENCE</span>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-24 bg-zinc-800 rounded-full overflow-hidden">
                          <div className="h-full w-full bg-gradient-to-r from-cyan-500 to-emerald-500"></div>
                        </div>
                        <span className="text-cyan-400 font-bold">10Y+</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-zinc-500">AI_DEPLOYMENTS</span>
                      <span className="text-emerald-400 font-bold">50+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-zinc-500">INTERACTIONS</span>
                      <span className="text-cyan-400 font-bold">1M+</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-800">
                  <div className="relative w-full h-64 overflow-hidden border-2 border-cyan-500/30 hover:border-cyan-500/50 transition-all bg-zinc-900">
                    <Image
                      src="/images/web.jpeg"
                      alt="Pavel Dovhomilja"
                      fill
                      className="object-contain"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-zinc-950/90 border-t border-cyan-500/30">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-cyan-400">IMG_PROFILE.JPG</span>
                        <span className="text-zinc-500">2024</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-emerald-400 animate-pulse">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span className="text-xs">SYSTEM_READY</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs font-mono text-zinc-600">SCROLL</span>
          <div className="w-0.5 h-12 bg-gradient-to-b from-cyan-500 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
