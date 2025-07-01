import React, { createContext, useState, useContext, useEffect } from 'react';
import api from '../api';
import { toast } from 'react-hot-toast';

const UserContext = createContext();
export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    const stored = localStorage.getItem('auth');
    if (!stored) return null;
    const auth = JSON.parse(stored);
    return { ...auth.user, token: auth.token, tokenExpires: auth.tokenExpires };
  });

  const saveAuth = (userData, token, expiresIn) => {
    const expiry = new Date().getTime() + expiresIn;
    localStorage.setItem('auth', JSON.stringify({ token, tokenExpires: expiry, user: userData }));
    setCurrentUser({ ...userData, token, tokenExpires: expiry });
  };

  const signup = async (userData) => {
    try {
      const { data } = await api.post('/users/signup', userData);
      saveAuth(data.data, data.token, data.expiresIn);
      toast.success('Signup successful!');
      return true;
    } catch (err) {
      toast.error(err.response?.data?.message || 'Signup failed');
      return false;
    }
  };

  const login = async (credentials) => {
    try {
      const { data } = await api.post('/users/login', credentials);
      saveAuth(data.data, data.token, data.expiresIn);
      toast.success('Login successful!');
      return true;
    } catch (err) {
      toast.error(err.response?.data?.message || 'Login failed');
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('auth');
    setCurrentUser(null);
    toast.success('Logged out');
  };

  const updateSubscription = async (subscription) => {
    // Normalize to lowercase to match backend enum
    const plan = subscription.toLowerCase();
    try {
      const { data } = await api.put('/users/subscription', { subscription: plan });
      // saveAuth expects expiresIn delta, so recalc
      const expiresIn = currentUser.tokenExpires - new Date().getTime();
      saveAuth(data.data, currentUser.token, expiresIn);
      toast.success('Subscription updated successfully!');
      return true;
    } catch (err) {
      toast.error(err.response?.data?.message || 'Update subscription failed');
      return false;
    }
  };

  // auto logout on expiry
  useEffect(() => {
    if (!currentUser) return;
    const msTill = currentUser.tokenExpires - new Date().getTime();
    const timer = setTimeout(() => logout(), msTill);
    return () => clearTimeout(timer);
  }, [currentUser]);

  return (
    <UserContext.Provider value={{ currentUser, signup, login, logout, updateSubscription }}>
      {children}
    </UserContext.Provider>
  );
};