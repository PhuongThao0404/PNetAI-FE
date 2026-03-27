import type { AuthResponse, LoginRequest, SignUpRequest } from '../types';

const MOCK_USER = {
  id: '1',
  email: 'admin@pnetai.com',
  name: 'ADMIN',
  role: 'admin' as const,
};

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const login = async (data: LoginRequest): Promise<AuthResponse> => {
  await delay(1000);
  if (data.email.includes('error')) {
    throw new Error('Invalid credentials');
  }
  return {
    user: { ...MOCK_USER, email: data.email },
    token: 'mock-jwt-token-' + Math.random().toString(36).substring(7),
  };
};

export const signup = async (data: SignUpRequest): Promise<AuthResponse> => {
  await delay(1200);
  return {
    user: { ...MOCK_USER, email: data.email, name: data.fullName },
    token: 'mock-jwt-token-' + Math.random().toString(36).substring(7),
  };
};

export const logout = async (): Promise<void> => {
  await delay(500);
};

export const getMe = async (): Promise<AuthResponse> => {
  await delay(800);
  return {
    user: MOCK_USER,
    token: localStorage.getItem('token') || '',
  };
};
