import Link from 'next/link';
import Head from 'next/head';
import { useContext } from 'react'
import UserContext from '../../components/UserContext'
import { useState, useEffect } from 'react'
import Layout from '../../components/layout';
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { Card } from "flowbite-react";


export default function Articles(props) {
    let lien = "https://xxpeqblsyczvsphynbzo.supabase.co/storage/v1/object/public/joueurs/"
    const { user } = useContext(UserContext)
    const [articles, setArticles] = useState([])
    const supabase = useSupabaseClient()
    useEffect(() => {
      (async () => {
          let { data, error, status } = await supabase
          .from('articles')
          .select(`id, title, image`)
          setArticles(data)
      })()
    }, [])

  return (
    <div>
      <Head>
        <title>Articles</title>
      </Head>

      <Layout>
        <h1 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
          Tous les articles
        </h1>
        {user && (<button className='bg-black hover:bg-orange-500 dark:bg-orange-500 dark:hover:bg-gray-700 dark:text-black dark:hover:text-white float-right mr-4 text-white font-bold py-2 px-4 rounded'>
            <Link href="/newArticles">Ajouter un article</Link>
        </button>
        )}

        <div className=" p-3 mt-3 flex flex-wrap gap-5  w-full rounded-md mb-20">

          {articles.map(article => (
            <Card className=' text-center items-center w-70'>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <Link href={`/posts/${article.id}`}>{article.title}</Link>
            </h5>
            <img
                src={lien + article.image}
                alt="Picture of the player"
                height={200}
                width={200}
              />
            <button className='bg-black hover:bg-orange-500 float-right mr-4 text-white font-bold py-2 px-4 rounded'><Link href={`/posts/${article.id}`}>
              Read more</Link></button>
          </Card>
          ))}
        </div>
        <div className='clear h-20'></div>
      </Layout>
    </div>
  );
}