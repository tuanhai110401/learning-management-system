'use server'
import { supabase } from '../createSupabase'
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";


const PAGE_SIZE = 9
export const getCoursesAll = async (FilterOption: FilterOptions, pageNumber: number | 1) => {
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

export const getCourse = async (courseId: string | string[]) => {
    const { data } = await supabase
        .from("courses")
        .select("*")
        .eq("id", courseId)
        .single()
    return { data }
}

export const getInstructor = async (instructor: string) => {
    const { data } = await supabase
        .from("instructors")
        .select("*")
        .eq("name", instructor)
        .single()
    return { data }
}

export const getChapters = async (courseId: string | string[]) => {
    const cookieStore = cookies();

    const supabase = createServerComponentClient({ cookies: () => cookieStore });
    const { data } = await supabase
        .from("chapters")
        .select('*, lessons(*)')
        .eq('course_id', courseId)
        .order('chapter_number', { ascending: true })

    return { data }
}