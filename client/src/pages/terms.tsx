import { Helmet } from 'react-helmet-async'

export default function TermsOfService() {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Native254</title>
        <meta name="description" content="Terms of Service for Native254 - Your trusted technology solutions partner" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg mb-6">Last Updated: May 9, 2023</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the services provided by Native254 ("Company," "we," "us," or "our"), you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Description of Services</h2>
              <p>
                Native254 provides technology solutions including web development, mobile application development, UI/UX design, and related consulting services. The specific services provided will be outlined in individual agreements or statements of work.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Client Responsibilities</h2>
              <p>
                Clients are responsible for providing accurate information, necessary materials, and timely feedback to facilitate the completion of services. Delays in providing required information may result in project timeline adjustments.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property Rights</h2>
              <p>
                Unless otherwise specified in a written agreement:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Native254 retains ownership of all custom code, processes, and methodologies developed by us.</li>
                <li>Upon full payment, clients receive a non-exclusive license to use the delivered work for its intended purpose.</li>
                <li>Clients retain ownership of their pre-existing materials and content provided to us.</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Payment Terms</h2>
              <p>
                Payment terms will be specified in individual client agreements. Generally:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>We require a deposit before commencing work</li>
                <li>Final deliverables may be withheld until full payment is received</li>
                <li>Late payments may incur additional fees</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
              <p>
                Native254 shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Warranty and Disclaimer</h2>
              <p>
                While we strive for excellence, our services are provided "as is" without warranties of any kind, either express or implied. We do not guarantee that our services will be error-free or uninterrupted.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Termination</h2>
              <p>
                Either party may terminate service agreements according to the terms specified in individual contracts. Upon termination, clients remain responsible for payment of services rendered prior to termination.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of Kenya, without regard to its conflict of law provisions.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">10. Changes to Terms</h2>
              <p>
                Native254 reserves the right to modify these Terms at any time. We will provide notice of significant changes by updating the "Last Updated" date. Your continued use of our services after such changes constitutes your acceptance of the new Terms.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">11. Contact Information</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <p>
                Native254<br />
                123 Business Street<br />
                Nairobi, Kenya<br />
                Email: info@native254.com<br />
                Phone: +254 123 456 789
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}