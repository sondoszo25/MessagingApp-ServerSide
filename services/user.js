const User=require('../models/user');

const createUser=async(username,password,displayName,profilePic) => {
const user= new User({username,password,displayName,profilePic});
return await user.save();
};

const check=async(username) =>{
try{
const user= await User.findOne({username:username});
if(user)
{
    return true;
}
else{
    return false;
}
}
catch(error)
{
 return false;
}
}


 const getuser=async(id) =>{
    const user= await User.findOne({username:id});
    return user;
 }




module.exports={
    createUser,check,getuser
}