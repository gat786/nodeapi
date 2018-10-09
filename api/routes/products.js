const express = require("express");
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message : "handling GET requests to /products"
    });
});


router.post('/',(req,res,next)=>{
    res.status(200).json({
        message : "handling POST requests to /products"
    });
});

router.get('/:id',(req,res,next)=>{
    var id = req.params.id;
    if (id ==="special"){
        res.status(200).json({
            message : "You sent product get request to a special product",
            id : id
        });
    }
    else{
        res.status(200).json({
            message : "You sent product get request",
            id : id
        });
    }
});


module.exports = router;