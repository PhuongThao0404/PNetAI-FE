export interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
}

export interface AuthResponse {
  user: User;
  token: string;
}

export interface LoginRequest {
  email: string;
}

export interface SignUpRequest {
  fullName: string;
  email: string;
  password?: string;
}
