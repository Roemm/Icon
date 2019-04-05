var config = require('./config.js');
var KEY = config.key;
var SECRET = config.secret;
var OAuth = require('oauth')

var express = require('express');
var app = express();

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true}));

var request = require("request")

var hbs = require("hbs");

app.set('view engine', 'hbs');

var oauth = new OAuth.OAuth(
	'http://api.thenounproject.com',
	'http://api.thenounproject.com',
	KEY,
	SECRET,
	'1.0',
	null,
	'HMAC-SHA1'
)


app.get('/icon',function(req, res){
	res.render('icon');
})

app.post('/icon', function(req, res){
	const data = req.body.iconName;
	oauth.get(
	`http://api.thenounproject.com/icon/${data}`,
	null,
	null,
	function (err, body, respond){
		if(err){
			console.log(err);
			res.render('icon', {error: "Please try again"})
		}else{
			let info = JSON.parse(body);
			// console.log(JSON.parse(body));
			res.render('icon', {
			image: info.icon.preview_url,
			attri: info.icon.attribution
			})
			
		}
	}
)
})

app.get('/collection',function(req, res){
	res.render('collection');
})

app.post('/collection', function(req, res){
	const data = req.body.collectName;
	oauth.get(
	`http://api.thenounproject.com/collection/${data}/icons/?limit=5`,
	null,
	null,
	function (err, body, respond){
		if(err){
			console.log(err);
			res.render('collection', {error: "Please try again"})

		}else{
			let info = JSON.parse(body);
			// console.log(info.icons[0]);
			var list = [];
			for (var i = 0; i < info.icons.length; i++) {

				var element = {
					image: info.icons[i].preview_url,
					attri: info.icons[i].attribution
				}
				// console.log(element)
				list.push(element);
			}
			// console.log(list);
			// console.log(JSON.parse(body));
			res.render('collection', {list})
		}
	}
)
})


app.listen(3000)

console.log('listening on port 3000')