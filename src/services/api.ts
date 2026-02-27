import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Authentication API
export const authAPI = {
  // Sign up
  signup: async (userData: { fullName: string; email: string; password: string }) => {
    const response = await api.post('/auth/signup', userData);
    return response.data;
  },

  // Login
  login: async (credentials: { email: string; password: string }) => {
    const response = await api.post('/auth/login', credentials);
    return response.data;
  },

  // Get all users
  getUsers: async () => {
    const response = await api.get('/auth/users');
    return response.data;
  },
};

// User storage helpers
export const userStorage = {
  setUser: (userData: { token: string; fullName: string; email: string; _id: string }) => {
    localStorage.setItem('token', userData.token);
    localStorage.setItem('user', JSON.stringify({
      fullName: userData.fullName,
      email: userData.email,
      _id: userData._id,
    }));
  },

  getUser: () => {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  },

  getToken: () => {
    return localStorage.getItem('token');
  },

  clearUser: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },

  isAuthenticated: () => {
    return !!localStorage.getItem('token');
  },
};

// CMS API - Public endpoints (no auth required)
export const cmsAPI = {
  // Get Hero content
  getHero: async () => {
    const response = await api.get('/cms/hero');
    return response.data;
  },

  // Get About content
  getAbout: async () => {
    const response = await api.get('/cms/about');
    return response.data;
  },

  // Get Why Choose content
  getWhyChoose: async () => {
    const response = await api.get('/cms/why-choose');
    return response.data;
  },

  // Get Contact content
  getContact: async () => {
    const response = await api.get('/cms/contact');
    return response.data;
  },

  // Get Leadership content
  getLeadership: async () => {
    const response = await api.get('/cms/leadership');
    return response.data;
  },

  // Get Projects content
  getProjects: async () => {
    const response = await api.get('/cms/projects');
    return response.data;
  },

  // Get Testimonials content
  getTestimonials: async () => {
    const response = await api.get('/cms/testimonials');
    return response.data;
  },

  // Get Special Offers content
  getSpecialOffers: async () => {
    const response = await api.get('/cms/special-offers');
    return response.data;
  },

  // Get Services content
  getServices: async () => {
    const response = await api.get('/cms/services');
    return response.data;
  },

  // Get News content
  getNews: async () => {
    const response = await api.get('/cms/news');
    return response.data;
  },

  // Get CSR content
  getCSR: async () => {
    const response = await api.get('/cms/csr');
    return response.data;
  },

  // Get Events content
  getEvents: async () => {
    const response = await api.get('/cms/events');
    return response.data;
  },

  // Get Careers content
  getCareers: async () => {
    const response = await api.get('/cms/careers');
    return response.data;
  },

  // Get Group Company content
  getGroupCompany: async () => {
    const response = await api.get('/cms/group-company');
    return response.data;
  },

  // Get Partnership content
  getPartnership: async () => {
    const response = await api.get('/cms/partnership');
    return response.data;
  },

  // Get Footer content
  getFooter: async () => {
    const response = await api.get('/cms/footer');
    return response.data;
  },

  // Admin endpoints (auth required)
  updateHero: async (data: any) => {
    const response = await api.put('/cms/hero', data);
    return response.data;
  },

  updateAbout: async (data: any) => {
    const response = await api.put('/cms/about', data);
    return response.data;
  },

  updateWhyChoose: async (data: any) => {
    const response = await api.put('/cms/why-choose', data);
    return response.data;
  },

  updateContact: async (data: any) => {
    const response = await api.put('/cms/contact', data);
    return response.data;
  },

  updateLeadership: async (data: any) => {
    const response = await api.put('/cms/leadership', data);
    return response.data;
  },

  updateProjects: async (data: any) => {
    const response = await api.put('/cms/projects', data);
    return response.data;
  },

  updateTestimonials: async (data: any) => {
    const response = await api.put('/cms/testimonials', data);
    return response.data;
  },

  updateSpecialOffers: async (data: any) => {
    const response = await api.put('/cms/special-offers', data);
    return response.data;
  },

  updateServices: async (data: any) => {
    const response = await api.put('/cms/services', data);
    return response.data;
  },

  updateNews: async (data: any) => {
    const response = await api.put('/cms/news', data);
    return response.data;
  },

  updateCSR: async (data: any) => {
    const response = await api.put('/cms/csr', data);
    return response.data;
  },

  updateEvents: async (data: any) => {
    const response = await api.put('/cms/events', data);
    return response.data;
  },

  updateCareers: async (data: any) => {
    const response = await api.put('/cms/careers', data);
    return response.data;
  },

  updateGroupCompany: async (data: any) => {
    const response = await api.put('/cms/group-company', data);
    return response.data;
  },

  updatePartnership: async (data: any) => {
    const response = await api.put('/cms/partnership', data);
    return response.data;
  },

  updateFooter: async (data: any) => {
    const response = await api.put('/cms/footer', data);
    return response.data;
  },
};

export default api;
