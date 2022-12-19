import Head from 'next/head';
import { useState } from 'react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import Layout from '../components/layout';

export default function Article() {

  const[title,setTitle]=useState('')
  const[team,setTeam]=useState('')
  const[date,setDate]=useState('')
  const[content,setContent]=useState('')

  const supabase = useSupabaseClient()

  const onSubmit = async function(e){
    e.preventDefault()
    // Insert contact record into the contacts database

    const {data,error} = await supabase
        .from('articles')
        .insert({title,content,date,team})

    // Print a friendly confirmation message
    if(error)
    {
      console.log("error")
    }
    else
    {
      console.log("envoyé")
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
    <div className="bg-sky-300 p-3 mt-3 mx-auto rounded-md mb-6 max-w-xl">
      <h1 className='wt-title'>Fiche pour ajouter un nouveau joueur</h1>
      <p>
        Ajouter un nouveau joueur ici
      </p><br/>
      <form id="createArticle" className='border-solid border-2 p-4 shadow-xl' onSubmit={onSubmit}>
        <div>
          <label>Nom du joueur <span className='text-red-700'>*</span> :</label>
          <input type="text" id="nom" className='rounded-lg border block p-2' value={title} onChange={(e)=> setTitle(e.target.value)} required ></input>
        </div><br/>
        <div>
          <label>La team du joueur <span className='text-red-700'>*</span> :</label>
          <input type="text" id="equipe" className='rounded-lg border block p-2' value={team} onChange={(e)=> setTeam (e.target.value)} required></input>
        </div><br/>
        <div>
          <label>Date début carrière <span className='text-red-700'>*</span> :</label>
          <input type="number" placeholder="YYYY" id="debutdate" min="1946" max="2022" step="1" className='rounded-lg border block p-2' value={date} onChange={(e)=> setDate (e.target.value)} required></input>
        </div><br/>
        <div>
          <label>Information sur le joueur<span className='text-red-700'>*</span> :</label>
          <textarea type="text" id="information" className='rounded-lg border block p-2' value={content} onChange={(e)=> setContent(e.target.value)} required></textarea>
        </div><br/>
        <div>
          <label>Photo du joueur</label><br/>
          <input id="photo" className='rounded-lg border block p-2'></input>
        </div><br/>
        <div>
        <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Envoyer
        </button>
        </div>
      </form>
      <span id="info"></span>
    </div>
    </Layout>
    </div>
  )
}