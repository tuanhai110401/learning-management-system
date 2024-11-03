'use server'
import { supabase } from '../createSupabase'
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const getCart = async (userID: string) => {
    const cookieStore = cookies();

    const supabase = createServerComponentClient({ cookies: () => cookieStore });
    const { data } = await supabase
        .from("cart")
        .select('*, courses(*)')
        .eq('user_id', userID)
    return { data }
}

export const addToCart = async (courseId: string, userId: string) => {
    const cookieStore = cookies();

    const supabase = createServerComponentClient({ cookies: () => cookieStore });
    const { data } = await supabase
        .from("cart")
        .insert([{ user_id: userId, course_id: courseId },])
        .select('*, courses(*)')
        .single()

    return { data }

}


export const removeToCart = async (cartId: string) => {
    const cookieStore = cookies();

    const supabase = createServerComponentClient({ cookies: () => cookieStore });
    const { data } = await supabase
        .from("cart")
        .delete()
        .eq('id', cartId)

    return { data }

}