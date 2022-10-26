import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';
import db from './db';



export default function Articles() {
  

  return (
    <Layout>
      <Head>
      <title>Articles</title>
      </Head>
      <div id='art'>
      <h1>
        Tous les articles
      </h1>
      <ul>
        {db.articles.map(article => (
          <li key={article.id}>
              <Link href={`/posts/${article.id}`}>{article.title}</Link>

          </li>
        ))}
      </ul>

      </div>
      <h3>
        <Link href="/">Retour page d'accueil</Link>
      </h3>
    </Layout>
  );
}


