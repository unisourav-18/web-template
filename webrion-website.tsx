"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ThemeToggle } from "./components/theme-toggle"
import {
  Smartphone,
  Palette,
  Code,
  HeadphonesIcon,
  Star,
  ArrowRight,
  CheckCircle,
  Zap,
  Menu,
  X,
  MessageCircle,
  Rocket,
  Monitor,
  Layers,
  Server,
  ChevronLeft,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Github,
  Instagram,
} from "lucide-react"
import Image from "next/image"

export default function WebrionWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content:
        "Webrion transformed our outdated system into a modern, efficient platform. Their expertise and dedication exceeded our expectations.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Michael Chen",
      role: "Founder, InnovateLab",
      content:
        "Outstanding mobile app development! The team delivered exactly what we envisioned, on time and within budget.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Emily Rodriguez",
      role: "CTO, DataFlow Systems",
      content: "Professional, reliable, and innovative. Webrion's support team is always there when we need them most.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({ name: "", email: "", company: "", message: "" })
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 z-50 transition-all duration-300">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
            Web<span className="text-[#2F7CF6]">rion</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 dark:text-gray-300 hover:text-[#2F7CF6] transition-colors duration-300 font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 dark:text-gray-300 hover:text-[#2F7CF6] transition-colors duration-300 font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-gray-700 dark:text-gray-300 hover:text-[#2F7CF6] transition-colors duration-300 font-medium"
            >
              Testimonials
            </button>
            <ThemeToggle />
          </nav>

          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-[#2F7CF6] hover:bg-[#1E5FD9] text-white px-6 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get in touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="h-10 w-10 text-gray-700 dark:text-gray-300"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
            <nav className="container mx-auto px-4 py-4 space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-[#2F7CF6] transition-colors duration-300 font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-[#2F7CF6] transition-colors duration-300 font-medium"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-[#2F7CF6] transition-colors duration-300 font-medium"
              >
                Testimonials
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="w-full bg-[#2F7CF6] hover:bg-[#1E5FD9] text-white rounded-lg"
              >
                Get in touch
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-24 pb-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  Empowering Ideas through{" "}
                  <span className="text-[#2F7CF6] relative">
                    Technology
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#2F7CF6] rounded-full opacity-30"></div>
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                  We connect visionary businesses with cutting-edge technology solutions for end-to-end software
                  development and digital transformation.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => scrollToSection("contact")}
                  size="lg"
                  className="bg-[#2F7CF6] hover:bg-[#1E5FD9] text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  onClick={() => scrollToSection("services")}
                  variant="outline"
                  size="lg"
                  className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-[#2F7CF6] hover:text-[#2F7CF6] px-8 py-4 rounded-xl transition-all duration-300"
                >
                  View Services
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 pt-4">
                <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 rounded-full px-4 py-2 shadow-md border border-gray-200 dark:border-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">100+ Projects Delivered</span>
                </div>
                <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 rounded-full px-4 py-2 shadow-md border border-gray-200 dark:border-gray-700">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">5.0 Client Rating</span>
                </div>
              </div>
            </div>

            {/* Hero Illustration */}
            <div className="relative">
              <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-200 dark:border-gray-700">
                {/* 3D Laptop Mockup */}
                <div className="bg-gray-900 dark:bg-gray-700 rounded-2xl p-6 mb-6 relative overflow-hidden">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-3 bg-[#2F7CF6] rounded-full w-3/4 animate-pulse"></div>
                    <div className="h-3 bg-gray-600 rounded-full w-1/2 animate-pulse delay-100"></div>
                    <div className="h-3 bg-[#2F7CF6] rounded-full w-2/3 animate-pulse delay-200"></div>
                    <div className="h-3 bg-gray-600 rounded-full w-1/3 animate-pulse delay-300"></div>
                  </div>
                  <div className="absolute top-0 right-0 w-20 h-20 bg-[#2F7CF6] opacity-10 rounded-full blur-xl"></div>
                </div>
                <div className="bg-gray-200 dark:bg-gray-600 rounded-xl h-4"></div>

                {/* Floating 3D Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#2F7CF6] rounded-2xl shadow-lg flex items-center justify-center animate-float">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center animate-float delay-1000">
                  <Zap className="h-10 w-10 text-[#2F7CF6]" />
                </div>
                <div className="absolute top-1/2 -left-8 w-14 h-14 bg-gradient-to-br from-[#2F7CF6] to-blue-600 rounded-2xl shadow-lg flex items-center justify-center animate-float delay-500">
                  <Rocket className="h-7 w-7 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Comprehensive software solutions tailored to your business needs
            </p>
          </div>

          <div className="space-y-20">
            {/* App Development */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#2F7CF6] to-blue-600 rounded-2xl shadow-lg flex items-center justify-center">
                    <Smartphone className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white">App Development</h3>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Native and cross-platform mobile applications built with cutting-edge technologies for iOS and Android
                  platforms.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">Native iOS & Android Development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">Cross-platform Solutions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">App Store Optimization</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 shadow-xl">
                  <div className="relative mx-auto w-48 h-96 bg-gray-900 dark:bg-gray-600 rounded-[3rem] p-2 shadow-2xl">
                    <div className="w-full h-full bg-white dark:bg-gray-800 rounded-[2.5rem] p-4 relative overflow-hidden">
                      <div className="w-16 h-1 bg-gray-300 dark:bg-gray-600 rounded-full mx-auto mb-4"></div>
                      <div className="space-y-4">
                        <div className="h-8 bg-[#2F7CF6] rounded-lg"></div>
                        <div className="space-y-2">
                          <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-3/4"></div>
                          <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-1/2"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="h-16 bg-gray-100 dark:bg-gray-700 rounded-lg"></div>
                          <div className="h-16 bg-gray-100 dark:bg-gray-700 rounded-lg"></div>
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 h-12 bg-[#2F7CF6] rounded-lg flex items-center justify-center">
                        <div className="w-8 h-1 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* UI/UX Design */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 shadow-xl">
                  <div className="space-y-4">
                    <div className="flex space-x-4">
                      <div className="flex-1 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md">
                        <div className="space-y-2">
                          <div className="h-3 bg-[#2F7CF6] rounded w-1/2"></div>
                          <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded w-3/4"></div>
                          <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded w-1/2"></div>
                        </div>
                      </div>
                      <div className="flex-1 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md">
                        <div className="w-full h-16 bg-gray-100 dark:bg-gray-700 rounded-lg mb-2"></div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded"></div>
                      </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                      <div className="flex items-center space-x-3 mb-4">
                        <Layers className="h-6 w-6 text-[#2F7CF6]" />
                        <div className="h-3 bg-[#2F7CF6] rounded w-1/3"></div>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="h-12 bg-gray-100 dark:bg-gray-700 rounded"></div>
                        <div className="h-12 bg-gray-100 dark:bg-gray-700 rounded"></div>
                        <div className="h-12 bg-[#2F7CF6] rounded opacity-50"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-lg flex items-center justify-center">
                    <Palette className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white">UI/UX Design</h3>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  User-centered design solutions that create intuitive and engaging digital experiences for your target
                  audience.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">User Research & Analysis</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">Wireframing & Prototyping</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">Visual Design & Branding</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Full Stack Development */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-lg flex items-center justify-center">
                    <Monitor className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Full Stack Development</h3>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  End-to-end web development services from frontend interfaces to robust backend systems and databases.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">Frontend Development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">Backend Architecture</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">Database Design</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 shadow-xl">
                  <div className="bg-gray-900 dark:bg-gray-700 rounded-2xl p-6 relative overflow-hidden">
                    <div className="flex items-center space-x-2 mb-4">
                      <Server className="h-5 w-5 text-[#2F7CF6]" />
                      <div className="text-sm text-gray-400">server.js</div>
                    </div>
                    <div className="space-y-2 font-mono text-sm">
                      <div className="text-purple-400">const express = require('express')</div>
                      <div className="text-blue-400">const app = express()</div>
                      <div className="text-green-400">// API Routes</div>
                      <div className="text-yellow-400">app.get('/api/users', (req, res) => {"{"}</div>
                      <div className="text-white ml-4">res.json(users)</div>
                      <div className="text-yellow-400">{"}"})</div>
                    </div>
                    <div className="absolute top-0 right-0 w-16 h-16 bg-[#2F7CF6] opacity-20 rounded-full blur-xl"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Services */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 shadow-xl">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-white dark:bg-gray-800 rounded-full mx-auto mb-6 shadow-lg flex items-center justify-center relative">
                      <HeadphonesIcon className="h-16 w-16 text-[#2F7CF6]" />
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow-md">
                        <div className="text-sm text-gray-600 dark:text-gray-400">24/7 Support Available</div>
                      </div>
                      <div className="bg-[#2F7CF6] text-white rounded-lg p-3 shadow-md">
                        <div className="text-sm">How can we help you today?</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl shadow-lg flex items-center justify-center">
                    <HeadphonesIcon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Support Services</h3>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  24/7 technical support, maintenance, and continuous improvement services to keep your systems running
                  smoothly.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">24/7 Technical Support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">System Maintenance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">Performance Monitoring</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Trusted by businesses worldwide</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <Card className="bg-white dark:bg-gray-900 shadow-xl border border-gray-200 dark:border-gray-700">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 italic leading-relaxed">
                    "{testimonials[currentTestimonial].content}"
                  </p>
                  <div className="flex items-center justify-center">
                    <Image
                      src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                      alt={testimonials[currentTestimonial].name}
                      width={60}
                      height={60}
                      className="rounded-full mr-4 border-2 border-gray-200 dark:border-gray-700"
                    />
                    <div className="text-left">
                      <h4 className="font-semibold text-gray-900 dark:text-white text-lg">
                        {testimonials[currentTestimonial].name}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">{testimonials[currentTestimonial].role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Navigation Buttons */}
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? "bg-[#2F7CF6]" : "bg-gray-300 dark:bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Ready to start your project? Let's discuss how we can help bring your ideas to life.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="shadow-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-gray-700 dark:text-gray-300 font-medium">
                          Name
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          className="border-gray-300 dark:border-gray-600 focus:border-[#2F7CF6] focus:ring-[#2F7CF6] bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-700 dark:text-gray-300 font-medium">
                          Email
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your@email.com"
                          className="border-gray-300 dark:border-gray-600 focus:border-[#2F7CF6] focus:ring-[#2F7CF6] bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-gray-700 dark:text-gray-300 font-medium">
                        Company
                      </Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your company name"
                        className="border-gray-300 dark:border-gray-600 focus:border-[#2F7CF6] focus:ring-[#2F7CF6] bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-gray-700 dark:text-gray-300 font-medium">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your project..."
                        rows={5}
                        className="border-gray-300 dark:border-gray-600 focus:border-[#2F7CF6] focus:ring-[#2F7CF6] bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-[#2F7CF6] hover:bg-[#1E5FD9] text-white py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Send Message
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-[#2F7CF6] rounded-xl flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Email Us</h3>
                      <p className="text-gray-600 dark:text-gray-400">hello@webrion.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Call Us</h3>
                      <p className="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Visit Us</h3>
                      <p className="text-gray-600 dark:text-gray-400">San Francisco, CA</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#2F7CF6] to-blue-600 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                  <p className="mb-6 opacity-90">
                    Let's discuss your project and see how we can help bring your vision to life.
                  </p>
                  <Button
                    onClick={() => scrollToSection("home")}
                    variant="secondary"
                    className="bg-white text-[#2F7CF6] hover:bg-gray-100"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Start a Conversation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                Web<span className="text-[#2F7CF6]">rion</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Empowering ideas through technology. Building the future, one project at a time.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-gray-600 dark:text-gray-400 hover:text-[#2F7CF6]">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-600 dark:text-gray-400 hover:text-[#2F7CF6]">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-600 dark:text-gray-400 hover:text-[#2F7CF6]">
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-600 dark:text-gray-400 hover:text-[#2F7CF6]">
                  <Instagram className="h-5 w-5" />
                </Button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Services</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="hover:text-[#2F7CF6] transition-colors"
                  >
                    App Development
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="hover:text-[#2F7CF6] transition-colors"
                  >
                    UI/UX Design
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="hover:text-[#2F7CF6] transition-colors"
                  >
                    Web Development
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="hover:text-[#2F7CF6] transition-colors"
                  >
                    Support
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Company</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>
                  <a href="#" className="hover:text-[#2F7CF6] transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("testimonials")}
                    className="hover:text-[#2F7CF6] transition-colors"
                  >
                    Testimonials
                  </button>
                </li>
                <li>
                  <a href="#" className="hover:text-[#2F7CF6] transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#2F7CF6] transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>hello@webrion.com</li>
                <li>+1 (555) 123-4567</li>
                <li>San Francisco, CA</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center text-gray-600 dark:text-gray-400">
            <p>&copy; {new Date().getFullYear()} Webrion. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
