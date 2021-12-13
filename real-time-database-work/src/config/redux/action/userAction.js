import { ActionTypes } from "../contants/action-type";

export const setUser=(userdata)=>{
   return{
    type:ActionTypes.SET_USER,
    payload:userdata,
   }
}