const http = require('http');

http.createServer((req, res) => {
	if(req.url === '/hello' && req.method === 'GET') {
		res.write('Hello World!');
		res.end();
	}
}).listen(3000, () => {
	console.log('Server is running on http://localhost:3000');
})