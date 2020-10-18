var express = require ('express')

var app = express()

//公開資源
app.use ('/static/', express.static('./static/'))

//第一個參數是URL，第二個是文件路徑，如
//app.use ('/public/', express.static('./static/'))
//URL將以 /public/ 定位到 /static/
//儅第一個參數省略的時候，第二個參數會作爲前端根目錄 如
// app.use ( express.static('./static'))



//处理请求
//当请求为 / 的时候
app.get('/', function(req, res) {

	// res.write('some ')
	// res.write('thing')
	// res.end()

	//OR

	//res.end('some thing')

	res.send('hello world')

})

app.listen(3000, function(){

})