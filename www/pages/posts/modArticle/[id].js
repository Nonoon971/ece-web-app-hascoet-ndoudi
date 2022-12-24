import Link from 'next/link';
import Head from 'next/head';
import { useContext, useState, useEffect } from 'react'
import UserContext from '../../../components/UserContext'
import Layout from '../../../components/layout';
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'
import { PencilSquareIcon } from '@heroicons/react/20/solid'

export default function Article({id}) {
    const [article, setArticle] = useState(null)
    const [date,setDate] = useState('')
    const [title, setTitle] = useState('')
    const [team, setTeam] = useState('')
    const [file, setFile] = useState('')
    const [content, setContent] = useState('')
    const router = useRouter()
    const { user } = useContext(UserContext)
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
      window.onclick = (event) => {
        if (event.target == document.getElementById('modalTitle')) {
          document.getElementById('modalTitle').className = "fixed hidden insert-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
        }
        if (event.target == document.getElementById('modalImage')) {
          document.getElementById('modalImage').className = "fixed hidden insert-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
        }
        if (event.target == document.getElementById('modalDate')) {
          document.getElementById('modalDate').className = "fixed hidden insert-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
        }
        if (event.target == document.getElementById('modalTeam')) {
          document.getElementById('modalTeam').className = "fixed hidden insert-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
        }
        if (event.target == document.getElementById('modalContent')) {
          document.getElementById('modalContent').className = "fixed hidden insert-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
        }
      }
    }, [id])

    const cTitle = () => {
      document.getElementById('modalTitle').className = "fixed insert-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
    }

    const cImage = () => {
      document.getElementById('modalImage').className = "fixed insert-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
    }

    const cDate = () => {
      document.getElementById('modalDate').className = "fixed insert-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
    }

    const cTeam = () => {
      document.getElementById('modalTeam').className = "fixed insert-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
    }

    const cContent = () => {
      document.getElementById('modalContent').className = "fixed insert-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
    }
    
    const okButton1 = async function (e) {
      e.preventDefault()

      const {data1, error1} = await supabase
        .from('articles')
        .update({title})
        .eq('id', id)

        document.getElementById('modalTitle').className = "fixed hidden insert-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
    }

    const okButton2 = async (e) => {
      e.preventDefault()

    let image = file?.name
    const{data2,error2} = await supabase.storage
        .from('joueurs')
        .upload(file?.name,file)

    const {data,error} = await supabase
        .from('articles')
        .update({image})
        .eq('id', id)

      document.getElementById('modalImage').className = "fixed hidden insert-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
    }

    const okButton3 = async (e) => {
      e.preventDefault()
      
      const {data2, error2} = await supabase
        .from('articles')
        .update({date})
        .eq('id', id)

      document.getElementById('modalDate').className = "fixed hidden insert-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
    }

    const okButton4 = async (e) => {
      e.preventDefault()
      
      const {data2, error2} = await supabase
        .from('articles')
        .update({team})
        .eq('id', id)
      
      document.getElementById('modalTeam').className = "fixed hidden insert-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
    }

    const okButton5 = async (e) => {
      e.preventDefault()
      
      const {data2, error2} = await supabase
        .from('articles')
        .update({content})
        .eq('id', id)

      document.getElementById('modalContent').className = "fixed hidden insert-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
    }

    const AButton1 = () => {
      document.getElementById('modalTitle').className = "fixed hidden insert-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
    }

    const AButton2 = () => {
      document.getElementById('modalImage').className = "fixed hidden insert-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
    }

    const AButton3 = () => {
      document.getElementById('modalDate').className = "fixed hidden insert-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
    }

    const AButton4 = () => {
      document.getElementById('modalTeam').className = "fixed hidden insert-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
    }

    const AButton5 = () => {
      document.getElementById('modalContent').className = "fixed hidden insert-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
    }

    let lien = "https://xxpeqblsyczvsphynbzo.supabase.co/storage/v1/object/public/joueurs/"
  
    return (
        <div>
            <Head>
                <title>Modification de l'article</title>
            </Head>
            <div className="fixed hidden insert-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="modalTitle">    
                <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                  <div className="mt-3 text-center">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">Changer le nom du joueur</h3>
                      <form>
                        <div className="mt-2 px-7 py-3">
                          <input type="text" id="nom" className='text-sm rounded' value={title} onChange={(e)=> setTitle(e.target.value)}></input>
                        </div>
                      </form>
                      <div className="items-center px-4 py-3 flex">
                          <button
                              className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 mx-8
                                  text-base rounded-md w-1/2
                                  focus:outline-none focus:ring-2 focus:ring-purple-300" onClick={AButton1}>
                              Annuler
                          </button>
                          <button
                              className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 mx-8
                                  text-base rounded-md w-1/2
                                  focus:outline-none focus:ring-2 focus:ring-purple-300" onClick={okButton1}>
                              Valider
                          </button>
                      </div>
                  </div>
                </div>
            </div>

            <div className="fixed hidden insert-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="modalImage">    
                      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                        <div className="mt-3 text-center">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">Changer l'image</h3>
                            <form>
                              <div className="mt-2 px-7 py-3">
                              <input type='file' accept='image/' id="photo" onChange={(e)=> setFile(e.target.files[0])} className='block w-auto text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'></input>
                              </div>
                            </form>
                            <div className="items-center px-4 py-3 flex">
                                <button
                                    className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 mx-8
                                        text-base rounded-md w-1/2
                                        focus:outline-none focus:ring-2 focus:ring-purple-300" onClick={AButton2}>
                                    Annuler
                                </button>
                                <button
                                    className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 mx-8
                                        text-baserounded-md w-1/2
                                        focus:outline-none focus:ring-2 focus:ring-purple-300" onClick={okButton2}>
                                    Valider
                                </button>
                            </div>
                        </div>
                      </div>
                  </div>

                  <div className="fixed hidden insert-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="modalDate">    
                      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                        <div className="mt-3 text-center">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">Changer la date</h3>
                            <form>
                              <div className="mt-2 px-7 py-3">
                              <input type="number" placeholder="YYYY" id="debutdate" min="1946" max="2022" step="1" className='text-sm rounded border' value={date} onChange={(e)=> setDate(e.target.value)}></input>
                              </div>
                            </form>
                            <div className="items-center px-4 py-3 flex">
                                <button
                                    className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 mx-8
                                        text-base rounded-md w-1/2
                                        focus:outline-none focus:ring-2 focus:ring-purple-300" onClick={AButton3}>
                                    Annuler
                                </button>
                                <button
                                    className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 mx-8
                                        text-base rounded-md w-1/2
                                        focus:outline-none focus:ring-2 focus:ring-purple-300" onClick={okButton3}>
                                    Valider
                                </button>
                            </div>
                        </div>
                      </div>
                  </div>

                  <div className="fixed hidden insert-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="modalTeam">    
                      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                        <div className="mt-3 text-center">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">Changer l'équipe</h3>
                            <form>
                              <div className="mt-2 px-7 py-3">
                                <input type="text" id="equipe" className='text-sm rounded border' value={team} onChange={(e)=> setTeam (e.target.value)}></input>
                              </div>
                            </form>
                            <div className="items-center px-4 py-3 flex">
                                <button
                                    className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 mx-8
                                        text-base rounded-md w-1/2
                                        focus:outline-none focus:ring-2 focus:ring-purple-300" onClick={AButton4}>
                                    Annuler
                                </button>
                                <button
                                    className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 mx-8
                                        text-base rounded-md w-1/2
                                        focus:outline-none focus:ring-2 focus:ring-purple-300" onClick={okButton4}>
                                    Valider
                                </button>
                            </div>
                        </div>
                      </div>
                  </div>

                  <div className="fixed hidden insert-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="modalContent">    
                      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                        <div className="mt-3 text-center">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">Changer les informations</h3>
                            <form>
                              <div className="mt-2 px-7 py-3">
                              <textarea type="text" id="information" className='text-sm rounded border' value={content} onChange={(e)=> setContent(e.target.value)}></textarea>
                              </div>
                            </form>
                            <div className="items-center px-4 py-3 flex">
                                <button
                                    className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 mx-8
                                        text-baserounded-md w-1/2
                                        focus:outline-none focus:ring-2 focus:ring-purple-300" onClick={AButton5}>
                                    Annuler
                                </button>
                                <button
                                    className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 mx-8
                                        text-base rounded-md w-1/2
                                        focus:outline-none focus:ring-2 focus:ring-purple-300" onClick={okButton5}>
                                    Valider
                                </button>
                            </div>
                        </div>
                      </div>
                  </div>
            <Layout>
            <div className="text-center bg-orange-300 dark:bg-orange-800 p-3 mt-3 mx-auto rounded-md mb-6 max-w-xl">
            
                <h1>Détails du joueur</h1>
                <button className='bg-black hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-black dark:text-black dark:hover:text-white text-white font-bold py-2 px-4 rounded float-left'>
                  <Link href={`/posts/${id}`}>Retour</Link>
                </button>
                  <div className='w-full '>
                    {article && (
                      <div className="mt-10 divide-y divide-slate-200 md:rounded-lg">
                          <dl className="grid grid-cols-[auto_1fr] px-3 py-4 [&_dt]:italic [&_dt]:pr-20">
                            <dt>Name:</dt>
                            <dd>
                              {article[0].title}
                              <button id="open-title" className={"w-6 h-6 block bg-orange-300 dark:bg-orange-800 hover:bg-orange-700 dark:hover:bg-black hover:text-white rounded float-right"} onClick={cTitle}>
                                  <PencilSquareIcon className="h-6 w-6 " aria-hidden="true" />
                              </button>
                            </dd>
                          </dl>
                          <dl className="grid grid-cols-[auto_1fr] px-3 py-4 [&_dt]:italic [&_dt]:pr-20">
                            <dt>Image:</dt>
                            <dd>
                              <img className=' m-auto'
                                src={lien + article[0].image}
                                alt="Picture of the player"
                                width={(200)}
                                height={200}
                              />
                              <button id="open-image" className={"w-6 h-6 block bg-orange-300 hover:bg-orange-700 dark:bg-orange-800 dark:hover:bg-black hover:text-white rounded float-right"} onClick={cImage}>
                                  <PencilSquareIcon className="h-6 w-6 " aria-hidden="true" />
                              </button>
                            </dd>
                          </dl>
                          <dl className="grid grid-cols-[auto_1fr] px-3 py-4 [&_dt]:italic">
                            <dt>Début de carrière:</dt>
                            <dd>
                              {article[0].date}
                              <button id="open-date" className={"w-6 h-6 block bg-orange-300 hover:bg-orange-700 dark:bg-orange-800 dark:hover:bg-black hover:text-white rounded float-right"} onClick={cDate}>
                                  <PencilSquareIcon className="h-6 w-6 " aria-hidden="true" />
                              </button>
                            </dd>
                          </dl>
                          <dl className="grid grid-cols-[auto_1fr] px-3 py-4 [&_dt]:italic [&_dt]:pr-14">
                            <dt>Son équipe:</dt>
                            <dd>
                              {article[0].team}
                              <button id="open-team" className={"w-6 h-6 block bg-orange-300 hover:bg-orange-700 dark:bg-orange-800 dark:hover:bg-black hover:text-white rounded float-right"} onClick={cTeam}>
                                  <PencilSquareIcon className="h-6 w-6 " aria-hidden="true" />
                              </button>
                            </dd>
                          </dl>
                          <dl className="grid grid-cols-[auto_1fr] px-3 py-4 [&_dt]:italic [&_dt]:pr-14">
                            <dt>Information du joueur:</dt>
                            <dd>
                              {article[0].content}
                              <button id="open-content" className={"w-6 h-6 block bg-orange-300 hover:bg-orange-700 dark:bg-orange-800 dark:hover:bg-black hover:text-white rounded float-right"} onClick={cContent}>
                                  <PencilSquareIcon className="h-6 w-6 " aria-hidden="true" />
                              </button>
                            </dd>
                          </dl>
                        </div>
                    )}
                  </div>
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