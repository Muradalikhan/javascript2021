

import React from 'react';
import Card from '../components/Card';
import Cart from '../components/Cart';
import Header from '../components/header';
import { useSelector, useDispatch } from 'react-redux'



function Products() {
  const showCartstate=useSelector(state=>state.showCart.value)

  return (
      <>
      
      <Header/>

      {showCartstate?<Cart/>:null}
      

      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
     
     
      </>
  );
}

export default Products;
