var express = require('express');
var compress = require('compression');
var app = express();

app.engine('html', require('ejs').__express);
app.set('views', __dirname + '/src/views');
app.set('view engine', 'html');

app.use(compress());
app.use(express.static(__dirname + '/dist'));

var port = process.env.PORT || 8000;

app.get('/', function (req, res) {
  res.render('index', {title: 'Test Site'});
})
app.get('/local-storage', function (req, res) {
  res.render('localStorage/index', {title: 'local-storage'});
})

app.listen(port, function() {
	console.log('server running on port ' + port);
});