// Contact form types
export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

// Service types
export interface Service {
  title: string
  description: string
  icon: React.ReactNode
  color: string
}

// Team member types
export interface TeamMember {
  name: string
  role: string
  description: string
  initials: string
  gradient: string
}

// Navigation types
export interface NavItem {
  label: string
  path: string
}

// API response types (for future backend integration)
export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

// User types (for future authentication)
export interface User {
  id: string
  name: string
  email: string
  role: 'admin' | 'user'
  createdAt: Date
}

export interface CarSpecs {
  engine: string
  power: string
  acceleration: string
  topSpeed: string
}

export interface Car {
  name: string
  image: string
  specs: CarSpecs
}
