const http = require('http')
const os = require('os')
const fs = require('fs');
const { error } = require('console');

console.log(os.cpus().length)

const PORT = 8080;


const myserver = http.createServer((request , Response) =>{
    console.log(request);

    const log = `${Date.now()} : New Request Received\n`;

    fs.appendFile('test.txt' , log , (error)=>{
        if(error){
            console.error('Error Wriring to the File');
            Response.statusCode = 500;
            Response.end("Internal Server Error")
        }
        else{
            Response.end("Hello from server side")
        }
    })    
})

myserver.listen(PORT , ()=>{
    console.log(`Server is running at PORT ${PORT}`)
})