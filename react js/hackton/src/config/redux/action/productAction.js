import { ActionTypes } from '../action-type/action-type'

export const fetchProductsFromFakeApi = () => async (dispatch) => {
    await fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(result => {
            dispatch({
                type: ActionTypes.FETCH_PRODUCTS,
                payload: result
            })

        })
}



export const SetProduct = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    }
}



export const SelectedProduct = (product) => {
    return {
        type: ActionTypes.SELECT_PRODUCT,
        payload: product,
    }
} 