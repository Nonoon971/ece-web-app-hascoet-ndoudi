import Link from 'next/link';
import Head from 'next/head';
import { Navbar } from '../components/navbar';
import Layout from '../components/layout';

export default function About() {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <Navbar />
      <Layout>
        <h1>Qui sont les contributeurs ?</h1>
        <h2>
          Norine Ndoudi :
        </h2>
        <h3>20 ans et étudiante à l'ECE Paris en ING4 en Système d'information</h3>
        <h2>
          Camille Hascoet :
        </h2>
        <h3>
          23 ans et étudiante à l'ECE Paris en ING4 en Système d'information
        </h3>


        <h2>
          <br />En quoi consiste notre blog ?
        </h2>
        Nous sommes en cours de construction des pages de notre blog suivant le cours de web app<br /><br />
        Sur la page d'accueil vous retrouverez chaque pages créées contacts, articles et about.<br/>

        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            <Link href="/">Retour page d'accueil</Link>
        </button>
      </Layout>
    </div>
  );
}