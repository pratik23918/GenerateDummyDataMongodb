// import { boolean } from "webidl-conversions";
//importing the mongoose
const mongoose = require('mongoose');
//define the schema
const employeeSchema = new mongoose.Schema({
    name: String,
    salary:Number,
    language:String,
    city:String,
    isManager:Boolean
  });
//creating a model 
//Model: A model in Mongoose is a wrapper for the schema. It provides an interface to interact with the database, allowing for querying and manipulating the data.

//Employee: This model is created from the employeeSchema. The first argument, 'Employee', is the name of the model, which Mongoose will use to create the collection name in the database. Mongoose will pluralize it to employees for the collection name. This model will allow us to interact with the employees collection in MongoDB.
  

const Employee = mongoose.model('Employee', employeeSchema);
//exporting the model 
   module.exports=Employee;