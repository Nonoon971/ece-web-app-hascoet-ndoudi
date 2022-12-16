import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import Head from 'next/head'
import Layout from '../components/layout.js'
import UserContext from '../components/UserContext'

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
      { !(user || loading) ?
        <p>Redirecting...</p>
        :
        <>
          <button
            className="rounded px-3 py-2 text-white bg-slate-500 hover:bg-blue-500"
            onClick={onClickLogout}
          >
            Logout
          </button>
        </>
      }
    </Layout>
  )
}
