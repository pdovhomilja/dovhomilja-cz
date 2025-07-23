"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Rocket, Users, Target, Lightbulb } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-slide-up">
            <Badge variant="outline" className="mb-4">
              About Pavel
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Visionary Leader in
              <span className="gradient-text"> AI Innovation</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A passionate entrepreneur dedicated to transforming how businesses operate 
              through intelligent automation and cutting-edge AI solutions.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Left Column - Story */}
            <div className="space-y-6 animate-slide-up">
              <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-blue-500/10 rounded-lg">
                      <Rocket className="w-6 h-6 text-blue-500" />
                    </div>
                    <h3 className="text-xl font-semibold">Entrepreneurial Journey</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    As co-founder of EndorphinIT, Pavel has been at the forefront of the AI revolution, 
                    building solutions that bridge the gap between human creativity and artificial intelligence.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    His vision extends beyond technology—he&apos;s creating a future where AI empowers 
                    human potential rather than replacing it, fostering innovation across industries.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-purple-500/10 rounded-lg">
                      <Brain className="w-6 h-6 text-purple-500" />
                    </div>
                    <h3 className="text-xl font-semibold">AI Expertise</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    With deep expertise in machine learning, natural language processing, and 
                    automation frameworks, Pavel leads the development of Xmation—an AI employee 
                    platform that&apos;s revolutionizing workplace productivity and efficiency.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Values & Approach */}
            <div className="space-y-6 animate-slide-up">
              <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-green-500/10 rounded-lg">
                      <Target className="w-6 h-6 text-green-500" />
                    </div>
                    <h3 className="text-xl font-semibold">Vision & Mission</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    &quot;I believe AI should augment human capabilities, not replace them. Our mission 
                    is to create intelligent systems that empower people to focus on what they do best—innovate, 
                    create, and solve complex problems.&quot;
                  </p>
                  <div className="text-sm text-muted-foreground italic">
                    — Pavel Dovhomilja, Co-founder EndorphinIT
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-2 gap-4">
                <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="p-3 bg-orange-500/10 rounded-lg w-fit mx-auto mb-4">
                      <Users className="w-6 h-6 text-orange-500" />
                    </div>
                    <h4 className="font-semibold mb-2">Team Leadership</h4>
                    <p className="text-sm text-muted-foreground">
                      Building and inspiring world-class AI teams
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="p-3 bg-pink-500/10 rounded-lg w-fit mx-auto mb-4">
                      <Lightbulb className="w-6 h-6 text-pink-500" />
                    </div>
                    <h4 className="font-semibold mb-2">Innovation Focus</h4>
                    <p className="text-sm text-muted-foreground">
                      Pushing boundaries of what&apos;s possible with AI
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Core Competencies */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-center mb-8">Core Competencies</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                "Machine Learning",
                "AI Strategy",
                "Product Development",
                "Team Leadership",
                "Business Innovation",
                "Technology Vision"
              ].map((skill, index) => (
                <div
                  key={skill}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 
                           rounded-lg p-4 text-center border border-border/50 hover:shadow-lg transition-all duration-300
                           hover:scale-105 cursor-default"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-sm font-medium">{skill}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}