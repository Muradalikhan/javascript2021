import React from 'react';
import {useDispatch} from 'react-redux'
import {login,logout} from '../config/reducer/user'

function Login() {
const dispatch=useDispatch()

const loginUser=()=>{
 return login({name:'Murad',age:26,email:'m@gmail.com'})
}

  return (
      <div>
          <button onClick={()=>dispatch(loginUser())}>Login</button>
          <button onClick={()=>dispatch(logout())}>LogOut</button>
      </div>
  );
}

export default Login;
