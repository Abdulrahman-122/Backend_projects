const { normalizeURL,geturlfromHtml } = require("./crawl.js")   // this is to import a function into this file from another file

const{test,expect}=require('@jest/globals')      // here we export (test,expect) functions to use them in test from @jest/globals

// test('normalizeURL',()=>{
// const input=''
// const actual =normalizeURL(input)
// const expected=''
// expect(actual).toEqual(expected)   // now we want to test our expected output with the output of function we want to test

// })
// now we want to change the input to a url then put an expected line:

// const { normalizeURL } = require("./crawl.js")   // this is to import a function into this file from another file

// const{test,expect}=require('@jest/globals')      // here we export (test,expect) functions to use them in test from @jest/globals

// test('normalizeURL',()=>{
// const input='https://blog.boot.dev/path'
// const actual =normalizeURL(input)
// const expected='blog.boot.dev/path'
// expect(actual).toEqual(expected)   // now we want to test our expected output with the output of function we want to test
// })
// after npm test -> give me pass so this is correct
// notes; this is what new URL do (convert the url string in to url object)
// URL {
//   href: "https://example.com:8080/path?user=admin&id=5",
//   protocol: "https:",
//   hostname: "example.com",
//   port: "8080",
//   pathname: "/path",
//   search: "?user=admin&id=5",
//   searchParams: URLSearchParams { 'user' => 'admin', 'id' => '5' }
// }

// // test url by adding a / at the last of it and see whether the test will accept or not + we will modify normalizeurl to accept this case;
// const { normalizeURL } = require("./crawl.js")   // this is to import a function into this file from another file

// const{test,expect}=require('@jest/globals')      // here we export (test,expect) functions to use them in test from @jest/globals

// test('normalizeURL with trailing slash',()=>{
// const input='https://blog.boot.dev/path/'       //here we add / at the last of url 
// const actual =normalizeURL(input)
// const expected='blog.boot.dev/path'
// expect(actual).toEqual(expected)}

// )

// const { normalizeURL } = require("./crawl.js")   

// const{test,expect}=require('@jest/globals')      

// test('normalizeURL with capital blog',()=>{
// const input='https://Blog.boot.dev/path/'      
// const actual =normalizeURL(input)
// const expected='blog.boot.dev/path'
// expect(actual).toEqual(expected)   }

// )
     

// test('normalizeURL with strip http',()=>{
// const input='http://blog.boot.dev/path/'      
// const actual =normalizeURL(input)
// const expected='blog.boot.dev/path'
// expect(actual).toEqual(expected)}
// )


// jsdom gives Node.js:

// document

// window

// DOM tree

// HTML parsing

// 2️⃣ Why is jsdom important?
// 🔹 For backend & testing

// You use jsdom when:

// Testing frontend logic

// Parsing HTML responses

// Analyzing web pages

// Simulating browser behavior

// Writing Jest tests for DOM code
//to installl it ; npm install jsdom



// test('Extract URL from html lines',()=>{
// const html=`
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <title>Boot.dev Blog Test</title>
// </head>
// <body>

//   <h1>Useful Learning Resources</h1>

//   <p>Check out this blog:</p>

//   <a href="https://blog.boot.dev">Boot.dev Blog</a>

// </body>
// </html>`;
// const BaseURL='https://blog.boot.dev' ;     
// const actual =geturlfromHtml(html,BaseURL)
// const expected=['https://blog.boot.dev']
// expect(actual).toEqual(expected)}
// )



// test('combine relative + base url to form the whole url ',()=>{
// const html=`
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <title>Boot.dev Blog Test</title>
// </head>
// <body>

//   <h1>Useful Learning Resources</h1>

//   <p>Check out this blog:</p>

//   <a href="/path/">Boot.dev Blog</a>

// </body>
// </html>`;
// const BaseURL='https://blog.boot.dev' ;     
// const actual =geturlfromHtml(html,BaseURL)
// const expected=['https://blog.boot.dev/path/']
// expect(actual).toEqual(expected)}
// )


// test('combine relative + base url to form the whole url+extract multiple urls ',()=>{
// const html=`
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <title>Boot.dev Blog Test</title>
// </head>
// <body>

//   <h1>Useful Learning Resources</h1>

//   <p>Check out this blog:</p>
//   <a href="https://blog.boot.dev/path1/">Boot.dev Blog</a>
//   <a href="/path2/">Boot.dev Blog</a>

// </body>
// </html>`;
// const BaseURL='https://blog.boot.dev' ;     
// const actual =geturlfromHtml(html,BaseURL)
// const expected=['https://blog.boot.dev/path/']
// expect(actual).toEqual(expected)}
// )

test('Invalid URL as imput',()=>{
const html=`
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Boot.dev Blog Test</title>
</head>
<body>

  <h1>Useful Learning Resources</h1>

  <p>Check out this blog:</p>
  <a href="https://blog.boot.dev/path1/">Boot.dev Blog</a>        //absolute url
  <a href="/invalid/">Boot.dev Blog</a>          //relative url

</body>
</html>`;
const BaseURL='https://blog.boot.dev' ;     
const actual =geturlfromHtml(html,BaseURL)
const expected=[]
expect(actual).toEqual(expected)}
)
