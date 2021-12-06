

const initialState=0

const reducer=(state=initialState,action)=>{
   if(action.type==='UPDATE'){
       state=action.value
   }
   else if(action.type==='DECRESE'){
       state=action.value
   }
    return state
}








// const IntialObj = {
//     name: 'Murad',
//     age: 25,
//     city: 'karachi'
// }




// const reducer = (state = IntialObj,action) => {
    
//     if(action.type==='UPDATEAGE'){
//         state.age=action.updatedAge
//     }
    
//     return {...state}

// }



export default reducer