const express = require('express')

const app = express()

arr=['dasdas','hello','bye'];

app.use(function (req, res, next) {
    console.log("Server Running on port: 8181")
    next()
})
app.get('/todos', (req, res) => {
   
    let responseList='<ul>';
    for(let i=0;i<arr.length;i++)
    {
    
        responseList+='<li>'+arr[i]+'</li>';
    }        
    responseList+='</ul>';
    
    res.send(responseList);
    
})
app.get('/todos/add', (req, res) => {
   
    arr.push(req.query.task)
    res.send("added")

})

app.get('/todos/delete', (req, res) => {
  
    arr.splice(req.query.id,1);
    res.send("deleted")

})

app.get('/todos/update', (req, res) => {
  
    arr.splice(req.query.id,1,req.query.task);
    res.send("updated")

})


app.use(function (req, res) {
    res.status(404).send("<h1>No such page found</h1>")
})

sa
app.listen(8181)