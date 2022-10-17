import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/layout';

export default function Contacts() {
  return (
    <Layout>
      <Head>
      <title>Contacts</title>
      </Head>
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
      <h3>
        <Link href="/">Retour page d'accueil</Link>
      </h3>
    </Layout>
  );
}