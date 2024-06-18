
const express = require('express');
const mysql = require('mysql2');
const config = require('config');

var app = express.Router();

const connectionString = {
                        host : config.get("host"),
                        port : config.get("port"),
                        database : config.get("database"),
                        user : config.get("user"),
                        password : config.get("password")
};


app.get("/", (request, response)=>
    {
        console.log("++++++++++++++")
        let queryText = `select * from EMP`;
        console.log(queryText);
        let connection = mysql.createConnection(connectionString);

        connection.connect();
        connection.query(queryText, (err, result)=>{
            if(err==null)
            {
                var resultInString = JSON.stringify(result);
                response.setHeader("content-type", "application/json");
                response.write(resultInString);
                connection.end();
                response.end();
            }
            else
            {
                var errInString = JSON.stringify(err);
                response.setHeader("content-type", "application/json");
                response.write(errInString);
                connection.end();
                response.end();
            }
        });
    });

    app.post("/", (request, response)=>{
        // console.log("Data Received in Body from Client is : ")
        // console.log(request.body)
        // response.write("POST call received for /emps" );
        // response.end();
    
    
        let queryText = `insert into EMP(empno, ename,sal) values('${request.body.empno}','${request.body.ename}','${request.body.sal}')`;
    
        let connection = mysql.createConnection(connectionString);
        connection.connect();
        connection.query(queryText, (err, result)=>{
            if(err==null)
            {
                var resultInString = JSON.stringify(result);
                response.setHeader("content-type", "application/json");
                response.write(resultInString);
                connection.end();
                response.end();
            }
            else
            {
                var errInString = JSON.stringify(err);
                response.setHeader("content-type", "application/json");
                response.write(errInString);
                connection.end();
                response.end();
            }
        });
    });

app.put("/:empno", (request,response) =>
{
    let empno = request.params.empno;
    let ename = request.body.ename;
    let sal = request.body.sal;
    
    let queryText = `update EMP set ename='${ename}', sal=${sal} where empno = ${empno}`;

    console.log(queryText);

    let connection = mysql.createConnection(connectionString);
    connection.connect();
    connection.query(queryText, (err, result) =>
        {
            if(err==null)
                {
                    var resultInString = JSON.stringify(result);
                    response.setHeader("content-type", "application/json");
                    response.write(resultInString);
                    connection.end();
                    response.end();
                }
            else
                {
                    var errInString = JSON.stringify(err);
                    response.setHeader("content-type", "application/json");
                    response.write(errInString);
                    connection.end();
                    response.end();
                }
        });
});


app.delete("/:empno", (request, response) =>
{
    let empno = request.params.empno;
    let queryText = `delete from EMP where empno = ${empno}`;

    console.log(queryText);

    let connection = mysql.createConnection(connectionString);
    connection.connect();
    connection.query(queryText, (err, result) =>
        {
            if(err==null)
                {
                    var resultInString = JSON.stringify(result);
                    response.setHeader("content-type", "application/json");
                    response.write(resultInString);
                    connection.end();
                    response.end();
                }
            else
                {
                    var errInString = JSON.stringify(err);
                    response.setHeader("content-type", "application/json");
                    response.write(errInString);
                    connection.end();
                    response.end();
                }
        });
});

module.exports = app;