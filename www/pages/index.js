import Head from 'next/head';

export default function Home({ allPostsData }) {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <h1 className="wt-title">
      Hello world!
    </h1>

        <p className="description">
          Démarer par accéder a notre page <strong>About</strong>
        </p>

        <div className="grid">
          <a href="/about" className="card">
            <h3>About &rarr;</h3>
            <p>Find in-depth information about the project.</p>
          </a>

          <a href="/contacts" className="card">
            <h3>Contacts &rarr;</h3>
            <p>Learn about the contributors.</p>
          </a>

          <a
            href="/posts" className="card">
            <h3>Articles &rarr;</h3>
            <p>Discover our articles.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card"
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer>
        <a
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>Contributors :</strong>&nbsp;Norine Ndoudi, Camille Hascoët
        </a>
      </footer>
    </div>
  );
}
