import Link from 'next/link'
import Image from 'next/image'

const socialLinks = [
  { name: 'Twitter', icon: '/icons/twitter.svg', url: 'https://twitter.com' },
  { name: 'Facebook', icon: '/icons/facebook.svg', url: 'https://facebook.com' },
  { name: 'Instagram', icon: '/icons/instagram.svg', url: 'https://instagram.com' },
  { name: 'LinkedIn', icon: '/icons/linkedin.svg', url: 'https://linkedin.com' },
]

const footerLinks = [
  {
    title: 'Company',
    links: [
      { name: 'About', href: '/about' },
      { name: 'Services', href: '/services' },
      { name: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ],
  },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-card mt-12">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="relative h-12 w-40 mb-4">
              <Image 
                src="/logo.png" 
                alt="Native254 Logo" 
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Native254 - Providing innovative solutions since 2023.
            </p>
            {/* Social Media Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={`Follow us on ${social.name}`}
                >
                  <div className="relative h-5 w-5">
                    <Image 
                      src={social.icon} 
                      alt={social.name} 
                      fill
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          {/* Footer Links */}
          {footerLinks.map((group) => (
            <div key={group.title} className="md:col-span-1">
              <h3 className="font-semibold mb-4">{group.title}</h3>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          {/* Contact Information */}
          <div className="md:col-span-1">
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>--------------</li>
              <li>Nairobi, Kenya</li>
              <li>info@native254.com</li>
              <li>+254 123 456 789</li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Native254. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 