import http from "http"
import WebSocket , {WebSocketServer} from "ws"


const server = http.createServer((req,res)=>{
    console.log(new Date() + "   Received From  " + req.url)
    res.end("HI THERE")
})

// 👉 यहां हम WebSocket server बना रहे हैं जो ऊपर बने HTTP server के ऊपर चल रहा है।
// मतलब: जो भी HTTP request WebSocket से related होगी, वो इसी पर handle होंगी।
const wss = new WebSocketServer({server})


wss.on("connection" , function connection(ws){
    // Error Handle
    ws.on("error" , console.error)


    // 🔹 Message Receive & Broadcast करना
    ws.on("message" , function message(data , isBinary){
        wss.clients.forEach(function each(client){
            if(client.readyState === WebSocket.OPEN){
                client.send(data, {binary : isBinary})
            }
        })
    })
    ws.send('Hello Connection message from ws server')
})


server.listen(3000, ()=>{
    console.log('Server is running at 3000')
    console.log(new Date() + "   Received From  " + 3000)

})