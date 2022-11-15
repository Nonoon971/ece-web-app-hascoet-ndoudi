import Head from 'next/head';
import Layout from '../components/layout';
import React, { useState } from "react";

export default function Contacts() {
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const useSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.target)
        setUsername(data.get("username"))
        setPassword(data.get("password"))
    }

    return (
    <div>
      <Head>
        <title>Login</title>
      </Head>
    <Layout>
    <div className="bg-sky-300 p-3 mt-3 mx-auto rounded-md mb-6 max-w-xl">
      <h1 className='wt-title text-center'>Connectez-vous</h1>

      <form onSubmit={useSubmit} className='border-sky-300 border-solid border-2 p-4 shadow-xl'>
        <div>
          <label for="nom">Votre identifiant :</label>
          <input type="text" name="username" className='rounded-lg border block p-2'></input>
        </div><br/>
        <div>
          <label for="mdp">Votre mot de passe :</label>
          <input type="text" name="password" className='rounded-lg border block p-2'></input>
        </div><br/>
        <p>
            {username}
            <br/>
            {password}
        </p>
        <div>
        <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Envoyer
        </button>
        </div>
      </form>
    </div>
    </Layout>
    </div>
  );
}