import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';

export default function Home({ allPostsData }) {
  return (
    <div>
      <Head>
        <title>Noca</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <h1 className="wt-title text-center">
          Bienvenue sur notre projet !
        </h1>

        <p className="text-center">
          Démarrer par accéder a notre page <strong>About</strong>
        </p>

        <div className="grid mt-7">
          <div id="carre1" className='flex gap-10  m-auto mb-5'>
            <Link href="/about">
              <a className="w-80 shadow-2xl m-auto rounded-md h-auto bg-gradient-to-r from-cyan-500 to-blue-500 text-center font-bold hover:text-white">
                <h3>About &rarr;</h3>
                <p>Find in-depth information about the project.</p>
              </a>

            </Link>

            <Link href="/admin/contact">
              <a className="w-80 shadow-2xl rounded-md h-auto bg-gradient-to-r from-cyan-500 to-blue-500 text-center font-bold hover:text-white">
                <h3>Contacts &rarr;</h3>
                <p>Something to tell us?</p>
              </a>

            </Link>
          </div>

          <div id="carre2" className='flex gap-10  m-auto mb-14'>
            <Link
              href="/posts">
              <a className="w-80 m-auto rounded-md h-auto bg-gradient-to-r from-cyan-500 to-blue-500 text-center font-bold hover:text-white">
                <h3>Articles &rarr;</h3>
                <p>Discover our articles.</p>
              </a>
            </Link>

            <Link
              href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
              <a className="w-80 rounded-md h-auto bg-gradient-to-r from-cyan-500 to-blue-500 text-center font-bold hover:text-white">
                <h3>Deploy &rarr;</h3>
                <p>
                  Instantly deploy your Next.js site to a public URL with Vercel.
                </p>
              </a>
            </Link>
          </div>
        </div>
      </Layout>

    </div>
  );
}
