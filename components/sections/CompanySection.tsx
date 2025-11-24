"use client";

import { Button } from "@/components/ui/button";
import {
  Building2,
  Bot,
  Activity,
  Server,
  TrendingUp,
  Shield,
  Zap,
  ChevronRight,
} from "lucide-react";
import { useRouter } from "next/navigation";

export function CompanySection() {
  const router = useRouter();

  const endorphinMetrics = [
    { label: "FOUNDED", value: "2023", unit: "" },
    { label: "TEAM_SIZE", value: "15", unit: "+" },
    { label: "FOCUS", value: "AI_INNOVATION", unit: "" },
  ];

  const xmationMetrics = [
    { label: "UPTIME", value: "99.9", unit: "%" },
    { label: "OPERATION", value: "24/7", unit: "" },
    { label: "DEPLOYMENTS", value: "50", unit: "+" },
  ];

  const capabilities = [
    { icon: Zap, label: "PROCESS_AUTOMATION", desc: "Intelligent workflow optimization" },
    { icon: Activity, label: "SMART_ANALYTICS", desc: "Real-time data processing" },
    { icon: Shield, label: "ENTERPRISE_SECURITY", desc: "Bank-grade protection" },
    { icon: TrendingUp, label: "SCALABLE_GROWTH", desc: "Dynamic resource scaling" },
  ];

  const impactMetrics = [
    { value: "85%", label: "EFFICIENCY_BOOST", desc: "Average productivity increase" },
    { value: "$2M+", label: "COST_SAVINGS", desc: "Total operational reduction" },
    { value: "48hrs", label: "DEPLOYMENT", desc: "Average setup time" },
  ];

  return (
    <section id="company" className="py-32 relative overflow-hidden bg-zinc-950">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-emerald-500/5 to-zinc-950"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="font-mono text-sm text-cyan-400 mb-4">
            <span className="text-zinc-600">$</span> ./show_portfolio.sh --companies
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
            <span className="text-white">VENTURES</span>
            <span className="terminal-gradient bg-clip-text text-transparent"> /ENTERPRISE_SYSTEMS</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-emerald-500"></div>
        </div>

        {/* Company Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto">
          {/* EndorphinIT Terminal */}
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              </div>
              <div className="text-xs text-zinc-500 font-mono">
                endorphinit@company:~$
              </div>
            </div>

            <div className="p-6 space-y-4 font-mono text-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-cyan-500/10 rounded-lg">
                  <Building2 className="w-8 h-8 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">ENDORPHINIT</h3>
                  <p className="text-xs text-zinc-500">AI_INNOVATION_COMPANY</p>
                </div>
              </div>

              <div className="text-zinc-500 mb-2">
                <span className="text-emerald-400">$</span> cat company_info.txt
              </div>

              <div className="pl-4 text-zinc-400 leading-relaxed text-xs space-y-2">
                <p>
                  Democratizing AI capabilities through intelligent automation
                  solutions that seamlessly integrate into existing business
                  workflows—enhancing productivity without disrupting operations.
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-800">
                <div className="grid grid-cols-3 gap-4">
                  {endorphinMetrics.map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-cyan-400 font-bold text-lg">
                        {metric.value}{metric.unit}
                      </div>
                      <div className="text-zinc-600 text-xs">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 text-cyan-400 animate-pulse pt-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span className="text-xs">STATUS: OPERATIONAL</span>
              </div>
            </div>
          </div>

          {/* Xmation Terminal */}
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              </div>
              <div className="text-xs text-zinc-500 font-mono">
                xmation@platform:~$
              </div>
            </div>

            <div className="p-6 space-y-4 font-mono text-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-emerald-500/10 rounded-lg">
                  <Bot className="w-8 h-8 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">XMATION</h3>
                  <p className="text-xs text-zinc-500">AI_EMPLOYEE_PLATFORM</p>
                </div>
              </div>

              <div className="text-zinc-500 mb-2">
                <span className="text-emerald-400">$</span> cat platform_desc.txt
              </div>

              <div className="pl-4 text-zinc-400 leading-relaxed text-xs space-y-2">
                <p>
                  Flagship AI employee platform providing businesses with
                  intelligent virtual workers capable of handling complex tasks,
                  learning from interactions, and continuously improving performance.
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-800">
                <div className="grid grid-cols-3 gap-4">
                  {xmationMetrics.map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-emerald-400 font-bold text-lg">
                        {metric.value}{metric.unit}
                      </div>
                      <div className="text-zinc-600 text-xs">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 text-emerald-400 animate-pulse pt-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-xs">STATUS: ACTIVE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Capabilities */}
        <div className="mb-16">
          <div className="terminal-window max-w-6xl mx-auto">
            <div className="terminal-header">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              </div>
              <div className="text-xs text-zinc-500 font-mono">
                capabilities@xmation:~$
              </div>
            </div>

            <div className="p-6 font-mono text-sm">
              <div className="text-zinc-500 mb-4">
                <span className="text-emerald-400">$</span> list --platform-capabilities
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 pl-4">
                {capabilities.map((cap, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-zinc-900 border border-zinc-800 hover:border-cyan-500/50 transition-all group"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <cap.icon className="w-5 h-5 text-cyan-400 group-hover:text-emerald-400 transition-colors" />
                      <div className="text-xs text-zinc-400 group-hover:text-cyan-400 transition-colors">
                        {cap.label}
                      </div>
                    </div>
                    <p className="text-xs text-zinc-600 leading-relaxed">{cap.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="mb-16">
          <div className="terminal-window max-w-6xl mx-auto">
            <div className="terminal-header">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              </div>
              <div className="text-xs text-zinc-500 font-mono">
                metrics@impact:~$
              </div>
            </div>

            <div className="p-6 font-mono text-sm">
              <div className="text-zinc-500 mb-6">
                <span className="text-emerald-400">$</span> ./calculate_impact.sh --real-world
              </div>

              <div className="grid md:grid-cols-3 gap-6 pl-4">
                {impactMetrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-zinc-900 border border-zinc-800 hover:border-cyan-500/50 transition-all text-center"
                  >
                    <div className="text-4xl font-bold text-transparent bg-clip-text terminal-gradient mb-3">
                      {metric.value}
                    </div>
                    <div className="text-xs text-cyan-400 font-bold mb-2">{metric.label}</div>
                    <p className="text-xs text-zinc-600">{metric.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="terminal-window max-w-3xl mx-auto">
          <div className="terminal-header">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
            </div>
            <div className="text-xs text-zinc-500 font-mono">
              action@required:~$
            </div>
          </div>

          <div className="p-8 font-mono text-center">
            <div className="inline-flex p-4 bg-cyan-500/10 rounded-lg mb-6">
              <Server className="w-12 h-12 text-cyan-400" />
            </div>
            <h4 className="text-2xl font-bold text-white mb-4">
              READY_TO_TRANSFORM_YOUR_BUSINESS?
            </h4>
            <p className="text-sm text-zinc-400 mb-6 max-w-xl mx-auto">
              Discover how Xmation revolutionizes operations with intelligent
              automation powered by cutting-edge AI systems.
            </p>
            <Button
              size="lg"
              className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-8 h-12 group"
              onClick={() => router.push("https://xmation.ai")}
            >
              VISIT_XMATION_PLATFORM
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
