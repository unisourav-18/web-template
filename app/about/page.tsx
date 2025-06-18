"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Target, Lightbulb, Shield, CheckCircle, Globe, Users, Award, Rocket } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-600 to-cyan-400 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 transition-all duration-500">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-300/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <Navigation />

      {/* About Section */}
      <section className="pt-32 pb-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">About Webrion</h1>
            <p className="text-xl text-white/90 max-w-4xl mx-auto drop-shadow-md leading-relaxed">
              We are a passionate team of innovators, developers, and strategists dedicated to transforming ideas into
              powerful digital solutions. Our mission is to bridge the gap between vision and reality through
              cutting-edge technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 backdrop-blur-md rounded-full flex items-center justify-center mb-4 border border-white/20">
                  <Target className="h-8 w-8 text-cyan-300" />
                </div>
                <CardTitle className="text-xl font-bold text-white">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 text-center leading-relaxed">
                  To empower businesses with innovative technology solutions that drive growth, efficiency, and digital
                  transformation in an ever-evolving digital landscape.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-cyan-400/30 to-blue-400/30 backdrop-blur-md rounded-full flex items-center justify-center mb-4 border border-white/20">
                  <Lightbulb className="h-8 w-8 text-blue-300" />
                </div>
                <CardTitle className="text-xl font-bold text-white">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 text-center leading-relaxed">
                  To be the leading catalyst for digital innovation, connecting visionary ideas with cutting-edge
                  technology to create solutions that shape the future.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 md:col-span-2 lg:col-span-1 text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-green-400/30 to-blue-400/30 backdrop-blur-md rounded-full flex items-center justify-center mb-4 border border-white/20">
                  <Shield className="h-8 w-8 text-green-300" />
                </div>
                <CardTitle className="text-xl font-bold text-white">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 text-center leading-relaxed">
                  Innovation, integrity, and excellence guide everything we do. We believe in transparent communication,
                  continuous learning, and delivering exceptional value to our clients.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">Why Choose Webrion?</h2>
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row items-start space-y-2 md:space-y-0 md:space-x-3 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                  <CheckCircle className="h-6 w-6 text-cyan-300 mt-1 flex-shrink-0 mx-auto md:mx-0" />
                  <div className="text-center md:text-left">
                    <h4 className="font-semibold text-white">Expert Team</h4>
                    <p className="text-white/80">
                      Our skilled developers and designers bring years of experience across multiple technologies and
                      industries.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-start space-y-2 md:space-y-0 md:space-x-3 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                  <CheckCircle className="h-6 w-6 text-cyan-300 mt-1 flex-shrink-0 mx-auto md:mx-0" />
                  <div className="text-center md:text-left">
                    <h4 className="font-semibold text-white">Agile Approach</h4>
                    <p className="text-white/80">
                      We use agile methodologies to ensure rapid delivery, flexibility, and continuous improvement
                      throughout the development process.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-start space-y-2 md:space-y-0 md:space-x-3 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                  <CheckCircle className="h-6 w-6 text-cyan-300 mt-1 flex-shrink-0 mx-auto md:mx-0" />
                  <div className="text-center md:text-left">
                    <h4 className="font-semibold text-white">24/7 Support</h4>
                    <p className="text-white/80">
                      Our dedicated support team is always available to ensure your systems run smoothly and
                      efficiently.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 text-center border border-white/30 hover:scale-105 transition-transform duration-300">
                    <Globe className="h-10 w-10 text-cyan-300 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-white">50+</div>
                    <div className="text-white/80 text-sm">Countries Served</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 text-center border border-white/30 hover:scale-105 transition-transform duration-300">
                    <Users className="h-10 w-10 text-blue-300 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-white">200+</div>
                    <div className="text-white/80 text-sm">Happy Clients</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 text-center border border-white/30 hover:scale-105 transition-transform duration-300">
                    <Award className="h-10 w-10 text-yellow-300 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-white">15+</div>
                    <div className="text-white/80 text-sm">Awards Won</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 text-center border border-white/30 hover:scale-105 transition-transform duration-300">
                    <Rocket className="h-10 w-10 text-green-300 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-white">5+</div>
                    <div className="text-white/80 text-sm">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Company Story */}
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-lg">Our Story</h2>
              <p className="text-lg text-white/90 leading-relaxed max-w-4xl mx-auto">
                Founded in 2019, Webrion began as a small team of passionate developers with a shared vision: to make
                cutting-edge technology accessible to businesses of all sizes. What started as a local software
                development company has grown into a global technology partner, serving clients across 50+ countries.
                <br />
                <br />
                Our journey has been marked by continuous learning, adaptation, and an unwavering commitment to
                excellence. We've evolved from building simple websites to creating complex enterprise solutions, mobile
                applications, and cloud-native architectures that power modern businesses.
                <br />
                <br />
                Today, we're proud to be at the forefront of digital transformation, helping companies navigate the
                ever-changing technology landscape with confidence and success.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
