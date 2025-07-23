"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Mail,
  Linkedin,
  Calendar,
  MessageSquare,
  Send,
  ExternalLink,
  MapPin,
  Clock,
  Github,
  Twitter,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    inquiryType: "general",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send email");
      }

      // Success
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        inquiryType: "general",
      });

      // Auto-clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "An unexpected error occurred"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const inquiryTypes = [
    {
      value: "general",
      label: "General Inquiry",
      description: "Questions or general information",
    },
    {
      value: "business",
      label: "Business Partnership",
      description: "Collaboration opportunities",
    },
    {
      value: "speaking",
      label: "Speaking Engagement",
      description: "Conference or event speaking",
    },
    {
      value: "media",
      label: "Media & Press",
      description: "Interview or media requests",
    },
    {
      value: "demo",
      label: "Xmation Demo",
      description: "Product demonstration request",
    },
  ];

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "pavel@dovhomilja.com",
      description: "Best for detailed inquiries",
      action: "mailto:pavel@dovhomilja.com",
      color: "blue",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "/in/paveldovhomilja",
      description: "Professional networking",
      action: "https://www.linkedin.com/in/paveldovhomilja/",
      color: "blue",
    },
    {
      icon: Calendar,
      title: "Schedule Meeting",
      value: "Book 30-min call",
      description: "Available weekdays 9-17 CET",
      action: "https://cal.com/paveldovhomilja/30min", // Placeholder for Calendly integration
      color: "green",
    },
    /*     {
      icon: Phone,
      title: "Phone",
      value: "+420 123 456 789",
      description: "Business hours only",
      action: "tel:+420123456789",
      color: "orange",
    }, */
  ];

  const socialLinks = [
    { icon: Twitter, url: "https://twitter.com/dovhomilja", label: "Twitter" },
    { icon: Github, url: "https://github.com/pdovhomilja", label: "GitHub" },
    {
      icon: Linkedin,
      url: "https://www.linkedin.com/in/paveldovhomilja/",
      label: "LinkedIn",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <Badge variant="outline" className="mb-4">
            Get In Touch
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Let&apos;s
            <span className="gradient-text"> Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to explore AI solutions for your business, discuss
            partnerships, or explore speaking opportunities? I&apos;d love to
            hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Methods */}
          <div className="space-y-6 animate-slide-up">
            <h3 className="text-xl font-semibold mb-6">Contact Methods</h3>

            {contactMethods.map((method, index) => (
              <Card
                key={method.title}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur-sm group cursor-pointer"
                onClick={() => window.open(method.action, "_blank")}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-3 bg-${method.color}-500/10 rounded-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <method.icon
                        className={`w-5 h-5 text-${method.color}-500`}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold">{method.title}</h4>
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-1">
                        {method.value}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {method.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Quick Info */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Location & Availability
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span>CET Timezone (UTC+1)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span>Prague, Czech Republic</span>
                  </div>
                  <Separator className="my-3" />
                  <p className="text-muted-foreground text-xs">
                    I typically respond within 24 hours during business days.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4">Follow & Connect</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <Button
                    key={social.label}
                    variant="outline"
                    size="sm"
                    className="p-2 hover:scale-110 transition-transform duration-300"
                    onClick={() => window.open(social.url, "_blank")}
                  >
                    <social.icon className="w-4 h-4" />
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-slide-up">
            <Card className="border-0 shadow-xl bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Send a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and I&apos;ll get back to you as soon
                  as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Inquiry Type Selection */}
                  <div>
                    <Label className="text-sm font-medium mb-3 block">
                      What&apos;s this about?
                    </Label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {inquiryTypes.map((type) => (
                        <button
                          key={type.value}
                          type="button"
                          onClick={() =>
                            setFormData((prev) => ({
                              ...prev,
                              inquiryType: type.value,
                            }))
                          }
                          className={`p-3 rounded-lg border text-left transition-all duration-300 hover:shadow-md ${
                            formData.inquiryType === type.value
                              ? "border-blue-500 bg-blue-50/50 dark:bg-blue-950/20"
                              : "border-border hover:border-blue-300"
                          }`}
                        >
                          <div className="font-medium text-sm">
                            {type.label}
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">
                            {type.description}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Form Fields */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your full name"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your@email.com"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="Brief subject line"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Tell me more about what you'd like to discuss..."
                      rows={6}
                      className="mt-1 resize-none"
                    />
                  </div>

                  {/* Status Messages */}
                  {submitStatus === "success" && (
                    <div className="flex items-center gap-2 p-4 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                      <div>
                        <p className="text-green-800 dark:text-green-200 font-medium">
                          Message sent successfully!
                        </p>
                        <p className="text-green-700 dark:text-green-300 text-sm">
                          Thank you for reaching out. I&apos;ll get back to you
                          within 24 hours.
                        </p>
                      </div>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="flex items-center gap-2 p-4 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg">
                      <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0" />
                      <div>
                        <p className="text-red-800 dark:text-red-200 font-medium">
                          Failed to send message
                        </p>
                        <p className="text-red-700 dark:text-red-300 text-sm">
                          {errorMessage ||
                            "Please try again or contact me directly via email."}
                        </p>
                      </div>
                    </div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting || submitStatus === "success"}
                    className="w-full gradient-bg text-white hover:opacity-90 transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending Message...
                      </>
                    ) : submitStatus === "success" ? (
                      <>
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Message Sent
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to receive email
                    communications from Pavel Dovhomilja. Your information will
                    never be shared with third parties.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-border/50 text-center animate-fade-in">
          <p className="text-muted-foreground">
            © 2024 Pavel Dovhomilja. Building the future of AI-powered business
            automation.
          </p>
        </div>
      </div>
    </section>
  );
}
