import Head from 'next/head';
import Link from 'next/link';
import { useState, useContext, useEffect } from 'react'
import UserContext from '../components/UserContext'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import Layout from '../components/layout';

export default function Article() {

  const[title,setTitle]=useState('')
  const[file,setFile]=useState('')
  const[team,setTeam]=useState('')
  const[date,setDate]=useState('')
  const[content,setContent]=useState('')
  const { user } = useContext(UserContext)
  let user_id = ''

  useEffect(() => {
    if (user){
      console.log(user)
      user_id = user.id
    }
  }, [])

  const supabase = useSupabaseClient()

  const onSubmit = async function(e){
    e.preventDefault()
    // Insert contact record into the contacts database
    let image = file?.name
    const{data2,error2} = await supabase.storage
        .from('joueurs')
        .upload(file?.name,file)

    const {data,error} = await supabase
        .from('articles')
        .insert({title,content,date,team,image,user_id})

    // Print a friendly confirmation message
    if((error) || (error2))
    {
      console.log("error")
      console.log(error)
      console.log(error2)
    }
    else
    {
      console.log("envoyé")
      console.log(data)
      console.log(data2)
      let info = document.getElementById("info")
      info.innerHTML = "article envoyé !"
    }
  }

  return (
    <div>
      <Head>
        <title>Nouvel article</title>
      </Head>
    <Layout>
      <div className="bg-orange-300 p-3 mt-3 mx-auto rounded-md mb-20 max-w-xl dark:bg-blue-900">
        <h1 className='wt-title'>Fiche pour ajouter un nouveau joueur</h1>
        <p>
          Ajouter un nouveau joueur ici
        </p><br/>
        <form id="createArticle" className='border-orange-500 rounded-lg border-solid border-2 p-4 shadow-xl' onSubmit={onSubmit}>
          <div>
            <label>Nom du joueur <span className='text-red-700'>*</span> :</label>
            <input type="text" id="nom" className=' dark:bg-black dark:text-white rounded-lg border block p-2' value={title} onChange={(e)=> setTitle(e.target.value)} required ></input>
          </div><br/>
          <div>
            <label>La team du joueur <span className='text-red-700'>*</span> :</label>
            <input type="text" id="equipe" className=' dark:bg-black dark:text-white rounded-lg border block p-2' value={team} onChange={(e)=> setTeam (e.target.value)} required></input>
          </div><br/>
          <div>
            <label>Date début carrière <span className='text-red-700'>*</span> :</label>
            <input type="number" placeholder="YYYY" id="debutdate" min="1946" max="2022" step="1" className='dark:bg-black dark:text-white rounded-lg border block p-2' value={date} onChange={(e)=> setDate (e.target.value)} required></input>
          </div><br/>
          <div>
            <label>Information sur le joueur<span className='text-red-700'>*</span> :</label>
            <textarea type="text" id="information" className='dark:bg-black dark:text-white rounded-lg border block p-2' value={content} onChange={(e)=> setContent(e.target.value)} required></textarea>
          </div><br/>
          <div>
            <label>Photo du joueur</label><br/>
            <input type='file' accept='image/' id="photo" onChange={(e)=> setFile(e.target.files[0])} className='block w-auto text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'></input>
          </div><br/>
          <div>
          <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            Envoyer
          </button>
          <button className='bg-red-500 hover:bg-red-700 text-white ml-2 font-bold py-2 px-4 rounded'>
            <Link href='/posts'>Annuler</Link>
          </button>
          </div>
        </form>
        
        <span id="info"></span>
      </div>
    </Layout>
    </div>
  )
}