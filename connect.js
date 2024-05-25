const mongoose=require('mongoose');

async function connect_mongo_db(url){
  try{
    console.log('database connected');
    return await mongoose.connect(url);
  }
  catch(error){
    console.log(`error occured : ${error}`);
  }
}

module.exports={
    connect_mongo_db,
}
