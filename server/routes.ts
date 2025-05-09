import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";

// Define the schema for contact form validation
const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

import nodemailer from 'nodemailer';

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  app.post('/api/contact', async (req, res) => {
    try {
      const result = contactFormSchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ error: 'Invalid form data' });
      }
      
      const { name, email, subject, message } = result.data;
      
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_RECIPIENT,
        subject: `Contact Form: ${subject}`,
        text: `
Name: ${name}
Email: ${email}
Message: ${message}
        `,
        html: `
<h3>New Contact Form Submission</h3>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Message:</strong> ${message}</p>
        `
      };

      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send email' });
    }
  });

  // Services data endpoint
  app.get("/api/services", (req, res) => {
    const services = [
      {
        id: 1,
        title: 'Web Development',
        description: 'Custom websites built with modern technologies and responsive design.',
        image: '/services/web-development.png',
      },
      {
        id: 2,
        title: 'Mobile Applications',
        description: 'Native and cross-platform mobile apps for iOS and Android.',
        image: '/services/mobile-apps.png',
      },
      {
        id: 3,
        title: 'UI/UX Design',
        description: 'User-centered design that enhances user experience and satisfaction.',
        image: '/services/ui-ux-design.png',
      },
      {
        id: 4,
        title: 'Brand Identity',
        description: 'Creating memorable brands that resonate with your target audience.',
        image: '/services/brand-identity.png',
      },
      {
        id: 5,
        title: 'Digital Marketing',
        description: 'Strategies to grow your online presence and drive conversions.',
        image: '/services/digital-marketing.png',
      },
    ];

    return res.status(200).json(services);
  });

  // Team data endpoint
  app.get("/api/team", (req, res) => {
    const team = [
      {
        id: 1,
        name: 'John Doe',
        position: 'CEO & Founder',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
        bio: 'With over 15 years in tech, John leads our company with innovation and strategic vision.'
      },
      {
        id: 2,
        name: 'Jane Smith',
        position: 'Lead Developer',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
        bio: 'Jane is a full-stack developer with expertise in React, Node.js, and cloud architecture.'
      },
      {
        id: 3,
        name: 'David Johnson',
        position: 'UX Designer',
        image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5',
        bio: 'David creates intuitive user experiences with a focus on accessibility and user satisfaction.'
      }
    ];

    return res.status(200).json(team);
  });

  const httpServer = createServer(app);

  return httpServer;
}