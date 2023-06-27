const User=require('../models/user');
const jwt = require("jsonwebtoken");
const key = "Some super secret key shhhhhhhhhhhhhhhhh!!!!!"
const checkusernameandpassword=async(username,password) =>{
try{
const user= await User.findOne({username:username});
if(user)
{
    if(user.password === password)
    {
    return true;
    }
    else{
        return false;
    }
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
const maketoken = (data) =>{
    const token = jwt.sign(data, key);
    return token;

}
 const  checktoken= (token) =>{
    const data = jwt.verify(token, key);
return data;
}
module.exports={
    checkusernameandpassword,maketoken,checktoken
}

