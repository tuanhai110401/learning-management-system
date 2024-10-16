'use server'

import { Provider } from '@supabase/supabase-js';
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import { setCookie } from '@/utils/cookies';
import { cookies } from 'next/headers'


const setCookieAuth = (name: string, value: string) => {
  cookies().set({
    name: name,
    value: value,
    httpOnly: true,
    path: '/',
  })
}

export async function login(formData: FormData) {
  const supabase = createClient()
  const dataLogin = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error, data } = await supabase.auth.signInWithPassword(dataLogin)
  console.log(error?.message);
  if (error) {
    redirect('/error')
  }
  console.log(data.session.access_token);
  setCookieAuth('access_token', data.session.access_token);
  setCookieAuth('refresh_token', data.session.refresh_token);
  setCookieAuth('isLogin', '1');
  revalidatePath('/', 'layout')
  redirect('/account')

}

export async function signup(formData: FormData) {
  const supabase = createClient()
  const dataSignUp = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error, data } = await supabase.auth.signUp(dataSignUp)
  console.log(error?.message);
  console.log(data);
  if (error) {
    redirect('/error')
  }
  if (data && data.session) {
    setCookieAuth('access_token', data.session.access_token);
    setCookieAuth('refresh_token', data.session.refresh_token);
    setCookieAuth('isLogin', '1');
  }

  revalidatePath('/', 'layout')
  redirect('/account')
}

export async function loginGoogleAccount(provider: Provider) {
  console.log('in function loginGoogleAccount');
  if (!provider) {
    return redirect('/')
  }
  const supabase = createClient()
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: 'http://localhost:3000/auth/callback',
    },
  })
  if (error) {
    console.error('Login error:', error);
    return { error };
  }
  console.log(data.url);
  console.log(data);
  redirect(data.url)

}