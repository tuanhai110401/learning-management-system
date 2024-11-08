import { addToPurchase, getPurchase, removeToPurchase } from '@/utils/supabase/handlers/purchase';
import { create } from 'zustand'

export const usePurchase = create<any>((set) => ({
    isLoading: false,
    purchase: [],
    error: null,
    setPurchase: (purchase: any) => {
        set({ purchase: purchase })
    },
    fetchPurchase: async (userId: string) => {
        set({ isLoading: true });
        try {
            const purchase = await getPurchase(userId);
            set({ purchase: purchase.data, isLoading: false })
        } catch (error) {
            set({ isLoading: false, error: error });
        }
    },
    addPurchase: async (course_id: string, user_id: string) => {
        set({ isLoading: false })
        try {
            const purchase = await addToPurchase(course_id, user_id);
            console.log(purchase.data);
            set((state: any) => ({ purchase: [...state.purchase, purchase.data], isLoading: false, error: null, }));
        } catch (error) {
            set({ isLoading: false, error: error });
        }
    },
    removePurchase: async (purchaseId: string) => {
        set({ isLoading: false })
        try {
            await removeToPurchase(purchaseId);
            set((state: any) => ({
                purchase: state.purchase.filter((item: any) => item.id !== purchaseId),
                isLoading: false,
                error: null,
            }));
        } catch (error) {
            set({ isLoading: false, error: error });
        }
    },
}));