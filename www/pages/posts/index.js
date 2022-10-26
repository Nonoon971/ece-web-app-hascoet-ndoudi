import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';
import db from "../../content/db";

export default function Articles(props) {
  const art = props.posts;
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
        {art.map(article => (
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

export async function getStaticProps() {
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts: db.posts
    },
  }
}



