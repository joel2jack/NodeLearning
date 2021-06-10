const express = require('express');
const app = express();

const todo = ["learn node", "code with node"];

app.get('/', function(req, res){
    res.send("Hello world");
});

app.post('/addToDo/:toDoTask', function(req, res){
    const { toDoTask } = req.params;
    todo.push(toDoTask);
    res.send("saved successfully");
});

app.get('/getAllTask', function(req, res){
    res.send(todo);
});

app.delete('/deleteTask/:toDoTask', function(req, res){
    const { toDoTask } = req.params;
    const indexVal = todo.indexOf(toDoTask);
    if(indexVal == -1){
        return res.status(404).send('ToDo Task is not available in the list');
    }
    
        const test = todo.splice(indexVal,1);
        res.send('Task ' + toDoTask + 'is deleted from the task list. Available tasks are \r\n' + todo);

    
});

app.listen(80);