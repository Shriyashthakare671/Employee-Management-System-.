const express = require('express');
const cors = require('cors');
const routeToEmps = require('./Routes/emps');
const routeToAdmin = require('./Routes/admin');
const routeToSignIn = require('./Routes/signin');
const jwt = require('jsonwebtoken');
const config = require('config');
const port = config.get("serverport");


const app = express();
app.use(cors());
app.use(express.json());

// app.use((request,response, next) =>
// {
//     if(request.url.includes("signin"))
//         {
//             next();
//         }
//         else
//         {
//             var entireAuthHeaderContent = request.headers["authorization"];
//             console.log(entireAuthHeaderContent);

//             if(entireAuthHeaderContent != undefined)
//                 {
//                     var splitHeader = entireAuthHeaderContent.split(' ');
//                 // console.log(splitHeader)

//                 var tokenReceived = splitHeader[1];
//                 console.log("Token Received:"+tokenReceived);

//                 var decryptedTokenData = 
//                             jwt.verify(tokenReceived, config.get("secretKey"));
//                 console.log("token decrypyted:"+decryptedTokenData);

//                 var isTokenValid =  CheckTokenData(decryptedTokenData)
//                 if(isTokenValid)
//                     {
//                         next();
//                     }
//                     else{
//                         var outputToBeSent = { message : "failure! invalid token!" }; 
//                         // console.log("authorization");
//                         //send the token to client
//                         response.setHeader("Content-Type", "application/json");
//                         response.write(JSON.stringify(outputToBeSent));
//                         response.end();
//                     }
//                 }

//         else
//         {
//             var outputToBeSent = { message : "You need to login first!" };

//             response.setHeader("Content-Type", "application/json");
//             response.write(JSON.stringify(outputToBeSent));
//             response.end();
//         }
                
//     }
        
        
// });

function CheckTokenData(payloadReceivedFromClient)
{
    if(payloadReceivedFromClient.username == "Shriyash")
        {
            return true;
        }
    else
    {
        return false;
    }
}

app.use("/signin", routeToSignIn);
app.use("/emps", routeToEmps);
app.use("/admin", routeToAdmin);


app.listen(port, () =>
{
    console.log("Server Started "+port)
})

