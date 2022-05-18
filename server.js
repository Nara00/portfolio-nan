// Import npm packages
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const { stringify } = require('querystring');

const app = express();
const PORT = process.env.PORT || 8080; // Step 1


const routes = require('./routes/api');

// const MONGODB_URI = 'mongodb+srv://narananf:gXKg7vxRG2bhic@portfoliodb.wfe2m.mongodb.net/?retryWrites=true&w=majority'



// Connect to mongo
mongoose.connect('mongodb://localhost:27017/portfolio', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!');
});


// Saving data to our mongo db
// const ejData = {
//     title: "C++",
//     category: "programacion", 
//     description: "mi primer lenguaje de programación",
//     level : "avanzado"
// }

// const newSkill = new skillModel(ejData); //instance of the model

// newSkill.save((error) => {
//     if (error) {
//         console.log('Oops, something happend');
//     } else {
//         console.log('Data has been saved');
//     }
// })

// HTTP request logger
app.use(morgan('tiny'));
app.use('/api', routes);


app.listen(PORT, console.log(`Server is starting at ${PORT}`));