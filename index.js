const handles = require('./handles')
const express = require('express')
const app = express()

app.set('port', 8080)

app.use('/handles', handles)