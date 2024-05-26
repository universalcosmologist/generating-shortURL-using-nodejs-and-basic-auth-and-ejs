const express=require('express');

const {handle_show_home_page,handle_sign_up_user,handle_login,handle_show_all_urls}=require('../controllers/url');
const { restrict_to } = require('../middlewares/auth');

const router=express.Router();

router.get('/admin/urls',restrict_to(['ADMIN']),handle_show_all_urls);

router.get('/',restrict_to(['ADMIN','NORMAL']),handle_show_home_page);

router.get('/signup',handle_sign_up_user);

router.get('/login',handle_login);

module.exports=router;