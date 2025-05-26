const { Readable , Writable } = require('stream')

const readableStream = new Readable({
    read (){}, //Required even if it is Empty
});

const writeableStreaam = new Writable({
    write(streamData){
        console.log("Writing......",streamData.toString())
    }
})

readableStream.on("data" , (chunks)=>{
    console.log('Chunks::' , chunks.toString()) //Change the Buffer into String
    writeableStreaam.write(chunks)
})


readableStream.push("Hello")
readableStream.push("Aakash")
readableStream.push(null)  // signal to end of the stream

