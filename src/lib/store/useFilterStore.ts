import { create } from 'zustand';

export const useFilterStore = create<FilterState>(set => ({
    price: 'default',
    rating: 0,
    categories: '',

    setPrice: (newPrice: PriceOrder) => {
        set({ price: newPrice });
    },
    setRating: (newRating: number) => {
        set({ rating: newRating });
    },
    setCategories: (newCategories: string) => {
        set({ categories: newCategories });
    },
}));