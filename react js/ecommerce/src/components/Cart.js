

import React from 'react';
import AddCard from './addCard';
import './style/cart.css'

const Cart=()=>{
  return (
      <div className='Cart'>
          <div>your cart</div>
          <AddCard/>
      </div>
  );
}

export default Cart;
