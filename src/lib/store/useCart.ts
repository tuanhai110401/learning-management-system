import { addToCart, getCart, removeToCart } from '@/utils/supabase/handlers/cart';
import { create } from 'zustand'

export const useCart = create<any>((set) => ({
    isLoading: false,
    cart: [],
    error: null,
    fetchCart: async (userId: string) => {
        set({ isLoading: true });
        try {
            const cart = await getCart(userId);
            set({ cart: cart.data, isLoading: false })
        } catch (error) {
            set({ isLoading: false, error: error });
        }
    },
    addCart: async (course_id: string, user_id: string) => {
        set({ isLoading: false })
        try {
            const cart = await addToCart(course_id, user_id);
            console.log(cart.data);
            set((state: any) => ({ cart: [...state.cart, cart.data], isLoading: false, error: null, }));
        } catch (error) {
            set({ isLoading: false, error: error });
        }
    },
    removeCart: async (cartId: string) => {
        set({ isLoading: false })
        try {
            await removeToCart(cartId);
            set((state: any) => ({
                cart: state.cart.filter((item: any) => item.id !== cartId),
                isLoading: false,
                error: null,
            }));
        } catch (error) {
            set({ isLoading: false, error: error });
        }

    },
}));