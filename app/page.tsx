'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import HeroSection from './components/HeroSection.tsx'
import FeatureCard from './components/FeatureCard.tsx'
import ServiceSlider from './components/ServiceSlider.tsx'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <HeroSection />
      
      {/* About Preview Section */}
      <section className="my-16">
        <div className="glass p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <motion.h2 
                className="text-3xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                About Native254
              </motion.h2>
              <motion.p 
                className="mb-6 text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Native254 is a premier company dedicated to excellence and innovation. 
                We provide cutting-edge solutions tailored to meet your specific needs.
              </motion.p>
              <Link 
                href="/about" 
                className="fluent-button bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
              >
                Learn More
              </Link>
            </div>
            <div className="md:w-1/2 relative h-[300px] w-full rounded-xl overflow-hidden">
              <Image 
                src="/about-preview.jpg" 
                alt="About Native254" 
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Slider Section */}
      <section className="my-16">
        <div className="text-center mb-10">
          <motion.h2 
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.h2>
          <motion.p 
            className="text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Explore our comprehensive range of professional services designed to help your business thrive.
          </motion.p>
        </div>
        
        <ServiceSlider />
        
        <div className="text-center mt-8">
          <Link 
            href="/services" 
            className="fluent-button bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          >
            View All Services
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="my-16">
        <div className="text-center mb-10">
          <motion.h2 
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Why Choose Us
          </motion.h2>
          <motion.p 
            className="text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Discover what sets Native254 apart from the competition.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard 
            title="Expertise" 
            description="Our team brings years of industry experience and specialized knowledge." 
            iconName="star" 
          />
          <FeatureCard 
            title="Innovation" 
            description="We stay at the cutting edge of technology to deliver modern solutions." 
            iconName="lightbulb" 
          />
          <FeatureCard 
            title="Quality" 
            description="We maintain the highest standards in everything we do." 
            iconName="shield" 
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="my-16">
        <div className="glass-dark p-8 md:p-12 text-white">
          <div className="text-center">
            <motion.h2 
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Ready to Get Started?
            </motion.h2>
            <motion.p 
              className="mb-8 text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Contact us today to discuss how we can help you achieve your goals.
            </motion.p>
            <Link 
              href="/contact" 
              className="fluent-button bg-white text-black hover:bg-white/90 h-10 px-6 py-2"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 