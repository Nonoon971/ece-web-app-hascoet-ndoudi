import { useRouter } from 'next/router'
import { useContext, useEffect, useState} from 'react'
import Head from 'next/head'
import Layout from '../components/layout.js'
import UserContext from '../components/UserContext'
import Link from 'next/link';
import { XMarkIcon, CogIcon } from '@heroicons/react/20/solid'
import { useSupabaseClient } from '@supabase/auth-helpers-react'

export default function Profile() {
  const { user, logout, loading, avatar } = useContext(UserContext)
  const [imageSrc, setImageSrc] = useState('')
  const router = useRouter()
  useEffect(() => {
    if (!(user || loading)) {
      router.push('/login')
    }

    if (user){
      setImageSrc(avatar(user.email));
      const email = user.email;
      document.getElementById('email').innerHTML = email
      const provider = user.app_metadata.provider
      document.getElementById('provider').innerHTML = provider
      if (provider == 'github'){
        const pseudo = user.user_metadata.preferred_username
        document.getElementById('modEmail').className = "hidden"
        document.getElementById('modGit').className = "w-full my-6 mx-6"
        document.getElementById('pseudoGit').innerHTML = pseudo
      }
      else if (provider == 'email'){
        document.getElementById('modEmail').className = "w-full my-6 mx-6"
        document.getElementById('modGit').className = "hidden"
      }
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
            className=' dark:text-white dark:hover:text-red-700 text-black hover:text-red-700 font-bold mr-4 mt-4 py-2 px-4 rounded-lg'
            onClick={onClickLogout}
          >
            <a>Logout</a>
            <XMarkIcon className="h-10 w-10 " aria-hidden="true"/>
          </button>
        </>
      }
      <button className='hover:text-stone-400 font-bold py-2 px-4 mt-4 mr-4 float-right rounded-lg'>
          <Link href="/modAccount"><CogIcon className="h-10 w-10 content-center" aria-hidden="true"/></Link>
      </button>
      <div className='my-6 mx-6'>
        <img className='rounded-full' src={imageSrc} height={100} width={100} />
      </div>
      <div className='my-6 mx-6'>
        <a className='underline underline-offset-2 font-bold text-xl'>Vous êtes connecté grâce à votre :</a><a> </a>
        <a className='text-xl' id='provider'></a>
      </div>
      <div className='my-6 mx-6'>
        <a className='underline underline-offset-2 font-bold text-xl'>Email :</a><a> </a>
        <a className='text-xl' id='email'></a>
      </div>
      <div id='modGit'>
        <div>
          <a className='underline underline-offset-2 font-bold text-xl'>Pseudo :</a><a> </a>
          <a className='text-xl' id='pseudoGit'></a>
        </div>
      </div>
      <div id='modEmail'>
        <div>
          <a className='underline underline-offset-2 font-bold text-xl'></a><a> </a>
        </div>
      </div>
      </div>
    </Layout>
  )
}
