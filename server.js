var express = require('express');
var app = express();
var path = require('path');

app.use("/public", express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/topics', function(req, res) {
	var response = [
		{
			title: 'Título 1',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a aliquam quam, vitae interdum augue. Curabitur lacinia malesuada lectus, dictum fringilla metus maximus gravida. Mauris rhoncus velit non scelerisque dapibus. Sed ultricies tortor ligula. Praesent ut diam maximus, consectetur justo quis, blandit orci. Suspendisse potenti. Cras efficitur lacus ac tempus scelerisque. Vivamus commodo id leo elementum rutrum. Sed lobortis ipsum non facilisis pulvinar. Nulla rhoncus quam quis risus elementum aliquam. Morbi at nisi diam. Mauris sit amet ligula varius, convallis ante posuere, fringilla elit. Mauris quis enim eu enim faucibus vulputate ac sed tellus. Maecenas non neque varius, pharetra velit non, fringilla erat. Etiam sed efficitur mauris. Aenean sit amet velit non mauris faucibus ornare a at massa.'
		},
		{
			title: 'Título 2',
			description: 'Nam dui neque, rhoncus eget nulla bibendum, volutpat lobortis augue. Suspendisse ac sapien nibh. Maecenas faucibus erat a quam ultrices lacinia. Cras id massa vel odio mattis tincidunt. Suspendisse nisi justo, molestie in ultricies in, porta eget risus. In pharetra lectus sollicitudin augue dignissim luctus ut at orci. Praesent id vehicula sem, et tristique sem. Nunc varius porttitor turpis, sit amet convallis velit pharetra sit amet. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec porttitor luctus felis, at euismod risus. Sed at eros vel quam vestibulum semper eget ornare sem. Sed dignissim felis at semper fringilla. Etiam eros urna, blandit sit amet venenatis et, faucibus vel velit. Cras ultricies non orci ut tristique.'
		},
		{
			title: 'Título 3',
			description: 'Nam dui neque, rhoncus eget nulla bibendum, volutpat lobortis augue. Suspendisse ac sapien nibh. Maecenas faucibus erat a quam ultrices lacinia. Cras id massa vel odio mattis tincidunt. Suspendisse nisi justo, molestie in ultricies in, porta eget risus. In pharetra lectus sollicitudin augue dignissim luctus ut at orci. Praesent id vehicula sem, et tristique sem. Nunc varius porttitor turpis, sit amet convallis velit pharetra sit amet. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec porttitor luctus felis, at euismod risus. Sed at eros vel quam vestibulum semper eget ornare sem. Sed dignissim felis at semper fringilla. Etiam eros urna, blandit sit amet venenatis et, faucibus vel velit. Cras ultricies non orci ut tristique.'
		}
	]

	res.status(200).send(response);
});

app.listen(8000, 'localhost', function() {
	console.log('Server on!');
});