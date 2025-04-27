import Image from 'next/image'
import { Metadata } from 'next'
import TeamMember from '../components/TeamMember'

export const metadata: Metadata = {
  title: 'About Us - Native254',
  description: 'Learn more about Native254 company, our mission, values, and team.',
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 mt-20">
      {/* Hero Section */}
      <section className="glass p-8 md:p-12 rounded-2xl">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-6">About Native254</h1>
            <p className="text-lg mb-6">
              Native254 is a premier technology company committed to delivering innovative
              solutions to businesses around the world. Founded in 2023, we've quickly established
              ourselves as leaders in web development, mobile applications, and digital marketing.
            </p>
            <p className="text-lg">
              Our team of experts combines technical excellence with creative thinking to
              solve complex problems and deliver exceptional results for our clients.
            </p>
          </div>
          <div className="md:w-1/2 relative h-[300px] w-full rounded-xl overflow-hidden">
            <Image 
              src="!native254/img/ ABOUT US.png" 
              alt="Native254 Team" 
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="my-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="fluent-card p-8">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-muted-foreground">
            To empower businesses through innovative technology solutions that drive growth,
            efficiency, and competitive advantage. We strive to be the trusted partner
            that helps our clients navigate the digital landscape and achieve their goals.
          </p>
        </div>
        <div className="fluent-card p-8">
          <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
          <p className="text-muted-foreground">
            To be the leading technology partner for businesses seeking transformative
            digital solutions. We aim to create lasting value through innovation,
            quality, and exceptional service delivery.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="my-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass p-6 rounded-xl text-center">
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-8 w-8 text-primary" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M13 10V3L4 14h7v7l9-11h-7z" 
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-muted-foreground">
              We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.
            </p>
          </div>
          <div className="glass p-6 rounded-xl text-center">
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-8 w-8 text-primary" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" 
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Quality</h3>
            <p className="text-muted-foreground">
              We are committed to excellence in everything we do, delivering products that exceed expectations.
            </p>
          </div>
          <div className="glass p-6 rounded-xl text-center">
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-8 w-8 text-primary" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" 
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
            <p className="text-muted-foreground">
              We work closely with our clients, fostering partnerships that drive mutual success.
            </p>
          </div>
          <div className="glass p-6 rounded-xl text-center">
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-8 w-8 text-primary" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Integrity</h3>
            <p className="text-muted-foreground">
              We operate with honesty, transparency, and ethical practices in all our business dealings.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="my-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TeamMember 
            name="Munene (Native)" 
            position="CEO & Founder" 
            image="/team/ceo.jpg" 
            bio="Munene has over 4 years of experience in technology and business leadership."
          />
          <TeamMember 
            name="Wangari Leen" 
            position="CTO" 
            image="/team/cto.jpg" 
            bio="Leen leads our technical team with expertise in software architecture and emerging technologies."
          />
          <TeamMember 
            name="Sarah Johnson" 
            position="Creative Director" 
            image="/team/creative.jpg" 
            bio="Sarah brings creative vision and design excellence to all our projects."
          />
        </div>
      </section>

      {/* Company History */}
      <section className="my-16 glass-dark p-8 md:p-12 text-white rounded-2xl">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Journey</h2>
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row items-start gap-4">
            <div className="bg-white/20 rounded-full p-3 flex-shrink-0">
              <span className="text-xl font-bold">2023</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Founded in Nairobi</h3>
              <p>Native254 was established with a vision to create innovative digital solutions for local and international clients.</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start gap-4">
            <div className="bg-white/20 rounded-full p-3 flex-shrink-0">
              <span className="text-xl font-bold">2024</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Expanded Service Offerings</h3>
              <p>We broadened our services to include mobile application development and advanced UI/UX design.</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start gap-4">
            <div className="bg-white/20 rounded-full p-3 flex-shrink-0">
              <span className="text-xl font-bold">2025</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Growing Globally</h3>
              <p>Our vision for the future includes expanding our reach to serve clients across the globe with innovative technology solutions.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 