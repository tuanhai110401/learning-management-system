import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST(req: NextRequest) {
  const supabase = createClient()

  // Check if a user's logged in
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (user) {
    await supabase.auth.signOut()
  }
  const clearCookieAuth = (name: string) => {
    cookies().set({
      name: name,
      value: '',
      httpOnly: true,
      path: '/',
    })
  }
  clearCookieAuth('access_token')
  clearCookieAuth('refresh_token')
  clearCookieAuth('isLogin')
  revalidatePath('/', 'layout')
  return NextResponse.redirect(new URL('/login', req.url), {
    status: 302,
  })
}