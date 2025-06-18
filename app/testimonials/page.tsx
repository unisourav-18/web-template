"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Star } from "lucide-react"
import Image from "next/image"

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content:
        "Webrion transformed our outdated system into a modern, efficient platform. Their expertise and dedication exceeded our expectations. The team was professional, responsive, and delivered exactly what we needed.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Michael Chen",
      role: "Founder, InnovateLab",
      content:
        "Outstanding mobile app development! The team delivered exactly what we envisioned, on time and within budget. Their attention to detail and user experience design was exceptional.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Emily Rodriguez",
      role: "CTO, DataFlow Systems",
      content:
        "Professional, reliable, and innovative. Webrion's support team is always there when we need them most. They've become an integral part of our technology strategy.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "David Thompson",
      role: "Marketing Director, GrowthCorp",
      content:
        "The web development project exceeded all our expectations. The site is fast, beautiful, and has significantly improved our conversion rates. Highly recommended!",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Lisa Wang",
      role: "Product Manager, CloudTech",
      content:
        "Webrion's cloud migration services saved us thousands in infrastructure costs while improving our system performance. Their expertise in cloud technologies is unmatched.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "James Miller",
      role: "Startup Founder, NextGen Solutions",
      content:
        "From concept to launch, Webrion guided us through every step of our app development journey. Their strategic insights and technical skills were invaluable to our success.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-600 to-cyan-400 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 transition-all duration-500">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-300/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <Navigation />

      {/* Testimonials Section */}
      <section className="pt-32 pb-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">What Our Clients Say</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md leading-relaxed">
              Trusted by businesses worldwide. Here's what our clients have to say about their experience working with
              Webrion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-xl shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-white/90 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex flex-col items-center">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full mb-4 border-2 border-white/20"
                    />
                    <div>
                      <h4 className="font-semibold text-white text-lg">{testimonial.name}</h4>
                      <p className="text-white/70 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats Section */}
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center drop-shadow-lg">
              Client Success Stories
            </h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-cyan-300">98%</div>
                <div className="text-white/80">Client Satisfaction</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-blue-300">200+</div>
                <div className="text-white/80">Projects Completed</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-green-300">50+</div>
                <div className="text-white/80">Countries Served</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-yellow-300">5.0</div>
                <div className="text-white/80">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
