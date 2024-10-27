import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { redirect } from 'next/navigation'


export async function POST(request: Request) {
    const requestUrl = new URL(request.url)
    const formData = await request.formData()
    const email = String(formData.get('email'))
    const password = String(formData.get('password'))
    const cookieStore = cookies()
    const supabase = createRouteHandlerClient({ cookies: () => cookieStore })
    const { error, data } = await supabase.auth.signInWithPassword({
        email,
        password,
    })
    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
    // request.redirect(302,'/')
    // return NextResponse.json({ success: true, redirectUrl: `${requestUrl.origin}/account` });
    // return NextResponse.redirect(requestUrl.origin, { status: 302 });
    // return NextResponse.redirect(`${requestUrl.origin}/categories`, {
    //     status: 302,
    // })
    // redirect('/account')
    return NextResponse.redirect(`${requestUrl.origin}/account`, {
        status: 301,
    })
}