
const {crawl_page}= require('./crawl')


function main(){
    if (process.argv.length<3){
        console.log("No website provided")
        process.exit(1)
    }
    if (process.argv.length>3){
        console.log('To many website to crawling')
    }
    const baseurl1=process.argv[2]
    // const baseur2=process.argv[3]
    console.log(`crawling website starting:${baseurl1}`)
    crawl_page(baseurl1)
     

}
main()