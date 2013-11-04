var express = require('express');
var app = express();

app.configure(function() {
	app.set('view engine', 'jade');
	app.use(express.static( __dirname + '/public' ));
});

app.get('/', function(req, res) {
	res.render('index', { layout: false });
});

app.get('/account/authenticated', function(req, res) {
  if (res.session.loggedIn) {
    res.send(200);
  } else {
    res.send(401);
  }
});

app.post('/register', function(req, res){
  var firstName = req.param('firstName',''),
      lastName = req.param('lastName', ''),
      email = req.param('email', undefined),
      password = req.param('password', undefined);

  if (!email || !password) {
    res.send(404);
    return;
  }

  Account.register(email, password, firstName, lastName);
  res.send(200);
});

app.get('/login', function(req, res) {
  console.log('login request');
  var email = req.param('email', undefined),
      password = req.param('password', undefined);

  if ( !email || email.length < 1 || !password || password.length < 1 ) {
    res.send(404);
    return;
  }

  Account.login(email, password, function(success) {
    if(!success) {
      res.send(401);
      return;
    }
    console.log('login was successful');
    res.send(200);
  });
});

app.listen(3000);
