const connectToMongo = require('./db.js')
connectToMongo();

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();

const port = 3001

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json())

app.use('/lawyer', require('./lawyercontroller.js'));
app.use('/user', require('./usercontroller.js'));
app.use('/api', require('./apicontroller.js'))

app.get('/', (req, res)=>{
    const timestamp = new Date().getTime()
    console.log(`${timestamp}`);
})


app.listen(port, () => console.log(`Server Running  on http://localhost:${port}`))