const tokenservice=require('../services/token');

const createtoken=async (req,res) => {
    if(await tokenservice.checkusernameandpassword(req.body.username,req.body.password))
    {
        const data = { username: req.body.username }
        const token =tokenservice.maketoken(data);
        res.status(200).json({ token });
    }
    else{
        return res.status(404).json({errors:['username or password is wrong']});
    }
}
module.exports={
    createtoken
};