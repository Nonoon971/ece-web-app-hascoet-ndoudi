import { useState, useEffect, useContext } from 'react'
import UserContext from '../../components/UserContext'
import Layout from '../../components/layout'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { comment } from 'postcss'
import Head from 'next/head';


export default function Article({ id }) {
  const [article, setArticle] = useState(null)
  const [comments, setComments] = useState(null)
  const router = useRouter()
  const { user } = useContext(UserContext)
  const supabase = useSupabaseClient()

  //Récupération de l'article et des commentaires et des réponses
  useEffect(() => {
    (async () => {
      let { data, error, status } = await supabase
        .from('articles')
        .select(`*, comments(*, answercomments(*))`)
        .eq('id', id)
      setArticle(data)
      console.log(data)
    })()
  }, [id])

  //Bouton suppression si c'est l'auteur de l'article
  if (article && user) {
    let createur = document.getElementById("createur")
    let modif = document.getElementById("modificateur")
    if (article[0].user_id == user.id) {
      createur.innerHTML = "Supprimer l'article"
      createur.className = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-right'

      modif.className = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-left'
    }
  }

  //Fonction de suppression
  const suppression = async function (e) {
    e.preventDefault()
    // Insert contact record into the contacts database
    const { error2 } = await supabase
      .from('articles')
      .delete()
      .eq('id', id)

    // Print a friendly confirmation message
    if (error2) {
      console.log("error")
      console.log(error2)
    }
    else {
      console.log("suppression")
      router.push('/posts')
    }
  }

  //Fonction d'ajout de commentaires
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const article_id = id
  const onSubmit = async function (e) {
    e.preventDefault()
    // Si authentifié on insère avec l'user_id
    if (user) {
      let pseudo = user.user_metadata.user_name
      let user_id = user.id
      const { data3, error3 } = await supabase
        .from('comments')
        .insert({ title, content, user_id, pseudo, article_id })

      // Print a friendly confirmation message
      if (error3) {
        console.log("error")
        console.log(error3)
      }
      else {
        console.log("insertion commentaire")
        router.reload(window.location.pathname)

      }
    }
    else //Sinon on insère sans et ça aura la valeur null
    {
      pseudo = "anonyme"
      const { data3, error3 } = await supabase
        .from('comments')
        .insert({ title, content, pseudo, article_id })
      if (error3) {
        console.log("error")
        console.log(error3)
      }
      else {
        console.log("insertion commentaire")
        router.reload(window.location.pathname)


      }
    }
  }
  let click = 1;
  const [comments_id, setCommentsID] = useState()
  //Fonction pour répondre aux commentaires
  function response() {
    console.log(comments_id)
    console.log(click)
    click = click + 1;
    let reponse = document.getElementById('newreponse')
    let span = document.getElementById('idcomments')
    if (click % 2 == 0) {
      reponse.className = "max-w-lg rounded-lg shadow-md shadow-blue-600/50 m-auto border-black border-2 hidden"
    }
    else {
      reponse.className = "max-w-lg rounded-lg shadow-md shadow-blue-600/50 mx-auto border-black border-2"
      span.innerHTML = comments_id
    }
    console.log(comments_id)
  }



  //Ajout des réponses aux commentaires
  const [contenu, setContenu] = useState('')
  const sscomment = async function (e) {
    e.preventDefault()
    // Si authentifié on insère avec l'user_id
    if (user) {
      let pseudo = user.user_metadata.user_name
      let user_id = user.id
      document.get
      const { data5, error5 } = await supabase
        .from('answercomments')
        .insert({ contenu, user_id, pseudo, comments_id })

      // Print a friendly confirmation message
      if (error5) {
        console.log("error")
        console.log(error5)
      }
      else {
        console.log("insertion commentaire")
        console.log(pseudo)
        console.log(user_id)
        console.log(comments_id)
        //router.reload(window.location.pathname)

      }
    }
    else //Sinon on insère sans et ça aura la valeur null
    {
      pseudo = "anonyme"
      const { data6, error6 } = await supabase
        .from('answercomments')
        .insert({ contenu, pseudo, comments_id })
      if (error6) {
        console.log("error")
        console.log(error6)
      }
      else {
        console.log("insertion commentaire")
        router.reload(window.location.pathname)


      }
    }
  }

  let lien = "https://xxpeqblsyczvsphynbzo.supabase.co/storage/v1/object/public/joueurs/"

  return (
    <div>
      <Head>
        <title>Info article</title>
      </Head>
      <Layout>
        <div className="text-center bg-sky-300 p-3 mt-3 ml-5 rounded-md mb-6 w-1/2 max-w-xl float-left">
          <h1>Détails du joueur</h1>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-left'>
            <Link href={'/posts'}>Retour</Link>
          </button>
          <button id='createur' onClick={suppression}>
          </button>
          {article && (
            <div className=' mt-16'>
              <p className="italic font-bold hover:text-red-800">
                Nom: {article[0].title}
                <img className=' m-auto'
                  src={lien + article[0].image}
                  alt="Picture of the player"
                  width={(200)}
                  height={200}
                />
                <br />
                Date début de carrière: {article[0].date}
                <br />
                Son équipe: {article[0].team}
                <br />
                </p><br />
              </div>
          )}
          <div className="max-w-lg rounded-lg shadow-md shadow-blue-600/50 m-auto border-black border-2">
            <form onSubmit={onSubmit} className="w-full p-4">
              <div className="mb-2">
                <label className="text-lg font-bold underline">Add a comment</label>
                <div>
                  <label className=' font-bold float-left'>Titre: </label><br />
                  <input type="text" id="title" className='rounded-lg border block p-2' value={title} onChange={(e) => setTitle(e.target.value)}  ></input>
                </div><br />
                <div>
                  <label className=' font-bold float-left'>Votre commentaire<span className='text-red-700'>*</span>: </label><br />
                  <textarea
                    className="w-full h-20 p-2 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1"
                    name="comment" value={content} onChange={(e) => setContent(e.target.value)} required
                    placeholder="">
                  </textarea>
                </div>
              </div>
              <div>
                <button type='submit' className="px-3 py-2 text-sm text-blue-100 bg-blue-600 rounded">
                  Comment
                </button>
              </div>
            </form>
          </div>
          <button id='modificateur'>
          <Link href={`/posts/modArticle/${id}`}>Modifier</Link>
          </button><br/><br/>
        </div>

        {article && (
          <div className="antialiased mx-auto max-w-screen-sm float-right mb-24 mr-5">
            <h3 className="mb-4 text-lg font-semibold text-gray-900">Comments</h3>

            <div className="space-y-4">

             <div id='newreponse' className="max-w-lg rounded-lg shadow-md shadow-blue-600/50 m-auto border-black border-2 hidden">
            <form onSubmit={sscomment} className="w-full p-4">
              <div className="mb-2">
                <label className="text-lg font-bold underline">Add an answer to the comment n° <span id='idcomments'></span></label><br/>
                <p className=' text-xs text-gray-500'>Click again on reply in order to close this tab</p>
                <div>
                  <label className=' font-bold float-left'>Votre commentaire<span className='text-red-700'>*</span>: </label><br />
                  <textarea
                    className="w-full h-20 p-2 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1"
                    name="comment" value={contenu} onChange={(e) => setContenu(e.target.value)} required
                    placeholder="">
                  </textarea>
                </div>
              </div>
              <div>
                <button type='submit' className="px-3 py-2 text-sm text-blue-100 bg-blue-600 rounded">
                  Comment
                </button>
              </div>
            </form>
          </div>

              {article[0].comments.map(comments => (
                <div className="flex">
                  <div className="flex-shrink-0 mr-3">
                    <img className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10" src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80" alt="" />
                  </div>
                  <div className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                    <strong>{comments.pseudo}</strong> <span className="text-xs text-gray-400">{comments.created_at}</span>
                    <span className='text-sm ml-36 font-bold text-gray-500 float-right'>N° {comments.id}</span>
                    <span className=' text-lg ml-36 font-bold text-red-800 float-right'>Titre: {comments.title}</span>
                    <p className="text-sm">
                      {comments.content}
                    </p>

                      <button onClick={() => {setCommentsID(comments.id); response(); }} className="my-5 uppercase tracking-wide text-gray-400 font-bold text-xs"> + Replies</button>
                      <button value={comments.id} className="my-5 uppercase tracking-wide text-gray-400 font-bold text-xs ml-3"> Modify </button>

                      <div className="space-y-4">
                    {comments.answercomments.map(answers => (

                      <div className="flex">
                        <div className="flex-shrink-0 mr-3">
                          <img className="mt-3 rounded-full w-6 h-6 sm:w-8 sm:h-8" src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80" alt="" />
                        </div>
                        <div className="flex-1 bg-gray-100 rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                        <strong>{answers.pseudo}</strong> <span className="text-xs text-gray-400">{answers.created_at}</span>
                        <span className='text-sm ml-36 font-bold text-gray-500 float-right'>N° {answers.id}</span>
                          <p className="text-xs sm:text-sm">
                            {answers.contenu}
                          </p>
                        </div>
                      </div>
                    ))}
                    </div>
                  </div>
                </div>

              ))}
            </div>
          </div>
        )}
      </Layout>
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      id: context.params.id
    },
  }
}