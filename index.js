const express = require('express')

const app = express()

let arr=["Hello", "Bye"];

app.use(function (req, res, next) {
    console.log("Server Running on port: 8181")
    next()
})
app.get('/todos', (req, res) => {
             res.send(arr);
    
})
app.get('/todos/add', (req, res) => {
   
    arr.push(req.query.task)
    res.send("added")
})

app.get('/todos/delete', (req, res) => {
  
    res.send("a")
})

app.get('/a/b', (req, res) => {
    console.log("You requested a/b")
    res.send("a/b")
})

app.get('/b/a', (req, res) => {
    console.log("You requested b/a")
    res.send("b/a")
})

app.use(function (req, res) {
    res.status(404).send("<h1>No such page found</h1>")
})


app.listen(8181)