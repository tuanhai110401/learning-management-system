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
    const { error, data } = await supabase.auth.signInWithPassword({
        email,
        password,
    })
    console.log(email, password, error, data);

    return NextResponse.redirect(requestUrl.origin, {
        status: 301,
    })
}