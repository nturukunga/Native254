'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

// Import ModelViewer dynamically to avoid SSR issues
const ModelViewer = dynamic(() => import('./ModelViewer'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-muted/30 animate-pulse flex items-center justify-center rounded-xl">
      Loading 3D Model...
    </div>
  ),
})

interface ServiceCardProps {
  title: string
  description: string
  image: string
  features: string[]
  modelPath?: string
}

export default function ServiceCard({ title, description, image, features, modelPath }: ServiceCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)
  
  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }
  
  return (
    <motion.div 
      className="fluent-card overflow-hidden h-[500px] perspective-1000 cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onClick={handleFlip}
    >
      <div 
        className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front face */}
        <div 
          className={`absolute w-full h-full backface-hidden transition-all duration-500 ${
            isFlipped ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <div className="relative h-48 w-full bg-gradient-to-r from-primary/10 to-primary/30">
            {modelPath ? (
              <ModelViewer src={modelPath} alt={`${title} 3D Model`} />
            ) : (
              <Image 
                src={image} 
                alt={title} 
                fill
                style={{ objectFit: 'cover' }}
              />
            )}
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-3">{title}</h3>
            <p className="text-muted-foreground mb-4 line-clamp-4">{description}</p>
            <div className="mt-auto">
              <button
                className="text-primary font-medium flex items-center"
                aria-label={`Learn more about ${title}`}
              >
                Learn More
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 ml-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M14 5l7 7m0 0l-7 7m7-7H3" 
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Back face */}
        <div 
          className={`absolute w-full h-full backface-hidden bg-white p-6 rotate-y-180 transition-all duration-500 ${
            isFlipped ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <h3 className="text-2xl font-semibold mb-4">{title} Features</h3>
          <ul className="space-y-2 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M5 13l4 4L19 7" 
                  />
                </svg>
                <span className="text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
          <button
            className="text-primary font-medium flex items-center mt-auto"
            aria-label="Go back to service overview"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 mr-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M10 19l-7-7m0 0l7-7m-7 7h18" 
              />
            </svg>
            Back
          </button>
        </div>
      </div>
    </motion.div>
  )
} 