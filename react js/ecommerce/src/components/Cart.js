

import React from 'react';
import AddCard from './addCard';
import './style/cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Cart=()=>{
  return (
      <div className='Cart py-4'>
     <FontAwesomeIcon icon={faShoppingCart}  color='tomato' size='2x'/>
          <AddCard/>
          <AddCard/>
          <AddCard/>
         
         <br/>
         <p>Total: 3500</p>

         <button className='btn btn-primary'>Check Out</button>
         
      </div>
  );
}

export default Cart;
