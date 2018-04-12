const express = require('express')

const app = express()

arr=[];

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

app.get('/todos/delete', (req, res,next) => {
  
    if(req.query.id==null || req.query.id>arr.length-1 || req.query.id<=-1)
    res.send("Invalid index")
    else
    next()

})
app.get('/todos/delete', (req, res) => {
  
    arr.splice(req.query.id,1);
    res.send("deleted")

})
app.get('/todos/update', (req, res,next) => {
  
    if(req.query.task==null || req.query.task=="")
    {
        res.send("no task found")
    }
    else if(req.query.id==null || req.query.id>arr.length-1 || req.query.id<=-1)
    {
        res.send("Invalid index")
    }
    else
   next()

})
app.get('/todos/update', (req, res) => {
  
    arr.splice(req.query.id,1,req.query.task);
    res.send("updated")

})


app.use(function (req, res) {
    res.status(404).send("<h1>No such page found</h1>")
})


app.listen(8181)




