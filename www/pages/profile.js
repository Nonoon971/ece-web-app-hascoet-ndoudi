import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import Head from 'next/head'
import Layout from '../components/layout.js'
import UserContext from '../components/UserContext'
import Link from 'next/link';
import { XMarkIcon, CogIcon } from '@heroicons/react/20/solid'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { comment } from 'postcss'

export default function Profile() {
  const { user, logout, loading, avatar } = useContext(UserContext)
  const [imageSrc, setImageSrc] = useState('')
  const [element, setElement] = useState([])
  const [listecomment, setListeComment] = useState([])
  const [listereponse, setListeReponse] = useState([])

  const router = useRouter()
  const supabase = useSupabaseClient()
  useEffect(() => {
    //Récupération articles et commentaires de l'utilisateur
    if (!(user || loading)) {
      router.push('/login')
    }

    if (user) {
      setImageSrc(avatar(user.email));
      const email = user.email;
      document.getElementById('email').innerHTML = email
      const provider = user.app_metadata.provider
      document.getElementById('provider').innerHTML = provider
      if (provider == 'github') {
        const pseudo = user.user_metadata.preferred_username
        document.getElementById('modEmail').className = "hidden"
        document.getElementById('modGit').className = "w-full my-6 mx-6"
        document.getElementById('pseudoGit').innerHTML = pseudo
      }
      else if (provider == 'email') {
        document.getElementById('modEmail').className = "w-full my-6 mx-6"
        document.getElementById('modGit').className = "hidden"
      }
    }
  }, [user, loading, router])
  const onClickLogout = function () {
    logout()
  }

    const listeElement = async function (e) {
      e.preventDefault()

      const { data, error, status } = await supabase
        .from('articles')
        .select()
        .eq('user_id', user.id)
      if (error) {
        console.log('error récupération')
      }
      else {
        setElement(data)
      }
    }

    const listeCommentaire = async function (e) {
      e.preventDefault()

      const { data, error } = await supabase
        .from('comments')
        .select(`*,articles(title)`)
        .eq('user_id', user.id)
      if (error) {
        console.log('error récupération')
      }
      else {
        console.log(data)
        setListeComment(data)
      }
    }

    const listeReponse = async function (e) {
      e.preventDefault()

      const { data, error } = await supabase
        .from('answercomment')
        .select(`*,comments(title,content, pseudo, articles(title))`)
        .eq('user_id', user.id)
      if (error) {
        console.log('error récupération')
      }
      else {
        console.log(data)
        setListeReponse(data)
      }
    }
    let lien = "https://xxpeqblsyczvsphynbzo.supabase.co/storage/v1/object/public/joueurs/"
  return (
    <Layout>
      <Head>
        <title>Profile</title>
      </Head>
      <div>
        {!(user || loading) ?
          <p>Redirecting...</p>
          :
          <>
            <button
              className=' dark:text-white dark:hover:text-red-700 text-black hover:text-red-700 font-bold mr-4 mt-4 py-2 px-4 rounded-lg'
              onClick={onClickLogout}
            >
              <a>Logout</a>
              <XMarkIcon className="h-10 w-10 " aria-hidden="true" />
            </button>
          </>
        }
        <button className='hover:text-stone-400 font-bold py-2 px-4 mt-4 mr-4 float-right rounded-lg'>
          <Link href="/modAccount"><CogIcon className="h-10 w-10 content-center" aria-hidden="true" /></Link>
        </button>
        <button onClick={listeElement} className='bg-black mt-6 hover:bg-orange-500 dark:bg-orange-500 dark:hover:bg-gray-700 dark:text-black dark:hover:text-white float-right mr-4 text-white font-bold py-2 px-4 rounded'>Afficher mes joueurs</button>
        <button onClick={listeCommentaire} className='bg-black mt-6 hover:bg-orange-500 dark:bg-orange-500 dark:hover:bg-gray-700 dark:text-black dark:hover:text-white float-right mr-4 text-white font-bold py-2 px-4 rounded'>Afficher mes commentaires</button>
        <button onClick={listeReponse} className='bg-black mt-6 hover:bg-orange-500 dark:bg-orange-500 dark:hover:bg-gray-700 dark:text-black dark:hover:text-white float-right mr-4 text-white font-bold py-2 px-4 rounded'>Afficher mes réponses</button>

        <div >
          {user && (
            <div className='h-full w-1/2 float-right mb-20'>
            <div className='flex flex-col float-left mt-3 w-1/2 m-0'>
              <h2 className=' text-center underline text-xl'>Vos commentaires</h2>

              {listecomment.map(comment =>(
                  <p className='rounded border-2 border-black p-2 mb-2'>
                    Vous avez commenté ceci sur la page de <span className=' text-red-700'>{comment.articles.title}</span> :
                    <span className=' font-bold'> "{comment.content}" le {comment.created_at}</span>
                  </p>

              ))}
              {listereponse.map(reponse =>(
                <p className='rounded border-2 border-black p-2 mt-2'>
                  Vous avez répondu ceci sur la page de <span className=' text-red-700'>{reponse.comments.articles.title}</span> :
                  <span className=' font-bold'> "{reponse.contenu}" le {reponse.created_at} </span>
                  concernant le commentaire de {reponse.comments.pseudo}: "{reponse.comments.content}"
                </p>
              ))}
            </div>
            <div className='flex flex-col float-right mt-3 w-1/2 text-center items-center'>
            <h2 className='float-right mb-2 underline text-xl'>Vos joueurs</h2>
            {element.map(article => (
              <div>
                <h4>{article.title}</h4>
                <img className='m-auto'
                    src={lien + article.image}
                    alt="Picture of the player"
                    width={(100)}
                    height={100}
                  />
              </div>
            ))}
            </div>
            </div>

          )}
          <div className='w-1/2 h-full'>
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
        </div>
      </div>
    </Layout>
  )
}
