

import React from 'react';
import Card from '../components/Card';
import Cart from '../components/Cart';
import Header from '../components/header';
import { useSelector, useDispatch } from 'react-redux'
import Header2 from '../components/header2';



function Products() {
  const showCartstate=useSelector(state=>state.showCart.value)

  return (
      <>
      
      <Header/>
      <Header2/>

      {showCartstate?<Cart/>:null}
      

      <Card/>
      
     
     
      </>
  );
}

export default Products;
