const express=require('express');

const {handle_create_newuser,handle_user_login}=require('../controllers/user');

const router=express.Router();

router.post('/',handle_create_newuser);

router.post('/login',handle_user_login);

module.exports=router;