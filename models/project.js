const mongoose = require('mongoose');
const { isModuleNamespaceObject } = require('util/types');


// Schema maps to a collection
const Schema = mongoose.Schema;

//Category and level should be enums?
const projectSchema = new Schema({
    title: String, 
    description: String,
    link: String,
    language: String,
});

//Model
//A model allows me to work with a schema, the schema is the definition of the model or the model is the interface of the schema
const projectModel = mongoose.model('project', projectSchema);


module.exports =  projectModel;