const express = require('express')
const router = express.Router()


let db = {
    articles: [
      {
        id: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b',
        title: 'My article',
        content: 'Content of the article.',
        date: '04/10/2022',
        author: 'Liz Gringer'
      },
      // ...
    ],
    comments: [
      {
        id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
        timestamp: 1664835049,
        content: 'Content of the comment.',
        articleId: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b',
        author: 'Bob McLaren'
      },
      // ...
    ]
  }

//Liste de tout les articles
router.get('/articles',(req,res) => {
    for(const element of db.articles)
    {
        res.send(element)
    }
})

//Ajout article
router.post('/articles',(req,res) => {
  let article =
  {
    id: req.query.id,
    title: req.query.title,
    content: req.query.content,
    date: req.query.date,
    author: req.query.author
  }

  if(article.id === undefined && article.title === undefined && article.content === undefined && article.date === undefined && article.author === undefined)
  {
    console.log("Element d'article non défini, ajout non effectué")
  }
  else
  {
    db.articles.push(article)
  }

})

//Récupérer un article par son ID
router.get('/articles/:articleId', (req,res) => {
  const searchID = req.params.articleId;
  const article = db.articles.find( article => article.id === searchId)

  if(article === undefined)
  {
    res.send("L'article n'existe pas")
  }
  else
  {
    res.send(db.articles[article])
  }
})



module.exports=router