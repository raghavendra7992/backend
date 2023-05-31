const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var projectSchema = new mongoose.Schema({
    projectname:{
        type:String,
        required:true,
    },
    reason:{
        type:String,
        enum:["For Business","For Bloging","For Brokrage"],
        required:true,
    },
    type:{
        type:String,
        required:true,
        enum:['External','Internal'],
    },
    division:{
        type:String,
        enum:['Filters','Filters2'],
    },
    category:{
        type:String,
        enum:['QualityA','QualityB','QualityC'],
    },
    priority:{
        type:String,
        enum:['High','Medium','Low'],

    },
    dept:{
        type:String,
        enum:['Strategy','HR','Financial','Business'],
    },
    location:{
        type:String,
        enum:['Pune','Mumbai','Delhi','Bangalore','Gujrat'],
        required:true,
    },
    status:{
        type:String,
        enum:['Running','Closed','Cancelled']
    },
});

//Export the model
module.exports = mongoose.model('project', projectSchema);