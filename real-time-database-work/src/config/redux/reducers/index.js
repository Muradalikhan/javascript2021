
import { combineReducers } from "redux";
import { productReducer,selectedProduct } from "./productReducer";
import { setUser } from "./userReducer";
export const reducer = combineReducers({
    allproduct: productReducer,
    selectedProdcut:selectedProduct,
    setuser:setUser,
})