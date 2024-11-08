'use server'
import { supabase } from '../createSupabase'
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const getPurchase = async (userID: string) => {
    const cookieStore = cookies();

    const supabase = createServerComponentClient({ cookies: () => cookieStore });
    const { data } = await supabase
        .from("purchases")
        .select('*, courses(*)')
        .eq('user_id', userID)
    return { data }
}

export const addToPurchase = async (courseId: string, userId: string) => {
    const cookieStore = cookies();

    const supabase = createServerComponentClient({ cookies: () => cookieStore });
    const { data } = await supabase
        .from("purchases")
        .insert([{ user_id: userId, course_id: courseId },])
        .select('*')
        .single()

    return { data }

}


export const removeToPurchase = async (purchaseId: string) => {
    const cookieStore = cookies();

    const supabase = createServerComponentClient({ cookies: () => cookieStore });
    const { data } = await supabase
        .from("purchases")
        .delete()
        .eq('id', purchaseId)

    return { data }

}