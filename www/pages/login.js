import { useRouter } from 'next/router'
import { useContext } from 'react'
import Head from 'next/head';
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import Layout from '../components/layout.js'
import UserContext from '../components/UserContext'

export default function Contact() {
  const { user } = useContext(UserContext)
  const router = useRouter()
  const supabaseClient = useSupabaseClient()
  if(user) router.push('/profile')
  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>
      <div>
        <Auth
        supabaseClient={supabaseClient}
        appearance={{ theme: ThemeSupa }}
        providers={['github']}
        />
      </div>
    </Layout>
  )
}