var express = require('express');
var fs = require('fs');


var app = express();


app.set('port', (process.env.PORT || 8080));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
    fs.readFile(__dirname + '/index.html', 'utf8', function (err, data) {
        response.send(data);
    });
})

app.get('/about', function(request, response) {
    fs.readFile(__dirname + '/about.html', 'utf8', function (err, data) {
        response.send(data);
    });
})

app.get('/contact', function(request, response) {
    fs.readFile(__dirname + '/contact.html', 'utf8', function (err, data) {
        response.send(data);
    });
})

app.get('/post.html', function(request, response) {
    fs.readFile(__dirname + '/post.html', 'utf8', function (err, data) {
        response.send(data);
    });
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
