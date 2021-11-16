var express = require('express');
var pug = require('pug');
var path = require('path');

var app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/about', function(req, res) {
    res.render('about');
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});