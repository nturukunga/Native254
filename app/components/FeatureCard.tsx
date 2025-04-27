'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface FeatureCardProps {
  title: string
  description: string
  iconName: string
}

export default function FeatureCard({ title, description, iconName }: FeatureCardProps) {
  return (
    <motion.div 
      className="fluent-card p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className="flex items-start">
        <div className="relative h-10 w-10 mr-4">
          <Image 
            src={`/icons/${iconName}.svg`} 
            alt={title} 
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </motion.div>
  )
} 