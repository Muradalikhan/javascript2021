
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducers/index";


export const store = createStore(reducer,applyMiddleware(thunk))