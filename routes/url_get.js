const express=require('express');

const {handle_show_home_page,handle_sign_up_user,handle_login}=require('../controllers/url');

const router=express.Router();

router.get('/',handle_show_home_page);

router.get('/signup',handle_sign_up_user);

router.get('/login',handle_login);

module.exports=router;