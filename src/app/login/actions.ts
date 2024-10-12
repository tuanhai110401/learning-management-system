'use server'

import { Provider } from '@supabase/supabase-js';
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export async function login(formData: FormData) {
  const supabase = createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const dataLogin = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error, data } = await supabase.auth.signInWithPassword(dataLogin)
  console.log(error?.message);
  console.log(data.session);
  console.log(data.session);

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/account')

}

export async function signup(formData: FormData) {
  const supabase = createClient()
  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signUp(data)

  console.log(formData);
  console.log(error?.message);
  if (error) {
    redirect('/error')
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
  // return { url: data.url };
  redirect(data.url)

}