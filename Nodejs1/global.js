count = 0;

const interval = setInterval(()=>{
    console.log(`hello for count ${++count}`);
    if(count === 5){
        clearInterval(interval);
    }
},3000) 