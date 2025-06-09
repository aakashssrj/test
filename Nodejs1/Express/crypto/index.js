import express from 'express';
import crypto from 'crypto';
import { type } from 'os';

const app = express()

app.use(express.json())


const generateKey = ()=>{
    const {publicKey , privateKey} = crypto.generateKeyPairSync("rsa" , {
        modulusLength : 2048,
        publicKeyEncoding : {
            type:"pkcs1",
            format : "pem"
        },
        privateKeyEncoding : {
            type:"pkcs1",
            format : "pem"
        }
    })
    return {publicKey , privateKey}
}

const encrypt = (message) =>{
    const encryptMsg = crypto.publicEncrypt(publicKey , Buffer.from(message))
    return encryptMsg.toString("base64")
}

const decrypt = (encryptMessage)=>{
    const decrypted = crypto.privateDecrypt(privateKey , Buffer.from(encryptMessage , "base64")  )
    return decrypted.toString("utf8")
}
const keys = generateKey()
const privateKey = keys.privateKey
const publicKey = keys.publicKey    

app.post('/encrypt', (req,res) => {
    const {message} = req.body
    const encryptMessage = encrypt(message)
    res.json({
        encryptedMessage : encryptMessage
    })
})

app.post('/decrypt', (req,res) => {
    const {encryptMessage} = req.body
    const decryptMessage = decrypt(encryptMessage)
    res.json({
        DecryptedMessage : decryptMessage
    })
})

app.get('/',(req,res)=>{
    res.json({
        message : "Hello from server",
        privateKey ,
        publicKey
    })
})



app.listen(3000, ()=>{
    console.log("Server is running at 3000")
    

})