'use client'

import { useEffect, useRef, useState } from 'react'

interface ModelViewerProps {
  src: string
  alt: string
}

// This tells TypeScript about the model-viewer element
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        src: string
        alt: string
        'auto-rotate'?: boolean
        'camera-controls'?: boolean
        'shadow-intensity'?: string
        'loading'?: string
        'reveal'?: string
        'ar'?: boolean
        'ar-modes'?: string
        'poster'?: string
        'environment-image'?: string
        style?: React.CSSProperties
      }, HTMLElement>
    }
  }
}

export default function ModelViewer({ src, alt }: ModelViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  
  useEffect(() => {
    console.log('Loading model from path:', src)
    
    const checkModelViewerStatus = () => {
      const modelViewer = document.querySelector('model-viewer')
      if (modelViewer) {
        modelViewer.addEventListener('load', () => {
          console.log('Model loaded successfully')
          setIsLoading(false)
        })
        
        modelViewer.addEventListener('error', (error) => {
          console.error('Error loading model:', error)
          setHasError(true)
          setIsLoading(false)
        })
      }
    }
    
    checkModelViewerStatus()
    
    return () => {
      const modelViewer = document.querySelector('model-viewer')
      if (modelViewer) {
        modelViewer.removeEventListener('load', () => {})
        modelViewer.removeEventListener('error', () => {})
      }
    }
  }, [src])
  
  const fullPath = src.startsWith('/') ? src : `/${src}`
  
  return (
    <div ref={containerRef} className="w-full h-full relative">
      {/* @ts-ignore */}
      <model-viewer
        src={fullPath}
        alt={alt}
        auto-rotate
        camera-controls
        shadow-intensity="1"
        loading="eager"
        reveal="auto"
        style={{ width: '100%', height: '100%' }}
      ></model-viewer>
      
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/10 text-white">
          Loading 3D Model...
        </div>
      )}
      
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-red-500/20 text-white">
          Error loading model
        </div>
      )}
    </div>
  )
}
