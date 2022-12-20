import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import Layout from '../../components/layout';
import { useSupabaseClient } from '@supabase/auth-helpers-react'

export default function Articles(props) {
    let lien = "https://xxpeqblsyczvsphynbzo.supabase.co/storage/v1/object/public/joueurs/"
    const [articles, setArticles] = useState([])
    const supabase = useSupabaseClient()
    useEffect(() => {
      (async () => {
          let { data, error, status } = await supabase
          .from('articles')
          .select(`id,title, image`)
          setArticles(data)
      })()
    }, [])

  const art = props.posts;
  return (
    <div>
    <Head>
    <title>Articles</title>
    </Head>

    <Layout>
      <div className="bg-sky-300 p-3 mt-3 mx-auto rounded-md mb-6 max-w-xl">
      <h1>
        Tous les articles
      </h1>
      <ul>
        {articles.map(article => (
          <li key={article.id}>
            <img
              src={lien + article.image}
              alt="Picture of the player"
              width={(200)}
              height={200}
            />
            <Link href={`/posts/${article.id}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          <Link href="/newArticles">Ajouter un article</Link>
      </button>
      </div>
    </Layout>
    </div>
  );
}

/*
export async function getStaticProps() {
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts: db.posts
    },
  }
}
*/



