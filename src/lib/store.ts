import { truncate } from 'fs/promises';
import { create } from 'zustand';

interface CounterState {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));


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