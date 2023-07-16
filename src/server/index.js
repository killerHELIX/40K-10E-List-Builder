const express = require('express')
const app = express()
const port = 80
const fs = require('fs')

app.get('/', (req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' })
  fs.createReadStream('src/client/index.html').pipe(res)
})

app.get('/htmx.js', (req, res) => {
  res.writeHead(200, { 'content-type': 'text/javascript' })
  fs.createReadStream('src/server/htmx-1.9.3.min.js').pipe(res)
})


let count = 1
app.get('/test', (req, res) => {
  resp=`This button has been pressed ${count} times`
  count++
  console.log(resp)
  res.send(resp)
})

app.listen(port, () => {
  console.log(`40K-10E-List-Builder listening on port ${port}`)
})