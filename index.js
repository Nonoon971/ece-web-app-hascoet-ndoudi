const handles = require('./handles')
const express = require('express')
const app = express()
const port = 8080

app.listen(port, () => {
    console.log(`App test pour voir on port ${port}`)
})

app.use('/handles', handles)