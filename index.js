const handles = require('./handles')
const server = http.createServer(handles.serverHandle);
server.listen(8080)

app.use('/handles', handles)