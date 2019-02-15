const serverless = require("serverless-http");
const express = require("express");
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const databaseService = require('./databaseservice');

app.get("/tasks", function(request, response) {
  databaseService.getTasks().then(function(tasks){
    response.json(tasks);
  })
  .catch(function(error) {
    response.status(500);
    response.json(error);
  });
})

app.post("/tasks", function(request, response) {

  const taskDescription = request.body.taskDescription;
  databaseService.saveTask(taskDescription).then(function(results){
    response.json(results);
  })
  .catch(function(error) {
    response.status(500);
    response.json(error);
  });
})

app.delete("/tasks/:taskId", function(request, response) {
  const taskIdToBeDeleted = request.params.taskId;

  let someResponse = {
    message: "You issued a delete request for ID: " + taskIdToBeDeleted
  };

  if (taskIdToBeDeleted > 3) {
    response.status(404);
    someResponse = {
      message: "Task " + taskIdToBeDeleted + " does not exist"
    };
  }

  response.json(someResponse);
});

module.exports.handler = serverless(app);
