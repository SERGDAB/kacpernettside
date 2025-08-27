import { NavItem, Service } from '../types'

// Navigation items
export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' }
]

// Contact information
export const CONTACT_INFO = {
  email: 'contact@mywebsite.com',
  supportEmail: 'support@mywebsite.com',
  phone: '+1 (555) 123-4567',
  altPhone: '+1 (555) 987-6543',
  address: {
    street: '123 Main Street',
    city: 'City',
    state: 'State',
    zip: '12345',
    country: 'United States'
  },
  businessHours: {
    weekdays: '9:00 AM - 6:00 PM',
    saturday: '10:00 AM - 4:00 PM',
    sunday: 'Closed'
  }
}

// Social media links
export const SOCIAL_LINKS = {
  twitter: '#',
  instagram: '#',
  linkedin: '#'
}

// Company information
export const COMPANY_INFO = {
  name: 'My Website',
  tagline: 'A modern, responsive website built with React, TypeScript, and Tailwind CSS.',
  description: 'Ready to connect with your TypeScript backend.',
  founded: '2024'
}

// API configuration (for backend integration)
export const API_CONFIG = {
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
}
