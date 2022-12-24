import Head from 'next/head';
import { useState } from 'react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import Layout from '../components/layout';

export default function Contacts() {

  const[firstname,setName]=useState('')
  const[lastname,setLastName]=useState('')
  const[email,setEmail]=useState('')
  const [message, setMessage] = useState('')

  const supabase = useSupabaseClient()

  const onSubmit = async function(e){
    e.preventDefault()
    // Insert contact record into the contacts database

    const {data,error} = await supabase
        .from('contacts')
        .insert({email,firstname,lastname,message})

    // Print a friendly confirmation message
    if(error)
    {
      console.log("error")
    }
    else
    {
      console.log("envoyé")
      let info = document.getElementById("info")
      info.innerHTML = "Message envoyé !"
      console.log(data)
    }
  }

  return (
    <div>
      <Head>
        <title>Contacts</title>
      </Head>
    <Layout>
      <div className="bg-orange-300 dark:border-black dark:bg-orange-800 p-3 mt-3 mx-auto rounded-md mb-6 max-w-xl">
        <a className='text-4xl text-red-900 dark:text-orange-500 font-bold underline underline-offset-2'>Contactez-nous</a>
        <p>
          Un problème, une question ? Utilisez ce formulaire pour nous laissez un message !
        </p><br/>
        <form id="createMessage" className='border-orange-500 border-solid rounded-lg border-2 p-4 shadow-xl' onSubmit={onSubmit}>
          <div>
            <label>Votre nom <span className='text-red-700 dark:text-black'>*</span> :</label>
            <input type="text" id="nom" className='rounded-lg border block p-2' value={lastname} onChange={(e)=> setLastName(e.target.value)} required ></input>
          </div><br/>
          <div>
            <label>Votre prénom <span className='text-red-700 dark:text-black'>*</span> :</label>
            <input type="text" id="prenom" className='rounded-lg border block p-2' value={firstname} onChange={(e)=> setName (e.target.value)} required></input>
          </div><br/>
          <div>
            <label>Votre e-mail <span className='text-red-700 dark:text-black'>*</span> :</label>
            <input type="email" id="email" className='rounded-lg border block p-2' value={email} onChange={(e)=> setEmail (e.target.value)} required></input>
          </div><br/>
          <div>
            <label>Le sujet de votre message:</label>
            <input type="text" id="sujet" className='rounded-lg border block p-2'></input>
          </div><br/>
          <div>
            <label>Votre message <span className='text-red-700 dark:text-black'>*</span> :</label><br/>
            <textarea id="message" className='rounded-lg border block p-2' value={message} onChange={(e)=> setMessage(e.target.value)} required ></textarea>
          </div><br/>
          <div>
          <button type='submit' className=' bg-black hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-black dark:text-black dark:hover:text-white text-white font-bold py-2 px-4 rounded'>
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