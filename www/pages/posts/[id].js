import db from "../../content/db";
import Layout from "../../components/layout";
import Link from 'next/link';

export default function Post(props) {

  const article = props.post;

  return (
    <div>
      <Layout>
        <div className="text-center bg-sky-300 p-3 mt-3 mx-auto rounded-md mb-6 max-w-xl">
          <h1>Détails de l'article {article.id}</h1>
          <p className="italic font-bold hover:text-red-800">
            Titre: {article.title}
            <br />
            Content: {article.date}
            <br />
            Auteur: {article.author}
            <br />
          </p><br/>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
              Supprimer cette article
          </button>
        </div>
      </Layout>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: db.posts.map((post) => ({ params: { id: post.id } })),
    fallback: false, // can also be true or 'blocking'
  };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context) {
  return {
    // Passed to the page component as props
    props: { post: db.posts.filter((post) => post.id == context.params.id)[0] },
  };
}
