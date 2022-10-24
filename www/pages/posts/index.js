import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';
import db from './db';

export default function Articles() {
  const article = db.articles[0].id
  console.log(article)

  return (
    <Layout>
      <Head>
      <title>Articles</title>
      </Head>
      <h1>
        Tous les articles
      </h1>
      <Link href={`/posts/${article}`}>Article 1</Link>
      <h3>
        <Link href="/">Retour page d'accueil</Link>
      </h3>
    </Layout>
  );
}


