import axios from 'axios'
import type { AxiosInstance, AxiosResponse } from 'axios'
import type { ApiResponse } from '../types'
import { API_CONFIG } from './constants'

// Create axios instance with default configuration
const apiClient: AxiosInstance = axios.create({
  baseURL: API_CONFIG.baseURL,
  timeout: API_CONFIG.timeout,
  headers: API_CONFIG.headers
})

// Request interceptor for adding auth tokens
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor for handling errors
apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem('authToken')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

// Generic API functions
export const api = {
  // GET request
  get: async <T>(url: string): Promise<ApiResponse<T>> => {
    try {
      const response = await apiClient.get(url)
      return response.data
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'An error occurred')
    }
  },

  // POST request
  post: async <T>(url: string, data: any): Promise<ApiResponse<T>> => {
    try {
      const response = await apiClient.post(url, data)
      return response.data
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'An error occurred')
    }
  },

  // PUT request
  put: async <T>(url: string, data: any): Promise<ApiResponse<T>> => {
    try {
      const response = await apiClient.put(url, data)
      return response.data
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'An error occurred')
    }
  },

  // DELETE request
  delete: async <T>(url: string): Promise<ApiResponse<T>> => {
    try {
      const response = await apiClient.delete(url)
      return response.data
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'An error occurred')
    }
  }
}

// Specific API functions for your backend
export const contactAPI = {
  submitForm: (formData: any) => api.post('/contact', formData)
}

export const userAPI = {
  getProfile: () => api.get('/user/profile'),
  updateProfile: (data: any) => api.put('/user/profile', data)
}

export default apiClient
