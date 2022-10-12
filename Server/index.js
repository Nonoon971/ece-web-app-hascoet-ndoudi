//const handles = require('./handles')
const article = require('./articleDB')
const express = require('express')
const app = express()
const port = 8080

app.listen(port, () => {
    console.log(`App test pour voir on port ${port}`)
})

//app.use = ('/handles', handles)
app.use('/articleDB', article)