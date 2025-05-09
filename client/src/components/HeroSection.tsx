'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'wouter'

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false)
  const logoRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (logoRef.current) {
      const rect = logoRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      })
    }
  }

  return (
    <div className="pt-32 pb-16 lg:pt-40 lg:pb-24 relative overflow-hidden">
      {/* Background design elements - glass morphism effect */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-primary/30 rounded-full filter blur-3xl opacity-60"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[40rem] h-[40rem] bg-secondary/30 rounded-full filter blur-3xl opacity-40"></div>
        
        {/* Animated particles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-primary/30"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              opacity: Math.random() * 0.5 + 0.3
            }}
            animate={{ 
              y: [null, Math.random() * 100 + "%"],
              opacity: [null, Math.random() * 0.5 + 0.3]
            }}
            transition={{ 
              duration: Math.random() * 10 + 20, 
              repeat: Infinity,
              ease: "linear" 
            }}
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Hero Text */}
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Welcome to <span className="text-primary">Native254</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl mb-8 text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              We provide innovative solutions to help your business thrive in today's digital landscape.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <Link 
                href="/services" 
                className="fluent-button bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-6 py-3"
              >
                Our Services
              </Link>
              
              <Link 
                href="/contact" 
                className="fluent-button bg-secondary text-secondary-foreground hover:bg-secondary/90 h-12 px-6 py-3"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
          
          {/* Hero Interactive Logo */}
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div 
              ref={logoRef}
              onMouseMove={handleMouseMove} 
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className={`glass rounded-2xl overflow-hidden relative flex items-center justify-center h-[350px] md:h-[450px] w-full
                ${isHovered ? 'shadow-[0_0_30px_rgba(109,40,217,0.4)]' : 'shadow-xl'}
                transition-shadow duration-300`}
            >
              {/* Glow effect on hover */}
              {isHovered && (
                <motion.div 
                  className="absolute bg-primary/20 blur-xl"
                  style={{
                    left: mousePosition.x - 100,
                    top: mousePosition.y - 100,
                    width: 200,
                    height: 200,
                    borderRadius: '100%',
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.8 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                />
              )}
              
              {/* Vintage Mac Image */}
              <div className="relative flex flex-col items-center z-10">
                <motion.div
                  animate={{ 
                    y: isHovered ? [-5, 5] : 0,
                    rotateY: isHovered ? [0, 3, 0, -3, 0] : 0 
                  }}
                  transition={{ 
                    y: { duration: 2, repeat: Infinity, repeatType: "reverse" },
                    rotateY: { duration: 5, repeat: Infinity, repeatType: "mirror" }
                  }}
                  className="w-full h-full flex justify-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <img 
                    src="images/vintage-mac.jpg" 
                    alt="Vintage Macintosh Computer" 
                    className="w-[80%] max-w-[280px] rounded-md shadow-lg"
                  />
                </motion.div>
                <motion.div
                  className="mt-4 persona-heading text-lg"
                  animate={{ opacity: isHovered ? 1 : 0.7 }}
                  transition={{ duration: 0.3 }}
                >
                  Tech Crafted for You
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
