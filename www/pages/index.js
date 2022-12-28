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

        <div className='bg-orange-500 relative overflow-hidden block border-b-2 border-black w-full bg-accueil'>
          <div className='justify-center flex ' id='accueil'>
            <div className=' mx-12 my-0 min-w-0 max-w-6xl w-full block '>
              <div className='flex-row flex w-full'>
                <div className=' text-white w-96 z-10 flex-col h-full pt-24 pb-24 flex dark:text-black'>
                  <div className=' mb-9 block' id='titre'>
                    <h1 className="text-7xl font-test font-bold m-4 block tracking-tighter w-72 text-white rounded">
                      Noca !
                    </h1>
                  </div>
                  <div className=' w-4/5 mb-12 block'>
                    <h3 className=' text-2xl font-sstitre font-bold text-white rounded'>
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
                <a className="w-80 shadow-2xl m-auto rounded-lg  h-auto bg-gradient-to-r from-gray-600 to-gray-900 text-center text-white hover:text-orange-500 font-bold">
                  <p className='text-xl'>About &rarr;</p>
                  <p>Find in-depth information about the project.</p>
                </a>
              </Link>

              <Link href="/contacts">
                <a className="w-80 shadow-2xl rounded-lg h-auto bg-gradient-to-r from-gray-600 to-gray-900 text-center text-white font-bold hover:text-orange-500">
                  <p className='text-xl'>Contacts &rarr;</p>
                  <p>Something to tell us?</p>
                </a>
              </Link>
            </div>

            <div id="carre2" className='flex gap-10  m-auto mb-14'>
              <Link
                href="/posts">
                <a className="w-80 m-auto rounded-lg h-auto bg-gradient-to-r from-gray-600 to-gray-900 text-center text-white font-bold hover:text-orange-500">
                  <p className='text-xl'>Players &rarr;</p>
                  <p>Discover the players.</p>
                </a>
              </Link>

              <Link
                href="/profile">
                <a className="w-80 rounded-lg h-auto bg-gradient-to-r from-gray-600 to-gray-900 text-center text-white font-bold hover:text-orange-500">
                  <p className='text-xl'>Profile &rarr;</p>
                  <p>
                    Find your comments and players on your profile
                  </p>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className='clear h-10'></div>
      </Layout>

    </div>
  );
}
