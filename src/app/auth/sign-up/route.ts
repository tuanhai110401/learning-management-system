import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'


export async function POST(request: Request) {
    const requestUrl = new URL(request.url)
    const formData = await request.formData()
    const email = String(formData.get('email'))
    const password = String(formData.get('password'))
    const cookieStore = cookies()
    const supabase = createRouteHandlerClient({ cookies: () => cookieStore })

    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        // options: {
        //     emailRedirectTo: `${requestUrl.origin}/auth/callback`,
        // },
    })

    // return NextResponse.redirect(requestUrl.origin, {
    //     status: 301,
    // })
    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ success: true, redirectUrl: `${requestUrl.origin}/account` });
}