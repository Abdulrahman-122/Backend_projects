const http=require ('http');
const {URL}=require('url');

function parsedCookies(cookieheader){
    const cookies={};

    if(!cookieheader){
        return cookies;    // return an empty object if no cookies into url
    }
    cookieheader.split(';').forEach(pair=>{       //split each cookie at it's ;
        const [key,value]=pair.split('='); // this means split cookie into key=value instead of key:value
        cookies[key.trim()]=value?.trim(); 

    })
    return cookies;
    }
//Make server
const server=http.createServer((req,res)=>{
    const method=req.method  // this return the method of url (post,Git,put.Delete)
    const FullURL=new URL(req.url ,'http://localhost:3000');          //req.url -> return a relative url so we add base url to make full one
    const query=Object.fromEntries(FullURL.searchParams)      //return object of key,values
    const headers=req.headers
    const cookies=parsedCookies(req.headers.cookie)    //req.header.cookie -> string that represent cookies into the url
    let Body=""
    //request from user 
    req.on('data',chunk=>{
        Body += chunk.toString();

    });
    req.on('end',()=>{
        let parsedbody=0
        
        if(Body){
        try{
            parsedbody=JSON.parse(Body)  //convert text into json format 
        }catch{
            parsedbody=Body        //just make it e
        }
    }
    //response from server
    res.end(JSON.stringify({
        method,
        path:FullURL.pathname,
        query,
        headers,
        cookies,
        body:parsedbody
    },null
    ,2
))
})
})
    
server.listen(3000,()=>{
    console.log('Http inspector running at http://localhost:3000');

})