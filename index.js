const express = require('express')
const app = express()

const port = 8080;

// ROTA
app.get('/home', function (req, res) {
  res.send('hello world');
});

app.listen(port, () => {
  console.log(`server is running on ${port}`)
});