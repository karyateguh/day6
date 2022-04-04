const express = require("express")
const res = require("express")

//penggunan package express
const app = express()

//mrmbuat end point
app.get('/', function(req, res) {
    res.send("Hello World")
})


const port = 7000


app.listen(port, function () {
    console.log (`Server starting on port ${port}`);
})