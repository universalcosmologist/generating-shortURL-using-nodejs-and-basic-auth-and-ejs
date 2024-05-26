const jwt=require('jsonwebtoken');
const secret_key='unkd%^';

function setUser(User){
  return jwt.sign({
    _id:User._id,
    name:User.name,
    email:User.email,
    role:User.role,
  },secret_key);
}

function getUser(token){
if(!token) return null;
 try{
    return jwt.verify(token,secret_key);
 }
 catch(error){
    return null;
 }
}

module.exports={
    setUser,
    getUser,
}