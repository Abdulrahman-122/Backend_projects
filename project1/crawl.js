
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

// function normalizeURL(urlstring){
//     const urlobj=new URL(urlstring)
//     const hostpath= `${urlobj.hostname}${urlobj.pathname}`
//     if (hostpath.length>0&&hostpath.slice(-1)=='/'){
//         return hostpath.slice(0,-1) //execluding the last character (/)
//     }
//     else{
//         return hostpath
//     }
// }



// const {JSDOM}= require('jsdom')
// function geturlfromHtml(HTML,BaseURL){
//     const urls=[]
//     const dom=new JSDOM( HTML)
//     const linkElements=dom.window.document.querySelectorAll('a')
//     for ( const link of linkElements)
//     {
//         urls.push(link.href);
//     }
//     return urls;
// }











// const {JSDOM}= require('jsdom')
// function geturlfromHtml(HTML,BaseURL){
//     const urls=[]
//     const dom=new JSDOM( HTML)
//     const linkElements=dom.window.document.querySelectorAll('a')
//     for ( const link of linkElements)
//     {if (link.href.slice(0,1)==='/'){
//         urls.push(`${BaseURL}${link.href}`)
//     }else{
//         urls.push(link.href);
//     }
//     }
//     return urls;
// }
// module.exports={     
//     // normalizeURL
//   geturlfromHtml
// }
const { JSDOM } = require('jsdom');

function geturlfromHtml(HTML, BaseURL) {
    const urls = [];
    const dom = new JSDOM(HTML);
    const linkElements = dom.window.document.querySelectorAll('a');

    for (const link of linkElements) {
        const href = link.getAttribute('href'); // Use getAttribute to get the raw string
        if (href) {
            try {
                // The URL constructor automatically handles both absolute 
                // and relative URLs if you provide the BaseURL as the second argument.
                const urlobj = new URL(href, BaseURL);
                urls.push(urlobj.href);
            } catch (err) {
                console.log(`Error with URL ${href}: ${err.message}`);
            }
        }
    }
    return urls;
}

module.exports = { geturlfromHtml };