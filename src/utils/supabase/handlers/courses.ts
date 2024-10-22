import { supabase } from '../createSupabase'


const PAGE_SIZE = 9
export const getCourses = async (FilterOption: FilterOptions, pageNumber: number | 1) => {
    const { price, rating, categories } = FilterOption
    const from = (pageNumber - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;

    let query = supabase
        .from("courses")
        .select("*", { count: "exact" })
        .range(from, to)

    if (categories && categories !== '') {
        query = query.eq("category_name", categories);
    }

    if (price && price !== "default") {
        query = query.order("price", { ascending: price === 'asc' ? true : false });
    }

    if (rating !== undefined && rating !== 0) {
        query = query.gte("star", rating)
            .lt("star", rating + 1);
        // query = query.gte("star", rating);
    }

    const { data, error, count } = await query;
    if (error) {
        throw new Error(error.message);
    }

    return { data, count: count || 0 };
}