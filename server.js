var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/_site'));

app.get('*', function(req,res){res.status(404).send('404 Not Found');});

app.listen(app.get('port'), function(){
	console.log( 'Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.' );
});