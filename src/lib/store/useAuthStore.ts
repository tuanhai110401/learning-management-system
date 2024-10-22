import { create } from 'zustand';

interface AuthState {
  isLogin: boolean;
  setLogin: () => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isLogin: false,
  setLogin: () => {
    set({ isLogin: true });
  },
  clearAuth: () => {
    set({ isLogin: false });
  },
}));

