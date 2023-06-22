const mongose=require('mongoose');
const User=require('./user');


const Schema=mongose.Schema;
const lastMessageSchema = new Schema({
    id: {
      type: Number,
      required: true
    },
    created: {
      type: Date,
      default: Date.now
    },
    content: {
      type: String,
      required: true
    }
  });

const Chat = new Schema({
    id: {
      type: Number,
      required: true
    },
    user: {
      type: User.schema,
      required: true
    },
    lastMessage: {
      type: lastMessageSchema,
      deafult: null
    },
    username:{
      type:String,
      required:true
    }
  });
module.exports=mongose.model('Chat',Chat);