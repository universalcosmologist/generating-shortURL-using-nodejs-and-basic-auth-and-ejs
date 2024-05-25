const express=require('express');

const Url=require('../models/url');

const {handleGenerate_newshortURL,handle_get_analytics}=require('../controllers/url');

const router=express.Router();

router.post('/',handleGenerate_newshortURL);

router.get('/analytics/:shortId',handle_get_analytics);

router.get('/:shortId',async(req,res)=>{
    const shortId=req.params.shortId;
    const  original_entry=await Url.findOneAndUpdate({
         "shortId":shortId,
           },{
              $push:{
                viewHistory:{
                 timeStamp:Date.now(),
            }
          }
      });
    
    return res.redirect(original_entry.redirectUrl);
});
 
module.exports=router;