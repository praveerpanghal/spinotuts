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
dynamicStatic = require('express-dynamic-static')(),
jwt = require('jsonwebtoken');

var port=80;
var Client = require('node-rest-client').Client;
var client = new Client();
var request = require("request");
var data={};

app.use(session({
  secret: "Spinotuts",
  resave: true,
  saveUninitialized: true
}));
app.use(compression());
app.use(bodyParser.json());
//app.use(express.static(__dirname));
//app.use(express.static('Src'));
app.use(dynamicStatic);
app.set('views', __dirname);
//app.engine('.html', require('ejs').__express);
app.set('view engine', 'ejs');
app.set('view cache', true);

var fs = require('fs');
var et = require('elementtree');
var XML = et.XML;
var ElementTree = et.ElementTree;
var element = et.Element;
var subElement = et.SubElement;
var xmldata, etree,accessfolder,baseurl;

// var file = fs.readFileSync("url.js", "utf8");
// console.log(file);
app.get('/*', function(req, res){   
  xmldata = fs.readFileSync('config.xml').toString();
  etree = et.parse(xmldata);
  for(var i=0;i<etree.findall('./base').length;i++){
    if(req.get('host') == etree.findall('./base')[i].get('id')){  
      accessfolder=etree.findall('./base')[i].findtext('accessfolder'); 
      baseurl=etree.findall('./base')[i].findtext('baseurl');   
    }
  }  
  var filepath=accessfolder+'/'+'url.js';  
  var value='var BaseURL="'+baseurl+'";';
  //console.log(filepath);
  //console.log(value);
  fs.writeFile(filepath, value, (err) => {     
    //console.log('value saved!');
});
  dynamicStatic.setPath(path.resolve(__dirname, accessfolder));
  res.render(__dirname + '/'+accessfolder +'/index',{title:"SpinoTuts HTML,Bootstrap,Jquery,ReactJS,NodeJS,JavaScript,AngularJS",desc:"Spinotuts tutorials provides the users with a regular supply of programming and designing guides with up to date with new technologies and techniques to help the users. And with the effort we continually produce the unique and high quality tutorials"});
  //  res.end();
});

app.post('/sendinfo', function(req, res, next){  
  
  // console.log(data.title)
  // console.log(data.desc)
  
  xmldata = fs.readFileSync('config.xml').toString();
  etree = et.parse(xmldata);
  for(var i=0;i<etree.findall('./base').length;i++){
    if(req.get('host') == etree.findall('./base')[i].get('id')){  
      accessfolder=etree.findall('./base')[i].findtext('accessfolder');
      baseurl=etree.findall('./base')[i].findtext('baseurl');
    }
  } 
  var filepath='/'+accessfolder+'/'+'url.js';  
  var value='var BaseURL="'+baseurl+'";';
  data.title = req.body.title;    
  data.desc = req.body.description;
  fs.writeFile(filepath, value, (err) => {     
    //console.log('value saved!');
});
  dynamicStatic.setPath(path.resolve(__dirname, accessfolder));
  res.render(__dirname + '/'+accessfolder +'/index',{title:data.title,desc:data.desc });
  
});
/* authentication token code begin*/
var expressJwt = require('express-jwt')
var secret = 'this is the secret secret secret 12356';
app.use('/api', expressJwt({secret: secret}));

app.post('/authenticate', function (req, res) {  
  var args = {
    data: { email_id: req.body.username, password: req.body.password },
    headers: { "Content-Type": "application/json" }
  };
  client.post(baseurl+"/Login", args, function (data, response) {
    //console.log(baseurl);
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
    var filedestination='./'+accessfolder+'/images/uploads/'+req.session.seid;    
    console.log(filedestination);
    if (!fs.existsSync(filedestination)){
      fs.mkdirSync(filedestination);
    }
    cb(null, filedestination);
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
app.listen(port,function(){});
console.log("http://www.spinotuts.com listening on "+port+" port...");
//module.exports = app;