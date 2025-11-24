"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Mail,
  Linkedin,
  Calendar,
  CheckCircle,
  AlertCircle,
  Loader2,
  Github,
  Twitter,
  Terminal,
  ChevronRight,
  MapPin,
  Clock,
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

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        inquiryType: "general",
      });

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
    { value: "general", label: "GENERAL_INQUIRY" },
    { value: "business", label: "BUSINESS_PARTNERSHIP" },
    { value: "speaking", label: "SPEAKING_ENGAGEMENT" },
    { value: "media", label: "MEDIA_PRESS" },
    { value: "demo", label: "XMATION_DEMO" },
  ];

  const contactMethods = [
    {
      icon: Mail,
      label: "EMAIL",
      value: "pavel@dovhomilja.com",
      action: "mailto:pavel@dovhomilja.com",
    },
    {
      icon: Linkedin,
      label: "LINKEDIN",
      value: "/in/paveldovhomilja",
      action: "https://www.linkedin.com/in/paveldovhomilja/",
    },
    {
      icon: Calendar,
      label: "SCHEDULE_CALL",
      value: "30min_meeting",
      action: "https://cal.com/paveldovhomilja/30min",
    },
  ];

  const socialLinks = [
    { icon: Twitter, url: "https://twitter.com/dovhomilja", label: "Twitter" },
    { icon: Github, url: "https://github.com/pdovhomilja", label: "GitHub" },
    { icon: Linkedin, url: "https://www.linkedin.com/in/paveldovhomilja/", label: "LinkedIn" },
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-zinc-950">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-cyan-500/5 to-zinc-950"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="font-mono text-sm text-cyan-400 mb-4">
            <span className="text-zinc-600">$</span> ./initiate_contact.sh
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
            <span className="text-white">CONTACT</span>
            <span className="terminal-gradient bg-clip-text text-transparent"> /ESTABLISH_CONNECTION</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-emerald-500 mb-6"></div>
          <p className="text-zinc-400 max-w-3xl font-mono text-sm">
            Ready to explore AI solutions, discuss partnerships, or speaking opportunities?
            <br />
            <span className="text-cyan-400">SYSTEM_STATUS: ACCEPTING_CONNECTIONS</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Left Sidebar - Contact Methods */}
          <div className="space-y-6">
            {/* Contact Methods Terminal */}
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                </div>
                <div className="text-xs text-zinc-500 font-mono">
                  methods@contact:~$
                </div>
              </div>

              <div className="p-6 space-y-4 font-mono text-xs">
                <div className="text-zinc-500 mb-4">
                  <span className="text-emerald-400">$</span> list --contact-methods
                </div>

                {contactMethods.map((method, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-zinc-900 border border-zinc-800 hover:border-cyan-500/50 transition-all cursor-pointer group"
                    onClick={() => window.open(method.action, "_blank")}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <method.icon className="w-4 h-4 text-cyan-400 group-hover:text-emerald-400 transition-colors" />
                      <span className="text-cyan-400 group-hover:text-emerald-400 transition-colors font-bold">
                        {method.label}
                      </span>
                    </div>
                    <p className="text-zinc-500 pl-7">{method.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Location Info Terminal */}
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                </div>
                <div className="text-xs text-zinc-500 font-mono">
                  location@info:~$
                </div>
              </div>

              <div className="p-6 space-y-3 font-mono text-xs">
                <div className="flex items-center gap-2 text-zinc-400">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span>TIMEZONE: CET (UTC+1)</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-400">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>LOCATION: PRAGUE, CZ</span>
                </div>
                <div className="pt-3 border-t border-zinc-800 text-zinc-600">
                  Response time: ~24h on business days
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                </div>
                <div className="text-xs text-zinc-500 font-mono">
                  social@links:~$
                </div>
              </div>

              <div className="p-6 font-mono text-xs">
                <div className="text-zinc-500 mb-4">
                  <span className="text-emerald-400">$</span> connect --social
                </div>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <button
                      key={social.label}
                      className="p-3 bg-zinc-900 border border-zinc-800 hover:border-cyan-500/50 transition-all group"
                      onClick={() => window.open(social.url, "_blank")}
                    >
                      <social.icon className="w-4 h-4 text-zinc-400 group-hover:text-cyan-400 transition-colors" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="lg:col-span-2">
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                </div>
                <div className="text-xs text-zinc-500 font-mono">
                  message@form:~$
                </div>
              </div>

              <div className="p-6">
                <div className="font-mono text-sm text-zinc-500 mb-6">
                  <span className="text-emerald-400">$</span> send_message --interactive
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Inquiry Type */}
                  <div>
                    <Label className="text-xs font-mono text-cyan-400 mb-3 block">
                      SELECT_INQUIRY_TYPE:
                    </Label>
                    <div className="grid grid-cols-2 gap-2">
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
                          className={`p-3 border font-mono text-xs transition-all ${
                            formData.inquiryType === type.value
                              ? "border-cyan-500 bg-cyan-500/10 text-cyan-400"
                              : "border-zinc-800 bg-zinc-900 text-zinc-500 hover:border-zinc-700"
                          }`}
                        >
                          {type.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Form Fields */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-xs font-mono text-zinc-400">
                        NAME:
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="your_name"
                        className="mt-1 bg-zinc-900 border-zinc-800 text-white font-mono text-sm focus:border-cyan-500"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-xs font-mono text-zinc-400">
                        EMAIL:
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your@email.com"
                        className="mt-1 bg-zinc-900 border-zinc-800 text-white font-mono text-sm focus:border-cyan-500"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-xs font-mono text-zinc-400">
                      SUBJECT:
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="brief_subject_line"
                      className="mt-1 bg-zinc-900 border-zinc-800 text-white font-mono text-sm focus:border-cyan-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-xs font-mono text-zinc-400">
                      MESSAGE:
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="your_message_here..."
                      rows={6}
                      className="mt-1 resize-none bg-zinc-900 border-zinc-800 text-white font-mono text-sm focus:border-cyan-500"
                    />
                  </div>

                  {/* Status Messages */}
                  {submitStatus === "success" && (
                    <div className="flex items-center gap-2 p-4 bg-emerald-500/10 border border-emerald-500/50 font-mono text-xs">
                      <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <div>
                        <p className="text-emerald-400 font-bold">
                          [SUCCESS] MESSAGE_SENT
                        </p>
                        <p className="text-emerald-600 text-xs">
                          Response expected within 24h
                        </p>
                      </div>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/50 font-mono text-xs">
                      <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                      <div>
                        <p className="text-red-400 font-bold">
                          [ERROR] TRANSMISSION_FAILED
                        </p>
                        <p className="text-red-600 text-xs">
                          {errorMessage || "Try direct email instead"}
                        </p>
                      </div>
                    </div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting || submitStatus === "success"}
                    className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold font-mono disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        TRANSMITTING...
                      </>
                    ) : submitStatus === "success" ? (
                      <>
                        <CheckCircle className="w-4 h-4 mr-2" />
                        MESSAGE_SENT
                      </>
                    ) : (
                      <>
                        <Terminal className="w-4 h-4 mr-2" />
                        SEND_MESSAGE
                        <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-zinc-600 text-center font-mono">
                    [DATA_PROTECTED] Your information will never be shared
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-zinc-800 text-center">
          <p className="text-zinc-600 font-mono text-xs">
            © 2024 PAVEL_DOVHOMILJA // BUILDING_AI_FUTURE
          </p>
        </div>
      </div>
    </section>
  );
}
