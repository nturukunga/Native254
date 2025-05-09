'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

const services = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Custom websites built with modern technologies and responsive design.',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500',
  },
  {
    id: 2,
    title: 'Mobile Applications',
    description: 'Native and cross-platform mobile apps for iOS and Android.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500',
  },
  {
    id: 3,
    title: 'UI/UX Design',
    description: 'User-centered design that enhances user experience and satisfaction.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500',
  },
  {
    id: 4,
    title: 'Brand Identity',
    description: 'Creating memorable brands that resonate with your target audience.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500',
  },
  {
    id: 5,
    title: 'Digital Marketing',
    description: 'Strategies to grow your online presence and drive conversions.',
    image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500',
  },
]

export default function ServiceSlider() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [dragging, setDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [transX, setTransX] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)
  
  const nextSlide = () => {
    setActiveIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1))
  }
  
  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1))
  }
  
  const handleDotClick = (index: number) => {
    setActiveIndex(index)
  }
  
  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    
    return () => clearInterval(interval)
  }, [])
  
  // Mouse drag functionality
  const handleMouseDown = (e: React.MouseEvent) => {
    setDragging(true)
    setStartX(e.clientX)
  }
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragging) return
    const currentX = e.clientX
    const diff = currentX - startX
    setTransX(diff)
  }
  
  const handleMouseUp = () => {
    if (!dragging) return
    setDragging(false)
    
    if (transX > 100) {
      prevSlide()
    } else if (transX < -100) {
      nextSlide()
    }
    
    setTransX(0)
  }
  
  // Touch functionality for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setDragging(true)
    setStartX(e.touches[0].clientX)
  }
  
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!dragging) return
    const currentX = e.touches[0].clientX
    const diff = currentX - startX
    setTransX(diff)
  }
  
  const handleTouchEnd = () => {
    if (!dragging) return
    setDragging(false)
    
    if (transX > 50) {
      prevSlide()
    } else if (transX < -50) {
      nextSlide()
    }
    
    setTransX(0)
  }
  
  return (
    <div className="relative my-8">
      {/* Slider */}
      <div 
        ref={sliderRef}
        className="glass overflow-hidden rounded-xl relative h-[400px]"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className="flex transition-transform duration-300 h-full"
          style={{
            transform: `translateX(${-activeIndex * 100 + (transX / 5)}%)`,
          }}
        >
          {services.map((service) => (
            <div 
              key={service.id} 
              className="min-w-full h-full relative flex items-end"
            >
              <div className="absolute inset-0 bg-gray-800 z-0">
                {/* Using a background color as fallback */}
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
              <div className="relative z-20 p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-white/80">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation Arrows */}
      <button 
        className="absolute top-1/2 left-4 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M15 19l-7-7 7-7" 
          />
        </svg>
      </button>
      <button 
        className="absolute top-1/2 right-4 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M9 5l7 7-7 7" 
          />
        </svg>
      </button>
      
      {/* Dots Navigation */}
      <div className="flex justify-center mt-4">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-2 w-2 rounded-full mx-1 transition-colors ${
              index === activeIndex ? 'bg-primary' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
