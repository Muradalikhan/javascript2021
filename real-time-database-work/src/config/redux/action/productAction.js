import {ActionTypes} from '../contants/action-type'

export const SetProduct=(products)=>{
    return{
        type:ActionTypes.SET_PRODUCTS,
        payload:products,
    }
}



export const SelectedProduct=(product)=>{
    return{
        type:ActionTypes.SELECT_PRODUCT,
        payload:product,
    }
}