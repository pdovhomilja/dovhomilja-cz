"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary/20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20">
                <Sparkles className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                  AI Industry Pioneer
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Transforming Business
                <br />
                <span className="gradient-text">with AI Innovation</span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Co-founder of EndorphinIT, pioneering the future of workplace
                automation through Xmation AI employee platform. Building
                intelligent solutions that revolutionize how businesses operate.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="gradient-bg text-white hover:opacity-90 transition-all duration-300 group"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Let&apos;s Connect
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 hover:bg-secondary/50 transition-all duration-300 group"
                onClick={() =>
                  document
                    .getElementById("company")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Zap className="mr-2 w-4 h-4 group-hover:rotate-12 transition-transform" />
                Explore Xmation
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-border/50">
              <div className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold gradient-text">
                  10+
                </div>
                <div className="text-sm text-muted-foreground">
                  Years in Tech
                </div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold gradient-text">
                  1M+
                </div>
                <div className="text-sm text-muted-foreground">
                  AI Interactions
                </div>
              </div>
              <div className="text-center sm:text-left col-span-2 sm:col-span-1">
                <div className="text-2xl sm:text-3xl font-bold gradient-text">
                  50+
                </div>
                <div className="text-sm text-muted-foreground">
                  Businesses Transformed
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative animate-fade-in">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Decorative Elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl"></div>

              {/* Profile Image Container */}
              <div className="relative bg-card rounded-2xl p-6 shadow-2xl border border-border/50">
                <div className="aspect-square relative rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30">
                  {/* Placeholder for professional headshot */}
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30">
                    <div className="text-6xl font-bold gradient-text">
                      <Image
                        src="/images/web.jpeg"
                        alt="Pavel Dovhomilja"
                        fill
                      />
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/90 rounded-full p-2 shadow-lg">
                    <Sparkles className="w-4 h-4 text-blue-500" />
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-black/90 rounded-full p-2 shadow-lg">
                    <Zap className="w-4 h-4 text-purple-500" />
                  </div>
                </div>

                {/* Name Badge */}
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-semibold">Pavel Dovhomilja</h3>
                  <p className="text-muted-foreground">
                    Co-founder, EndorphinIT
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground/30 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
