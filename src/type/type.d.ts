type PriceOrder = 'asc' | 'desc' | 'default';
interface FilterOptions {
    price?: PriceOrder;
    rating?: number;
    categories?: string;
}


interface FilterState {
    price: PriceOrder;
    rating: number;
    categories: string;

    setPrice: (newPrice: PriceOrder) => void;
    setRating: (newRating: number) => void;
    setCategories: (newCategories: string) => void;
}
