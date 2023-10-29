const express = require("express")
const router = express.Router()
const Products = require("./models/lawyerSchema")
const nodemailer = require('nodemailer');
// Get All Products
router.get('/', function (req, res, next) {
    Products.find({}).then(function (product) {
        res.send(product);
    }).catch(next);
});

//Get One Product
router.get('/name/:name', function (req, res, next) {
    Products.findOne({name: req.params.name}).then(function(product){
        res.send(product);
    }).catch(next);
});

router.put('/hire', function (req, res, next) {
  const newArrayElement = req.body.data
  console.log(newArrayElement)
  Products.findOneAndUpdate(
    { name: req.body.name },
    { $push: { hire: newArrayElement } }, // Use $push to append to the arrayField
    { new: true } // Return the updated document
  )
    .then(function (updatedEvent) {
      if (!updatedEvent) {
        return res.status(404).json({ message: "Couldn't hire" });
      }
      res.json(updatedEvent);
    })
    .catch(next);
});

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


const emailService = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  secure: false,
  auth: {
    user: process.env.GMAIL,
    pass: process.env.GMAIL_PASS,
  },
});

//Send Email
router.post('/send-email', (req, res) => {
  const { name, email, recipient } = req.body;
  const htmlEmail = `
            <html>
              <head></head>
              <body>
                <h2>${name} has requested your legal assistance</h2>
                <p><strong>email: </strong> ${email}</p>
              </body>
            </html>
          `;

  const mailOptions = {
    from: 'neilpshukla221203@gmail.com',
    to: recipient,
    subject: `Request for legal assistance`,
    html: htmlEmail,
  };

  emailService.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Email sending failed');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

module.exports = router