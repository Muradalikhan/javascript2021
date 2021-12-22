import { ActionTypes } from "../contants/action-type";


const intialState = {
    products: []
}

export const productReducer = (state = intialState, { type, payload }) => {

    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: payload }
        case ActionTypes.FETCH_PRODUCTS:
            return { ...state, products: payload }

        default:
            return state
    }


}


export const selectedProduct = (state = {}, { type, payload }) => {

    switch (type) {
        case ActionTypes.SELECT_PRODUCT:
            return { ...state, ...payload }

        default:
            return state
    }


}


export const filterTable = (state = '', { type, payload }) => {

    switch (type) {
        case 'SEARCH':
            return state=payload

        default:
            return state
    }


}







