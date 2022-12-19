import Head from 'next/head';
import { useState } from 'react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import Layout from '../components/layout';

export default function Contacts() {

  return (
    <div>
      <Head>
        <title>Changer les informations de votre profile</title>
      </Head>
    <Layout>
    <div className="bg-sky-300 p-3 mt-3 mx-auto rounded-md mb-6 max-w-xl">
        <h1 className='wt-title'>Changez votre profile</h1><br/>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            Changer l'email
        </button><br/><br/>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            Changer votre nom
        </button><br/><br/>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            Changer votre mot de passe
        </button><br/><br/>
    </div>
    </Layout>
    </div>
  )
}