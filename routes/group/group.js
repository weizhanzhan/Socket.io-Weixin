const express =require('express')
const router =express.Router()

router.get('/group1',(req,res)=>{
    res.sendFile(__dirname+'/group1.html')
})
router.get('/group2',(req,res)=>{
    res.sendFile(__dirname+'/group2.html')
})

module.exports=router