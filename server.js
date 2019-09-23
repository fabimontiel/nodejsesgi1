// console.log('Hello World');

const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => res.send('Hello World!'))

/*app.get('/', function (req, res) {
    res.send('Hello World!');
})*/

app.post('/chat', function (req, res){
  res.send('Nous sommes a Paris');
});

app.listen(port, () => console.log('Example app listening on port ${port}!'))
