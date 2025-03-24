import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatarSeed: string;
}

interface UserState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (firstName: string, lastName: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

// Временные моковые данные
const mockUser: User = {
  id: '1',
  email: 'test@test.com',
  firstName: 'Иван',
  lastName: 'Иванов',
  avatarSeed: 'Ivan'
};

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: async (email: string, password: string) => {
        // В реальном приложении здесь будет API запрос
        if (email === mockUser.email && password === 'test') {
          set({ user: mockUser, isAuthenticated: true });
        } else {
          throw new Error('Invalid credentials');
        }
      },
      register: async (firstName: string, lastName: string, email: string, password: string) => {
        // В реальном приложении здесь будет API запрос
        const newUser: User = {
          id: Date.now().toString(),
          email,
          firstName,
          lastName,
          avatarSeed: firstName
        };
        set({ user: newUser, isAuthenticated: true });
      },
      logout: () => {
        set({ user: null, isAuthenticated: false });
      }
    }),
    {
      name: 'user-storage'
    }
  )
); 