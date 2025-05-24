const { Readable } = require('stream')

const readableStream = new Readable();


readableStream.on("data" , (chunks)=>{
    console.log('Chunks::' , chunks)
})