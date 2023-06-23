const Chat=require('../models/chat');
const User=require('../models/user');
const Message=require('../models/message');


const updateIO = (socketIO) => {
    io = socketIO;
  };

const createchat = async (id, user, lastMessage, username) => {
    try {
      const chat = new Chat({ id, user, lastMessage, username });
      const username2 = user.username;
      if(username !== username2){
      const user2 = await User.findOne({ username: username });
      const chat2 = new Chat({ id, user: user2, lastMessage, username: username2 });
      await chat2.save();
      }
      io.emit('update',{foo:"bar"});
      await chat.save();
      return { id:id,user:{username:user.username,password:user.password,displayName:user.username,profilePic:user.profilePic}};
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  

    const check =async (username,me) =>{
        const user= await User.findOne({username:username});
        if(user)
        {
            const chat = await Chat.findOne({ $and: [{ user: user }, { username: me }] });
            if(!chat)
            {
                return user;
            }
            return null;
            
        }
        else{
            return null;
        }
    }

    const getchats=async(data) =>{
      var array = await Chat.find({ username: data });
      var array2 = [];
      
      array.map((chat) => {
        array2.push({
          id: chat.id,
          user: {username:chat.user.username,password:chat.user.password,displayName:chat.user.displayName,profilePic:chat.user.profilePic},
          lastMessage: chat.lastMessage
        });
      });

      return array2;      
    }


    const getthechat=async(id) =>{
      return await Chat.find({id:id});
    };
    const deletethechat=async(id) =>{
      io.emit('update2',{foo:id});
      try {
        const deleteResult = await Chat.deleteMany({id:id});
        await Message.deleteMany({id:id});
       return true;
      } catch (error) {
        return false;
      }
    };

   



module.exports={
    createchat,check,getchats,updateIO,getthechat,deletethechat
}