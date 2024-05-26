const{ nanoid }=require('nanoid');
const Url=require('../models/url');
const { timeStamp } = require('console');

async function handleGenerate_newshortURL(req,res){
    const shortId=nanoid(8);
    const body=req.body;
    if(!body.url){
       return res.status(400).json({err:'url is required'});
    }
   await Url.create({
        shortId:shortId,
        redirectUrl:body.url,
        viewHistory:[],
        createdBy:req.user._id,
    });
   return res.render('home',{
      id:shortId,
   })
}

async function handle_get_analytics(req,res){
    const shortId=req.params.shortId;
    const result= await Url.findOne({
        "shortId":shortId,
    });
    return res.json({
        total_clicks:result.viewHistory.length,
        analytics:result.viewHistory,
    })
}

async function handle_show_home_page(req,res){
    if(!req.user) return res.redirect('/login');
    const allUrls=await Url.find({ createdBy:req.user._id });
    return res.render('home',{
       urls:allUrls,
    });
}

async function handle_sign_up_user(req,res){
    return res.render('signup');
}

async function handle_login(req,res){
    return res.render('login');
}

async function handle_show_all_urls(req,res){
const allUrls=await Url.find({});
 return res.render('home',{
    urls:allUrls,
 })
}

module.exports={
    handleGenerate_newshortURL,
    handle_get_analytics,
    handle_show_home_page,
    handle_sign_up_user,
    handle_login,
    handle_show_all_urls,
}