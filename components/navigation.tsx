"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./theme-toggle"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-white/10 dark:bg-gray-900/20 backdrop-blur-xl border-b border-white/20 dark:border-gray-700/30 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-white drop-shadow-lg">
          Web<span className="text-cyan-300">rion</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-white/90 hover:text-cyan-300 transition-colors duration-300 font-medium">
            Home
          </Link>
          <Link
            href="/services"
            className="text-white/90 hover:text-cyan-300 transition-colors duration-300 font-medium"
          >
            Services
          </Link>
          <Link href="/about" className="text-white/90 hover:text-cyan-300 transition-colors duration-300 font-medium">
            About
          </Link>
          <Link
            href="/testimonials"
            className="text-white/90 hover:text-cyan-300 transition-colors duration-300 font-medium"
          >
            Testimonials
          </Link>
          <ThemeToggle />
        </nav>

        <div className="hidden md:block">
          <Link href="/contact">
            <Button className="bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 hover:scale-105 transition-all duration-300 rounded-full px-6 shadow-lg">
              Get in touch
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="h-9 w-9 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/10 dark:bg-gray-900/20 backdrop-blur-xl border-t border-white/20 dark:border-gray-700/30">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            <Link
              href="/"
              className="block w-full text-left text-white/90 hover:text-cyan-300 transition-colors duration-300 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="block w-full text-left text-white/90 hover:text-cyan-300 transition-colors duration-300 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/about"
              className="block w-full text-left text-white/90 hover:text-cyan-300 transition-colors duration-300 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/testimonials"
              className="block w-full text-left text-white/90 hover:text-cyan-300 transition-colors duration-300 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 rounded-full">
                Get in touch
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
