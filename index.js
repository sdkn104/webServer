// web server

const express = require("express");
const app = express();
 
app.use(express.static('static'));  // http://localhost:8080/static/file.html

//const bodyparser = require("body-parser")
//app.use(bodyparser.urlencoded({extended: true}))
//app.use(bodyparser.json())
 
 
app.listen(8080);
console.log("listening port 8080.");
console.log("push web preview button to invoke web browser.");


