const serverless = require('serverless-http');
const express = require('express');
const app = express();

app.get('/tasks', function (request, response) {

  const someTasks = [
    {
      id: 1,
      description: "Buy some milk",
      completed: false
    },
    {
      id: 2,
      description: "Buy some bread",
      completed: false
    },
    {
      id: 3,
      description: "Buy some butter",
      completed: false
    }
  ];

  response.json(someTasks);
});

app.delete('/tasks/:taskId', function (request, response) {

  const taskIdToBeDeleted = request.params.taskId;

  let someResponse = {
    message: "You issued a delete request for ID: " + taskIdToBeDeleted
  };

  if(taskIdToBeDeleted > 3 ) {
    response.status(404);
    someResponse = {
      message: "Task " + taskIdToBeDeleted + " does not exist"
    };
  }

  response.json(someResponse);
});

module.exports.handler = serverless(app);