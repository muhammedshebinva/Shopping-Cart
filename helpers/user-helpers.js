var db=require('../config/connection');
var collection=require('../config/collections');
const Promise=require('promise');
const bcrypt=require('bcrypt')

module.exports={
    doSignup:(userData)=>{
        return new Promise(async(resolve,reject)=>{
            userData.Password=await bcrypt.hash(userData.Password,10)
            db.get().collection(collection.USER_COLLECTION).insertOne(userData).then((data)=>{
               // console.log(data)
               resolve(userData)
            })    
        })
       
    },
    doLogin:(userData)=>{
        return new Promise(async(resolve,reject)=>{
            let loginStatus=false
            let responce={}
            let user=await db.get().collection(collection.USER_COLLECTION).findOne({Email:userData.Email})
            if(user){
                bcrypt.compare(userData.Password,user.Password).then((status)=>{
                    if(status){
                        console.log("login success");
                    }else{
                        console.log("login Failed");
                    }
                })
            }else{
                console.log("login Failed");
            }
        })
    }
}