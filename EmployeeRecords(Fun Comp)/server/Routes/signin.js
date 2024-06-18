const express = require('express');
const jwt =require('jsonwebtoken');
const config = require('config');

var app = express.Router();

app.post("/", (request, response)=>{
    console.log("Credentials received from client are:")
    console.log(request.body.username);
    console.log(request.body.password);
    var isUserValid = CheckCredentialsInDatabase(request.body.username,
                                                request.body.password )

        if(isUserValid)
            {
                var someRandomnumber = Math.floor(Math.random() * 10000)

                var payload = {
                    username : request.body.username,
                    randomNo : someRandomnumber,
                    tokenCreataedAt  :new Date().toString()
                };

                var secretKey = config.get("secretKey")

                var token = jwt.sign(payload, secretKey)

                var outputToBeSent = { jwtoken : token, message  : "success"};
                console.log(token)
                response.setHeader("Content-Type", "application/json");
                response.write(JSON.stringify(outputToBeSent));
                response.end();
            }
            else{
                var outputToBeSent = { message : "failure"};

                response.setHeader("Content-Type", "application/json");
                response.write(JSON.stringify(outputToBeSent));
                response.end();
            }
})

function CheckCredentialsInDatabase(username, password)
{
    if(username == "Shriyash" && password == "Shriyash@123")
        {
            return true;
        }
        else{
            return false;
        }
}

module.exports = app;
