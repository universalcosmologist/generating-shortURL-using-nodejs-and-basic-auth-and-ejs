const User=require('../models/user');
const {setUser}=require('./service/auth');
async function handle_create_newuser(req,res){
  const {name,email,password}=req.body;
  await User.create({
    name:name,
    email:email,
    password:password,
  })
  return res.redirect('/');
}

async function handle_user_login(req,res){
 const {email,password}=req.body;
 const user= await User.findOne({
      email:email,
      password:password,
 });
 if(!user){
    return res.render('login',{
        error:'invalid username or password',
    });
 }
 const token=setUser(user);
 res.cookie('uid',token);
 return res.redirect('/');
}

module.exports={
    handle_create_newuser,
    handle_user_login,
}