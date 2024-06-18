const express = require('express');
var app = express.Router();

app.get("/", (request,response) =>
{
    response.write("Get For Admin Received");
    response.end();
})

app.post("/", (request, response) =>
{
    response.write("Post For Admin Received");
    response.end();
})

app.put("/", (request, response) =>
{
    response.write("Put For Admin Received");
    response.end();
})

app.delete("/", (request, response) =>
{
    response.write("delete for Admin received");
    response.end();
})

module.exports = app;