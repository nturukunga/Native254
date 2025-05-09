import { Helmet } from 'react-helmet-async'
import TeamMember from '@/components/TeamMember'

const team = [
  {
    name: 'John Doe',
    position: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
    bio: 'With over 15 years in tech, John leads our company with innovation and strategic vision.'
  },
  {
    name: 'Jane Smith',
    position: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
    bio: 'Jane is a full-stack developer with expertise in React, Node.js, and cloud architecture.'
  },
  {
    name: 'David Johnson',
    position: 'UX Designer',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
    bio: 'David creates intuitive user experiences with a focus on accessibility and user satisfaction.'
  },
  {
    name: 'Maria Rodriguez',
    position: 'Marketing Specialist',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
    bio: 'Maria develops and implements innovative marketing strategies to drive growth and brand awareness.'
  },
  {
    name: 'Michael Chen',
    position: 'Backend Developer',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
    bio: 'Michael specializes in building robust backend systems and optimizing performance for high-traffic applications.'
  },
  {
    name: 'Sarah Johnson',
    position: 'Project Manager',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
    bio: 'Sarah ensures projects are delivered on time and within budget while maintaining the highest quality standards.'
  }
]

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us - Native254</title>
        <meta name="description" content="Learn about Native254, our mission, vision, and the talented team behind our innovative solutions." />
        <meta property="og:title" content="About Us - Native254" />
        <meta property="og:description" content="Meet the Native254 team and learn about our company's mission and values." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://native254.com/about" />
      </Helmet>
      
      <div className="pt-32 pb-16 relative">
        <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
          <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-primary/30 rounded-full filter blur-3xl opacity-60"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[40rem] h-[40rem] bg-secondary/30 rounded-full filter blur-3xl opacity-40"></div>
        </div>
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About <span className="text-primary">Native254</span></h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We are a team of passionate technologists dedicated to creating innovative solutions for the digital world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Native254 was founded in 2023 with a vision to bridge the gap between technology and business needs in the African market. Starting with a small team of dedicated developers, we've grown into a full-service digital solutions provider.
              </p>
              <p className="text-muted-foreground mb-4">
                Our name, Native254, represents our Kenyan roots (254 being Kenya's country code) and our commitment to creating solutions that are native to the needs of our clients and market.
              </p>
              <p className="text-muted-foreground">
                Today, we work with businesses of all sizes, from startups to established enterprises, helping them navigate the digital landscape and achieve their goals through innovative technology solutions.
              </p>
            </div>
            <div className="glass p-8 rounded-xl">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To empower businesses through innovative technology solutions that drive growth, efficiency, and exceptional user experiences.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To be the leading digital transformation partner in Africa, recognized for our technical excellence, innovation, and client-centered approach.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Our Values</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Innovation and creativity</li>
                    <li>Technical excellence</li>
                    <li>Client satisfaction</li>
                    <li>Integrity and transparency</li>
                    <li>Continuous learning and growth</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4 text-center">Our Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="fluent-card p-6">
                <div className="rounded-full bg-primary/10 p-4 inline-block mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Discover</h3>
                <p className="text-muted-foreground">
                  We start by understanding your business, goals, and challenges to identify how technology can help you succeed.
                </p>
              </div>
              
              <div className="fluent-card p-6">
                <div className="rounded-full bg-primary/10 p-4 inline-block mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Design</h3>
                <p className="text-muted-foreground">
                  We create blueprints and prototypes for your solution, focusing on user experience, functionality, and technical architecture.
                </p>
              </div>
              
              <div className="fluent-card p-6">
                <div className="rounded-full bg-primary/10 p-4 inline-block mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Develop</h3>
                <p className="text-muted-foreground">
                  Our expert team builds your solution using the latest technologies and best practices, ensuring quality at every step.
                </p>
              </div>
              
              <div className="fluent-card p-6">
                <div className="rounded-full bg-primary/10 p-4 inline-block mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Test</h3>
                <p className="text-muted-foreground">
                  We rigorously test all aspects of your solution to ensure it works flawlessly and meets your requirements.
                </p>
              </div>
              
              <div className="fluent-card p-6">
                <div className="rounded-full bg-primary/10 p-4 inline-block mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Deploy</h3>
                <p className="text-muted-foreground">
                  We launch your solution and ensure a smooth transition, with careful monitoring and support during the critical initial period.
                </p>
              </div>
              
              <div className="fluent-card p-6">
                <div className="rounded-full bg-primary/10 p-4 inline-block mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Maintain & Improve</h3>
                <p className="text-muted-foreground">
                  We provide ongoing support and continuously improve your solution based on feedback and evolving business needs.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-4 text-center">Meet Our Team</h2>
            <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
              Our diverse team of experts is passionate about technology and committed to delivering excellence in every project.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <TeamMember
                  key={index}
                  name={member.name}
                  position={member.position}
                  image={member.image}
                  bio={member.bio}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
