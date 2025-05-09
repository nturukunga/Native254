import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import ServiceCard from '@/components/ServiceCard'

const services = [
  {
    title: 'Web Development',
    description: 'We build responsive, high-performance websites and web applications that provide seamless user experiences across all devices.',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500',
    features: [
      'Responsive design for all screen sizes',
      'SEO optimization for better visibility',
      'Performance optimized for fast loading',
      'Secure development practices',
      'Content management systems',
      'E-commerce solutions'
    ]
  },
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500',
    features: [
      'iOS and Android development',
      'Cross-platform solutions',
      'UI/UX focused design',
      'Performance optimization',
      'API integration',
      'App store submission'
    ]
  },
  {
    title: 'UI/UX Design',
    description: 'User-centered design that enhances user experience, engagement, and satisfaction with your digital products.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500',
    features: [
      'User research and personas',
      'Wireframing and prototyping',
      'Visual design and branding',
      'Interaction design',
      'Usability testing',
      'Design systems'
    ]
  },
  {
    title: 'Brand Identity',
    description: 'Creating memorable brands that resonate with your target audience and establish a strong presence in the market.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500',
    features: [
      'Logo design and brand guidelines',
      'Visual identity systems',
      'Brand messaging and tone of voice',
      'Marketing collateral',
      'Brand strategy',
      'Brand consistency across platforms'
    ]
  },
  {
    title: 'Digital Marketing',
    description: 'Strategic marketing solutions to grow your online presence, reach your target audience, and drive conversions.',
    image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500',
    features: [
      'SEO and content marketing',
      'Social media marketing',
      'PPC and display advertising',
      'Email marketing campaigns',
      'Analytics and reporting',
      'Marketing automation'
    ]
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable and reliable cloud infrastructure and services that support your business operations and growth.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500',
    features: [
      'Cloud migration and deployment',
      'Serverless architecture',
      'DevOps and CI/CD pipelines',
      'Infrastructure as code',
      'Managed cloud services',
      'Cloud security and compliance'
    ]
  }
]

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Our Services - Native254</title>
        <meta name="description" content="Explore the comprehensive range of digital services offered by Native254, including web and mobile development, UI/UX design, and digital marketing." />
        <meta property="og:title" content="Our Services - Native254" />
        <meta property="og:description" content="Discover how our services can help your business grow and succeed in the digital landscape." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://native254.com/services" />
      </Helmet>
      
      <div className="pt-32 pb-16 relative">
        <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
          <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-primary/30 rounded-full filter blur-3xl opacity-60"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[40rem] h-[40rem] bg-secondary/30 rounded-full filter blur-3xl opacity-40"></div>
        </div>
        
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our <span className="text-primary">Services</span></h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer a comprehensive range of digital solutions to help your business thrive in today's competitive landscape.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                image={service.image}
                features={service.features}
              />
            ))}
          </div>
          
          <div className="mt-24 glass p-8 rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Development Process</h2>
                <p className="text-muted-foreground mb-4">
                  We follow a structured and collaborative approach to ensure your project is delivered on time, within budget, and to the highest quality standards.
                </p>
                
                <div className="space-y-6 mt-8">
                  <div className="flex items-start">
                    <div className="rounded-full bg-primary/10 p-2 text-primary mr-4 flex-shrink-0">
                      <span className="font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Discovery & Planning</h3>
                      <p className="text-muted-foreground text-sm">
                        We begin by understanding your business goals, target audience, and project requirements.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="rounded-full bg-primary/10 p-2 text-primary mr-4 flex-shrink-0">
                      <span className="font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Design & Prototyping</h3>
                      <p className="text-muted-foreground text-sm">
                        We create wireframes and prototypes to visualize the solution and gather your feedback.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="rounded-full bg-primary/10 p-2 text-primary mr-4 flex-shrink-0">
                      <span className="font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Development</h3>
                      <p className="text-muted-foreground text-sm">
                        Our development team brings the design to life using the latest technologies and best practices.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="rounded-full bg-primary/10 p-2 text-primary mr-4 flex-shrink-0">
                      <span className="font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Testing & Quality Assurance</h3>
                      <p className="text-muted-foreground text-sm">
                        We thoroughly test the solution to ensure it meets all requirements and quality standards.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="rounded-full bg-primary/10 p-2 text-primary mr-4 flex-shrink-0">
                      <span className="font-bold">5</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Deployment & Launch</h3>
                      <p className="text-muted-foreground text-sm">
                        We deploy the solution to production and ensure a smooth launch.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="rounded-full bg-primary/10 p-2 text-primary mr-4 flex-shrink-0">
                      <span className="font-bold">6</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Maintenance & Support</h3>
                      <p className="text-muted-foreground text-sm">
                        We provide ongoing support and maintenance to keep your solution running smoothly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80" 
                  alt="Team working on a project"
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
          
          <div className="mt-24 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-muted-foreground mb-8 max-w-3xl mx-auto">
              Contact us today to discuss your project requirements and how we can help you achieve your business goals.
            </p>
            <a 
              href="/contact" 
              className="fluent-button bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 py-3 inline-flex"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
