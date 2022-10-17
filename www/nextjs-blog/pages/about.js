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
        Vous vous trouvez sur la page about de notre projet
      </h2>
      Nous sommes en cours de construction de notre projet suivant le cours de web app<br/><br/>
      Sur la page d'accueil vous retrouverez chaque pages créées contacts, articles et about.
      <h3>
        <Link href="/">Retour page d'accueil</Link>
      </h3>
    </Layout>
  );
}