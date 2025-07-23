"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Bot,
  Shield,
  Workflow,
  ArrowRight,
  Building2,
  Cpu,
  Globe,
  TrendingUp,
} from "lucide-react";
import { useRouter } from "next/navigation";

export function CompanySection() {
  const router = useRouter();
  return (
    <section id="company" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <Badge variant="outline" className="mb-4">
            Company Showcase
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            <span className="gradient-text">EndorphinIT</span> & Xmation
            Platform
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pioneering the future of workplace automation with cutting-edge AI
            employee solutions that transform how businesses operate and scale.
          </p>
        </div>

        {/* Company Overview */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="animate-slide-up">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-blue-500/10 rounded-xl">
                    <Building2 className="w-8 h-8 text-blue-500" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">EndorphinIT</CardTitle>
                    <p className="text-muted-foreground">
                      AI Innovation Company
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Founded with a vision to democratize AI capabilities,
                  EndorphinIT develops intelligent automation solutions that
                  seamlessly integrate into existing business workflows,
                  enhancing productivity without disrupting operations.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white/50 dark:bg-black/20 rounded-lg">
                    <div className="text-2xl font-bold gradient-text">2023</div>
                    <div className="text-sm text-muted-foreground">Founded</div>
                  </div>
                  <div className="text-center p-4 bg-white/50 dark:bg-black/20 rounded-lg">
                    <div className="text-2xl font-bold gradient-text">15+</div>
                    <div className="text-sm text-muted-foreground">
                      Team Members
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="animate-slide-up">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/20 dark:to-pink-950/20">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-purple-500/10 rounded-xl">
                    <Bot className="w-8 h-8 text-purple-500" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Xmation Platform</CardTitle>
                    <p className="text-muted-foreground">
                      AI Employee Solution
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Our flagship AI employee platform that provides businesses
                  with intelligent virtual workers capable of handling complex
                  tasks, learning from interactions, and continuously improving
                  performance.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white/50 dark:bg-black/20 rounded-lg">
                    <div className="text-2xl font-bold gradient-text">24/7</div>
                    <div className="text-sm text-muted-foreground">
                      Operation
                    </div>
                  </div>
                  <div className="text-center p-4 bg-white/50 dark:bg-black/20 rounded-lg">
                    <div className="text-2xl font-bold gradient-text">
                      99.9%
                    </div>
                    <div className="text-sm text-muted-foreground">Uptime</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12">
            Platform Capabilities
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Workflow,
                title: "Process Automation",
                description:
                  "Streamline complex workflows with intelligent automation",
                color: "blue",
              },
              {
                icon: Cpu,
                title: "Smart Analytics",
                description: "Advanced data processing and insights generation",
                color: "purple",
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Bank-grade security with compliance standards",
                color: "green",
              },
              {
                icon: TrendingUp,
                title: "Scalable Growth",
                description: "Grows with your business needs and demands",
                color: "orange",
              },
            ].map((feature, index) => (
              <Card
                key={feature.title}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`p-3 bg-${feature.color}-500/10 rounded-xl w-fit mx-auto mb-4`}
                  >
                    <feature.icon
                      className={`w-6 h-6 text-${feature.color}-500`}
                    />
                  </div>
                  <h4 className="font-semibold mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-8">Real-World Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="animate-scale-in">
              <div className="text-4xl font-bold gradient-text mb-2">85%</div>
              <div className="text-muted-foreground">Efficiency Increase</div>
              <p className="text-sm text-muted-foreground mt-2">
                Average productivity boost across client implementations
              </p>
            </div>
            <div
              className="animate-scale-in"
              style={{ animationDelay: "200ms" }}
            >
              <div className="text-4xl font-bold gradient-text mb-2">$2M+</div>
              <div className="text-muted-foreground">Cost Savings</div>
              <p className="text-sm text-muted-foreground mt-2">
                Total operational costs reduced for our clients
              </p>
            </div>
            <div
              className="animate-scale-in"
              style={{ animationDelay: "400ms" }}
            >
              <div className="text-4xl font-bold gradient-text mb-2">48hrs</div>
              <div className="text-muted-foreground">Setup Time</div>
              <p className="text-sm text-muted-foreground mt-2">
                Average time to full platform deployment
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in">
          <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <Globe className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-4">
                Ready to Transform Your Business?
              </h4>
              <p className="text-muted-foreground mb-6">
                Discover how Xmation can revolutionize your operations with
                intelligent automation.
              </p>
              <Button
                size="lg"
                className="gradient-bg text-white hover:opacity-90 transition-all duration-300 group"
                onClick={() => router.push("https://xmation.ai")}
              >
                Visit Xmation Platform
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
