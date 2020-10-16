// console.log('hhhhhh')


var fs = require('fs');




/* fs.writeFile('./data/hello.txt','Fuck you', function(error){
	console.log(error)
})

fs.readFile('./data/hello.txt',function(error, data){
	if(error){
		console.log('Reading file failed.')
	}else{
	console.log(data.toString());
	}
}) */

//HTTP请求

var http = require ('http');

var server = http.createServer();

server.on('request',function(request, response){
	console.log('Request get from' + request.url);
	response.write('hello from server你好');
//	response.write(request);
	response.end();
})

server.listen(3000,function(){
	console.log('Server has started at http://127.0.01:3000');
});