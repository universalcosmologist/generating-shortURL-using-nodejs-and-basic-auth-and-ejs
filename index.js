const express=require('express');

const cookieParser=require('cookie-parser');

const {restrict_to_logged_user,checkAuth}=require('./middlewares/auth');

const path=require('path');

const { connect_mongo_db }=require('./connect');

const route=require('./routes/url');

const User_route=require('./routes/user');

const get_route=require('./routes/url_get');

connect_mongo_db('mongodb://127.0.0.1:27017/custom_short_url');

const app=express();

const PORT=8001;

app.set('view engine',"ejs");

app.set('views',path.resolve('./views'));

app.use(express.json());

app.use(cookieParser());

app.use(express.urlencoded( { extended:false } ));

app.use('/user',User_route);

app.use('/url',restrict_to_logged_user,route);

app.use('/',checkAuth,get_route);

app.listen(PORT,()=>{
    console.log(`server started at port number : ${PORT}`);
});