const http = require('http')
const fs = require('fs')


const server = http.createServer((req,res)=>{
       
    
    
// * Downloading File in a Bad Way
        // const file = fs.readFileSync("sample.txt")
            // res.end(file)
// * Downloading File in a Good Way
        // const readableStream= fs.createReadStream('sample.txt')
        //     readableStream.pipe(res)



// * Copy File in Bad Way

    // const file = fs.readFileSync("sample.txt")
    // fs.writeFileSync("output.txt", file)
    // res.end()


// * Copy File in a Good Way using (STREAM)
    const readableStream = fs.createReadStream('sample.txt')
    const writeableStream = fs.createWriteStream('output1.txt')

    readableStream.on("data", (chunks)=>{
        console.log("CHUNKS:  ",chunks)
        writeableStream.write(chunks)
        res.end()
    })
})

server.listen(8080,()=>{
    console.log("server is Running at " , 8080)
})
