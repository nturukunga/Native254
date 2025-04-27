# Native254 - Company Website

A modern, responsive website for Native254 company built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- **Modern UI/UX**: Clean and professional design with fluid animations
- **Glassmorphism**: Beautiful glass-like UI elements throughout the site
- **Responsive Design**: Fully optimized for all device sizes
- **Secure Contact Form**: Form validation with Zod and secure form handling
- **Slider Component**: Interactive service slider with touch/swipe support
- **SEO Optimized**: Metadata setup for better search engine visibility

## Technology Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with Fluent Design principles
- **Animation**: Framer Motion
- **Form Handling**: React Hook Form with Zod validation
- **Security**: Input sanitization and validation

## Getting Started

### Prerequisites

- Node.js 16.8 or later
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/native254.git
cd native254
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Building for Production

```bash
npm run build
# or
yarn build
```

## Security Features

- **Form Validation**: All inputs are validated using Zod schema validation
- **XSS Protection**: Input sanitization to prevent cross-site scripting
- **No Client-side Database Operations**: All data operations handled via secure backend APIs
- **Type Safety**: TypeScript for type checking to prevent common errors

## Project Structure

- `app/` - Next.js app directory containing pages and routing
- `app/components/` - Reusable React components
- `app/lib/` - Utility functions and shared code
- `public/` - Static assets (images, icons, etc.)
- `styles/` - Global styles and Tailwind configuration

## Contact

For questions or support, please contact [your-email@example.com](mailto:your-email@example.com)

## License

This project is licensed under the MIT License - see the LICENSE file for details. 