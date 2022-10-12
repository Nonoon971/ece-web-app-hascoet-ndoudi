const express = require('express')
const path = require('path')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/html/root.html'))
})

app.get('/hello', (req, res) => {
  const name = req.query.name;
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

app.listen(port, () => {
  console.log(`App test pour voir on port ${port}`)
})