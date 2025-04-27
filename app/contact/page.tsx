import { Metadata } from 'next'
import ContactForm from '../components/ContactForm'
import ContactInfo from '../components/ContactInfo'

export const metadata: Metadata = {
  title: 'Contact Us - Native254',
  description: 'Get in touch with Native254. Contact us for inquiries, support, or to discuss your project.',
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 mt-20">
      <div className="glass p-8 md:p-12 rounded-2xl">
        <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
        <p className="text-lg mb-10 text-center max-w-2xl mx-auto">
          We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form */}
          <div className="lg:w-2/3">
            <ContactForm />
          </div>
          
          {/* Contact Information */}
          <div className="lg:w-1/3">
            <ContactInfo />
          </div>
        </div>
      </div>
      
      {/* Map Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Visit Our Office</h2>
        <div className="h-[400px] w-full rounded-xl overflow-hidden">
          {/* Replace with actual Google Maps embed */}
          <div className="bg-gray-200 h-full w-full relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-gray-500">Google Maps will be embedded here</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="fluent-card p-6">
            <h3 className="text-xl font-semibold mb-2">What is your typical process for new projects?</h3>
            <p className="text-muted-foreground">
              Our process typically begins with a discovery phase where we learn about your business goals and requirements. 
              We then move to planning, design, development, testing, and finally launch. Throughout the process, 
              we maintain regular communication to ensure the final product meets your expectations.
            </p>
          </div>
          
          <div className="fluent-card p-6">
            <h3 className="text-xl font-semibold mb-2">How long does it take to complete a project?</h3>
            <p className="text-muted-foreground">
              Project timelines vary depending on complexity and scope. A simple website might take 4-6 weeks, 
              while a more complex web application or mobile app could take 3-6 months. During our initial consultation, 
              we'll provide a more accurate timeline based on your specific requirements.
            </p>
          </div>
          
          <div className="fluent-card p-6">
            <h3 className="text-xl font-semibold mb-2">Do you provide maintenance and support after launch?</h3>
            <p className="text-muted-foreground">
              Yes, we offer ongoing maintenance and support packages to ensure your website or application 
              continues to run smoothly after launch. Our support packages include regular updates, 
              security patches, and technical assistance as needed.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 