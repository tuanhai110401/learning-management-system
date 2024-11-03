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


interface ICourse {
    category_name: string
    comment: any
    created_at: string
    description: string
    id: number
    image: string
    instructor_name: string
    price: number
    rating: number
    star: number
    title: string
    updated_at: string
}