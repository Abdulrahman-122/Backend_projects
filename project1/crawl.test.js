const { normalizeURL } = require("./crawl.js")   // this is to import a function into this file from another file

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

test('normalizeURL',()=>{
const input='https://blog.boot.dev/path'
const actual =normalizeURL(input)
const expected='blog.boot.dev/path'
expect(actual).toEqual(expected)   // now we want to test our expected output with the output of function we want to test
})
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

test('normalizeURL with trailing slash',()=>{
const input='https://blog.boot.dev/path/'       //here we add / at the last of url 
const actual =normalizeURL(input)
const expected='blog.boot.dev/path'
expect(actual).toEqual(expected)}

)

// const { normalizeURL } = require("./crawl.js")   

// const{test,expect}=require('@jest/globals')      

test('normalizeURL with capital blog',()=>{
const input='https://Blog.boot.dev/path/'      
const actual =normalizeURL(input)
const expected='blog.boot.dev/path'
expect(actual).toEqual(expected)   }

)
     

test('normalizeURL with strip http',()=>{
const input='http://blog.boot.dev/path/'      
const actual =normalizeURL(input)
const expected='blog.boot.dev/path'
expect(actual).toEqual(expected)}
)
