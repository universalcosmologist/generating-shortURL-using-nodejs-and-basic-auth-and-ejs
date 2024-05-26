const { getUser }=require('../controllers/service/auth');

async function restrict_to_logged_user(req,res,next){
    const token=req.cookies?.uid;
    if(!token) res.redirect('/login');
    const user=getUser(token);
    if(!user) return res.redirect('/login');
    req.user=user;
     next();
}

async function checkAuth(req,res,next){
   const token=req.cookies?.uid;
    user=getUser(token);
    req.user=user;
    next();
}

module.exports={
restrict_to_logged_user,
checkAuth,
}