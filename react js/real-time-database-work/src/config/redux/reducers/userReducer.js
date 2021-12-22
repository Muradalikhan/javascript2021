import { ActionTypes } from "../contants/action-type";



export const setUser=(state={},{type,payload})=>{

    switch (type) {
        case ActionTypes.SET_USER:
        return {...state,...payload}    

        default:
            return state
    }

    
}
