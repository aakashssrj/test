const http = require('http')
const fs = require('fs')
const {Transform} = require('stream')



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
    // const readableStream = fs.createReadStream('sample.txt')
    // const writeableStream = fs.createWriteStream('output1.txt')

    // readableStream.on("data", (chunks)=>{
    //     console.log("CHUNKS:  ",chunks)
    //     writeableStream.write(chunks)
    
    // })

    // readableStream.on("end" , ()=>{
    //     console.log("Reading Done.....")
    //     writeableStream.end()
    // })

//* ----------------------------------Just using Tranform for string Processing-----------------
    // const readableStream = fs.createReadStream("sample.txt")
    // const writeableStream = fs.createWriteStream("Tranformed.txt")

    // const transformStream  = new Transform({
    //     transform(chunk , encoding , callback){
    //         const modifiecdata = chunk.toString().toUpperCase().replaceAll(/ipsum/gi , "Aakash")
    //         callback(null , modifiecdata)
    //     }
    // })


    // readableStream.pipe(transformStream).pipe(writeableStream)

    // res.end()

})

server.listen(8080,()=>{
    console.log("server is Running at " , 8080)
})
