const mongose=require('mongoose');

const Schema=mongose.Schema;

const Message = new Schema({
    id: {
      type: Number,
      required: true
    },
    created: {
      type: Date,
      default: Date.now
    },
    sender: {
        username: {
          type: String,
          required: true
        }
      },
    content: {
      type: String,
      required: true
    }
  });


  module.exports=mongose.model('Message',Message);
