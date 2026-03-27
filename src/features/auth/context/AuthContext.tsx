import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { User } from '../types';
import * as authApi from '../api/auth.api';

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string) => Promise<any>;
  signup: (fullName: string, email: string) => Promise<any>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const response = await authApi.getMe();
          setUser(response.user);
        }
      } catch (error) {
        console.error('Failed to initialize auth', error);
        localStorage.removeItem('token'); // Clear bad token
      } finally {
        setIsLoading(false);
      }
    };
    initAuth();
  }, []);

  const login = async (email: string) => {
    try {
      const response = await authApi.login({ email });
      localStorage.setItem('token', response.token);
      setUser(response.user);
      return response;
    } catch (error) {
      console.error('Login failed', error);
      throw error;
    }
  };

  const signup = async (fullName: string, email: string) => {
    try {
      const response = await authApi.signup({ fullName, email });
      localStorage.setItem('token', response.token);
      setUser(response.user);
      return response;
    } catch (error) {
      console.error('Signup failed', error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{
      user,
      isLoading,
      login,
      signup,
      logout,
      isAuthenticated: !!user,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
