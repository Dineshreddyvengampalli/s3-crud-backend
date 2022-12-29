const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.json({
        message : 'sucess response'
    })
})

app.listen(3000,()=>{
    console.log('app started on port 3000')
})