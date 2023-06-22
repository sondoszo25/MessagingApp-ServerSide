const mongose=require('mongoose');

const Schema=mongose.Schema;
const User= new Schema({
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    displayName:{
        type: String,
        required: true
    },
    profilePic:{
        type: String,
        required:true
    },
})
module.exports=mongose.model('User',User);