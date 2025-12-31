// const http=require('http')
// server=http.createServer((req,res)=>{
//     res.end('Hello world');

const { parseArgs } = require("node:util")

// });
// server.listen(3000);

// const http =require('http')
// server=http.createServer((req,res)=>{
//     // res.end('Hello world');
//     if (req.url=='/inspect'){
//         res.end('Inspect page');
//     }
// });
// server.listen(3000);

// const http=require('http')
// server=http.createServer((req,res)=>{
//     res.writeHead(200,{'content-type':'application/json'});
//     res.end(JSON.stringify({
//         message:'Hello',
//         status:"ok",
//         name:'Abdulrahman Qasim'
        
//     }))
// })
// server.listen(3000)

// const http=require('http')
// server=http.createServer((req,res)=>{
//    res.writeHead(200,{
//         'content-type':'application/json'
//     });
//     res.end (JSON.stringify({message:'Hello',status:'Ok',name:'Abdulrahman Qasim'}))
// })
// server.listen(3000)
//ex; 5
// const body = '{"fruit":"apple","count":3}'

// const parsed=JSON.parse(body)
// const bodyagain=JSON.stringify(parsed)
// console.log(parsed)     //text -> object
// console.log(body)       //object -> text
// console.log(bodyagain)

//ex;6
// const http = require('http');

// const server = http.createServer((req, res) => {
//   if (req.url === '/' && req.method === 'POST') {
//     let body = "";

//     req.on('data', chunk => {
//       body += chunk.toString();
//     });

//     req.on('end', () => {
//       try {
//         const parsed = JSON.parse(body);
//         res.writeHead(200, { 'content-type': 'application/json' });
//         res.end(JSON.stringify(parsed));
//       } catch {
//         res.writeHead(400, { 'content-type': 'text/plain' });
//         res.end('Invalid JSON');
//       }
//     });

//   } else {
//     res.writeHead(200, { 'content-type': 'text/plain' });
//     res.end('Send a POST request to /');
//   }
// });

// server.listen(3000, () => {
//   console.log('Server running on http://localhost:3000');
// });


// to run this program
// The server receives that text — but it’s just a string of characters, not something easy to work with yet.

// The server converts that text into a JavaScript object (this is called parsing).
// Why? Because objects let the server "understand" the data in a useful way — like accessing the name or age separately.

// The server can then do anything with that object — like modify it, check it, or just send it back.

// Before sending the data back to you, the server converts the object back into a JSON string (this is called stringifying), because HTTP can only send text.

// You receive that JSON text in your client (like curl, Postman, or browser) and can read or use it
// hit in another terminal after running this code in terminal ->
//curl -X POST http://localhost:3000 -H "Content-Type: application/json" -d '{"name":"Ali","age":12}'


//this is how to extract queries ;
// const url=require('url');

// const req = { url: '/inspect?name=Ali&age=12' };

// const parsedUrl = url.parse(req.url, true);

// console.log(parsedUrl.query.name); 

// console.log(parsedUrl.query.age); 

//to extract cookies from the url;
//req.headers.cookie 