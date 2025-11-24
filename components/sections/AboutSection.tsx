"use client";

import { Terminal, ChevronRight, Check } from "lucide-react";

export function AboutSection() {
  const expertise = [
    { category: "AI_ARCHITECTURE", level: "EXPERT", years: "10+" },
    { category: "MACHINE_LEARNING", level: "EXPERT", years: "10+" },
    { category: "NEURAL_NETWORKS", level: "ADVANCED", years: "8+" },
    { category: "AUTOMATION", level: "EXPERT", years: "12+" },
    { category: "TEAM_LEADERSHIP", level: "EXPERT", years: "10+" },
    { category: "PRODUCT_STRATEGY", level: "ADVANCED", years: "8+" },
  ];

  const achievements = [
    "CO-FOUNDER @ ENDORPHINIT",
    "LEAD_ARCHITECT @ XMATION",
    "1M+ AI_INTERACTIONS_HANDLED",
    "50+ ENTERPRISE_DEPLOYMENTS",
    "15+ TEAM_MEMBERS_LEADING",
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden bg-zinc-950">
      {/* Technical Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-cyan-500/5 to-zinc-950"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header - Terminal Style */}
          <div className="mb-16">
            <div className="font-mono text-sm text-cyan-400 mb-4">
              <span className="text-zinc-600">$</span> ./get_profile.sh --detailed
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
              <span className="text-white">PROFILE</span>
              <span className="terminal-gradient bg-clip-text text-transparent"> /EXECUTIVE_SUMMARY</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-emerald-500"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Main Bio Terminal */}
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                </div>
                <div className="text-xs text-zinc-500 font-mono">
                  bio@dovhomilja:~$
                </div>
              </div>

              <div className="p-6 space-y-4 font-mono text-sm">
                <div className="text-zinc-500">
                  <span className="text-emerald-400">$</span> cat mission.txt
                </div>
                <div className="pl-4 text-zinc-300 leading-relaxed space-y-3 text-base">
                  <p>
                    <span className="text-cyan-400">[MISSION]</span> Pioneering the next generation
                    of AI automation systems that transform enterprise operations.
                  </p>
                  <p>
                    <span className="text-emerald-400">[VISION]</span> Creating intelligent systems
                    that augment human capabilities rather than replacing them—fostering innovation
                    across industries.
                  </p>
                  <p className="text-zinc-500 text-sm">
                    &quot;AI should empower human potential, not replace it.&quot;
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-800">
                  <div className="text-zinc-500 mb-3">
                    <span className="text-emerald-400">$</span> ls achievements/
                  </div>
                  <div className="pl-4 space-y-2">
                    {achievements.map((achievement, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 text-zinc-400 hover:text-cyan-400 transition-colors"
                      >
                        <ChevronRight className="w-3 h-3 text-emerald-400" />
                        <span className="text-xs">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Expertise Matrix Terminal */}
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                </div>
                <div className="text-xs text-zinc-500 font-mono">
                  skills@matrix:~$
                </div>
              </div>

              <div className="p-6 space-y-4 font-mono text-sm">
                <div className="text-zinc-500">
                  <span className="text-emerald-400">$</span> analyze --expertise-matrix
                </div>

                <div className="space-y-3">
                  {expertise.map((skill, index) => (
                    <div
                      key={index}
                      className="pl-4 space-y-1"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-cyan-400 text-xs">{skill.category}</span>
                        <span className="text-zinc-600 text-xs">{skill.years}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-2 bg-zinc-900 rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r from-cyan-500 to-emerald-500 transition-all duration-1000 ${
                              skill.level === "EXPERT" ? "w-full" : "w-4/5"
                            }`}
                          ></div>
                        </div>
                        <span className="text-emerald-400 text-xs font-bold min-w-[60px]">
                          {skill.level}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-zinc-800">
                  <div className="text-zinc-500 mb-3">
                    <span className="text-emerald-400">$</span> ./verify_credentials.sh
                  </div>
                  <div className="pl-4 space-y-2">
                    <div className="flex items-center gap-2 text-emerald-400 text-xs">
                      <Check className="w-3 h-3" />
                      <span>AI_SYSTEMS_ARCHITECT [VERIFIED]</span>
                    </div>
                    <div className="flex items-center gap-2 text-emerald-400 text-xs">
                      <Check className="w-3 h-3" />
                      <span>ENTERPRISE_DEPLOYMENT [CERTIFIED]</span>
                    </div>
                    <div className="flex items-center gap-2 text-emerald-400 text-xs">
                      <Check className="w-3 h-3" />
                      <span>TEAM_LEADERSHIP [VALIDATED]</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-emerald-400 animate-pulse pt-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span className="text-xs">STATUS: ACTIVE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack - Command Line Output */}
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              </div>
              <div className="text-xs text-zinc-500 font-mono">
                tech@stack:~$
              </div>
            </div>

            <div className="p-6 font-mono text-sm">
              <div className="text-zinc-500 mb-4">
                <span className="text-emerald-400">$</span> list --core-competencies
              </div>
              <div className="flex flex-wrap gap-2 pl-4">
                {[
                  "MACHINE_LEARNING",
                  "NEURAL_NETWORKS",
                  "NLP_PROCESSING",
                  "AUTOMATION_FRAMEWORKS",
                  "AI_STRATEGY",
                  "PRODUCT_DEVELOPMENT",
                  "ENTERPRISE_ARCHITECTURE",
                  "TEAM_BUILDING",
                  "INNOVATION_MANAGEMENT",
                  "BUSINESS_SCALING",
                ].map((tech, index) => (
                  <div
                    key={index}
                    className="px-3 py-1 bg-zinc-900 border border-zinc-800 hover:border-cyan-500/50 transition-colors text-xs text-zinc-400 hover:text-cyan-400"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}