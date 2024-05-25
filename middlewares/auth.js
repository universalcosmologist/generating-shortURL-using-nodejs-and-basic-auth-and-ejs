const { getUser }=require('../controllers/service/auth');

async function restrict_to_logged_user(req,res,next){
    const header_data=req.headers["authorization"];
    if(!header_data) return res.redirect('/login');
    console.log(header_data);
    const token=header_data.split('Bearer')[1];
    const user=getUser(token);
    if(!user) return res.redirect('/login');
    req.user=user;
     next();
}

async function checkAuth(req,res,next){
    const header_data=req.headers["authorization"];
    let user;
   if(header_data){
    const token=header_data.split('Bearer')[1];
    user=getUser(token);
   }
    req.user=user;
    next();
}

module.exports={
restrict_to_logged_user,
checkAuth,
}