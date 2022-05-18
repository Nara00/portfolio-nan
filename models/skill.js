const mongoose = require('mongoose');
const { isModuleNamespaceObject } = require('util/types');


// Schema maps to a collection
const Schema = mongoose.Schema;

//Category and level should be enums?
const skillSchema = new Schema({
    title: String, 
    category: String,
    description: String,
    level: String
});

//Model
//A model allows me to work with a schema, the schema is the definition of the model or the model is the interface of the schema
const skillModel = mongoose.model('skill', skillSchema);

// const ejData = {
//     title: "C++",
//     category: "programacion",
//     description: "mi primer lenguaje de programación",
//     level: "avanzado"
// }

// const newSkill = new skillModel(ejData); //instance of the model

// newSkill.save((error) => {
//     if (error) {
//         console.log('Oops, something happend');
//     } else {
//         console.log('Data has been saved');
//     }
// })

module.exports =  skillModel;