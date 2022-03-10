import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

import { auth, signInWithEmailAndPassword } from "../config/firebase";
import { db, ref, onValue } from "../config/firebase";
import { setUser } from '../config/redux/action/userAction';
import { useDispatch } from 'react-redux';






export default function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate('')
  const login = () => {
    let obj = {
      email,
      password,
    };
    signInWithEmailAndPassword(auth, obj.email, obj.password)
      .then((succes) => {
        console.log("User Sign In Successfully ", succes);
        const refrence = ref(db, `/users/${succes.user.uid}`);

        onValue(refrence, (snapshot) => {
          if (snapshot.exists()) {
            console.log(snapshot.val());
            let userObj = snapshot.val();
            dispatch(setUser(userObj))
            navigate("/", { state: userObj });
          } else {
            alert('data not found')
          }
        });

        setEmail("");
        setPassword("");
      })
      .catch((err) => {
        alert(err.message);
      });
    console.log(obj);

  }





  return (
    <div className='col-sm-4 my-5 mx-auto bg-white p-5 shadow-lg rounded'>
      <h2 className='header shadow-lg'>
        <span className="material-icons md-24">
          person
        </span>Login</h2>

      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">@</span>
        <input type="text" className="form-control" placeholder="email" onChange={e => setEmail(e.target.value)} aria-label="Username" aria-describedby="basic-addon1" />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">@</span>
        <input type="password" className="form-control" placeholder="password" onChange={e => setPassword(e.target.value)} aria-label="Username" aria-describedby="basic-addon1" />
      </div>

      <button className='btn btnColor' onClick={login}>Login</button>
      <p className='m-2 '><Link className='text-black' to='/signup'>Don't have an account ?Sign up</Link></p>

    </div>
  )
}
