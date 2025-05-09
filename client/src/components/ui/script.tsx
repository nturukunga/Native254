import { useEffect } from 'react';

interface ScriptProps {
  src: string;
  type?: string;
  noModule?: boolean;
}

export default function Script({ src, type = 'text/javascript', noModule = false }: ScriptProps) {
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.src = src;
    script.type = type;
    if (noModule) {
      script.setAttribute('nomodule', '');
    }
    
    // Append to body
    document.body.appendChild(script);
    
    // Cleanup function to remove script on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, [src, type, noModule]);
  
  return null;
}