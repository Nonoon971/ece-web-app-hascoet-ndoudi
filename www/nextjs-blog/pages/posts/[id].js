import {useRouter} from 'next/router'
import db from './db'

function Details(){
  const router=useRouter()
  const id=router.query.id


  const article = db.articles.find(article => article.id === id)

  return(
    <div>
      <h1>Détails de l'article {article.id}</h1>
      <p>Titre: {article.title}</p>
      <p>Content: {article.date}</p>
      <p>Auteur: {article.author}</p>
      <p></p>
    </div>
  )
}

export default Details