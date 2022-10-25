import {useRouter} from 'next/router'
import db from './db'

function Details(){
  const router=useRouter()
  const id=router.query.id


  const article = db.articles.find(article => article.id === id)

  return(
    <div>
      <h1>Détails de l'article {article.id}</h1>
      <p className='italic font-bold hover:text-red-800'>
        Titre: {article.title}<br/>
        Content: {article.date}<br/>
        Auteur: {article.author}<br/>
      </p>
    </div>
  )
}

export default Details