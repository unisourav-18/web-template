"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Smartphone, Palette, Code, HeadphonesIcon, Globe, Shield, Zap, Database } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-600 to-cyan-400 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 transition-all duration-500">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-300/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <Navigation />

      {/* Services Section */}
      <section className="pt-32 pb-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">Our Services</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md leading-relaxed">
              Comprehensive software solutions tailored to your business needs. We deliver cutting-edge technology
              services that drive innovation and growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* App Development */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl text-center">
              <CardHeader className="pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 backdrop-blur-md rounded-full flex items-center justify-center mb-4 group-hover:from-blue-500 group-hover:to-cyan-500 transition-all duration-300 border border-white/20">
                  <Smartphone className="h-8 w-8 text-blue-300 group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-xl font-bold text-white">App Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white/80 text-center">
                  Native and cross-platform mobile applications built with cutting-edge technologies for iOS and Android
                  platforms.
                </CardDescription>
              </CardContent>
            </Card>

            {/* UI/UX Design */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl text-center">
              <CardHeader className="pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-cyan-400/30 to-blue-400/30 backdrop-blur-md rounded-full flex items-center justify-center mb-4 group-hover:from-cyan-500 group-hover:to-blue-500 transition-all duration-300 border border-white/20">
                  <Palette className="h-8 w-8 text-cyan-300 group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-xl font-bold text-white">UI/UX Design</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white/80 text-center">
                  User-centered design solutions that create intuitive and engaging digital experiences for your target
                  audience.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Full Stack Web Development */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl text-center">
              <CardHeader className="pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-green-400/30 to-blue-400/30 backdrop-blur-md rounded-full flex items-center justify-center mb-4 group-hover:from-green-500 group-hover:to-blue-500 transition-all duration-300 border border-white/20">
                  <Code className="h-8 w-8 text-green-300 group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-xl font-bold text-white">Full Stack Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white/80 text-center">
                  End-to-end web development services from frontend interfaces to robust backend systems and databases.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Support Services */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl text-center">
              <CardHeader className="pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-purple-400/30 to-blue-400/30 backdrop-blur-md rounded-full flex items-center justify-center mb-4 group-hover:from-purple-500 group-hover:to-blue-500 transition-all duration-300 border border-white/20">
                  <HeadphonesIcon className="h-8 w-8 text-purple-300 group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-xl font-bold text-white">Support Services</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white/80 text-center">
                  24/7 technical support, maintenance, and continuous improvement services to keep your systems running
                  smoothly.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Additional Services */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Cloud Solutions */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl text-center">
              <CardHeader className="pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-orange-400/30 to-red-400/30 backdrop-blur-md rounded-full flex items-center justify-center mb-4 group-hover:from-orange-500 group-hover:to-red-500 transition-all duration-300 border border-white/20">
                  <Globe className="h-8 w-8 text-orange-300 group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-xl font-bold text-white">Cloud Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white/80 text-center">
                  Scalable cloud infrastructure and migration services to optimize your business operations and reduce
                  costs.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Cybersecurity */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl text-center">
              <CardHeader className="pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-red-400/30 to-pink-400/30 backdrop-blur-md rounded-full flex items-center justify-center mb-4 group-hover:from-red-500 group-hover:to-pink-500 transition-all duration-300 border border-white/20">
                  <Shield className="h-8 w-8 text-red-300 group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-xl font-bold text-white">Cybersecurity</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white/80 text-center">
                  Comprehensive security solutions to protect your digital assets and ensure compliance with industry
                  standards.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Performance Optimization */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl text-center">
              <CardHeader className="pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-yellow-400/30 to-orange-400/30 backdrop-blur-md rounded-full flex items-center justify-center mb-4 group-hover:from-yellow-500 group-hover:to-orange-500 transition-all duration-300 border border-white/20">
                  <Zap className="h-8 w-8 text-yellow-300 group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-xl font-bold text-white">Performance Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white/80 text-center">
                  Speed up your applications and websites with our performance optimization and monitoring services.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Data Analytics */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl text-center">
              <CardHeader className="pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-indigo-400/30 to-purple-400/30 backdrop-blur-md rounded-full flex items-center justify-center mb-4 group-hover:from-indigo-500 group-hover:to-purple-500 transition-all duration-300 border border-white/20">
                  <Database className="h-8 w-8 text-indigo-300 group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-xl font-bold text-white">Data Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white/80 text-center">
                  Transform your data into actionable insights with our advanced analytics and business intelligence
                  solutions.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
