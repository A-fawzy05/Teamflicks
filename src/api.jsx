import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// Add a request interceptor to include token
api.interceptors.request.use((config) => {
  const stored = localStorage.getItem('auth');
  if (stored) {
    const { token, tokenExpires } = JSON.parse(stored);
    const now = new Date().getTime();
    if (now < tokenExpires) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      // token expired
      localStorage.removeItem('auth');
      window.location.href = '/';
    }
  }
  return config;
}, (error) => Promise.reject(error));

export default api;