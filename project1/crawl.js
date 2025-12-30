// function normalizeURL(urlstring){
//     return urlstring;
// }

// module.exports={      //make export for function for usage for any out file like crawl.test.js
//     normalizeURL
// }
// let's try to make ; new object -> extract from it the hostname, pathname
// function normalizeURL(urlstring){
//     const urlobj=new URL(urlstring)
//     return `${urlobj.hostname}${urlobj.pathname}`
// }

// module.exports={      //make export for function for usage for any out file like crawl.test.js
//     normalizeURL
// }

// modify the function to accept the case of adding / and remove it to be the same with expected pathname

function normalizeURL(urlstring){
    const urlobj=new URL(urlstring)
    const hostpath= `${urlobj.hostname}${urlobj.pathname}`
    if (hostpath.length>0&&hostpath.slice(-1)=='/'){
        return hostpath.slice(0,-1) //execluding the last character (/)
    }
    else{
        return hostpath
    }
}

module.exports={     
    normalizeURL
}