'use client'

import { useState, useEffect } from 'react'
import { Link, useLocation } from 'wouter'
import { motion } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [location] = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-2' : 'bg-transparent py-4'
      }`}
    >
      {/* Persona 5 style header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="flex items-center relative">
              <motion.span 
                className="text-primary font-bold text-2xl tracking-wide"
                whileHover={{ skewX: -5 }}
              >
                Native
              </motion.span>
              <motion.span 
                className="font-bold text-2xl tracking-wide"
                whileHover={{ skewX: -5 }}
              >
                254
              </motion.span>
              <motion.div 
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary"
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.path}
                className={`relative font-medium text-sm tracking-wider uppercase ${
                  location === link.path 
                    ? 'text-primary' 
                    : 'text-foreground hover:text-primary transition-colors'
                }`}
              >
                {link.name}
                {location === link.path ? (
                  <motion.span 
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"
                    layoutId="navbar-indicator"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    style={{ transform: 'skewX(-12deg)' }}
                  />
                ) : (
                  <motion.span 
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary"
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.2 }}
                    style={{ transform: 'skewX(-12deg)' }}
                  />
                )}
              </Link>
            ))}
            
            {/* Theme Toggle */}
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <motion.button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex items-center p-1 rounded-md bg-transparent"
              whileTap={{ scale: 0.9 }}
              whileHover={{ backgroundColor: 'rgba(var(--primary), 0.1)' }}
              aria-label="Toggle mobile menu"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 text-primary" 
                fill="none"
                viewBox="0 0 24 24" 
                stroke="currentColor" 
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div 
            className="md:hidden mt-4 py-6 glass rounded-lg border-l-4 border-primary shadow-lg relative overflow-hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, type: 'spring', stiffness: 300, damping: 25 }}
          >
            {/* Persona 5 style diagonal element */}
            <div className="absolute top-0 right-0 w-32 h-4 bg-primary transform -skew-x-12 translate-x-4"></div>
            
            <nav className="flex flex-col space-y-5 px-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <Link 
                    href={link.path}
                    className={`relative font-medium text-sm tracking-wider uppercase ${
                      location === link.path 
                        ? 'text-primary font-bold' 
                        : 'text-foreground hover:text-primary transition-colors'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="flex items-center group">
                      {location === link.path && (
                        <motion.div 
                          className="absolute -left-4 w-2 h-full bg-primary"
                          layoutId="mobile-indicator"
                          style={{ transform: 'skewY(-12deg)' }}
                        />
                      )}
                      <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-200">
                        {link.name}
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </nav>
            
            {/* Persona 5 style diagonal element at bottom */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-primary transform skew-x-12"></div>
          </motion.div>
        )}
      </div>
    </header>
  )
}
