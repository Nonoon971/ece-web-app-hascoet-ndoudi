const { application } = require('express')
const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

router.get('/', (req, res) => {
  const content = '<!DOCTYPE html>' +
    '<html>' +
    '    <head>' +
    '        <meta charset="utf-8" />' +
    '        <title>Utilisation du hello</title>' +
    '    </head>' +
    '    <body>' +
    '       <h1 style="text-align:center;">Utilisation du hello</h1>' +
    '       <p>Nous avons l\'adresse URL suivante: http://localhost:8080/ nous allons parler du fonctionnement de la page hello dans l\'URL</p>' +
    '       <p>Il suffit d\'entrer hello et votre nom de la manière suivant: <b> http://localhost:8080/hello?name=votre_nom </b> </p>' +
    '       <p>Par exemple, quelqu\'un qui s\'appelle John écrira <b><a href ="http://localhost:8080/hello?name=John"> http://localhost:8080/hello?name=John</a></b></p>' +
    '       <p> Si vous taper le nom de la créatrice du site Norine vous obtiendez une petite description de sa part <br>' +
    '        <b><a href="http://localhost:8080/hello?name=Norine"> http://localhost:8080/hello?name=Norine </a> </b> </p>' +
    '        <br>' +
    '        <b><p> ATTENTION SI VOUS NE TAPEZ PAS DE PARAMETRE NAME, VOUS TOMBEREZ SUR UNE PAGE ERREUR </p></b>' +
    '    </body>' +
    '</html>'
  res.send(content)
})

router.get('/hello', (req, res) => {
  const name = req.query.name;
  switch(name){
    case "Norine":
      const content1 = '<!DOCTYPE html>' +
          '<html>' +
          '    <head>' +
          '        <meta charset="utf-8" />' +
          '        <title>Hello Norine</title>' +
          '    </head>' +
          '    <body>' +
          '       <h1>Coucou</h1>' +
          '       <p>Hello je m\'appelle Norine j\'ai 19 ans et je suis en ING4 en SI à l\'ECE Paris !</p>' +
          '    </body>' +
          '</html>'
      res.send(content1)
      break;
    case "Camille":
      const content2 = '<!DOCTYPE html>' +
          '<html>' +
          '    <head>' +
          '        <meta charset="utf-8" />' +
          '        <title>Hello Camille</title>' +
          '    </head>' +
          '    <body>' +
          '       <h1>Coucou</h1>' +
          '       <p>Hello je m\'appelle Norine j\'ai 23 ans et je suis en ING4 en SI à l\'ECE Paris !</p>' +
          '    </body>' +
          '</html>'
      res.send(content2)
      break;
    case "":
      const content = '<!DOCTYPE html>' +
          '<html>' +
          '    <head>' +
          '        <meta charset="utf-8" />' +
          '        <title>BIP BIP BIP</title>' +
          '    </head>' +
          '    <body>' +
          '       <h1>ERROR 404 <h1>' +
          '       <h5>Page introuvable </h5>' +
          '    </body>' +
          '</html>'
      break;
    default:
      res.send('Hello ', name)
      break;
  }
})

module.exports = router