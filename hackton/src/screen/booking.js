

import React, { useEffect } from 'react'
import { useNavigate, useLocation } from "react-router"
import { useState } from 'react';
import { getAuth, onAuthStateChanged } from '../config/firebase/firebase.js'
import Navbar1 from '../componant/navbar/navbar1.js';
import { db } from '../config/firebase/firebase.js'
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore'


import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';







const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
    width: 400,
    bgcolor: 'white',
    border: '1px solid var(--darkcolor)',
    p: 2,
    px: 4,
    pb: 3,
};


export default function Booking() {
    let [userLogin, setUserLogin] = useState(false)
    let [hotelName, setHotelName] = useState('')
    let [name, setName] = useState('')
    let [email, setEmail] = useState('')
    let [city, setCity] = useState('')
    let [room, setRoom] = useState('')
    let [payment, setPayment] = useState('')
    let [persons, setPersons] = useState('')
    let [days, setDays] = useState('')

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);



    //database refrence
    let hotelCollectionRef = collection(db, 'bookingDetails')
    let navigate = useNavigate('')
    let location = useLocation().state
    const auth = getAuth()

    let arr = [];
    for (let i = 1; i <= location.room; i++) {
        arr.push(i)
    }

    console.log(arr)
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {

                const uid = user.uid;
                console.log('user is Sign in', uid)
                setUserLogin(user.email)
                console.log(userLogin)
                console.log(user)
            } else {
                console.log('first register your self')
                navigate('/login')
            }
        });


    }, [])



    const saveBookingDetails = async () => {
        await addDoc(hotelCollectionRef, { hotelName, name, email, city, room, payment, persons, days })
        setName('')
        setEmail('')
        setCity('')
        setRoom('')
        setPayment('')
        setPersons('')
        setDays('')

    }




    const goToPage = () => {
        navigate('/')
    }





    return (
        <div>
            <Navbar1 />

            <div className="bookingForm">
                <h1 className='p-2 m-2'>Booking Form</h1>
                <div className="form-row">
                    <div className="form-group ">
                        <input type="name" value={hotelName = location.name} className="form-control " disabled id="inputEmail4" placeholder={`${location.name}`} onChange={(e) => setHotelName(e.target.value)} />
                    </div>
                    <div className="form-group ">
                        <input type="name" value={name} className="form-control" id="inputEmail4" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-group ">
                        <input type="email" value={email} className="form-control" id="inputEmail4" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group ">
                        <input type="text" value={city} className="form-control" id="inputCity" placeholder='City' onChange={(e) => setCity(e.target.value)} />
                    </div>
                </div>
                <div className="form-row d-flex justify-content-between">
                    <div className="form-group  col-md-6">
                        <select id="inputState" className="form-control" value={room} onChange={(e) => setRoom(e.target.value)}>
                            <option selected>Choose Room</option>
                            {
                                arr.map((item, ind) => {
                                    return (
                                        <option value={item} key={ind}>{item}</option>

                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group  col-md-5">
                        <select id="inputState" className="form-control" value={payment} onChange={(e) => setPayment(e.target.value)}>
                            <option selected>Choose Payment</option>
                            <option value='card'>card</option>
                            <option value='cash'>cash</option>

                        </select>
                    </div>
                </div>
                <div className="form-row d-flex justify-content-between">
                    <div className="form-group  col-md-6">
                        <select id="inputState" className="form-control" value={persons} onChange={(e) => setPersons(e.target.value)}>
                            <option selected>Choose Person</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                        </select>
                    </div>
                    <div className="form-group  col-md-5">
                        <select id="inputState" className="form-control" value={days} onChange={(e) => setDays(e.target.value)}>
                            <option selected>Choose Days</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>

                        </select>
                    </div>

                </div>
                <div className='form-row d-flex justify-content-between'>
                    <button className="btn btnColor" style={{ width: '50%' }} onClick={saveBookingDetails,handleOpen}>Confirm Booking</button>
                    <button className="btn btnColor" style={{ width: '42%' }} onClick={goToPage}>Cancel Booking</button>
                </div>




                <div>
                    {/* <button type="button" onClick={handleOpen}>
                        Open modal
                    </button> */}
                    <StyledModal
                        aria-labelledby="unstyled-modal-title"
                        aria-describedby="unstyled-modal-description"
                        open={open}
                        onClose={handleClose}
                        BackdropComponent={Backdrop}
                    >
                        <Box sx={style}>
                            <h2 id="unstyled-modal-title">Your Booking has been confirmed!</h2>
                            <p id="unstyled-modal-description">for the hotel <span style={{color:`var(--lightcolor)`}}> {location.name}</span></p>
                        </Box>
                    </StyledModal>
                </div>





            </div>

        </div>
    )
}
