import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

import { auth, createUserWithEmailAndPassword ,db, set, ref} from "../config/firebase";


export default function Signup() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate=useNavigate('')
    const signup = () => {
        let obj={
            name,
            email,
            password,
        }
        createUserWithEmailAndPassword(auth, obj.email, obj.password)
            .then((res) => {
                let uid = res.user.uid;
                console.log(uid);
                obj.uid = uid;
                const refrence = ref(db, `/users/${obj.uid}`);
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
            <div className='col-sm-4 my-5 mx-auto'>
                <h1>Sign up</h1>
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

                <button className='btn btn-primary' onClick={signup}>Sign up</button>
                <p><Link to='/login'>already have an account ?Login</Link></p>

            </div>
        </div>
    )
}
