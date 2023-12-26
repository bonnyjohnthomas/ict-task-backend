const db= require('./db')

const register=(id,password,name)=>{
    console.log('Inside the register function');
    return db.User.findOne({id}).then((response)=>{ 
      console.log(response);
      if(response){   
          return{
              statusCode:401,
              message:'User already registered'
          }
      }
      else{ 
          const newUser = new db.User({
              id,password,name,images:[]
          })
  
          
          newUser.save()
  
          //send response as register success to client
  
          return{
              statusCode:200,
              message:"Account registered successfully"
          }
         
      }
    })
  }


  const login = (id,password)=>{
    console.log("Inside Login");
    return db.User.findOne({id,password}).then((result)=>{
        console.log(result);

        if(result){
            return{
                statusCode:200,
                message:"login successful"
            }
        }else{
            return{
                statusCode:401,
                message:'Failed to login'
            }
        }
    })
  }

  const getUser=(id)=>{
    return db.User.findOne({id}).then((result)=>{
        if(result) {
            return{
                statusCode:200,
                user:result
            }
            
        } else {
            return{
                statusCode:401,
                message:'User not found'
            }
            
        }
        
    })
  }

  const addPics=(id,url)=>{
      return db.User.findOne({id}).then((result)=>{
        
        if(result){
            result.images.push({
                  url  
            })
            result.save()

            return{
                statusCode:200,
                message:"Image added Successfully"
            }

        }else{
            return{
                statusCode:401,
                message:"Failed to add image"
            }
        }
      })
  }


  module.exports={
    register,
    login,
    getUser,
    addPics
}