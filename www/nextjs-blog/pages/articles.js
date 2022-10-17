import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/layout';

export default function Articles() {
  return (
    <Layout>
      <Head>
      <title>Articles</title>
      </Head>
      <h2>
        Voici les articles
      </h2>
      <h3>
        <Link href="/">Retour page d'accueil</Link>
      </h3>
    </Layout>
  );
}