var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require("path");
var fs = require("fs");
app.use(bodyParser.json({ limit: '10mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));


//public folder as static
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})


//Include all models
fs.readdirSync('./app/models').forEach(function (file) {
    //Check if file is JS format
    if (file.indexOf('.js')) {
        require('./app/models/' + file);
    }
}); //End For Each

//Include Controllers
fs.readdirSync('./app/controllers').forEach(function (file) {
    if (file.indexOf('.js')) {
        //Include a file as a route variable
        var route = require('./app/controllers/' + file);
        route.controller(app);
    }
}); 

var port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log("Bitcoin Tracker running on port " + port);
})