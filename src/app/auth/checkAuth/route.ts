import { NextApiRequest, NextApiResponse } from 'next';
import { createRouteHandlerClient } from '@/utils/supabase/server';
import { supabase } from '@/utils/supabase/createSupabase';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';

export const GET = async (req: Request) => {
    // const supabase = createRouteHandlerClient();
    // const data = await supabase.auth.getSession();
    const supabase = createServerComponentClient({ cookies });
    const { data, error } = await supabase.auth.getUser()
    if (data.user !== null) {
        const { data: info } = await supabase
            .from("profiles")
            .select('*, cart(*, courses(*)), purchases(*)')
            .eq('id', data.user.id)
            .single();
        return NextResponse.json({ isLoggedIn: true, user: data.user, infoUser: info });
    }
    return NextResponse.json({ isLoggedIn: false, data: {} });
};
