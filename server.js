var express = require('express');
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());

var port = process.env.PORT || 5000;

app.get('/api/posts', function(req, res) {
  res.set('Content-Type', 'application/json');
  res.send(200, 
   [ {"id": 1, "title": "A Winter Day", "body": "On a cold winter day, ... " }]
   )
})

app.listen(port, function() {
  console.log("Connect server listenting on port " + port);
});
