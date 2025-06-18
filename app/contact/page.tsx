"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowRight, Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We'll get back to you within 24 hours.")
    setFormData({ name: "", email: "", company: "", message: "" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-600 to-cyan-400 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 transition-all duration-500">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-300/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <Navigation />

      {/* Contact Section */}
      <section className="pt-32 pb-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">Get In Touch</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md leading-relaxed">
              Ready to start your project? Let's discuss how we can help bring your ideas to life. We're here to answer
              your questions and provide the perfect solution for your business needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <Card className="shadow-2xl border border-white/20 bg-white/10 backdrop-blur-xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white font-medium">
                        Name *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        className="border-white/30 focus:border-cyan-400 focus:ring-cyan-400 bg-white/10 backdrop-blur-md text-white placeholder:text-white/60"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white font-medium">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        className="border-white/30 focus:border-cyan-400 focus:ring-cyan-400 bg-white/10 backdrop-blur-md text-white placeholder:text-white/60"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-white font-medium">
                      Company
                    </Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your company name"
                      className="border-white/30 focus:border-cyan-400 focus:ring-cyan-400 bg-white/10 backdrop-blur-md text-white placeholder:text-white/60"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white font-medium">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project, requirements, and timeline..."
                      rows={6}
                      className="border-white/30 focus:border-cyan-400 focus:ring-cyan-400 bg-white/10 backdrop-blur-md text-white placeholder:text-white/60"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white py-3 rounded-full shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    Send Message
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
                <CardContent className="p-8 text-center">
                  <Mail className="h-12 w-12 text-cyan-300 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                  <p className="text-white/80 mb-4">Get in touch via email for detailed discussions</p>
                  <a
                    href="mailto:hello@webrion.com"
                    className="text-cyan-300 hover:text-cyan-200 transition-colors font-medium"
                  >
                    hello@webrion.com
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
                <CardContent className="p-8 text-center">
                  <Phone className="h-12 w-12 text-blue-300 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                  <p className="text-white/80 mb-4">Speak directly with our team</p>
                  <a
                    href="tel:+15551234567"
                    className="text-blue-300 hover:text-blue-200 transition-colors font-medium"
                  >
                    +1 (555) 123-4567
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
                <CardContent className="p-8 text-center">
                  <MapPin className="h-12 w-12 text-green-300 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
                  <p className="text-white/80 mb-4">Our headquarters location</p>
                  <p className="text-green-300 font-medium">
                    123 Innovation Drive
                    <br />
                    San Francisco, CA 94105
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
                <CardContent className="p-8 text-center">
                  <Clock className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Business Hours</h3>
                  <p className="text-white/80 mb-4">When you can reach us</p>
                  <div className="text-yellow-300 font-medium space-y-1">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                    <p>Saturday: 10:00 AM - 4:00 PM PST</p>
                    <p>Sunday: Closed</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Response Time Promise */}
          <div className="mt-16 text-center">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 drop-shadow-lg">Our Promise</h2>
              <p className="text-lg text-white/90 leading-relaxed max-w-2xl mx-auto">
                We respond to all inquiries within 24 hours during business days. For urgent matters, please call us
                directly. We're committed to providing you with the attention and support your project deserves.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
