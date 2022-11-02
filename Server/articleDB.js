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
router.get('/articles', (req, res) => {
  res.write("Voici la liste des articles\n\n")
  for (const element of db.articles) {
    res.write("ID: " + element.id + "\n")
    res.write("Titre: " + element.title + "\n")
    res.write("Contenu: " + element.content + "\n")
    res.write("Date: " + element.date + "\n")
    res.write("Autheur: " + element.author + "\n\n")
  }
  res.end()
})

//Ajout article
router.post('/articles', (req, res) => {
  let article =
  {
    id: req.query.id,
    title: req.query.title,
    content: req.query.content,
    date: req.query.date,
    author: req.query.author
  }

  if (article.id === undefined && article.title === undefined && article.content === undefined && article.date === undefined && article.author === undefined) {
    console.log("Element d'article non défini, ajout non effectué")
  }
  else {
    db.articles.push(article)
  }

})

//Récupérer un article par son ID
router.get('/articles/:articleId', (req, res) => {
  const article = db.articles.find(article => article.id === req.params.articleId)
  if (article === undefined) {
    res.send("L'article n'existe pas")
  }
  else {

    res.write("Voici l'article correspondant a cette ID\n\n")
    res.write("ID: " + article.id + "\n")
    res.write("Titre: " + article.title + "\n")
    res.write("Contenu: " + article.content + "\n")
    res.write("Date: " + article.date + "\n")
    res.write("Autheur: " + article.author + "\n\n")
    res.end()
  }
})


//Lister tout les commentaires concernant l'article correspondant à l'ID
router.get('/articles/:articleId/comments', (req, res) => {
  const article = db.articles.find(article => article.id === req.params.articleId)
  if (article === undefined) {
    res.send("L'article n'existe pas")
  }
  else {
    res.write("Voici les commentaires correspondant à cet article\n\n")
    let i = 0;
    for (const element of db.comments) {
      if(element.articleId == article.id)
      {
        res.write("Message: " + element.content + "\n")
        let time = new Date(element.timestamp*1000)
        res.write("Date: " + time.toLocaleString() + "\n")
        res.write("De: " + element.author + "\n\n")
        i++;
      }
    }
    if(i==0)
    {
      res.write("Il n'y a pas encore de commentaires sur cet article.")
    }

  }
  res.end()
})

//Ajouter un nouveau commentaire
router.post('/articles/:articleId/comments', (req, res) => {
  let comments =
  {
    id: req.query.id,
    timestamp: Date.now(),
    content: req.query.content,
    articleId: req.query.articleId,
    author: req.query.author
  }

  if (comments.id === undefined && comments.timestamp === undefined && comments.content === undefined && comments.articleId === undefined && comments.author === undefined) {
    console.log("Element commentaire manquant, ajout non effectué")
  }
  else {
    db.comments.push(comments)
  }

})

//Récupérer un commentaire particulier d'un article
router.get('/articles/:articleId/comments/:commentId', (req, res) => {
  const article = db.articles.find(article => article.id === req.params.articleId)
  if (article === undefined) {
    res.send("L'article n'existe pas")
  }
  else {
    const comment = db.comments.find(comment => comment.id === req.params.commentId)
    if(comment === undefined)
    {
      res.send("Ce commentaire n'existe pas")
    }
    else
    {
        res.write("Message: " + comment.content + "\n")
        let time = new Date(comment.timestamp*1000)
        res.write("Date: " + time.toLocaleString() + "\n")
        res.write("De: " + comment.author + "\n\n")
        res.end()
    }
  }
})

module.exports = router