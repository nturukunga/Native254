import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import ContactForm from '@/components/ContactForm'

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us - Native254</title>
        <meta name="description" content="Get in touch with Native254. We'd love to hear from you and discuss how we can help with your digital needs." />
        <meta property="og:title" content="Contact Us - Native254" />
        <meta property="og:description" content="Get in touch with Native254. Our team is ready to answer your questions and help you get started." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://native254.com/contact" />
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Get in <span className="text-primary">Touch</span></h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have a question or want to work with us? Send us a message and we'll get back to you as soon as possible.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <motion.div 
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="space-y-8">
                <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
                
                <div className="flex items-start space-x-4">
                  <div className="rounded-full bg-primary/10 p-3 text-primary flex-shrink-0">
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
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
                      />
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Visit Us</h3>
                    <div className="text-muted-foreground">
                      <p className="text-sm">123 Business Street</p>
                      <p className="text-sm">Nairobi, Kenya</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="rounded-full bg-primary/10 p-3 text-primary flex-shrink-0">
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
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email Us</h3>
                    <div className="text-muted-foreground">
                      <p className="text-sm">info@native254.com</p>
                      <p className="text-sm">support@native254.com</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="rounded-full bg-primary/10 p-3 text-primary flex-shrink-0">
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
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Call Us</h3>
                    <div className="text-muted-foreground">
                      <p className="text-sm">+254 123 456 789</p>
                      <p className="text-sm">+254 987 654 321</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="rounded-full bg-primary/10 p-3 text-primary flex-shrink-0">
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
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Business Hours</h3>
                    <div className="text-muted-foreground">
                      <p className="text-sm">Monday - Friday: 9:00 AM - 5:00 PM</p>
                      <p className="text-sm">Saturday: 10:00 AM - 2:00 PM</p>
                      <p className="text-sm">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
                
                {/* Social Media */}
                <div>
                  <h3 className="font-medium mb-3">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="#" 
                      className="bg-primary/10 p-2.5 rounded-full text-primary hover:bg-primary/20 transition-colors"
                      aria-label="Facebook"
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-5 w-5" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="bg-primary/10 p-2.5 rounded-full text-primary hover:bg-primary/20 transition-colors"
                      aria-label="Twitter"
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-5 w-5" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="bg-primary/10 p-2.5 rounded-full text-primary hover:bg-primary/20 transition-colors"
                      aria-label="Instagram"
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-5 w-5" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="bg-primary/10 p-2.5 rounded-full text-primary hover:bg-primary/20 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-5 w-5" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <ContactForm />
            </motion.div>
          </div>
          
          {/* Map Section */}
          <motion.div 
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-6">Find Us</h2>
            <div className="glass rounded-xl overflow-hidden h-[400px]">
              <iframe
                title="Native254 Office Location"
                className="w-full h-full border-0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63821.88068391705!2d36.78796508580883!3d-1.2834854590332236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1625689769414!5m2!1sen!2sus"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </motion.div>
          
          {/* FAQ Section */}
          <motion.div 
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="fluent-card p-6">
                <h3 className="text-xl font-semibold mb-2">How long does a typical project take?</h3>
                <p className="text-muted-foreground">
                  Project timelines vary based on scope and complexity. A simple website might take 2-4 weeks, while more complex applications can take 2-6 months. We'll provide a detailed timeline during our initial consultation.
                </p>
              </div>
              
              <div className="fluent-card p-6">
                <h3 className="text-xl font-semibold mb-2">What is your pricing structure?</h3>
                <p className="text-muted-foreground">
                  We offer flexible pricing options including fixed-price quotes for well-defined projects and time-and-materials billing for projects with evolving requirements. We'll discuss the best approach for your specific needs.
                </p>
              </div>
              
              <div className="fluent-card p-6">
                <h3 className="text-xl font-semibold mb-2">Do you provide maintenance after launch?</h3>
                <p className="text-muted-foreground">
                  Yes, we offer ongoing maintenance and support packages to ensure your digital products continue to perform optimally and stay up-to-date with the latest technologies and security practices.
                </p>
              </div>
              
              <div className="fluent-card p-6">
                <h3 className="text-xl font-semibold mb-2">What technologies do you specialize in?</h3>
                <p className="text-muted-foreground">
                  Our team is proficient in a wide range of technologies including React, Next.js, Node.js, Python, React Native, Flutter, and various cloud platforms like AWS, Google Cloud, and Azure.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
