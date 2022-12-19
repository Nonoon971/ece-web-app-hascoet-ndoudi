import { useState, useEffect } from 'react'
import Layout from '../../../components/layout'
import { useSupabaseClient } from '@supabase/auth-helpers-react'

export default function Contacts({id}) {
    const [contact, setContact] = useState(null)
  const supabase = useSupabaseClient()
  useEffect(() => {
    (async () => {
      let { data, error, status } = await supabase
        .from('contacts')
        .select()
        .eq('id', id)
        setContact(data)
        console.log(data)
    })()
  }, [id])
  return (
    <Layout>
      <h1 className='wt-title'>
        View a contact message
      </h1>
      {contact && (
        <div className="overflow-hidden divide-y divide-slate-200 shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
          <div className="bg-slate-50">
            <dl className="grid grid-cols-[auto_1fr] px-3 py-4 [&_dt]:italic [&_dt]:text-slate-500 [&_dt]:pr-3">
              <dt>Name</dt>
              <dd>{contact[0].lastname} {contact[0].firstname}</dd>
              <dt>Email</dt>
              <dd>{contact[0].email}</dd>
            </dl>
          </div>
          <div className="px-3 py-10 bg-white">
            {contact[0].message}
          </div>
        </div>
      )}<br/>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'> Supprimer ce message</button>
    </Layout>
  )
}

export async function getServerSideProps(context) {
    return {
      props: {
        id: context.params.id
      },
    }
  }