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
      <h2>
        Camille Hascoet :
      </h2>
      <h3>
        <Link href="/">Retour page d'accueil</Link>
      </h3>
    </Layout>
  );
}