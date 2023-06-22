const chatservice=require('../services/chat');
const Chat = require('../models/chat');

const updateIO = (socketIO) => {
  chatservice.updateIO(socketIO);
};


const createchat = async (req, res,data) => {
    try {
      const username = req.body.username;
      const user = await chatservice.check(username,data);
      if (user) {
        const lastDocument = await Chat.findOne({}, {}, { sort: { _id: -1 } }).exec();
  
        let id = 1;
        if (lastDocument) {
          id = lastDocument.id + 1;
        }
  
        const createdChat = await chatservice.createchat(id, user, null,data);
        res.json(createdChat);
      } else {
        return res.status(404).json({ errors: ['Cannot add'] });
      }
    } catch (error) {
      return res.status(500).json({ errors: ['cannot add'] });
    }
  };


  const getchat= async(req,res,data) =>{
return res.json(await chatservice.getchats(data));
  }

  const getthechat=async(req,res,data) =>{
    var chatt1=await chatservice.getthechat(req.params.id);
    if(chatt1)
    {
       res.json(chatt1);
    }
    else{
      return res.status(404).json({ errors: ['not found'] });

    }
  };
  const deletethechat=async(req,res,data) =>{
    var stat=await  chatservice.deletethechat(req.params.id);
    if(stat)
    {
      return res.status(204).json({ deleted: ['deleted'] });
    }
    else{
      return res.status(404).json({ errors: ['not found'] });
    }
  };

module.exports={
    createchat,getchat,updateIO,getthechat,deletethechat
};