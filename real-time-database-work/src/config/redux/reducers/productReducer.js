import { ActionTypes } from "../contants/action-type";


const intialState={
    products:[]
}

export const productReducer = (state=intialState, { type, payload }) => {

    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state,products:payload}

        case ActionTypes.SELECT_PRODUCT:
            return state

        default:
            return state
    }


}




