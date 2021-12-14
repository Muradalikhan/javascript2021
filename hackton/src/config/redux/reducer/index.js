
import { combineReducers } from "redux";
import { productReducer,selectedProduct } from "./productReducer";
export const reducer = combineReducers({
    allproduct: productReducer,
    selectedProdcut:selectedProduct,
    
})