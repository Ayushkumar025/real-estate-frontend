import axios from 'axios'
import * as types from './ActionType'

const getrequest=()=>{
    return {type:types.GETREQUEST}
}

const getsuccess=(payload)=>{
    return {type:types.GETSUCCESS,payload}
}

const getfailure=()=>{
    return {type:types.GETFAILURE}
}

// export const getRegister=(payload)=>{
//     return (dispatch)=>{
//         dispatch(getrequest())
//         return axios.post("http://localhost:8080/user/register",payload,{withCredentials:true}).then((res)=>{
//             console.log(res);
//             dispatch(getsuccess(res))
//             return res
            
//         })
//         .catch((err)=>{
//             console.log(err,"error while registering");
//             dispatch(getfailure())
//             return err
            
//         })
//     }
// }

export const registerUser=(payload)=>{
    return  (dispatch)=>{
      dispatch(getrequest())
 
         return axios.post('http://localhost:8080/user/register',payload,{
             headers:{
                 'content-type':"application/json",
 
             }
         }).then((res)=>{
             console.log(res.data,"this is res.data");
                   
             dispatch(getsuccess(res))
          
             return res
         }).catch((err)=>{
             dispatch(getfailure())
             return err
         })
     }
  }