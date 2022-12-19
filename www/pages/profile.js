import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import Head from 'next/head'
import Layout from '../components/layout.js'
import UserContext from '../components/UserContext'
import Link from 'next/link';

export default function Contact() {
  const { user, logout, loading } = useContext(UserContext)
  const router = useRouter()
  useEffect(() => {
    if (!(user || loading)) {
      router.push('/login')
    }
  }, [user, loading, router])
  const onClickLogout = function() {
    logout()
  }
  return (
    <Layout>
      <Head>
        <title>Profile</title>
      </Head>
      <div>
      { !(user || loading) ?
        <p>Redirecting...</p>
        :
        <>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            onClick={onClickLogout}
          >
            Logout
          </button>
        </>
      }<br/><br/>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          <Link href="/modAccount">Modifier le profile</Link>
      </button><br/><br/>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          <Link href="/admin/contact">Mes messages</Link>
      </button>
      </div>
    </Layout>
  )
}
