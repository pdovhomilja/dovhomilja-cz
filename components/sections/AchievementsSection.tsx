"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  TrendingUp, 
  Users, 
  Mic, 
  BookOpen, 
  Star,
  ExternalLink
} from "lucide-react";

export function AchievementsSection() {
  const achievements = [
    {
      icon: Award,
      title: "AI Innovation Award",
      organization: "Tech Innovation Summit 2024",
      description: "Recognized for breakthrough developments in AI employee automation",
      date: "2024",
      type: "recognition",
      color: "blue"
    },
    {
      icon: TrendingUp,
      title: "50+ Business Transformations",
      organization: "Client Success Metrics",
      description: "Successfully implemented AI solutions across diverse industry sectors",
      date: "2023-2024",
      type: "milestone",
      color: "green"
    },
    {
      icon: Users,
      title: "AI Leadership Council",
      organization: "European AI Consortium",
      description: "Advisory role in shaping ethical AI development standards",
      date: "2024",
      type: "leadership",
      color: "purple"
    },
    {
      icon: Mic,
      title: "Keynote Speaker",
      organization: "AI & Future of Work Conference",
      description: "Presented on 'The Human-AI Collaboration Revolution'",
      date: "2024",
      type: "speaking",
      color: "orange"
    }
  ];

  const thoughtLeadership = [
    {
      title: "The Future of AI in Workplace Automation",
      type: "Article",
      platform: "AI Today Magazine",
      description: "Exploring how AI employees will reshape business operations"
    },
    {
      title: "Building Ethical AI Systems",
      type: "Whitepaper",
      platform: "EndorphinIT Research",
      description: "Framework for responsible AI development and deployment"
    },
    {
      title: "AI Implementation Strategies",
      type: "Webinar Series",
      platform: "Tech Leaders Forum",
      description: "5-part series on successful AI integration in enterprises"
    }
  ];

  const metrics = [
    {
      value: "1M+",
      label: "AI Interactions Processed",
      description: "Through Xmation platform deployments"
    },
    {
      value: "$2M+",
      label: "Client Cost Savings",
      description: "Operational efficiency improvements"
    },
    {
      value: "15+",
      label: "Industry Sectors",
      description: "Successfully served with AI solutions"
    },
    {
      value: "99.9%",
      label: "Platform Uptime",
      description: "Reliability across all deployments"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <Badge variant="outline" className="mb-4">
            Professional Achievements
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Recognition &
            <span className="gradient-text"> Impact</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A track record of innovation, leadership, and meaningful contributions 
            to the AI industry and business transformation landscape.
          </p>
        </div>

        {/* Key Achievements */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12">Notable Achievements</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <Card 
                key={achievement.title}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur-sm animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 bg-${achievement.color}-500/10 rounded-xl flex-shrink-0`}>
                      <achievement.icon className={`w-6 h-6 text-${achievement.color}-500`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-semibold text-lg">{achievement.title}</h4>
                        <Badge variant="secondary" className="text-xs">
                          {achievement.date}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2 font-medium">
                        {achievement.organization}
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12">Impact Metrics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <Card 
                key={metric.label}
                className="border-0 shadow-lg bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800/50 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {metric.value}
                  </div>
                  <div className="font-semibold mb-2">{metric.label}</div>
                  <p className="text-sm text-muted-foreground">
                    {metric.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Thought Leadership */}
        <div className="animate-fade-in">
          <h3 className="text-2xl font-bold text-center mb-12">Thought Leadership</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {thoughtLeadership.map((item, index) => (
              <Card 
                key={item.title}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur-sm group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="w-5 h-5 text-blue-500" />
                    <Badge variant="outline" className="text-xs">
                      {item.type}
                    </Badge>
                  </div>
                  <h4 className="font-semibold mb-2 group-hover:gradient-text transition-all duration-300">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3 font-medium">
                    {item.platform}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-1 mt-4 text-blue-500 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Read more</span>
                    <ExternalLink className="w-3 h-3" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Professional Recognition */}
        <div className="mt-20 text-center animate-slide-up">
          <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20 max-w-3xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Star className="w-6 h-6 text-yellow-500 fill-current" />
                <Star className="w-6 h-6 text-yellow-500 fill-current" />
                <Star className="w-6 h-6 text-yellow-500 fill-current" />
                <Star className="w-6 h-6 text-yellow-500 fill-current" />
                <Star className="w-6 h-6 text-yellow-500 fill-current" />
              </div>
              <blockquote className="text-lg italic text-muted-foreground mb-4">
                &quot;Pavel&apos;s vision and technical expertise have been instrumental in advancing 
                our understanding of AI&apos;s potential in business transformation. A true innovator 
                and thought leader in the field.&quot;
              </blockquote>
              <div className="text-sm">
                <div className="font-semibold">Dr. Sarah Chen</div>
                <div className="text-muted-foreground">Director, AI Research Institute</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}