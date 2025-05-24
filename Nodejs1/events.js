const EventEmitter = require('events')
const userEmitter = new EventEmitter


let emitterCounter = ({
    login : 0,
    logout  : 0 ,
    purchase : 0 ,
    update : 0
})

userEmitter.on('LOGIN' , (username)=>{
    console.log(`${username} Logged in✔`);
    emitterCounter.login++;
})

userEmitter.on('LOGOUT' , (username)=>{
    console.log(`${username} Logged  Out ❌ `);
    emitterCounter.logout++;

})


userEmitter.on('PURCHASE' , (username , items)=>{
    console.log(`${username} purchased items : ${items}`);
    emitterCounter.purchase++;

})


userEmitter.on('UPDATE' , (username , field)=>{
    console.log(`${username} updated field : ${field}`);
    emitterCounter.update++;

})

userEmitter.on("SUMMARY" , ()=>{
    console.log("Summary of Logs:: \n");
    console.log(`Login :: ${emitterCounter.login} times`)
    console.log(`Logout :: ${emitterCounter.logout} times`)
    console.log(`Purchase :: ${emitterCounter.purchase} times`)
    console.log(`Update :: ${emitterCounter.update} times`)
})

// emit events with different arguments

userEmitter.emit('LOGIN' , "Aakash")
userEmitter.emit('LOGOUT' , "Aakash")
userEmitter.emit('LOGOUT' , "Komal")
userEmitter.emit('PURCHASE' , "Aakash" , "ColdDrink")
userEmitter.emit('UPDATE' , "Aakash"  ,"Bio")
userEmitter.emit("SUMMARY")
