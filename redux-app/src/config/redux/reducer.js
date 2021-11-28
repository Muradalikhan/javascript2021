

const initialState=1

const reducer=(state=initialState,action)=>{
   if(action.type==='UPDATE'){
       state=action.value
   }
   else if(action.type==='DECRESE'){
       state=action.value
   }
    return state
}

export default reducer