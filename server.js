const express = require('express')
const app = express()
const port = process.env.PORT || 3000
var bodyParser = require('body-parser')

app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Hello World!'))

/*app.get('/', function (req, res) {
    res.send('Hello World!');
})*/

app.post('/chat', function (req, res){
  const message = req.body.msg
  if(message == "ville"){
    res.send("Nous sommes a Paris")
  }else if(message == "meteo"){
    res.send("Il fait beau")
  }
});

app.get('/hello', (req, res) => {
 if (req.query.nom == null) {
   res.send("Quel est votre nom ?");
 } else {
   res.send("Bonjour, " + req.query.nom + " !");
 }}
)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
