import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/layout';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Articles({ allPostsData }) {
  return (
    <Layout>
      <Head>
      <title>Articles</title>
      </Head>
      <h2>
        Voici les articles
      </h2>
      <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              {title}
              <br />
              {id}
              <br />
              {title}
              <br />
              {content}
              <br />
              {date}
              <br />
              {author}
            </li>
          ))}
        </ul>
      <h3>
        <Link href="/">Retour page d'accueil</Link>
      </h3>
    </Layout>
  );
}