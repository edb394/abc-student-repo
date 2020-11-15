const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

let counter=0

app.get('/even', (req, res) => {
  counter= counter+1;
  console.log(counter, "people opened even");
  res.sendFile(__dirname + '/even/index.html')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
