const express = require('express');
const router =express.Router();

router.get('/photos',(req,res,next)=>{
 res.send("Retrieving photos");
});

module.exports =router;