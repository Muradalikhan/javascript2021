const express=require('express')

const app=express()

let port=process.env.port || 5000
//get()


let arr=[
    {
        id:1,
        title:'abc',
    },
    {
        id:2,
        title:'xyz',
    },
    {
        id:3,
        title:'123',
    },
]


app.get('/',(req,res)=>{
    res.send('array')    
});

app.get('/user',(req,res)=>{
    res.send('User')    
})

// app.get('/user/:myId',(req,res)=>{
//     res.send(req.params.myId)
// })


// app.get('/user/:id',(req,res)=>{

//     let id=req.params.id

//     let result=arr.find((item)=>{
//         if(item.id==id)
//             {
//                 return item
//             }
//     })
//     if(result){
//         res.send(result)
//     }else{
//         res.status(404).send('data not found')
//     }

// })



app.post('/user',(req,res)=>{

    res.send(req.body)
})






app.listen(port)







//get(id)
//post
//put
//delete



