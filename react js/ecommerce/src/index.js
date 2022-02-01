import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import showCartReducer from './config/redux/showCart'
import baskitReducer from './config/redux/basket'
import catogryReducer from './config/redux/catogries'

const store=configureStore({
  reducer:{
    showCart:showCartReducer,
    baskit:baskitReducer,
    catogry:catogryReducer,
  }
})


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
