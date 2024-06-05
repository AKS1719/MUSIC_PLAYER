const http = require('https');
const https = require('http')
const options = {
	method: 'GET',
	hostname: 'deezerdevs-deezer.p.rapidapi.com',
	port: null,
	path: '/infos',
	headers: {
		'X-RapidAPI-Key': 'e69e026b73msh4f19501689af243p11473ejsnc935ea3c8036',
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on('data', function (chunk) {
		chunks.push(chunk);
	});

	res.on('end', function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();

const server = https.createServer((req,res)=>{
    console.log("server started");
})

// Export the track URL
