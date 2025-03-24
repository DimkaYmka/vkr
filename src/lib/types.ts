export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  avatarSeed: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
} 