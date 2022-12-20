import { useState, useEffect } from 'react'
import Layout from '../../components/layout'
import { useSupabaseClient } from '@supabase/auth-helpers-react'

export default function Article({id}) {
  const [article, setArticle] = useState(null)
  const supabase = useSupabaseClient()
  useEffect(() => {
    (async () => {
      let { data, error, status } = await supabase
        .from('articles')
        .select()
        .eq('id', id)
        setArticle(data)
        console.log(data)
    })()
  }, [id])
  console.log(article)
  let lien = "https://xxpeqblsyczvsphynbzo.supabase.co/storage/v1/object/public/joueurs/"

  return (
    <div>
      <Layout>
        <div className="text-center bg-sky-300 p-3 mt-3 mx-auto rounded-md mb-6 max-w-xl">
          <h1>Détails du joueur</h1>
          {article && (
            <div>
            <p className="italic font-bold hover:text-red-800">
            Nom: {article[0].title}
            <img
              src={lien + article[0].image}
              alt="Picture of the player"
              width={(200)}
              height={200}
            />
            <br />
            Date début de carrière: {article[0].date}
            <br />
            Son équipe: {article[0].team}
            <br />

          </p><br/>
          </div>
          )}
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
              Supprimer cette article
          </button>
        </div>
      </Layout>
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      id: context.params.id
    },
  }
}