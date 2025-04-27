'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  phone: z.string().optional(),
  subject: z.string().min(5, {
    message: 'Subject must be at least 5 characters.',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
})

type FormValues = z.infer<typeof formSchema>

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  })
  
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true)
    setSubmitError('')
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      setSubmitSuccess(true)
      reset()
      
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    } catch (error) {
      setSubmitError('There was an error sending your message. Please try again.')
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name field */}
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Your Name <span className="text-destructive">*</span>
          </label>
          <input
            id="name"
            {...register('name')}
            className="fluent-input"
            placeholder="John Doe"
            disabled={isSubmitting}
          />
          {errors.name && (
            <p className="text-sm text-destructive">{errors.name.message}</p>
          )}
        </div>
        
        {/* Email field */}
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email Address <span className="text-destructive">*</span>
          </label>
          <input
            id="email"
            type="email"
            {...register('email')}
            className="fluent-input"
            placeholder="your@email.com"
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email.message}</p>
          )}
        </div>
        
        {/* Phone field */}
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium">
            Phone Number <span className="text-muted-foreground text-sm">(optional)</span>
          </label>
          <input
            id="phone"
            type="tel"
            {...register('phone')}
            className="fluent-input"
            placeholder="+254 123 456 789"
            disabled={isSubmitting}
          />
          {errors.phone && (
            <p className="text-sm text-destructive">{errors.phone.message}</p>
          )}
        </div>
        
        {/* Subject field */}
        <div className="space-y-2">
          <label htmlFor="subject" className="text-sm font-medium">
            Subject <span className="text-destructive">*</span>
          </label>
          <input
            id="subject"
            {...register('subject')}
            className="fluent-input"
            placeholder="How can we help you?"
            disabled={isSubmitting}
          />
          {errors.subject && (
            <p className="text-sm text-destructive">{errors.subject.message}</p>
          )}
        </div>
        
        {/* Message field */}
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium">
            Message <span className="text-destructive">*</span>
          </label>
          <textarea
            id="message"
            {...register('message')}
            className="fluent-input min-h-[120px]"
            placeholder="Write your message here..."
            disabled={isSubmitting}
          />
          {errors.message && (
            <p className="text-sm text-destructive">{errors.message.message}</p>
          )}
        </div>
        
        {/* Submit button */}
        <motion.button
          type="submit"
          className="fluent-button bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-6 py-3 w-full"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </div>
          ) : (
            'Send Message'
          )}
        </motion.button>
        
        {/* Success message */}
        {submitSuccess && (
          <motion.div 
            className="p-4 bg-green-100 border border-green-200 text-green-800 rounded-md"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Your message has been sent successfully! We'll be in touch soon.
          </motion.div>
        )}
        
        {/* Error message */}
        {submitError && (
          <motion.div 
            className="p-4 bg-destructive/10 border border-destructive/20 text-destructive rounded-md"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {submitError}
          </motion.div>
        )}
      </form>
    </div>
  )
} 