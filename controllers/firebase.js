const firebaseservice=require('../services/firebase');

const gettoken=async (req,res) => {
    var bool=await firebaseservice.gettoken(req.body.token);
    if(bool)
    {
        return res.status(200).json({ok:"thx for add token"});

    }
    else{
        return res.status(404).json({errors:"app is connected"});

    }
}
module.exports={
    gettoken
};