import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/layout';

export default function About() {
  return (
    <Layout>
      <Head>
      <title>About</title>
      </Head>
      <h2>
        En quoi consiste notre blog
      </h2>
      Nous sommes en cours de construction des pages de notre blog suivant le cours de web app<br/><br/>
      Sur la page d'accueil vous retrouverez chaque pages créées contacts, articles et about.
      <h3>
        <Link href="/">Retour page d'accueil</Link>
      </h3>
    </Layout>
  );
}