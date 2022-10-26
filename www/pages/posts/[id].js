import db from "../../content/db";

export default function Post(props) {
  // const {post} = props
  const article = props.post;

  return (
    <div>
      <h1>Détails de l'article {article.id}</h1>
      <p className="italic font-bold hover:text-red-800">
        Titre: {article.title}
        <br />
        Content: {article.date}
        <br />
        Auteur: {article.author}
        <br />
      </p>
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
