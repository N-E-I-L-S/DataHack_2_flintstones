const express = require("express")
// const fetch = require('node-fetch');
// const fetch =require('node-fetch')
const router = express.Router()
const axios = require('axios')

const cors = require('cors');

const PORT = 5001;
const app = express();

router.use(cors());
const corsOptions = {
    origin: "http://localhost:3000"
};

// const requestEndpoint = "https://3da6-2409-4040-6e89-2c4b-d944-471e-3108-7921.ngrok-free.app/";
// const requestEndpoint = "http://54d9-2409-4040-6e89-2c4b-d944-471e-3108-7921.ngrok-free.app/user-classify/";
const requestEndpoint = "http://127.0.0.1:5000/user-classify";

// This function runs if the http://localhost:5000/getData endpoint
// is requested with a GET request
router.post('/getcategory', cors(corsOptions), async (req, res) => {
    console.log(req.body)
    const fetchOptions = {
        body: req.body,
        method: 'POST'
    }
    axios.post(requestEndpoint, fetchOptions)
    .then(data => 
        {

            console.log("data::::::" ,data.data)
            res.json(data.data.predicted_category)
        })
    .catch(err => 
        {
            console.log(err)
            res.json(err)
        });
    // const response = await fetch(requestEndpoint, fetchOptions);
    // const jsonResponse = await response.json();
});

module.exports = router

