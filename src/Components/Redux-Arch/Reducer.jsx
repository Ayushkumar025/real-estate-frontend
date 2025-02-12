import * as types from "./ActionType"


const initialstate={
    isloading:false,
    iserror:false,
    isuser:[]
}

const reducer=(state=initialstate,action)=>{
    const {type,payload}=action
    switch (type) {
        case types.GETREQUEST:
            return {...state,isloading:true,iserror:false,isuser:[]}
            
        case types.GETSUCCESS:
            return {...state,isloading:false,iserror:false,isuser:payload}
        case types.GETFAILURE:
            return {...state,isloading:false,iserror:true,isuser:[]}
        default:
            break;
    }
}


export {reducer}