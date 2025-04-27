import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Native254 - Official Website',
  description: 'Native254 company official website',
}

import { ThemeProvider } from './theme-provider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        {/* Google Model Viewer */}
        <Script 
          src="https://cdn.jsdelivr.net/npm/@google/model-viewer@2.1.1/dist/model-viewer.min.js" 
          type="module"
          strategy="beforeInteractive"
        />
        {/* Fallback for non-module supporting browsers */}
        <Script 
          noModule
          src="https://cdn.jsdelivr.net/npm/@google/model-viewer@2.1.1/dist/model-viewer-legacy.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className={`${inter.className} flex min-h-screen flex-col`}>
        <ThemeProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
} 