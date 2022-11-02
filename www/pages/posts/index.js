import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';
import db from "../../content/db";
import { Footer } from '../../components/footer';
import { Navbar } from '../../components/navbar';

export default function Articles(props) {
  const art = props.posts;
  return (
    <div>
    <Navbar />
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
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          <Link href="/">Retour page d'accueil</Link>
      </button>
    </Layout>
    <Footer />
    </div>
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



