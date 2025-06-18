"use client"

import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-black/20 backdrop-blur-xl border-t border-white/20 text-white py-12 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 text-center md:text-left">
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              Web<span className="text-cyan-300">rion</span>
            </div>
            <p className="text-white/80">
              Empowering ideas through technology. Building the future, one project at a time.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <Link href="/services" className="hover:text-cyan-300 transition-colors">
                  App Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-cyan-300 transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-cyan-300 transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-cyan-300 transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <Link href="/about" className="hover:text-cyan-300 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-cyan-300 transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-300 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-300 transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-white/80">
              <li>hello@webrion.com</li>
              <li>+1 (555) 123-4567</li>
              <li>San Francisco, CA</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/80">
          <p>&copy; {new Date().getFullYear()} Webrion. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
