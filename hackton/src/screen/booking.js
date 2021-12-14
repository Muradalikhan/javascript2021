

import React, { useEffect } from 'react'
import { useNavigate } from "react-router"
import { useState } from 'react';
import { getAuth, onAuthStateChanged } from '../config/firebase/firebase.js'
import Navbar1 from '../componant/navbar/navbar1.js';
import { db } from '../config/firebase/firebase.js'
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore'




export default function Booking() {
    let [userLogin, setUserLogin] = useState(false)
    let [name, setName] = useState('')
    let [email, setEmail] = useState('')
    let [address, setAddress] = useState('')
    let [city, setCity] = useState('')
    let [room, setRoom] = useState('')
    let [payment, setPayment] = useState('')







 //database refrence
 let hotelCollectionRef = collection(db, 'bookingDetails')




    let navigate = useNavigate('')


    const auth = getAuth()
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {

                const uid = user.uid;
                console.log('user is Sign in', uid)
                setUserLogin(user.email)
                console.log(userLogin)
                console.log(user)
            } else {
                alert('first register your self')
                navigate('/login')
            }
        });


    }, [])



    const saveBookingDetails =async () => {
        await addDoc(hotelCollectionRef, { name,email,address,city,room,payment})
        setName('')
        setEmail('')
        setAddress('')
        setCity('')
        setRoom('')
        setPayment('')
       
    }










    return (
        <div>
            <Navbar1 />

            <div className="bookingForm">
                <h1 className='p-2 m-2'>Booking Form</h1>
                <div className="form-row">
                    <div className="form-group ">
                        <label for="inputEmail4">Name</label>
                        <input type="name" value={name} className="form-control" id="inputEmail4" placeholder="Email" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-group ">
                        <label for="inputEmail4">Email</label>
                        <input type="email" value={email} className="form-control" id="inputEmail4" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    </div>

                </div>
                <div className="form-group">
                    <label for="inputAddress">Address</label>
                    <input type="text" value={address} className="form-control" id="inputAddress" placeholder="1234 Main St" onChange={(e) => setAddress(e.target.value)} />
                </div>

                <div className="form-row">
                    <div className="form-group ">
                        <label for="inputCity">City</label>
                        <input type="text" value={city} className="form-control" id="inputCity" onChange={(e) => setCity(e.target.value)} />
                    </div>
                    <div className="form-group col-md-4">
                        <label for="inputState">Hotel Room</label>
                        <select id="inputState" className="form-control" value={room} onChange={(e) => setRoom(e.target.value)}>
                            <option selected>Choose Room</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                        </select>
                    </div>
                    <div className="form-group col-md-4">
                        <label for="inputState">Payment method</label>
                        <select id="inputState" className="form-control" value={payment} onChange={(e) => setPayment(e.target.value)}>
                            <option selected>Choose Payment</option>
                            <option value='card'>card</option>
                            <option value='cash'>cash</option>

                        </select>
                    </div>

                </div>

                <button className="btn btnColor m-3" onClick={saveBookingDetails}>Confirm Booking</button>
            </div>

        </div>
    )
}
