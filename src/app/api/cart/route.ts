import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';

export const GET = async (req: Request) => {
    const supabase = createServerComponentClient({ cookies });
    const { data, count } = await supabase
        .from("lessons")
        .select("id", { count: "exact" })
        .eq("chapter_id", "eda4ce34-f60e-4bbd-a0cf-9b1415f53faa")
        .range(0, 10);

    if (data !== null) {
        return NextResponse.json({ isLoggedIn: true, user: data });
    }
    return NextResponse.json({ isLoggedIn: false, data: data });
};
