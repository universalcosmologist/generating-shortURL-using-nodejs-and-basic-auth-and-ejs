const { getUser }=require('../controllers/service/auth');

function checkAuthentication(req,res,next){
    const token=req.cookies?.uid;
    req.user=null;
    if(!token){
        return next();
    }
    const user=getUser(token);
    req.user=user;
    next();
}

function restrict_to(roles=[]){
return function(req,res,next){
  if(!req.user){
    return res.redirect('/login');
 }
  else if(!roles.includes(req.user.role)){
   return res.send('Unauthorized');
 }
 else {
    next();
 }

}
}

module.exports={
 checkAuthentication,
 restrict_to,
}