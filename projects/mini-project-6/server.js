const express = require('express')
const app = express()
const port = 3000 //change
let d = new Date();
const answer= 27-d.getDate();

app.use(express.static('public'))

app.get('/guess', (req, res) => {
  let guessed = req.query.word;
  if (guessed==answer) {
    console.log("correct");
    res.redirect("/correct")
  }
  else {
    console.log("wrong");
    res.redirect("/wrong")

  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
