import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/layout';

export default function Contacts() {
  return (
    <Layout>
      <Head>
        <title>Contacts</title>
      </Head>

      <h1>Contactez-nous</h1>
      <p>
        Un problème, une question ? Utilisez ce formulaire pour prendre contact avec nous !
      </p>
      <form>
        <div>
          <label for="nom">Votre nom :</label>
          <input type="text" id="nom"></input>
        </div><br/>
        <div>
          <label for="email">Votre e-mail:</label>
          <input type="email" id="email"></input>
        </div><br/>
        <div>
          <label for="sujet">Le sujet de votre message:</label>
          <input type="text" id="sujet"></input>
        </div><br/>
        <div>
          <label for="message">Votre message:</label><br/>
          <textarea id="message"></textarea>
        </div>
        <div>
          <button type="submit">Envoyer </button>
        </div>
      </form>
    </Layout>
  );
}