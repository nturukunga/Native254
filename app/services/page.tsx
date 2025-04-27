import Image from 'next/image'
import { Metadata } from 'next'
import ServiceCard from '../components/ServiceCard'
import dynamic from 'next/dynamic'

const Spline = dynamic(() => import('@splinetool/react-spline').then(mod => {
  return mod.default || mod
}), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-muted/30 animate-pulse flex items-center justify-center rounded-xl">Loading 3D Model...</div>
})

export const metadata: Metadata = {
  title: 'Our Services - Native254',
  description: 'Explore the comprehensive range of services offered by Native254.',
}

const services = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Our expert web development team creates responsive, high-performance websites and web applications tailored to your business needs. Using modern frameworks and technologies, we build solutions that are both beautiful and functional.',
    image: '/models/services/web-development.glb',
    modelPath: '/models/services/web-development.glb',
    features: [
      'Custom website design and development',
      'E-commerce solutions', 
      'Content management systems',
      'Web application development',
      'Website maintenance and support'
    ]
  },
  {
    id: 2,
    title: 'Mobile Applications',
    description: 'We design and develop custom mobile applications for iOS and Android platforms that deliver seamless user experiences and drive business growth. Our mobile solutions are built with scalability and performance in mind.',
    image: '/models/services/mobile-apps.glb',
    modelPath: '/models/services/mobile-apps.glb',
    features: [
      'Native iOS and Android development',
      'Cross-platform mobile applications',
      'Mobile UI/UX design',
      'App testing and quality assurance',
      'App store submission and optimization'
    ]
  },
  {
    id: 3,
    title: 'UI/UX Design',
    description: 'Our design team creates intuitive, engaging user interfaces that enhance user experience and satisfaction. We focus on user-centered design principles to ensure your digital products are both beautiful and functional.',
    image: '/models/services/ui-ux-design.glb',
    modelPath: '/models/services/ui-ux-design.glb',
    features: [
      'User research and personas',
      'Wireframing and prototyping',
      'Visual design and branding',
      'Usability testing',
      'Design systems'
    ]
  },
  {
    id: 4,
    title: 'Brand Identity',
    description: 'We help businesses establish a strong brand identity that resonates with their target audience. From logo design to comprehensive brand guidelines, we create cohesive brand experiences that build recognition and trust.',
    image: '/models/services/brand-identity.glb',
    modelPath: '/models/services/brand-identity.glb',
    features: [
      'Logo design and visual identity',
      'Brand strategy and positioning',
      'Brand guidelines',
      'Marketing collateral',
      'Brand voice and messaging'
    ]
  },
  {
    id: 5,
    title: 'Digital Marketing',
    description: 'Our digital marketing services help businesses grow their online presence and drive conversions. We develop strategic marketing campaigns tailored to your business goals and target audience.',
    image: '/models/services/digital-marketing.glb',
    modelPath: '/models/services/digital-marketing.glb',
    features: [
      'Search engine optimization (SEO)',
      'Social media marketing',
      'Content marketing',
      'Email marketing campaigns',
      'Analytics and performance tracking'
    ]
  },
  {
    id: 6,
    title: 'Consulting & Strategy',
    description: 'Our technology consulting services provide expert guidance to help businesses leverage technology for growth and competitive advantage. We work closely with clients to develop strategies that align with their business objectives.',
    image: '/models/services/consulting.glb',
    modelPath: '/models/services/consultancy.glb',
    features: [
      'Digital transformation consulting',
      'Technology roadmapping',
      'IT strategy development',
      'Process optimization',
      'Technical architecture planning'
    ]
  }
]

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16 mt-20">
      {/* Hero Section */}
      <section className="glass p-8 md:p-12 rounded-2xl">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-6">Our Services</h1>
            <p className="text-lg mb-6">
              Native254 offers a comprehensive range of digital services designed to help your business thrive
              in today's competitive landscape. From web development to digital marketing, we provide
              end-to-end solutions tailored to your specific needs.
            </p>
            <p className="text-lg">
              Explore our service offerings below and discover how we can help you achieve your business goals.
            </p>
          </div>
          <div className="md:w-1/2 relative h-[300px] w-full">
            <div className="w-full h-full rounded-xl overflow-visible">
              <Spline
                scene="https://prod.spline.design/ttbrjR0HjHb9yB4q/scene.splinecode"
                className="w-full h-full rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="my-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard 
              key={service.id}
              title={service.title}
              description={service.description}
              image={service.image}
              modelPath={service.modelPath}
              features={service.features}
            />
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="my-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass p-6 text-center">
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Discovery</h3>
            <p className="text-muted-foreground">
              We start by understanding your business goals, target audience, and project requirements.
            </p>
          </div>
          <div className="glass p-6 text-center">
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Planning</h3>
            <p className="text-muted-foreground">
              Our team develops a detailed project plan with timelines, deliverables, and resource requirements.
            </p>
          </div>
          <div className="glass p-6 text-center">
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Execution</h3>
            <p className="text-muted-foreground">
              We implement the solution with regular updates and client feedback throughout the process.
            </p>
          </div>
          <div className="glass p-6 text-center">
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">4</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Launch & Support</h3>
            <p className="text-muted-foreground">
              After thorough testing, we launch your project and provide ongoing maintenance and support.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="my-16">
        <div className="glass-dark p-8 md:p-12 text-white rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="mb-8 text-lg max-w-2xl mx-auto">
            Contact us today to discuss your project requirements and how we can help you achieve your goals.
          </p>
          <a 
            href="/contact" 
            className="fluent-button bg-white text-black hover:bg-white/90 h-12 px-8 py-3 inline-flex items-center"
          >
            Get in Touch
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 ml-2" 
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
          </a>
        </div>
      </section>
    </div>
  )
} 