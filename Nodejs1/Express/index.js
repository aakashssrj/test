import express from "express"
import userData  from "./data/data.js";

const app = express();


const PORT = 8080;
app.listen(PORT , (req,res)=>{
    console.log(` Server is Connected at ${PORT}`)
})
//1.GET Request is to get data from server.... BYdefault website browser request to "get" request.
app.use(express.json())


app.get('/', (req,res)=>{
    res.status(200).send("Hello from server")
})

// 2. req.query
app.get('/api/v1/users/' , (req,res)=>{
    const {name} = req.query;

    if(name){
        const user = userData.filter((user)=>{
                return user.name === name;
            })
            res.status(200).send(user)
            console.log(user)
    }
        res.status(200).send(userData) 
})

//2. req.params (Search by id for a unique object key:value)
app.get('/api/v1/users/:id' , (req,res)=>{
    const {id} = req.params
    
    const parseId = parseInt(id);

    const user = userData.find((user)=>{
        return user.id === parseId
    })
    if (!user) {
    return res.status(404).send("User not found");
    }
    else {  
    res.status(200).send(user)

    
}
 })

//3. req.body (Used for the creating new users added and retrive data from frontend through it)
 app.post('/api/v1/users/' , (req,res)=>{
    console.log(req.body) //Client se Data Aata h
    const {name ,id , displayname } = req.body 

    const newUser = {
        id : userData.length + 1,
        name,
        displayname
    }

    userData.push(newUser)
    res.status(200).send({message : "New USer added Succesfully",
        newUser,
    })

 })

 //4. PUT (It updates all th evalues of an object)
 app.put( '/api/v1/users/:id' , (req,res)=>{
    const {body ,
         params :{id}
        } = req

    const parseId = parseInt(id)
    const userIndex = userData.findIndex((user)=>{
        return user.id = parseId;
    })
    
        if(userIndex === -1){
            res.status(404).send("User Not Found")
        }

        userData[userIndex] = {
            id : parseId,
            ...body
        }
        res.status(200).send("Updated Profile")   

        
 })

 //5. PATCH (It updates the only require key from an object)
 app.patch('/api/v1/users/:id' , (req,res)=>{
    const {
        body ,
        params : {id}
    } = req

    const parseId = parseInt(id)
    const userIndex = userData.findIndex((user)=>user.id = parseId)
    if(userIndex === -1){
        return    res.status(404).send("User not found to update at id : ",parseId)
    }
    
    userData[userIndex] = {
        ...userData[userIndex],
        ...body
    }
    res.status(200).send("User has been updated without any erase in data using PATCH method")
 })

    //6. DELETE (It deletes the user from the data)
app.delete('api/v1/users/:id' , (req,res)=>{
    const {id} = req.params
    const parseId = =parseInt(id)
    const userIndex = userData.findIndex((user)=>user.id = parseId)
    if(userIndex === -1){
        return res.status(404).send("User not found to delete at id : ",parseId)
    }
    userData.splice(userIndex, 1);
    res.status(200).send("User has been deleted successfully")
})

