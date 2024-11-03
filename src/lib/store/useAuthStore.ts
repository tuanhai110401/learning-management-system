import { create } from 'zustand';

interface AuthState {
  isLogin: boolean;
  userId: string;
  setUserId: (newUserId: string) => void;
  setLogin: () => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isLogin: false,
  userId: '',
  setUserId: (newUserId: string) => {
    set({ userId: newUserId });
  },
  setLogin: () => {
    set({ isLogin: true });
  },
  clearAuth: () => {
    set({ isLogin: false });
  },
}));

