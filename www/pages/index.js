import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/layout';
import ombre from '../images/ombres.gif'

export default function Home({ allPostsData }) {
  return (
    <div>
      <Head>
        <title>Noca</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>

        <div className='bg-orange-500 relative overflow-hidden block border-b-2 border-black w-full'>
          <div className=' w-96 absolute block right-0'>
            <Image className='w-full h-full'
              src={ombre}
              alt="Picture of the image"
              width={(864)}
              height={864}
            />
          </div>
          <div className='justify-center flex  ' id='accueil'>
            <div className=' mx-12 my-0 min-w-0 max-w-6xl w-full block '>
              <div className='flex-row flex w-full'>
                <div className=' text-white w-96 z-10 flex-col h-full pt-24 pb-24 flex dark:text-black'>
                  <div className=' mb-9 block' id='titre'>
                    <h1 className="text-7xl font-test font-normal m-4 block tracking-tighter w-72">
                      Noca !
                    </h1>
                  </div>
                  <div className=' w-4/5 mb-12 block'>
                    <h3 className=' text-2xl font-sstitre font-normal'>
                      Le lieu où vous pouvez tout dire sur vos joueurs préférés (ou détestés) !
                    </h3>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='text-center prose box-content max-w-screen-lg mx-auto px-5'>
          <h2 className='w-[80%] m-auto py-20 leading-x-10 dark:text-white'>
            Noca est un blog vous permettant d'entrer dans une communauté de fan du ballon orange, 
            partagez vos ressentis sur les différents joueurs débattez, ayez du fun !
          </h2>
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
        </div>
        <p className="text-center">
          Démarrer par accéder a notre page <strong>About</strong>
        </p>

        
      </Layout>

    </div>
  );
}
