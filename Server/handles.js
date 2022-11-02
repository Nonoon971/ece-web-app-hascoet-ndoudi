const express = require('express')
const router = express.Router()
const path = require('path')

router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/html/root.html'))
})

router.get('/hello', (req, res) => {
  const name = req.query.name
  switch(name){
    case "Norine":
      res.sendFile(path.join(__dirname, '/html/nom1.html'))
      break;
    case "Camille":
      res.sendFile(path.join(__dirname, '/html/nom2.html'))
      break;
    case "":
      res.sendFile(path.join(__dirname, '/html/nomvide.html'))
      break;
    default:
      res.send('Hello ' + name)
      break;
  }
})

module.exports = router