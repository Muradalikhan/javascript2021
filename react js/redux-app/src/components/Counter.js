

import React from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {increament,decreament} from '../config/reducer/counter'


function Counter() {
    const counter=useSelector(state=>state.counter.value)
    const dispatch=useDispatch()


  return(
      <div className='counter'>
          <button className='btn btn-primary p-3'  onClick={()=>dispatch(increament())}>+</button>
          <span className='p-3 bg-secondary'>{counter}</span>
          <button className='btn btn-primary p-3' onClick={()=>dispatch(decreament())}>-</button>
      </div>
  );
}

export default Counter;
