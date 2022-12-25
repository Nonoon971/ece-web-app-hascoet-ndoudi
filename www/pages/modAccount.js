import Head from 'next/head'
import Layout from '../components/layout'
import { useState, useEffect, useContext } from 'react'
import UserContext from '../components/UserContext'
import { PencilSquareIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

export default function ModifAccount() {
  const { user } = useContext(UserContext)
  const [password, setPassword] = useState('')
  const [confirmed, setConfirmed] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    
    if (user){
      if (user.app_metadata.provider == 'github'){
        document.getElementById('modGit').className = "w-full"
      }
      else if (user.app_metadata.provider == 'email'){
        document.getElementById('mod').className = "w-full"
      }
    }

    window.onclick = (event) => {
      if (event.target == document.getElementById('modalPass')) {
        document.getElementById('modalPass').className = "fixed hidden insert-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
      }
      if (event.target == document.getElementById('modalEmail')) {
        document.getElementById('modalEmail').className = "fixed hidden insert-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
      }
    }
  }, []);

  const resetPass = () => {
    document.getElementById('modalPass').className = "fixed insert-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
  }

  const resetEmail = async function (e) {
    document.getElementById('modalEmail').className = "fixed insert-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
  }

  const okPass = async function (e) {
    if (password==confirmed){
      document.getElementById('modalPass').className = "fixed hidden insert-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
    }
  }

  const aPass = async function (e) {
    document.getElementById('modalPass').className = "fixed hidden insert-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
  }

  const okEmail = async function (e) {
      document.getElementById('modalEmail').className = "fixed hidden insert-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
  }

  const aEmail = async function (e) {
    document.getElementById('modalEmail').className = "fixed hidden insert-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
  }

  return (
    <div>
      <Head>
        <title>Changer les informations de votre profile</title>
      </Head>
      <div className="fixed hidden insert-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="modalPass">    
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
              <div className="mt-3 text-center">
                  <h3 className="text-2xl leading-6 font-medium text-gray-900">Changer le mot de passe</h3>
                  <form>
                  <div className="mt-2 px-7 py-3 dark:text-black">
                      <p>Nouveau</p>
                      <input type="text" id="mdp" className='text-sm rounded' value={password} onChange={(e)=> setPassword(e.target.value)}></input>
                  </div>
                  <div className="mt-2 px-7 py-3 dark:text-black">
                      <p>Confirmer</p>
                      <input type="text" id="confirme" className='text-sm rounded' value={confirmed} onChange={(e)=> setConfirmed(e.target.value)}></input>
                  </div>
                  </form>
                  <div className="items-center px-4 py-3 flex">
                    <button
                        className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 mx-8
                            text-base rounded-md w-1/2
                            focus:outline-none focus:ring-2 focus:ring-purple-300" onClick={aPass}>
                        Annuler
                    </button>
                    <button
                        className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 mx-8
                            text-base rounded-md w-1/2
                            focus:outline-none focus:ring-2 focus:ring-purple-300" onClick={okPass}>
                        Valider
                    </button>
                  </div>
              </div>
          </div>
      </div>

      <div className="fixed hidden insert-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="modalEmail">    
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3 text-center">
                <h3 className="text-2xl leading-6 font-medium text-gray-900">Changer votre email</h3>
                <form>
                  <div className="mt-2 px-7 py-3">
                    <input type="text" id="nom" className='text-sm rounded' value={email} onChange={(e)=> setEmail(e.target.value)}></input>
                  </div>
                </form>
                <div className="items-center px-4 py-3 flex">
                    <button
                        className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 mx-8
                            text-base rounded-md w-1/2
                            focus:outline-none focus:ring-2 focus:ring-purple-300" onClick={aEmail}>
                        Annuler
                    </button>
                    <button
                        className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 mx-8
                            text-base rounded-md w-1/2
                            focus:outline-none focus:ring-2 focus:ring-purple-300" onClick={okEmail}>
                        Valider
                    </button>
                </div>
            </div>
          </div>
      </div>

      <Layout>
        <div className="bg-orange-300 dark:bg-orange-800 p-3 mt-3 mx-auto rounded-md mb-6 max-w-xl">
          <a className='text-4xl text-red-900 dark:text-orange-500 font-bold underline underline-offset-2'>Changez votre profile</a>
            <div className='w-full hidden' id='mod'>
              <div className="mt-10 divide-y divide-slate-200 md:rounded-lg">
                <dl className='grid grid-cols-[auto_1fr] px-3 py-4 [&_dt]:italic [&_dt]:pr-20'>
                  <dt>Changer votre email</dt>
                  <dd>
                    <button id="open-title" className={"w-6 h-6 block bg-orange-300 dark:bg-orange-800 hover:bg-orange-700 dark:hover:bg-black hover:text-white rounded float-right"} onClick={resetEmail}>
                        <PencilSquareIcon className="h-6 w-6 " aria-hidden="true" />
                    </button>
                  </dd>
                </dl>
                <dl className='grid grid-cols-[auto_1fr] px-3 py-4 [&_dt]:italic [&_dt]:pr-20'>
                  <dt>Changer votre mot de passe</dt>
                  <dd>
                    <button id="open-title" className={"w-6 h-6 block bg-orange-300 dark:bg-orange-800 hover:bg-orange-700 dark:hover:bg-black rounded float-right"} onClick={resetPass}>
                        <PencilSquareIcon className="h-6 w-6 " aria-hidden="true" />
                    </button>
                  </dd>
                </dl>
              </div>
            </div>
            <div className='hidden w-full' id='modGit'>
              <h1 className='text-xl'>Vous êtes connecté grâce a github si vous voulez modifier des éléments de votre compte dirigez vous vers ce lien :</h1><br/>
              <Link href={'https://github.com'}>Github.com</Link>
            </div>
        </div>
      </Layout>
    </div>
  )
}