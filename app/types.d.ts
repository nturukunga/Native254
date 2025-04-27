// Module type declarations
declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "*.png" {
  const content: any;
  export default content;
}

declare module "*.jpg" {
  const content: any;
  export default content;
}

// Component type definitions
interface ServiceType {
  id: number;
  title: string;
  description: string;
  image: string;
  features: string[];
}

interface TeamMemberType {
  name: string;
  position: string;
  image: string;
  bio: string;
}

interface ContactItemType {
  icon: React.ReactNode;
  title: string;
  details: string[];
}

// Define global types for custom components
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'motion.div': any;
      'motion.h1': any;
      'motion.h2': any;
      'motion.h3': any;
      'motion.p': any;
      'motion.span': any;
      'motion.button': any;
    }
  }
} 