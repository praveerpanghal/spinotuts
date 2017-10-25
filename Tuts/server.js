'use strict'
var express=require('express'),
session=require('express-session'),
gzippo = require ('gzippo'),
compression = require('compression'),
app = express(),
bodyParser = require('body-parser'),
engines = require('consolidate'),
path = require('path'),
crypto = require('crypto'),
fs = require("fs"),
https = require('https'),
http = require('http'),
pem = require('pem'),
jwt = require('jsonwebtoken'),
port=1800;
app.use(session({
  secret: "Spinotuts",
  resave: true,
  saveUninitialized: true
}));

app.use(compression());
app.use(bodyParser.json());
//app.use(express.static(__dirname));
app.use(express.static(__dirname));
app.set('views', __dirname );
app.engine('html', engines.mustache);
app.set('view engine', 'html');
app.set('view cache', true);

app.get('/*', function(req, res){
 res.sendFile(__dirname + '/Src/index.html');
  //  res.end();
});


/* authentication token code begin*/
var expressJwt = require('express-jwt')
var secret = 'this is the secret secret secret 12356';
app.use('/api', expressJwt({secret: secret}));
var Client = require('node-rest-client').Client;
var client = new Client();
var request = require("request");
app.post('/authenticate', function (req, res) {  
  var args = {
    data: { email_id: req.body.username, password: req.body.password },
    headers: { "Content-Type": "application/json" }
  };
  client.post("http://162.17.231.115:121/SpinoService.svc/Login", args, function (data, response) {
  var body = data.LoginResult[0];
  var profile = {
    ReturnVal: body.ReturnVal,
    UserId: body.UserId,
    UserRightsId: body.UserRightsId  };
    // We are sending the profile inside the token
    req.session.seid=profile.UserId;
    var token = jwt.sign(profile, secret);
    res.json({ token: token });
  });
});
/* authentication token code end*/
/* image upload code begin*/
var multer = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    var filedestination='./Src/images/uploads/'+req.session.seid;
    //var filedestinationnew='./Build/images/uploads/'+req.session.seid;
    if (!fs.existsSync(filedestination)){
      fs.mkdirSync(filedestination);
    }
    // if (!fs.existsSync(filedestinationnew)){
    //   fs.mkdirSync(filedestination);
    // }
    cb(null, filedestination);
    // cb(null, filedestinationnew);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
});

var upload = multer({storage: storage});
app.post('/multer', upload.single('file'), function (req, res) {
  
	res.end("File uploaded successfully.");
});

/* image upload code end*/
app.listen(port,function(){ });
console.log("http://www.spinotuts.com listening on "+port+" port...");
//module.exports = app;