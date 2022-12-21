import { useState, useEffect, useContext } from 'react'
import UserContext from '../../components/UserContext'
import Layout from '../../components/layout'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'
import Link from 'next/link'


export default function Article({ id }) {
  const [article, setArticle] = useState(null)
  const router = useRouter()
  const { user } = useContext(UserContext)
  const supabase = useSupabaseClient()

  //Récupération de l'article
  useEffect(() => {
    (async () => {
      let { data, error, status } = await supabase
        .from('articles')
        .select()
        .eq('id', id)
      setArticle(data)
      console.log(data)
    })()
  }, [id])

  //Bouton suppression si c'est l'auteur de l'article
  if (article && user) {
    let createur = document.getElementById("createur")
    if (article[0].user_id == user.id) {
      createur.innerHTML = "Supprimer l'article"
      createur.className = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-right'
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
  const onSubmit = async function (e) {
    e.preventDefault()
    // Si authentifié on insère avec l'user_id
    if (user) {
      let pseudo = user.user_metadata.user_name
      let user_id = user.id
      const { data3, error3 } = await supabase
        .from('comments')
        .insert({ title, content, user_id, pseudo })

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
        .insert({ title, content, pseudo })
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

  //Fonction récupération des commentaires

  let lien = "https://xxpeqblsyczvsphynbzo.supabase.co/storage/v1/object/public/joueurs/"

  return (
    <div>
      <Layout>
        <div className="text-center bg-sky-300 p-3 mt-3 mx-auto rounded-md mb-6 max-w-xl">
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
        </div>

      <div className=' float-right'>
      
      </div>
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