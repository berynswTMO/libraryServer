const express = require("express");
const app = express();
const router = express.Router();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var lib = {
  books: []
};
var idCount = 0;

app.get("/health", (req, res) => {
  res.status(200).send("Don't panic.");
});


app.post('/api/books',(req, res) =>{
  idCount++;
  var ret = req.body;
  ret.id = idCount;
  lib.books.push(ret);
  res.status(201).send(ret);
  
});

app.get('/api/books',(req, res) =>{
  lib.books.sort( (a,b) => a.title.localeCompare(b.title.localeCompare) );
  res.status(200).send(lib);
});

app.delete('/api/books',(req, res) =>{
  lib.books = [];
  res.status(204).send();
});

module.exports = app;
