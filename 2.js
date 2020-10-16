var fs = require('fs')
var http = require ('http')
var server = http.createServer()

server.on('request',function(request, response){
	console.log('Request get from' + request.url)
	response.setHeader('Content-Type','text/html;charset=utf-8')
	
//	response.write('TITLE')
//	response.end('Title')
	url = request.url
	if (request.url === '/'){
		
		fs.readFile('./resource/index.html',function(err, data){
			if(err){
				response.end( 'Error 404' )
			}else{
				response.end(data)
			}
		})
	}else if(request.url === '/farm'){
		response.end( 'Farm' )
	}else{
		response.end( 'Not found' )
	}
	
})

server.listen(80, function(){
	console.log('prot 80 started')
})