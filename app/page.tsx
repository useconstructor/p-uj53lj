"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Menu,
  X,
  Play,
  ArrowRight,
  Rocket,
  Users,
  Clock,
  BarChart3,
  Globe,
  Sparkles,
  MessageSquare,
  Zap,
  Shield,
  ChevronDown,
  Star,
  Check,
  Twitter,
  Linkedin,
  Github,
  Mail
} from "lucide-react"

export default function HomePage() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const stats = [
    { icon: Rocket, value: "12,847", label: "Projects launched" },
    { icon: Users, value: "245,000+", label: "Active users" },
    { icon: Clock, value: "3.2M+", label: "Tasks completed" },
    { icon: BarChart3, value: "98.6%", label: "On-time delivery" },
    { icon: Globe, value: "150+", label: "Countries served" }
  ]

  const features = [
    {
      icon: Sparkles,
      title: "AI-Powered Planning",
      subtitle: "Smart planning that adapts to your team",
      description: "AI-powered insights help you estimate, prioritize, and plan projects with unmatched accuracy.",
      large: true
    },
    {
      icon: MessageSquare,
      title: "Real-time Collaboration",
      description: "Work together in real-time with live updates, comments, and seamless communication."
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Get deep insights into team performance, project health, and success metrics."
    },
    {
      icon: Zap,
      title: "Flexible Workflows",
      description: "Customize workflows to match your process, not the other way around."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with SSO, audit logs, and complete data protection."
    }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "VP of Engineering, TechFlow",
      quote: "Project 1788322240795 transformed how our team collaborates. We ship 40% faster now.",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "CTO, InnovateLabs",
      quote: "The best project management tool we've ever used. Period.",
      rating: 5
    },
    {
      name: "Emily Davis",
      role: "Product Manager, GrowthCo",
      quote: "Intuitive, powerful, and beautiful. Everything a PM could ask for.",
      rating: 5
    },
    {
      name: "Alex Rodriguez",
      role: "Head of Operations, ScaleUp",
      quote: "Our productivity has skyrocketed since we made the switch.",
      rating: 5
    }
  ]

  const pricingPlans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for individuals and small projects",
      features: [
        "Up to 3 projects",
        "Basic Kanban boards",
        "7-day activity history",
        "Community support"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Pro",
      price: "$29",
      period: "per user/month",
      description: "For growing teams that need more power",
      features: [
        "Unlimited projects",
        "AI task prioritization",
        "Advanced analytics",
        "Custom workflows",
        "Priority support",
        "Integrations"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "tailored pricing",
      description: "For organizations with advanced needs",
      features: [
        "Everything in Pro",
        "SSO & SAML",
        "Advanced security",
        "Dedicated success manager",
        "Custom integrations",
        "SLA guarantee"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ]

  const faqs = [
    {
      question: "How does the free trial work?",
      answer: "Start with our 14-day free trial of the Pro plan. No credit card required. You'll have full access to all Pro features, and can downgrade to Free or upgrade to Enterprise at any time."
    },
    {
      question: "Can I migrate from other project management tools?",
      answer: "Yes! We offer free migration assistance from popular tools like Asana, Trello, Monday, and Jira. Our team will help you transfer all your projects, tasks, and history seamlessly."
    },
    {
      question: "What integrations are available?",
      answer: "We integrate with 50+ tools including Slack, Google Calendar, GitHub, Figma, Notion, and more. Our API also allows you to build custom integrations for your specific needs."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We use bank-level encryption, are SOC 2 Type II certified, and offer enterprise features like SSO, audit logs, and data residency options. Your data is always yours."
    },
    {
      question: "How does AI task prioritization work?",
      answer: "Our AI analyzes your project history, team velocity, deadlines, and dependencies to automatically suggest task priorities. It learns from your team's patterns to provide increasingly accurate recommendations."
    }
  ]

  return (
    <main className="min-h-screen" style={{ backgroundColor: "#0A0E2F" }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b" style={{ backgroundColor: "rgba(10, 14, 47, 0.8)", borderColor: "rgba(123, 95, 255, 0.2)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #7B5FFF 0%, #5B3FDF 100%)" }}>
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg" style={{ color: "#F5F7FF", fontFamily: "Space Grotesk, sans-serif" }}>
                Project 1788322240795
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="#features" className="text-sm font-medium transition-colors hover:text-white" style={{ color: "#B8B8CC" }}>
                Product
              </Link>
              <Link href="#features" className="text-sm font-medium transition-colors hover:text-white" style={{ color: "#B8B8CC" }}>
                Solutions
              </Link>
              <Link href="#pricing" className="text-sm font-medium transition-colors hover:text-white" style={{ color: "#B8B8CC" }}>
                Pricing
              </Link>
              <Link href="#faq" className="text-sm font-medium transition-colors hover:text-white" style={{ color: "#B8B8CC" }}>
                Resources
              </Link>
              <Link href="#pricing" className="text-sm font-medium transition-colors hover:text-white" style={{ color: "#B8B8CC" }}>
                Enterprise
              </Link>
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <Link href="#pricing" className="text-sm font-medium transition-colors hover:text-white" style={{ color: "#B8B8CC" }}>
                Log in
              </Link>
              <Button 
                className="rounded-full px-5 text-sm font-medium"
                style={{ backgroundColor: "#7B5FFF", color: "#F5F7FF" }}
                asChild
              >
                <Link href="#pricing">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              aria-label="Toggle menu"
            >
              {mobileNavOpen ? (
                <X className="w-6 h-6" style={{ color: "#F5F7FF" }} />
              ) : (
                <Menu className="w-6 h-6" style={{ color: "#F5F7FF" }} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-500 overflow-hidden ${
            mobileNavOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
          style={{ backgroundColor: "#0A0E2F" }}
        >
          <div className="px-4 py-6 space-y-4">
            <Link href="#features" className="block text-sm font-medium" style={{ color: "#B8B8CC" }} onClick={() => setMobileNavOpen(false)}>
              Product
            </Link>
            <Link href="#features" className="block text-sm font-medium" style={{ color: "#B8B8CC" }} onClick={() => setMobileNavOpen(false)}>
              Solutions
            </Link>
            <Link href="#pricing" className="block text-sm font-medium" style={{ color: "#B8B8CC" }} onClick={() => setMobileNavOpen(false)}>
              Pricing
            </Link>
            <Link href="#faq" className="block text-sm font-medium" style={{ color: "#B8B8CC" }} onClick={() => setMobileNavOpen(false)}>
              Resources
            </Link>
            <Link href="#pricing" className="block text-sm font-medium" style={{ color: "#B8B8CC" }} onClick={() => setMobileNavOpen(false)}>
              Enterprise
            </Link>
            <div className="pt-4 space-y-3">
              <Link href="#pricing" className="block text-sm font-medium" style={{ color: "#B8B8CC" }}>
                Log in
              </Link>
              <Button 
                className="w-full rounded-full text-sm font-medium"
                style={{ backgroundColor: "#7B5FFF", color: "#F5F7FF" }}
                asChild
              >
                <Link href="#pricing">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ background: "linear-gradient(180deg, #0A0E2F 0%, #1A1F3A 100%)" }}>
        {/* Background stars/particles effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "#7B5FFF", opacity: 0.6 }} />
          <div className="absolute top-40 right-20 w-1 h-1 rounded-full animate-pulse" style={{ backgroundColor: "#F5F7FF", opacity: 0.4, animationDelay: "0.5s" }} />
          <div className="absolute top-60 left-1/4 w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#7B5FFF", opacity: 0.5, animationDelay: "1s" }} />
          <div className="absolute bottom-40 right-1/3 w-1 h-1 rounded-full animate-pulse" style={{ backgroundColor: "#F5F7FF", opacity: 0.3, animationDelay: "1.5s" }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <Badge 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm"
                style={{ backgroundColor: "rgba(123, 95, 255, 0.15)", color: "#7B5FFF", border: "1px solid rgba(123, 95, 255, 0.3)" }}
              >
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "#7B5FFF" }} />
                The next evolution of project management
              </Badge>

              <h1 
                className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
                style={{ color: "#F5F7FF", fontFamily: "Space Grotesk, sans-serif" }}
              >
                Plan beyond.
                <br />
                <span style={{ color: "#7B5FFF" }}>Deliver on time.</span>
                <br />
                Every time.
              </h1>

              <p className="text-lg max-w-xl" style={{ color: "#B8B8CC" }}>
                Project 1788322240795 is the intelligent project management platform that helps teams ship faster, collaborate smarter, and achieve more.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button 
                  className="rounded-full px-8 py-6 text-base font-medium"
                  style={{ backgroundColor: "#7B5FFF", color: "#F5F7FF" }}
                  asChild
                >
                  <Link href="#pricing">
                    Get Started for Free
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button 
                  variant="outline"
                  className="rounded-full px-8 py-6 text-base font-medium"
                  style={{ backgroundColor: "transparent", color: "#F5F7FF", borderColor: "rgba(184, 184, 204, 0.3)" }}
                  asChild
                >
                  <Link href="#features">
                    <Play className="w-5 h-5 mr-2" />
                    Watch Demo
                  </Link>
                </Button>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i} 
                      className="w-10 h-10 rounded-full border-2 flex items-center justify-center text-xs font-medium"
                      style={{ 
                        backgroundColor: `hsl(${260 + i * 20}, 50%, ${30 + i * 5}%)`,
                        borderColor: "#0A0E2F",
                        color: "#F5F7FF"
                      }}
                    >
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm" style={{ color: "#B8B8CC" }}>
                    <span className="font-semibold" style={{ color: "#F5F7FF" }}>4.9</span>/5 from 3,200+ teams
                  </p>
                </div>
              </div>
            </div>

            {/* Right Content - Dashboard Preview */}
            <div className="relative lg:pl-8">
              <div 
                className="relative rounded-2xl p-1 overflow-hidden"
                style={{ 
                  background: "linear-gradient(135deg, rgba(123, 95, 255, 0.5) 0%, rgba(123, 95, 255, 0.1) 100%)",
                }}
              >
                <div 
                  className="rounded-xl overflow-hidden"
                  style={{ backgroundColor: "#1A1F3A" }}
                >
                  <Image
                    src="/images/hero.png"
                    alt="Project 1788322240795 Dashboard"
                    width={700}
                    height={500}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </div>

              {/* Floating elements */}
              <div 
                className="absolute -bottom-4 -left-4 p-4 rounded-xl backdrop-blur-xl"
                style={{ 
                  backgroundColor: "rgba(26, 31, 58, 0.9)",
                  border: "1px solid rgba(123, 95, 255, 0.3)"
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(123, 95, 255, 0.2)" }}>
                    <Zap className="w-5 h-5" style={{ color: "#7B5FFF" }} />
                  </div>
                  <div>
                    <p className="text-sm font-medium" style={{ color: "#F5F7FF" }}>Sprint completed</p>
                    <p className="text-xs" style={{ color: "#B8B8CC" }}>2 days ahead of schedule</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-8 border-y" style={{ backgroundColor: "#1A1F3A", borderColor: "rgba(123, 95, 255, 0.2)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center relative"
                  style={{
                    background: "linear-gradient(135deg, rgba(123, 95, 255, 0.3) 0%, rgba(123, 95, 255, 0.1) 100%)",
                    border: "1px solid rgba(123, 95, 255, 0.3)",
                    boxShadow: "0 0 20px rgba(123, 95, 255, 0.2)"
                  }}
                >
                  <stat.icon className="w-6 h-6" style={{ color: "#7B5FFF" }} />
                </div>
                <div>
                  <p className="text-2xl font-bold" style={{ color: "#F5F7FF", fontFamily: "Space Grotesk, sans-serif" }}>
                    {stat.value}
                  </p>
                  <p className="text-sm" style={{ color: "#B8B8CC" }}>{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section id="features" className="py-24" style={{ backgroundColor: "#0A0E2F" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Large AI Feature Card - Left side spanning 2 rows */}
            <Card
              className="lg:row-span-2 p-8 rounded-2xl border overflow-hidden relative"
              style={{
                backgroundColor: "rgba(26, 31, 58, 0.6)",
                borderColor: "rgba(123, 95, 255, 0.2)"
              }}
            >
              {/* Purple gradient orb */}
              <div
                className="absolute top-1/2 right-0 w-48 h-48 -translate-y-1/2 translate-x-1/4 rounded-full blur-3xl"
                style={{ background: "radial-gradient(circle, rgba(123, 95, 255, 0.4) 0%, transparent 70%)" }}
              />

              {/* Floating tool icons */}
              <div
                className="absolute top-16 right-8 w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: "rgba(123, 95, 255, 0.2)", border: "1px solid rgba(123, 95, 255, 0.3)" }}
              >
                <Sparkles className="w-5 h-5" style={{ color: "#7B5FFF" }} />
              </div>
              <div
                className="absolute top-32 right-16 w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: "rgba(123, 95, 255, 0.2)", border: "1px solid rgba(123, 95, 255, 0.3)" }}
              >
                <BarChart3 className="w-5 h-5" style={{ color: "#7B5FFF" }} />
              </div>
              <div
                className="absolute bottom-32 right-8 w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: "rgba(123, 95, 255, 0.2)", border: "1px solid rgba(123, 95, 255, 0.3)" }}
              >
                <Zap className="w-5 h-5" style={{ color: "#7B5FFF" }} />
              </div>

              <Badge
                className="mb-4 px-3 py-1 rounded-full text-xs inline-flex items-center gap-1"
                style={{ backgroundColor: "rgba(123, 95, 255, 0.15)", color: "#7B5FFF" }}
              >
                <Sparkles className="w-3 h-3" />
                AI-Powered Planning
              </Badge>

              <h3
                className="text-2xl font-bold mb-4 relative z-10"
                style={{ color: "#F5F7FF", fontFamily: "Space Grotesk, sans-serif" }}
              >
                Smart planning that adapts to your team
              </h3>

              <p className="mb-8 relative z-10" style={{ color: "#B8B8CC" }}>
                AI-powered insights help you estimate, prioritize, and plan projects with unmatched accuracy.
              </p>
            </Card>

            {/* Top-right 2 cards */}
            {features.slice(1, 3).map((feature, index) => (
              <Card
                key={index}
                className="p-6 rounded-2xl border group hover:border-purple-500/40 transition-all duration-300 relative overflow-hidden"
                style={{
                  backgroundColor: "rgba(26, 31, 58, 0.6)",
                  borderColor: "rgba(123, 95, 255, 0.2)"
                }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: "rgba(123, 95, 255, 0.15)" }}
                    >
                      <feature.icon className="w-6 h-6" style={{ color: "#7B5FFF" }} />
                    </div>

                    <h3
                      className="text-lg font-semibold mb-2"
                      style={{ color: "#F5F7FF", fontFamily: "Space Grotesk, sans-serif" }}
                    >
                      {feature.title}
                    </h3>

                    <p className="text-sm" style={{ color: "#B8B8CC" }}>
                      {feature.description}
                    </p>
                  </div>

                  {/* Mini preview graphic */}
                  <div className="ml-4 relative">
                    <div
                      className="w-24 h-20 rounded-lg overflow-hidden"
                      style={{ backgroundColor: "rgba(10, 14, 47, 0.8)" }}
                    >
                      <div className="w-full h-full flex items-center justify-center">
                        {index === 0 ? (
                          <div className="space-y-1 p-2">
                            <div className="w-12 h-1.5 rounded" style={{ backgroundColor: "rgba(123, 95, 255, 0.4)" }} />
                            <div className="w-8 h-1.5 rounded" style={{ backgroundColor: "rgba(123, 95, 255, 0.3)" }} />
                            <div className="w-10 h-1.5 rounded" style={{ backgroundColor: "rgba(123, 95, 255, 0.2)" }} />
                          </div>
                        ) : (
                          <div className="flex items-end gap-1 p-2">
                            <div className="w-2 h-6 rounded-t" style={{ backgroundColor: "rgba(123, 95, 255, 0.5)" }} />
                            <div className="w-2 h-8 rounded-t" style={{ backgroundColor: "rgba(123, 95, 255, 0.6)" }} />
                            <div className="w-2 h-4 rounded-t" style={{ backgroundColor: "rgba(123, 95, 255, 0.4)" }} />
                            <div className="w-2 h-10 rounded-t" style={{ backgroundColor: "rgba(123, 95, 255, 0.7)" }} />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}

            {/* Bottom-right 2 cards */}
            {features.slice(3).map((feature, index) => (
              <Card
                key={index}
                className="p-6 rounded-2xl border group hover:border-purple-500/40 transition-all duration-300 relative overflow-hidden"
                style={{
                  backgroundColor: "rgba(26, 31, 58, 0.6)",
                  borderColor: "rgba(123, 95, 255, 0.2)"
                }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: "rgba(123, 95, 255, 0.15)" }}
                    >
                      <feature.icon className="w-6 h-6" style={{ color: "#7B5FFF" }} />
                    </div>

                    <h3
                      className="text-lg font-semibold mb-2"
                      style={{ color: "#F5F7FF", fontFamily: "Space Grotesk, sans-serif" }}
                    >
                      {feature.title}
                    </h3>

                    <p className="text-sm" style={{ color: "#B8B8CC" }}>
                      {feature.description}
                    </p>
                  </div>

                  {/* Mini preview graphic */}
                  <div className="ml-4 relative">
                    <div
                      className="w-24 h-20 rounded-lg overflow-hidden"
                      style={{ backgroundColor: "rgba(10, 14, 47, 0.8)" }}
                    >
                      <div className="w-full h-full flex items-center justify-center">
                        {index === 0 ? (
                          <div className="grid grid-cols-2 gap-1 p-2">
                            <div className="w-4 h-4 rounded" style={{ backgroundColor: "rgba(123, 95, 255, 0.3)" }} />
                            <div className="w-4 h-4 rounded" style={{ backgroundColor: "rgba(123, 95, 255, 0.5)" }} />
                            <div className="w-4 h-4 rounded" style={{ backgroundColor: "rgba(123, 95, 255, 0.4)" }} />
                            <div className="w-4 h-4 rounded" style={{ backgroundColor: "rgba(123, 95, 255, 0.6)" }} />
                          </div>
                        ) : (
                          <div className="p-2">
                            <Shield className="w-8 h-8" style={{ color: "rgba(123, 95, 255, 0.5)" }} />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24" style={{ backgroundColor: "#1A1F3A" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <p className="text-sm font-medium uppercase tracking-wider mb-2" style={{ color: "#7B5FFF" }}>
                Trusted by teams worldwide
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold"
                style={{ color: "#F5F7FF", fontFamily: "Space Grotesk, sans-serif" }}
              >
                Loved by teams, proven by results
              </h2>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <Link
                href="#testimonials"
                className="flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-80"
                style={{ color: "#7B5FFF" }}
              >
                View all testimonials
                <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="flex items-center gap-2">
                <button
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                  style={{ backgroundColor: "rgba(123, 95, 255, 0.1)", border: "1px solid rgba(123, 95, 255, 0.3)" }}
                >
                  <ArrowRight className="w-4 h-4 rotate-180" style={{ color: "#7B5FFF" }} />
                </button>
                <button
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                  style={{ backgroundColor: "rgba(123, 95, 255, 0.1)", border: "1px solid rgba(123, 95, 255, 0.3)" }}
                >
                  <ArrowRight className="w-4 h-4" style={{ color: "#7B5FFF" }} />
                </button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-6 rounded-2xl border"
                style={{
                  backgroundColor: "rgba(10, 14, 47, 0.6)",
                  borderColor: "rgba(123, 95, 255, 0.2)"
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src={`/images/avatar-${index + 1}.svg`}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover"
                    style={{ border: "2px solid rgba(123, 95, 255, 0.3)" }}
                  />
                  <div>
                    <p className="font-medium" style={{ color: "#F5F7FF" }}>{testimonial.name}</p>
                    <p className="text-xs" style={{ color: "#B8B8CC" }}>{testimonial.role}</p>
                  </div>
                </div>

                <p className="text-sm mb-4" style={{ color: "#B8B8CC" }}>
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24" style={{ backgroundColor: "#0A0E2F" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge 
              className="mb-4 px-4 py-2 rounded-full text-sm"
              style={{ backgroundColor: "rgba(123, 95, 255, 0.15)", color: "#7B5FFF" }}
            >
              Pricing Plans
            </Badge>
            <h2 
              className="text-3xl md:text-5xl font-bold mb-4"
              style={{ color: "#F5F7FF", fontFamily: "Space Grotesk, sans-serif" }}
            >
              Start free, scale as you grow
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#B8B8CC" }}>
              Choose the perfect plan for your team. All plans include a 14-day free trial.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={index}
                className={`relative p-8 rounded-2xl border ${plan.popular ? "scale-105" : ""}`}
                style={{ 
                  backgroundColor: plan.popular ? "rgba(123, 95, 255, 0.1)" : "rgba(26, 31, 58, 0.6)",
                  borderColor: plan.popular ? "#7B5FFF" : "rgba(123, 95, 255, 0.2)"
                }}
              >
                {plan.popular && (
                  <Badge 
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs"
                    style={{ backgroundColor: "#7B5FFF", color: "#F5F7FF" }}
                  >
                    Most Popular
                  </Badge>
                )}

                <h3 
                  className="text-xl font-semibold mb-2"
                  style={{ color: "#F5F7FF", fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {plan.name}
                </h3>
                
                <div className="flex items-baseline gap-1 mb-2">
                  <span 
                    className="text-4xl font-bold"
                    style={{ color: "#F5F7FF", fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    {plan.price}
                  </span>
                  <span className="text-sm" style={{ color: "#B8B8CC" }}>/{plan.period}</span>
                </div>
                
                <p className="text-sm mb-6" style={{ color: "#B8B8CC" }}>
                  {plan.description}
                </p>

                <Button 
                  className="w-full rounded-full py-6 mb-8"
                  style={{ 
                    backgroundColor: plan.popular ? "#7B5FFF" : "transparent",
                    color: "#F5F7FF",
                    border: plan.popular ? "none" : "1px solid rgba(184, 184, 204, 0.3)"
                  }}
                  asChild
                >
                  <Link href={plan.name === "Enterprise" ? "mailto:sales@project1788322240795.com" : "#pricing"}>
                    {plan.cta}
                  </Link>
                </Button>

                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className="w-5 h-5" style={{ color: "#7B5FFF" }} />
                      <span className="text-sm" style={{ color: "#B8B8CC" }}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24" style={{ backgroundColor: "#1A1F3A" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: "#F5F7FF", fontFamily: "Space Grotesk, sans-serif" }}
            >
              Frequently asked questions
            </h2>
            <p style={{ color: "#B8B8CC" }}>
              Everything you need to know about Project 1788322240795
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="rounded-xl border overflow-hidden"
                style={{ 
                  backgroundColor: "rgba(10, 14, 47, 0.6)",
                  borderColor: "rgba(123, 95, 255, 0.2)"
                }}
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-medium" style={{ color: "#F5F7FF" }}>{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 transition-transform duration-300 ${openFaq === index ? "rotate-180" : ""}`}
                    style={{ color: "#7B5FFF" }}
                  />
                </button>
                <div 
                  className={`transition-all duration-300 overflow-hidden ${
                    openFaq === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-6 pb-6 text-sm" style={{ color: "#B8B8CC" }}>
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: "#0A0E2F" }}>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(123, 95, 255, 0.15) 0%, transparent 70%)" }} />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 
            className="text-3xl md:text-5xl font-bold mb-6"
            style={{ color: "#F5F7FF", fontFamily: "Space Grotesk, sans-serif" }}
          >
            Ready to transform how your team works?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: "#B8B8CC" }}>
            Join thousands of teams already using Project 1788322240795 to ship faster and collaborate better.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              className="rounded-full px-8 py-6 text-base font-medium"
              style={{ backgroundColor: "#7B5FFF", color: "#F5F7FF" }}
              asChild
            >
              <Link href="#pricing">
                Start your free trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button 
              variant="outline"
              className="rounded-full px-8 py-6 text-base font-medium"
              style={{ backgroundColor: "transparent", color: "#F5F7FF", borderColor: "rgba(184, 184, 204, 0.3)" }}
              asChild
            >
              <Link href="mailto:sales@project1788322240795.com">
                Talk to sales
              </Link>
            </Button>
          </div>

          <p className="mt-6 text-sm" style={{ color: "#B8B8CC" }}>
            No credit card required · Free 14-day trial · Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t" style={{ backgroundColor: "#0A0E2F", borderColor: "rgba(123, 95, 255, 0.2)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #7B5FFF 0%, #5B3FDF 100%)" }}>
                  <Rocket className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-lg" style={{ color: "#F5F7FF", fontFamily: "Space Grotesk, sans-serif" }}>
                  Project 1788322240795
                </span>
              </Link>
              <p className="text-sm mb-6 max-w-sm" style={{ color: "#B8B8CC" }}>
                The intelligent project management platform that helps teams ship faster, collaborate smarter, and achieve more.
              </p>
              <div className="flex items-center gap-4">
                <Link href="https://twitter.com" className="p-2 rounded-lg transition-colors hover:bg-white/10" style={{ color: "#B8B8CC" }}>
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link href="https://linkedin.com" className="p-2 rounded-lg transition-colors hover:bg-white/10" style={{ color: "#B8B8CC" }}>
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link href="https://github.com" className="p-2 rounded-lg transition-colors hover:bg-white/10" style={{ color: "#B8B8CC" }}>
                  <Github className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold mb-4" style={{ color: "#F5F7FF" }}>Product</h4>
              <ul className="space-y-3">
                {["Features", "Integrations", "Pricing", "Changelog", "Roadmap"].map((item) => (
                  <li key={item}>
                    <Link href="#features" className="text-sm transition-colors hover:text-white" style={{ color: "#B8B8CC" }}>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4" style={{ color: "#F5F7FF" }}>Company</h4>
              <ul className="space-y-3">
                {["About", "Blog", "Careers", "Press", "Partners"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-sm transition-colors hover:text-white" style={{ color: "#B8B8CC" }}>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4" style={{ color: "#F5F7FF" }}>Support</h4>
              <ul className="space-y-3">
                {["Help Center", "Community", "Status", "Contact"].map((item) => (
                  <li key={item}>
                    <Link href={item === "Contact" ? "mailto:support@project1788322240795.com" : "#"} className="text-sm transition-colors hover:text-white" style={{ color: "#B8B8CC" }}>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderColor: "rgba(123, 95, 255, 0.2)" }}>
            <p className="text-sm" style={{ color: "#B8B8CC" }}>
              © {new Date().getFullYear()} Project 1788322240795. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-sm transition-colors hover:text-white" style={{ color: "#B8B8CC" }}>
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm transition-colors hover:text-white" style={{ color: "#B8B8CC" }}>
                Terms of Service
              </Link>
              <Link href="#" className="text-sm transition-colors hover:text-white" style={{ color: "#B8B8CC" }}>
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}