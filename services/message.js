const Message=require('../models/message');
const Chat=require('../models/chat');
const firebaseservice=require('../services/firebase');


const updateIO = (socketIO) => {
    io = socketIO;
  };

const createMessage=async(id,name,msg)=>{
         sender={username:name}
        const message= new Message({id,sender,content:msg});
        const lastmessage={id:id,created:message.created,content:msg};
        const result = await Chat.updateMany({ id: id }, { $set: { lastMessage: lastmessage } });
        io.emit('update',{foo:"bar"});
        var msgg =await message.save();
        await firebaseservice.sendupdateMessage(id,sender);
        return msgg;
}

const getMessage=async(id)=>{

    var array = await Message.find({ id: id }).sort({ _id: -1 });
    var array2 = [];
    
    array.map((msg) => {
      array2.push({
        id: msg.id,
        content:msg.content,
        sender: {username:msg.sender.username},
        created:msg.created
      });
    });


    return array2;
   
}

module.exports={
    createMessage,getMessage,updateIO
}