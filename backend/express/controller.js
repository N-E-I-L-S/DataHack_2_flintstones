const express = require("express")
const router = express.Router()
const Products = require("./models/lawyerSchema")

// Get All Products
router.get('/', function (req, res, next) {
    Products.find({}).then(function (product) {
        res.send(product);
    }).catch(next);
});

//Get One Product
router.get('/id/:id', function (req, res, next) {
    Products.findOne({id: req.params.id}).then(function(product){
        res.send(product);
    }).catch(next);
});

//Get Product By User
// router.get('/user/:user', function (req, res, next) {
//     Products.find({user: req.params.user}).then(function(product){
//         res.send(product);
//     }).catch(next);
// });

// add a new Product 
router.post('/',function(req,res,next){
    Products.create(req.body).then(function(product){
        res.send(product);
    }).catch(next);
});

// update a Product 
router.put('/:id',function(req,res,next){
    Products.findOneAndUpdate({id: req.params.id},req.body).then(function(product){
        Products.findOne({id: req.params.id}).then(function(product){
            res.send(product);
        });
    });
});

// delete a Product 
router.delete('/:id',function(req,res,next){
    Products.findOneAndDelete({id: req.params.id}).then(function(product){
        res.send(product);
    });
});

// delete all Products
router.delete('/',function(req,res,next){
    Products.deleteMany(req.body).then(function(product){
        res.send(product);
    }).catch(next);
});

module.exports = router