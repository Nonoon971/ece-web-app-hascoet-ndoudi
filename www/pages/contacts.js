import Head from 'next/head';


import Layout from '../components/layout';

export default function Contacts() {
  return (
    <div>
      <Head>
        <title>Contacts</title>
      </Head>
    <Layout>
    <div className="bg-sky-300 p-3 mt-3 mx-auto rounded-md mb-6 max-w-xl">
      <h1 className='wt-title'>Contactez-nous</h1>
      <p>
        Un problème, une question ? Utilisez ce formulaire pour prendre contact avec nous !
      </p><br/>
      <form className='border-orange-500 border-solid border-2 p-4 shadow-xl'>
        <div>
          <label for="nom">Votre nom :</label>
          <input type="text" id="nom" className='rounded-lg border block p-2'></input>
        </div><br/>
        <div>
          <label for="email">Votre e-mail:</label>
          <input type="email" id="email" className='rounded-lg border block p-2'></input>
        </div><br/>
        <div>
          <label for="sujet">Le sujet de votre message:</label>
          <input type="text" id="sujet" className='rounded-lg border block p-2'></input>
        </div><br/>
        <div>
          <label for="message">Votre message:</label><br/>
          <textarea id="message" className='rounded-lg border block p-2'></textarea>
        </div><br/>
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