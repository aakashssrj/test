import express from 'express'
import crypto  from 'crypto'

const app = express();

app.use(express.json())


const generateKey = ()=>{
    const {privateKey , publicKey} = crypto.generateKeyPairSync('rsa' , {
        modulusLength : 2048,
        publicKeyEncoding : { type : "pkcs1" , format: "pem"},
        privateKeyEncoding : {type : "pkcs1" , format : "pem"}
    })
    return {privateKey , publicKey}
}

const keys = generateKey()
const privateKey = keys.privateKey
const publicKey = keys.publicKey

const encrypt = (message)=>{
    const encryptedMessage = crypto.publicEncrypt( publicKey , Buffer.from(message))
    return encryptedMessage.toString('base64')
}
const decrypt = (encryptedMessage)=>{
    const decryptedMessage = crypto.privateDecrypt( privateKey , Buffer.from(encryptedMessage , 'base64'))
    return decryptedMessage.toString('utf8')
}

app.post('/encrypt' , (req,res)=>{
    const {message} = req.body
    const encryptedMessage = encrypt(message)
    res.json({
        EncryptedMessage : encryptedMessage
    })
})


app.post('/decrypt' , (req,res)=>{
    const {encryptedMessage} = req.body
    const decryptedMessage = decrypt(encryptedMessage)
    res.json({
        EncryptedMessage : decryptedMessage
    })
})


app.get('/',(req,res)=>{
    res.json({
        message: "Hello from SErver",
        privateKey,
        publicKey
    })
})


app.listen(3000,()=>{
    console.log('Server is running at port 3000')
})