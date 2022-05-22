// Import npm packages
require("dotenv").config({path:"./config.env"})
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080; // Step 1


const routes = require('./routes/api');

// const MONGODB_URI='mongodb+srv://narananf:gXKg7vxRG2bhic@portfoliodb.wfe2m.mongodb.net/?retryWrites=true&w=majority'



// Connect to mongo
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!');
});

// Data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Step 3 (primer tuto)

// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static('client/build'));
// }

// HTTP request logger
app.use(morgan('tiny'));
app.use('/api', routes);

if(process.eventNames.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, 'client/build')))

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
} else{
    app.get('/', (req, res) => {
        res.send("API running")
    })
}

app.listen(PORT, console.log(`Server is starting at ${PORT}`));