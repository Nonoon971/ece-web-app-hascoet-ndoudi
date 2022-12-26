import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/layout';

export default function About() {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <Layout>
        <div className='bg-orange-300 dark:border-black dark:bg-orange-800 border p-3 mt-3 mx-auto rounded-md mb-6 max-w-xl'>
          <div className='mb-8 text-4xl text-red-900 dark:text-orange-500 font-bold underline underline-offset-2'><a>Qui sont les contributeurs ?</a></div>
          <ul>
            <li className='mb-4 ml-4'>
              <a className='underline underline-offset-1'>Norine Ndoudi :</a><br/>
              <a>20 ans et étudiante à l'ECE Paris en ING4 en Système d'information</a>
            </li>
            <li className='mb-4 ml-4'>
              <a className='underline underline-offset-1'>Camille Hascoët :</a><br/>
              <a>23 ans et étudiante à l'ECE Paris en ING4 en Système d'information</a>
            </li>
          </ul>
          <div className='text-lg mb-3 font-bold underline underline-offset-1'><a>En quoi consiste notre blog :</a></div>
          Dans le cadre de la matière Webtech nous devions faire un site web. Ce site est le résultat de ce travail. Nous avons décidé de faire de ce site un blog sur le basket<br /><br />
          Sur la page d'accueil vous retrouverez chaque pages créées contacts, articles et about.<br /><br/>
          <button className=' bg-black hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-black dark:text-black dark:hover:text-white text-white font-bold py-2 px-4 rounded'>
            <Link href="/">Retour page d'accueil</Link>
          </button>
        </div>

      </Layout>
    </div>

  );
}