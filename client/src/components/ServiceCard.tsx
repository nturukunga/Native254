
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface ServiceCardProps {
  title: string
  description: string
  image: string
  features: string[]
}

export default function ServiceCard({ title, description, image, features }: ServiceCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <motion.div 
      className="persona-card overflow-hidden h-[500px] perspective-1000 cursor-pointer rounded-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onClick={handleFlip}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div 
        className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front face */}
        <div 
          className={`absolute w-full h-full backface-hidden bg-card ${
            isFlipped ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          <div className="relative h-48 w-full overflow-hidden">
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">{title}</h3>
            <p className="text-base text-foreground/80">{description}</p>
          </div>
        </div>

        {/* Back face */}
        <div 
          className={`absolute w-full h-full backface-hidden bg-card p-6 rotate-y-180 ${
            isFlipped ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="absolute top-0 right-0 w-40 h-20 overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-20 bg-primary/20" />
          </div>

          <h3 className="text-2xl font-semibold mb-6 text-foreground">{title}</h3>
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <motion.li 
                key={index}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isFlipped ? 1 : 0, x: isFlipped ? 0 : -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6 text-primary flex-shrink-0" 
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
                <span className="text-foreground text-lg">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  )
}
