import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

import { updateProfile } from 'firebase/auth';
import { auth, createUserWithEmailAndPassword, db, set, ref, } from "../config/firebase";
import { useDispatch } from 'react-redux';
import { setUser } from '../config/redux/action/userAction';


export default function Signup() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate('')
    const signup = () => {
        let obj = {
            name,
            email,
            password,
        }
        createUserWithEmailAndPassword(auth, obj.email, obj.password)
            .then((res) => {
                let uid = res.user.uid;
                obj.uid = uid;

                updateProfile(auth.currentUser, {
                    displayName: obj.name,
                    //  photoURL: "https://example.com/jane-q-user/profile.jpg"
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });


                const refrence = ref(db, `/users/${obj.uid}`);
                dispatch(setUser(obj))
                set(refrence, obj).then(() => {
                    setEmail("");
                    setPassword("");
                    setName("");
                    alert("user created Successfully");
                    navigate('/')

                });
            })
            .catch((err) => {
                alert(err.message)
            });


    }
    return (
        <div>
            <div className='col-sm-4 my-5 mx-auto  bg-white p-5 shadow-lg rounded'>
                <h2 className='header shadow-lg'>
                    <span class="material-icons md-24">
                        person
                    </span>Sign up</h2>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">@</span>
                    <input type="text" className="form-control" placeholder="Username" onChange={e => setName(e.target.value)} aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">@</span>
                    <input type="text" className="form-control" placeholder="email" onChange={e => setEmail(e.target.value)} aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">@</span>
                    <input type="text" className="form-control" placeholder="password" onChange={e => setPassword(e.target.value)} aria-label="Username" aria-describedby="basic-addon1" />
                </div>

                <button className='btn btnColor' onClick={signup}>Sign up</button>
                <p className='m-2 '><Link className='text-black' to='/login'>already have an account ?Login</Link></p>

            </div>
        </div>
    )
}
